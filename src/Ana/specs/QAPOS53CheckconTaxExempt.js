
const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const AplicarImpuesto = require('../pages/AplicarImpuesto');

describe('Flujo Check Tax Exempt ', () => {

      // Acceder To Go, seleccionar 1 producto
      it('TC0001: Seleccionar productos', async () => {
      try {
            await OrderSelectionPages.selectToGoIfPresent();

            await ProductSelectionPages.waitForPage();
            await ProductSelectionPages.selectProducts(1);
            await ProductSelectionPages.goToAcc();

      } catch (error) {
            throw new Error(`TC0001 falló: ${error.message}`);
      }
      });
 
      //Aplicar Tax Exempt a 1 producto
      it('TC0002: Tax Exempt', async () => {
      try {
           await AplicarImpuesto.selectproductImpuesto(1);          

      } catch (error) {
            throw new Error(`TC0002 (Tax Exempt) falló: ${error.message}`);
      }
      });

      // Pagar en Efectivo
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
