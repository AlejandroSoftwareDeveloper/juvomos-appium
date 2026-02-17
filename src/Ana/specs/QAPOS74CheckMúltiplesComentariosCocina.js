//QAPOS74CheckMúltiplesComentariosCocina.js
const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const EscribirComentario = require('../pages/EscribirComentario');
const OpenCheck = require('../pages/OpenCheck');
const CancelarProductos = require('../pages/CancelarProductos');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const BreakTest = require('../utils/BreakTest');



describe('Flujo Check con Multiples Comentarios ', () => {

      // Acceder To Go, seleccionar 6 productos
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
       //Escribir 4 comentarios de Cocina y Enviar
      it('TC0002: Comentario', async () => {
      try {
            await EscribirComentario.Coment(4);
            await ValidarProductosCheck.sendOrder(); 

      } catch (error) {
            throw new Error(`TC0002 (Comentario) falló: ${error.message}`);
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
       //Retornar a la pantalla de inicio
      it('TC0006: Retorno Inicio', async () => {
      try {                
            await BreakTest.closeTOrden();   
            await BreakTest.botonCancel();            
            
      } catch (error) {
            throw new Error(`TC0006 (Retorno Inicio) falló: ${error.message}`);
      }
      });
                        


});
