//QAPOS86CheckCombinaciónTransferenciasSplit.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const DividirCheck = require('../pages/DividirCheck');
const PaymentPages = require('../pages/PaymentPages');
const ConsultarCuentaPOS = require('../pages/ConsultarCuentaPOS');
const OpenCheck = require('../pages/OpenCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const CancelarProductos = require('../pages/CancelarProductos');

describe('Crear nuevo check split de orden enviada', () => {

    // Agregar 8 items al check 
          it('TC0001: Se crea una cuenta', async () => {
          try {
                
                await OrderSelectionPages.selectToGoIfPresent();
    
                await ProductSelectionPages.waitForPage();
                await ProductSelectionPages.selectProducts(10);
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

          // Transferir el check a otro cajero
            it('TC0003: Transferir cajero.', async () => {
            try {                    
                        // Abrir Recall
                await ConsultarCuentaPOS.BtnCuenta();

                // Transferir empleado
                await ConsultarCuentaPOS.transferToRandomEmployee();
               // await ConsultarCuentaPOS.SeleccionarEmpleado();
    
            } catch (error) {
            throw new Error(`TC0003 (Transferir el check a otro cajero) falló: ${error.message}`);
            }
            });

            //Recall
            it('TC0004: Recall', async () => {
            try {
                // Acceder al Recall
                await OpenCheck.open();
                await OpenCheck.selectLastCreatedAccount();
                // Abrir Recall
                await CancelarProductos.openRecall();

            } catch (error) {
                throw new Error(`TC0004 (Recall) falló: ${error.message}`);
            }
            });
       
            //Dividir en 4 cuentas
            it('TC0005: Dividir en 4 cuentas', async () => {
            try {
                    await DividirCheck.dividirCheck(4);                       
                    
            } catch (error) {
                    throw new Error(`TC0005 (Dividir) falló: ${error.message}`);
            }
            });


           it('TC0006: Pagar en Efectivo Enviar Correo por cada cuenta.', async () => {
            try {
                const correos = ['correo.com', 'gmail.com', 'google.com', 'google.cu'];

                for (let i = 0; i < correos.length; i++) {

                    // Para las cuentas 3 y 4, entrar primero a la cuenta
                    if (i === 2 || i === 3) {
                        await ProductSelectionPages.goToAcc();
                    }

                    await pagarEnEfectivoYEnviarCorreo(correos[i]);
                }

            } catch (error) {
                throw new Error(`TC0006 (Pagar y Correo) falló: ${error.message}`);
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