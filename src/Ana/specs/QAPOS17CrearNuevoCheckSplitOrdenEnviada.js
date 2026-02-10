//QAPOS17CrearNuevoCheckSplitOrdenEnviada.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const SeleccionarClienteCheck = require('../pages/SeleccionarClienteCheck');
const DividirCheck = require('../pages/DividirCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const CancelarProductos = require('../pages/CancelarProductos');
const OpenCheck = require('../pages/OpenCheck');
const PaymentPages = require('../pages/PaymentPages');

describe('Crear nuevo check split de orden enviada', () => {

    // Agregar 3 items al check 
          it('TC0001: Se crea una cuenta', async () => {
          try {
                
                await OrderSelectionPages.selectToGoIfPresent();
    
                await ProductSelectionPages.waitForPage();
                await ProductSelectionPages.selectProducts(3);
                await ProductSelectionPages.goToAcc();           
    
          } catch (error) {
                throw new Error(`TC0001 (cuenta) falló: ${error.message}`);
          }
          });
        //Dividir en 2 cuentas
            it('TC0002: Dividir en 2 cuentas', async () => {
            try {
                    await DividirCheck.dividirCheck(2);     
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
            });
            //Envio de Correo para completar el pago
            it('TC0005: Envio de Correo', async () => {
            try {
                await PaymentPages.selectSendEmail();
                await PaymentPages.enterEmail('correo.com');
                await PaymentPages.clickSendEmail();
    
            } catch (error) {
            throw new Error(`TC0005 (Envio de Correo) falló: ${error.message}`);
            }
            
            });

            //Dividir Cuenta 
            it('TC0006: Dividir Nueva Cuenta.', async () => {
            try {
                
                await ProductSelectionPages.goToAcc(); 
                await DividirCheck.dividirCheck(2);     
              

            } catch (error) {
            throw new Error(`TC0006 (Nueva Cuenta) falló: ${error.message}`);
            }
            });
            // Pagar en Efectivo
            it('TC0007: Pagar en Efectivo Nueva Cuenta.', async () => {
            try {
                // Pago
                await PaymentPages.goToPayment();
    
                await PaymentPages.waitForPayScreen();
                await PaymentPages.selectCashPay();
    
            } catch (error) {
            throw new Error(`TC0007 (Pagar en Efectivo Nueva Cuenta) falló: ${error.message}`);
            }
            });
            
           //Envio de Correo para completar el pago
            it('TC0005: Envio de Correo', async () => {
            try {
                await PaymentPages.selectSendEmail();
                await PaymentPages.enterEmail('correo.com');
                await PaymentPages.clickSendEmail();
    
            } catch (error) {
            throw new Error(`TC0005 (Envio de Correo) falló: ${error.message}`);
            }
            
            });

 });