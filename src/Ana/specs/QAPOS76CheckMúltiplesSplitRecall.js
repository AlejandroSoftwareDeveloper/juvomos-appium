//QAPOS76CheckMúltiplesSplitRecall.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const DividirCheck = require('../pages/DividirCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const CancelarProductos = require('../pages/CancelarProductos');
const OpenCheck = require('../pages/OpenCheck');
const PaymentPages = require('../pages/PaymentPages');

describe('Crear nuevo check split de orden enviada', () => {

    // Agregar 8 items al check 
          it('TC0001: Se crea una cuenta', async () => {
          try {
                
                await OrderSelectionPages.selectToGoIfPresent();
    
                await ProductSelectionPages.waitForPage();
                await ProductSelectionPages.selectProducts(10);
                await ProductSelectionPages.goToAcc();           
    
          } catch (error) {
                throw new Error(`TC0001 (cuenta) falló: ${error.message}`);
          }
          });
        //Dividir en 3 cuentas
            it('TC0002: Dividir en 2 cuentas', async () => {
            try {
                    await DividirCheck.dividirCheck(3);     
                    await ProductSelectionPages.goToAcc();        
                     // Enviar orden
                   await ValidarProductosCheck.sendOrder();
                    
            } catch (error) {
                    throw new Error(`TC0002 (Dividir) falló: ${error.message}`);
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
                 // Modificar productos
                await ProductSelectionPages.MostrarProductos();
                await ProductSelectionPages.selectNewProducts(2);
                await ProductSelectionPages.goToAcc();

            } catch (error) {
                throw new Error(`TC0003 (Recall) falló: ${error.message}`);
            }
            });

           // Pagar en Efectivo
            it('TC0004: Pagar en Efectivo Enviar Correo por cada cuenta.', async () => {
            try {
                   
                    const correos = ['correo.com', 'gmail.com', 'google.com'];
                    for (let i = 0; i < correos.length; i++) { 
                        await pagarEnEfectivoYEnviarCorreo(correos[i]); 
                        // Solo llamar goToAcc si no es el último correo 
                        if (i < correos.length - 1) { 
                            await ProductSelectionPages.goToAcc(); } }

    
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