//QAPOS104TransferirEmpleado.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const ConsultarCuentaPOS = require('../pages/ConsultarCuentaPOS');
const OpenCheck = require('../pages/OpenCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const BreakTest = require('../utils/BreakTest');

describe('Crear nuevo check split de orden enviada', () => {

   // Agregar 2 items al check 
          it('TC0001: Se crea una cuenta', async () => {
          try {
                
                await OrderSelectionPages.selectToGoIfPresent();
    
                await ProductSelectionPages.waitForPage();
                await ProductSelectionPages.selectProducts(2);
                await ProductSelectionPages.goToAcc();   
                
                // Enviar orden
                await ValidarProductosCheck.sendOrder();
    
          } catch (error) {
                throw new Error(`TC0001 (cuenta) falló: ${error.message}`);
          }
          });
          
        //Recall AQUI COMIENZA EN CASO DE USO
            it('TC0002: Recall', async () => {
            try {
               await OpenCheck.recallUltimaCuenta();

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
              
    
            } catch (error) {
            throw new Error(`TC0003 (Transferir el check a otro cajero) falló: ${error.message}`);
            }
            });
             //Recall DE Comprobacion.
            it('TC0004: Recall', async () => {
            try {
               await OpenCheck.recallUltimaCuenta();

            } catch (error) {
                throw new Error(`TC0004 (Recall) falló: ${error.message}`);
            }
            });
            
        //Retornar a la pantalla de inicio
            it('TC0005: Retorno Inicio', async () => {
            try {                
                await BreakTest.botonCancel();                       
                await BreakTest.closeTOrden();   
                await BreakTest.botonCancel();             

            } catch (error) {
                throw new Error(`TC0005 (Retorno Inicio) falló: ${error.message}`);
            }
            });                     
            


 });