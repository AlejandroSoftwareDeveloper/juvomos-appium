const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const OpenCheck = require('../pages/OpenCheck');
const CancelarProductos = require('../pages/CancelarProductos');

describe('Flujo Check Recall ', () => {

      // Acceder To Go, seleccionar 5 productos y Enviar a cocina
      it('TC0001: Seleccionar productos', async () => {
      try {
            await OrderSelectionPages.selectToGoIfPresent();

            await ProductSelectionPages.waitForPage();
            await ProductSelectionPages.selectProducts(5);
            await ProductSelectionPages.goToAcc();

            await ValidarProductosCheck.sendOrder();

      } catch (error) {
            throw new Error(`TC0001 falló: ${error.message}`);
      }
      });
 
      //Recall
      it('TC0002: Recall', async () => {
      try {
            // Acceder al Recall
            await OpenCheck.open();
            await OpenCheck.selectLastCreatedAccount();

      } catch (error) {
            throw new Error(`TC0002 (Recall) falló: ${error.message}`);
      }
      });

      //Cancelar 2 productos
      it('TC0003: Cancel', async () => {
      try {
            // Abrir Recall
            await CancelarProductos.openRecall();

            // Cancelar productos
            await CancelarProductos.selectproductcancel(2);

      } catch (error) {
            throw new Error(`TC0003 (Cancel) falló: ${error.message}`);
      }
      });

      // Pagar en Efectivo
      it('TC0004: Pagar en Efectivo.', async () => {
      try {
            // Pago
            await PaymentPages.goToPayment();

            await PaymentPages.waitForPayScreen();
            await PaymentPages.selectCashPay();

      } catch (error) {
      throw new Error(`TC0004 (Pagar en Efectivo) falló: ${error.message}`);
      }
      })

      //Envio de Correo para completar el pago
      it('TC0005: Envio de Correo', async () => {
      try {
            await PaymentPages.selectSendEmail();
            await PaymentPages.enterEmail('correo.com');
            await PaymentPages.clickSendEmail();

      } catch (error) {
      throw new Error(`TC0005 (Envio de Correo) falló: ${error.message}`);
      }
      
      })


});
