//QAPOS67CheckTransferDescuento.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const ConsultarCuentaPOS = require('../pages/ConsultarCuentaPOS');
const OpenCheck = require('../pages/OpenCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const CancelarProductos = require('../pages/CancelarProductos');
const AplicarDescuento = require('../pages/AplicarDescuento');
const BreakTest = require('../utils/BreakTest');

describe('Check con Transfer y Descuento', () => {

    // Agregar 3 items al check 
          it('TC0001: Crear Check', async () => {
          try {
                
                await OrderSelectionPages.selectToGoIfPresent();
    
                await ProductSelectionPages.waitForPage();
                await ProductSelectionPages.selectProducts(3);
                await ProductSelectionPages.goToAcc();                
               
    
          } catch (error) {
                throw new Error(`TC0001 (cuenta) falló: ${error.message}`);
          }
          });
          
        //Aplicar descuento
            it('TC0002: Descuento 20%', async () => {
            try {
              await AplicarDescuento.AplicarDescuento();
              await ProductSelectionPages.goToAcc();  

               // Enviar orden

              await ValidarProductosCheck.sendOrder();                

            } catch (error) {
                throw new Error(`TC0002 (Descuento 20%) falló: ${error.message}`);
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

          // Transferir el check a otro cajero
            it('TC0004: Transferir cajero.', async () => {
            try {                    
                        // Abrir Recall
                await ConsultarCuentaPOS.BtnCuenta();

                // Transferir empleado
                await ConsultarCuentaPOS.transferToRandomEmployee();
               // await ConsultarCuentaPOS.SeleccionarEmpleado();
    
            } catch (error) {
            throw new Error(`TC0004 (Transferir el check a otro cajero) falló: ${error.message}`);
            }
            });

            //Recall
            it('TC0005: Recall', async () => {
            try {
                // Acceder al Recall
                await OpenCheck.open();
                await OpenCheck.selectLastCreatedAccount();
                // Abrir Recall
                await CancelarProductos.openRecall();

            } catch (error) {
                throw new Error(`TC0005 (Recall) falló: ${error.message}`);
            }
            });
       
            it('TC0006: Pagar en Efectivo Enviar Correo por cada cuenta.', async () => {
            try {
                await PaymentPages.pagarEnEfectivoYEnviarCorreo('gmail.com');

            } catch (error) {
                throw new Error(`TC0006 (Pagar y Correo) falló: ${error.message}`);
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