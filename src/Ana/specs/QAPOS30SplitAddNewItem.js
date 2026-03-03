//QAPOS30SplitAddNewItem.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const DividirCheck = require('../pages/DividirCheck');
const PaymentPages = require('../pages/PaymentPages');
const OpenCheck = require('../pages/OpenCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
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
        //Dividir en 3 cuentas y Enviar
            it('TC0002: Dividir en 3 cuentas', async () => {
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
                        await OpenCheck.recallUltimaCuenta();
                    } catch (error) {
                        throw new Error(`TC0003 (Recall) falló: ${error.message}`);
                    }
                });
            
           it('TC0004: Pagar en Efectivo y Enviar Correo', async () => {
                  try {
                      const correos = ['1', '2'];
                
                    for (let i = 0; i < correos.length; i++) {    
                      
                        await PaymentPages.pagarEnEfectivoYEnviarCorreo(correos[i]);
                    }   
                  } catch (error) {
                      throw new Error(`TC0004 (Pago y Correo) falló: ${error.message}`);
                  }
              });          

            //Modificar check
            it('TC0005: Nuevo Producto', async () => {
            try {                
                    // Modificar productos
                await ProductSelectionPages.MostrarProductos();
                await ProductSelectionPages.selectNewProducts(2);
                await ProductSelectionPages.goToAcc();

                await DividirCheck.BotonCheck();

            } catch (error) {
                throw new Error(`TC0005 (Nuevo Producto) falló: ${error.message}`);
            }
            });

            //Retornar a la pantalla de inicio
            it('TC0006: Retorno Inicio', async () => {
            try {                
                await DividirCheck.BTerminado();       
                
                const correos = ['3'];
                
                    for (let i = 0; i < correos.length; i++) {
    
                       await PaymentPages.pagarEnEfectivoYEnviarCorreo(correos[i]);
                    }                 

                    await BreakTest.closeTOrden();   
                    await BreakTest.botonCancel();                
               
            

            } catch (error) {
                throw new Error(`TC0006 (Retorno Inicio) falló: ${error.message}`);
            }
            });
                        
           
 });