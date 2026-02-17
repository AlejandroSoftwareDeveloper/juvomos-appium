const scrollTicketList = require('../utils/scrollTicketList');
const ProductSelectionPages = require('./ProductSelectionPages');
const SeleccionarClienteCheck = require('./SeleccionarClienteCheck');
const OrderSelectionDelivery = require('./OrderSelectionDelivery');

class ConsultarCuentaPOS {

  get Cuenta() {
     return  $('id=com.juvomos.pos:id/txtTicketNumber');
    }
    async ConsultarCuenta(indice) {
  // 1. Asegurar que estamos en pantalla POS (no Order)
  //const layoutSplits = $('id=com.juvomos.pos:id/layoutCheckSplits');
 // await layoutSplits.waitForDisplayed({ timeout: 20000 });

  // 2. Botón Cuenta #
  await this.Cuenta.waitForDisplayed({ timeout: 15000 });
  await this.Cuenta.click();

  // 3. Scroll para asegurar visibilidad del contenedor
  await $('android=new UiScrollable(new UiSelector().scrollable(true))' +
    '.scrollIntoView(new UiSelector().resourceId("com.juvomos.pos:id/layoutCheckSplits"))');

  // 4. Obtener cheques
  const cards = await $$(
    '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutCheckSplits"]/parent::android.view.ViewGroup'
  );

  if (!cards.length) {
    throw new Error('No hay cheques visibles en POS');
  }

  // 5. Índice humano → índice array
  const idx = indice - 1;

  if (!cards[idx]) {
    throw new Error(`Cheque ${indice} no existe`);
  }

  await cards[idx].waitForDisplayed({ timeout: 10000 });
  await cards[idx].click();
}

async procesarCheque(indice, cliente) {
    await this.ConsultarCuenta(indice);
    await ProductSelectionPages.goToAcc();

    await SeleccionarClienteCheck.selectClient();
    await SeleccionarClienteCheck.eliminarcliente();
    await ProductSelectionPages.goToAcc();

    await SeleccionarClienteCheck.selectClient();
    await OrderSelectionDelivery.addCustomerToCheck(cliente);
    await ProductSelectionPages.goToAcc();
}

    async seleccionarCuentaPorIndice(indice) {
      let cards;
      if (indice === 1) {
          cards = await $$(
              '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutCheckSplits"]/parent::android.view.ViewGroup'
          );
      } else if (indice === 2) {
          cards = await $$(
              '//android.view.ViewGroup[@clickable="true" and @displayed="true"]'
          );
      } else {
          throw new Error(`Valor de numero no soportado: ${indice}`);
      }

      await cards[indice].waitForDisplayed({ timeout: 10000 });
      await cards[indice].click();

}
    async BtnCuenta(indice) {

          await this.Cuenta.waitForDisplayed();
          await this.Cuenta.click();
          }

       // Selectores
  get btnTransfer() {
    return $('id=com.juvomos.pos:id/btnTransfer');
  }

  get btnTransferEmployee() {
    return $('id=com.juvomos.pos:id/btnTransferEmployee');
  }

  get employeesRecycler() {
    return $('id=com.juvomos.pos:id/employeesRecycler');
  }

  get employees() {
    return $$('id=com.juvomos.pos:id/employeeData');
  }

  // Métodos
  async openTransferMenu() {
    await this.btnTransfer.waitForDisplayed({ timeout: 15000 });
    await this.btnTransfer.click();
  }

  async selectTransferEmployee() {
    await this.btnTransferEmployee.waitForDisplayed({ timeout: 15000 });
    await this.btnTransferEmployee.click();
  }

  async waitForEmployees() {
    await this.employeesRecycler.waitForDisplayed({ timeout: 20000 });

    await browser.waitUntil(async () => {
      return (await this.employees).length > 0;
    }, {
      timeout: 20000,
      timeoutMsg: 'No hay empleados disponibles para transferir'
    });
  }

  async selectRandomEmployee() {
    const employees = await this.employees;
    const index = Math.floor(Math.random() * employees.length);
    await employees[index].click();
  }

  // Flujo completo
  async transferToRandomEmployee() {

    await this.openTransferMenu();
    await this.selectTransferEmployee();
    await this.waitForEmployees();
    await this.selectRandomEmployee();
    await this.btnTransferencia();
    
    
  }

  async transferirCajero() {
    await this.BtnCuenta();
    await this.transferToRandomEmployee();
}
  async btnTransferencia() {
        const btnTransfer = $('android=new UiSelector()' +
  '.resourceId("com.juvomos.pos:id/btnTransfer")' +
  '.className("android.widget.Button")')
        await btnTransfer.waitForDisplayed({ timeout: 5000 });
        await btnTransfer.click();
        }



}

module.exports = new ConsultarCuentaPOS();