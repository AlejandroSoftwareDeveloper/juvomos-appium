//QAPOS162VoidCheck.js

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
          
       //Cancelar cheque
            it('TC0003: Cancel', async () => {
            try {
                 await OpenCheck.OpenCheckRecall();
                 await SelectMesaDineIn.selectConfirmar();
                            
    
            } catch (error) {
                throw new Error(`TC0003 (Cancel) falló: ${error.message}`);
            }
            });


 });
