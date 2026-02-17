//QAPOS77CheckOrdenDeliverCambiosUltimaHora.js

const OrderSelectionDelivery = require('../pages/OrderSelectionDelivery');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const OpenCheck = require('../pages/OpenCheck');
const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const CancelarProductos = require('../pages/CancelarProductos');
const scrollTicketList = require('../utils/scrollTicketList');
const BreakTest = require('../utils/BreakTest');

describe('Check con orden de delivery y cambios en última hora', () => {

      // Acceder a Delivery
      it('TC0001: Seleccionar Delivery', async () => {
      try {
            await OrderSelectionDelivery.selectDeliveryIfPresent();
            await OrderSelectionDelivery.addCustomerToCheck('Mary');

      } catch (error) {
            throw new Error(`TC0001 (Delivery) falló: ${error.message}`);
      }
      });

      //Agregar 7 productos con precios variables.
      it('TC0002: Seleccionar productos', async () => {
            try {
                  await OrderSelectionPages.selectToGoIfPresent();
      
                  await ProductSelectionPages.waitForPage();
                  await ProductSelectionPages.selectProducts(9);
                  await ProductSelectionPages.goToAcc();
                
                  //Enviar a cocina
                   await ValidarProductosCheck.sendOrder(); 
      
            } catch (error) {
                  throw new Error(`TC0002 (Productos) falló: ${error.message}`);
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

                        await ProductSelectionPages.MostrarProductos();
                        await ProductSelectionPages.selectNewProducts(3);
                        await ProductSelectionPages.goToAcc();
                        await scrollTicketList.scrollListDown();
    
                } catch (error) {
                        throw new Error(`TC0003 (Recall) falló: ${error.message}`);
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
