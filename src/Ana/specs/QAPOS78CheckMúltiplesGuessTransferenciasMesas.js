//QAPOS78CheckMúltiplesGuessTransferenciasMesas.js
const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const SeleccionarMesa = require('../pages/SeleccionarMesa');

describe('Flujo multiples guest y transferencia de mesas', () => {

      it('TC0001: Seleccionar productos', async () => {
      //Agregar Chek con 2 productos
      try {
             await OrderSelectionPages.selectToGoIfPresent();
 
             await ProductSelectionPages.waitForPage();
             await ProductSelectionPages.selectProducts(2);
             await ProductSelectionPages.goToAcc();
 
       } catch (error) {
             throw new Error(`TC0001 falló: ${error.message}`);
       }
       });
      //Seleccionar la mesa disponible
       it('TC0002: Adicionar mesa con 6 guest y luego cambiar de mesa', async () => {
       try {
             await SeleccionarMesa.MesaSelect(9,6);  
             
             await SeleccionarMesa.MesaSelect(7,6);   
 
       } catch (error) {
             throw new Error(`TC0002 (Mesa) falló: ${error.message}`);
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
 


