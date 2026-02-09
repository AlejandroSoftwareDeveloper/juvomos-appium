//QAPOS87CheckRecallNuevaMesa
const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const SeleccionarMesa = require('../pages/SeleccionarMesa');
const CancelarProductos = require('../pages/CancelarProductos');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');

const PaymentPages = require('../pages/PaymentPages');
const OpenCheck = require('../pages/OpenCheck');


describe('Flujo Check Recall y Asignación de Nueva Mesa ', () => {

      // Acceder To Go, seleccionar 6 productos y Enviar a cocina
      it('TC0001: Seleccionar productos', async () => {
      try {
            await OrderSelectionPages.selectToGoIfPresent();

            await ProductSelectionPages.waitForPage();
            await ProductSelectionPages.selectProducts(7);
            await ProductSelectionPages.goToAcc();           

      } catch (error) {
            throw new Error(`TC0001 falló: ${error.message}`);
      }
      });
        //Seleccionar la mesa #9
      it('TC0002: Mesa', async () => {
      try {
            await SeleccionarMesa.MesaSelect(9);       
             await ValidarProductosCheck.sendOrder(); 

      } catch (error) {
            throw new Error(`TC0002 (Mesa) falló: ${error.message}`);
      }
      });
      //Recall
      it('TC0003: Recall', async () => {
      try {
            // Acceder al Recall
            await OpenCheck.open();
            await OpenCheck.selectLastCreatedAccount();
            // Abrir Recall
            await CancelarProductos.openRecall();

      } catch (error) {
            throw new Error(`TC0003 (Recall) falló: ${error.message}`);
      }
      });

      // Cambiar Mesa Asignada
      it('TC0004: Cambiar Mesa Asignada al #5', async () => {
      try {
           await SeleccionarMesa.MesaSelect(5);   

      } catch (error) {
      throw new Error(`TC0004 (Pagar en Efectivo) falló: ${error.message}`);
      }
      })

     it('TC0005: Pagar en Efectivo.', async () => {
      try {
            // Pago
            await PaymentPages.goToPayment();

            await PaymentPages.waitForPayScreen();
            await PaymentPages.selectCashPay();

      } catch (error) {
      throw new Error(`TC0005 (Pagar en Efectivo) falló: ${error.message}`);
      }
      })

      //Envio de Correo para completar el pago
      it('TC0006: Envio de Correo', async () => {
      try {
            await PaymentPages.selectSendEmail();
            await PaymentPages.enterEmail('correo.com');
            await PaymentPages.clickSendEmail();

      } catch (error) {
      throw new Error(`TC0006 (Envio de Correo) falló: ${error.message}`);
      }
      
      })


});
