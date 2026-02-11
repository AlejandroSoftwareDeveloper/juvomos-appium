//QAPOS56CheckSplitProductosDiferentes.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const DividirCheck = require('../pages/DividirCheck');
const PaymentPages = require('../pages/PaymentPages');

describe('Crear nuevo check split de orden enviada', () => {

    // Agregar 4 items al check 
          it('TC0001: Se crea una cuenta', async () => {
          try {
                
                await OrderSelectionPages.selectToGoIfPresent();
    
                await ProductSelectionPages.waitForPage();
                await ProductSelectionPages.selectProducts(4);
                await ProductSelectionPages.goToAcc();           
    
          } catch (error) {
                throw new Error(`TC0001 (cuenta) falló: ${error.message}`);
          }
          });
        //Dividir en 4 cuentas
            it('TC0002: Dividir en 4 cuentas', async () => {
            try {
                    await DividirCheck.dividirCheck(4);     
                    await ProductSelectionPages.goToAcc();                             
                    
            } catch (error) {
                    throw new Error(`TC0002 (Dividir) falló: ${error.message}`);
            }
            });


           // Pagar en Efectivo
            it('TC0003: Pagar en Efectivo Enviar Correo por cada cuenta.', async () => {
            try {
                    
                    const correos = ['correo.com', 'gmail.com', 'google.com', 'google.cu' ];
                    for (let i = 0; i < correos.length; i++) { 
                        await pagarEnEfectivoYEnviarCorreo(correos[i]); 
                        // Solo llamar goToAcc si no es el último correo 
                        if (i < correos.length - 1) { 
                            await ProductSelectionPages.goToAcc(); } }

    
            } catch (error) {
            throw new Error(`TC0003 (Pagar y Correo) falló: ${error.message}`);
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