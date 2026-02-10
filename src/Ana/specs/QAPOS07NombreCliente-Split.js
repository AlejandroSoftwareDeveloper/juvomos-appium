//QAPOS07NombreCliente-Split.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const SeleccionarClienteCheck = require('../pages/SeleccionarClienteCheck');
const DividirCheck = require('../pages/DividirCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const OrderSelectionDelivery = require('../pages/OrderSelectionDelivery');
const ConsultarCuentaPOS = require('../pages/ConsultarCuentaPOS');

describe('Nombre Cliente | Split', () => {

     // Acceder To Go, seleccionar 6 productos 
      it('TC0001: Se crea una cuenta y se le asigna un cliente', async () => {
      try {
            
            await OrderSelectionPages.selectToGoIfPresent();

            await ProductSelectionPages.waitForPage();
            await ProductSelectionPages.selectProducts(7);
            await ProductSelectionPages.goToAcc();           

      } catch (error) {
            throw new Error(`TC0001 (Productos) falló: ${error.message}`);
      }
      });
        //Asignar un cliente
      it('TC0002: Asignar un cliente', async () => {
      try {

          await SeleccionarClienteCheck.selectClient();
          await OrderSelectionDelivery.addCustomerToCheck('Mary');
          await ProductSelectionPages.goToAcc();

      } catch (error) {
            throw new Error(`TC0002 (Cliente) falló: ${error.message}`);
      }
      });
      //Dividir en 3 cuentas
      it('TC0003: Dividir en 3 cuentas', async () => {
      try {
            await DividirCheck.dividirCheck(3);     
            await ProductSelectionPages.goToAcc();        
            
      } catch (error) {
            throw new Error(`TC0003 (cuentas) falló: ${error.message}`);
      }
      });
     
       //Verificar cada cheque
      it('TC0004: En el POS presionar boton opciones de cheques y verificar cada cheque', async () => {
    try {
        await procesarCheque(1, 'meromero');
        await procesarCheque(2, 'luis');

        // Enviar orden
        await ValidarProductosCheck.sendOrder();

    } catch (error) {
        throw new Error(`TC0004 (POS) falló: ${error.message}`);
    }
});

async function procesarCheque(indice, cliente) {
    await ConsultarCuentaPOS.ConsultarCuenta(indice);
    await ProductSelectionPages.goToAcc();

    await SeleccionarClienteCheck.selectClient();
    await SeleccionarClienteCheck.eliminarcliente();
    await ProductSelectionPages.goToAcc();

    await SeleccionarClienteCheck.selectClient();
    await OrderSelectionDelivery.addCustomerToCheck(cliente);
    await ProductSelectionPages.goToAcc();
}
      /* //Verificar cada cheque
      it('TC0004: En el POS presionar boton opciones de cheques y verificar cada cheque', async () => {
      try {
           // Acceder al Recall
            await OpenCheck.open();
            await OpenCheck.selectLastCreatedAccount();
            // Abrir Recall
            await CancelarProductos.openRecall();


      } catch (error) {
            throw new Error(`TC0004 (POS) falló: ${error.message}`);
      }
      });*/
      


});
