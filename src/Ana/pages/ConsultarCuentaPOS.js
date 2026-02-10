const scrollTicketList = require('../utils/scrollTicketList');
const ProductSelectionPages = require('./ProductSelectionPages');

class ConsultarCuentaPOS {

  get Cuenta() {
     return  $('id=com.juvomos.pos:id/txtTicketNumber');
    }
    async ConsultarCuenta(indice) {
      //Boton CUENTA  
      await this.Cuenta.waitForDisplayed();
      await this.Cuenta.click();

        // Scroll hasta el contenedor 
      const layoutCheckSplits = await $('android=new UiScrollable(new UiSelector().scrollable(true))' + '.scrollIntoView(new UiSelector().resourceId("com.juvomos.pos:id/layoutCheckSplits"))'); 
      await layoutCheckSplits.waitForDisplayed({ timeout: 5000 }); 

      await this.seleccionarCuentaPorIndice(indice);
       
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
}

module.exports = new ConsultarCuentaPOS();