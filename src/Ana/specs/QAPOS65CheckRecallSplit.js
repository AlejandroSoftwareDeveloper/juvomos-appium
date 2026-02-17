//QAPOS65CheckRecallSplit.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const DividirCheck = require('../pages/DividirCheck');
const PaymentPages = require('../pages/PaymentPages');
const OpenCheck = require('../pages/OpenCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const CancelarProductos = require('../pages/CancelarProductos');

describe('Crear Check Recall Split ', () => {

    // Agregar 4 items al check y Enviar a Cocina 
          it('TC0001: Se crea una cuenta', async () => {
          try {
                
                await OrderSelectionPages.selectToGoIfPresent();
    
                await ProductSelectionPages.waitForPage();
                await ProductSelectionPages.selectProducts(4);
                await ProductSelectionPages.goToAcc();   
                
                // Enviar orden
                await ValidarProductosCheck.sendOrder();
    
          } catch (error) {
                throw new Error(`TC0001 (cuenta) falló: ${error.message}`);
          }
          });
          
        //Recall
            it('TC0002: Recall', async () => {
            try {
                // Acceder al Recall
                await OpenCheck.open();
                await OpenCheck.selectLastCreatedAccount();
                // Abrir Recall
                await CancelarProductos.openRecall();

            } catch (error) {
                throw new Error(`TC0002 (Recall) falló: ${error.message}`);
            }
            });

                
            //Dividir en 2 cuentas
            it('TC0003: Dividir en 2 cuentas', async () => {
            try {
                    await DividirCheck.dividirCheck(2);                       
                    
            } catch (error) {
                    throw new Error(`TC0003 (Dividir) falló: ${error.message}`);
            }
            });


           it('TC0004: Pagar en Efectivo Enviar Correo por cada cuenta.', async () => {
            try {
                const correos = ['correo.com', 'gmail.com'];

                for (let i = 0; i < correos.length; i++) {

                    await pagarEnEfectivoYEnviarCorreo(correos[i]);
                }

            } catch (error) {
                throw new Error(`TC0004 (Pagar y Correo) falló: ${error.message}`);
            }
        });
                        
            async function pagarEnEfectivoYEnviarCorreo(email) {
            // Pago en efectivo
            await PaymentPages.goToPayment();
            await PaymentPages.waitForPayScreen();
            await PaymentPages.selectCashPay();

            // Envío de correo
            await PaymentPages.selectSendEmail();
            await PaymentPages.enterEmail(email);
            await PaymentPages.clickSendEmail();
}

 });