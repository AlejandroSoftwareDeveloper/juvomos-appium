//QAPOS160VoidItem.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const SelectMesaDineIn = require('../pages/SelectMesaDineIn');
const AplicarDescuento = require('../pages/AplicarDescuento');
const BreakTest = require('../utils/BreakTest');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const OpenCheck = require('../pages/OpenCheck');
const CancelarProductos = require('../pages/CancelarProductos');

describe('Void Item', () => {

    // Agregar varios tipos de productos items al check y Enviar
          it('TC0001: Crear Check', async () => {
          try {
                
                await OrderSelectionPages.selectToGoIfPresent();
    
                await ProductSelectionPages.waitForPage();
                await ProductSelectionPages.selectProducts(4);
                await ProductSelectionPages.goToAcc();  
                
                await ValidarProductosCheck.sendOrder(); 
               
    
          } catch (error) {
                throw new Error(`TC0001 (cuenta) falló: ${error.message}`);
          }
          });
          
           it('TC0002: Recall', async () => {
            try {
                await OpenCheck.recallUltimaCuenta();

            } catch (error) {
                throw new Error(`TC0002 (Recall) falló: ${error.message}`);
            }
            });
          
       //Cancelar 1 producto
            it('TC0003: Cancel', async () => {
            try {
                 
                // Cancelar productos
                await CancelarProductos.selectproductcancel(1);

                await ValidarProductosCheck.sendOrder();
    
            } catch (error) {
                throw new Error(`TC0003 (Cancel) falló: ${error.message}`);
            }
            });

             it('TC0002: Recall', async () => {
            try {
                await OpenCheck.recallUltimaCuenta();

            } catch (error) {
                throw new Error(`TC0002 (Recall) falló: ${error.message}`);
            }
            });

           it('TC0008: Pagar en Efectivo Enviar Correo por cada cuenta.', async () => {
            try {
                const correos = ['1'];                                    
                for (let i = 0; i < correos.length; i++) {    

                    await PaymentPages.pagarEnEfectivoYEnviarCorreo(correos[i]);

                    // Solo ejecutar goToAcc si NO es la última iteración
                    if (i < correos.length - 1) {
                        await ProductSelectionPages.goToAcc();  
                    }
                }   
            } catch (error) {
                throw new Error(`TC0008 (Pagar y Correo) falló: ${error.message}`);
            }
        });      
         //Retornar a la pantalla de inicio
            it('TC0005: Retorno Inicio', async () => {
            try {                
                    await BreakTest.closeTOrden();   
                await BreakTest.botonCancel();             

            } catch (error) {
                throw new Error(`TC0005 (Retorno Inicio) falló: ${error.message}`);
            }
            });                 
                
      
                    

 });