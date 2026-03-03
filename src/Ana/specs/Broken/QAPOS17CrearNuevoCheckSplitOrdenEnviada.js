//QAPOS17CrearNuevoCheckSplitOrdenEnviada.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const DividirCheck = require('../pages/DividirCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const OpenCheck = require('../pages/OpenCheck');
const PaymentPages = require('../pages/PaymentPages');
const BreakTest = require('../utils/BreakTest');

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
                await OpenCheck.recallUltimaCuenta();

            } catch (error) {
                throw new Error(`TC0003 (Recall) falló: ${error.message}`);
            }
            });

           // Pagar en Efectivo y enviar correo
            it('TC0004: Pagar en Efectivo.', async () => {
            try {
                const correos = ['1'];
                                
                for (let i = 0; i < correos.length; i++) {    
                    
                    await PaymentPages.pagarEnEfectivoYEnviarCorreo(correos[i]);
                }   
    
            } catch (error) {
            throw new Error(`TC0004 (Pagar en Efectivo) falló: ${error.message}`);
            }
            });
            

           //Dividir Cuenta 
            it('TC0005: Dividir Nueva Cuenta.', async () => {
            try {
                
              // 
                await DividirCheck.dividirCheck(2);                   

            } catch (error) {
            throw new Error(`TC0005 (Nueva Cuenta) falló: ${error.message}`);
            }
            });
            // Pagar en Efectivo
            it('TC0006: Pagar en Efectivo Nueva Cuenta.', async () => {
            try {
                const correos = ['2'];
                                
                    for (let i = 0; i < correos.length; i++) {    
                        
                        await PaymentPages.pagarEnEfectivoYEnviarCorreo(correos[i]);
                    }   
            } catch (error) {
            throw new Error(`TC0006 (Pagar en Efectivo Nueva Cuenta) falló: ${error.message}`);
            }
            });
            //Retornar a la pantalla de inicio
            it('TC0007: Retorno Inicio', async () => {
            try {                
                await BreakTest.closeTOrden();   
                await BreakTest.botonCancel();           

            } catch (error) {
                throw new Error(`TC0007 (Retorno Inicio) falló: ${error.message}`);
            }
            });
           

 });