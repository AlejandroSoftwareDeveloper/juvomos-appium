
const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const EscribirComentario = require('../pages/EscribirComentario');


describe('Flujo Check con Comentario ', () => {

      // Acceder To Go, seleccionar 4 productos
      it('TC0001: Seleccionar productos', async () => {
      try {
            await OrderSelectionPages.selectToGoIfPresent();

            await ProductSelectionPages.waitForPage();
            await ProductSelectionPages.selectProducts(4);
            await ProductSelectionPages.goToAcc();           

      } catch (error) {
            throw new Error(`TC0001 falló: ${error.message}`);
      }
      });
        //Escribir un comentario en 'Tab'.
      it('TC0002: Comentario', async () => {
      try {
            await EscribirComentario.Coment(1);
            await ProductSelectionPages.goToAcc();

      } catch (error) {
            throw new Error(`TC0002 (Comentario) falló: ${error.message}`);
      }
      });
     
     it('TC0003: Pagar en Efectivo.', async () => {
      try {
            // Pago
            await PaymentPages.goToPayment();

            await PaymentPages.waitForPayScreen();
            await PaymentPages.selectCashPay();

      } catch (error) {
      throw new Error(`TC0003 (Pagar en Efectivo) falló: ${error.message}`);
      }
      })

      //Envio de Correo para completar el pago
      it('TC0004: Envio de Correo', async () => {
      try {
            await PaymentPages.selectSendEmail();
            await PaymentPages.enterEmail('correo.com');
            await PaymentPages.clickSendEmail();

      } catch (error) {
      throw new Error(`TC0004 (Envio de Correo) falló: ${error.message}`);
      }
      
      })


});
