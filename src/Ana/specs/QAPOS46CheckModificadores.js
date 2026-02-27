//QAPOS46CheckModificadores.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const OpenCheck = require('../pages/OpenCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const ModificarIngredientes = require('../pages/ModificarIngredientes');
const BreakTest = require('../utils/BreakTest');

describe('Check con Modificadores', () => {

    // Agregar 4 items al check con modificadores
          it('TC0001: Crear Check', async () => {
          try {
                
                await OrderSelectionPages.selectToGoIfPresent();
    
                await ProductSelectionPages.waitForPage();
                await ProductSelectionPages.seleccionarModificador(2);
                await ProductSelectionPages.selectProducts(2);
                await ProductSelectionPages.goToAcc();                
               
    
          } catch (error) {
                throw new Error(`TC0001 (cuenta) falló: ${error.message}`);
          }
          });
          
       //Modificar ingredientes de al menos 1 producto y enviar a cocina
            it('TC0002: Modificar ingredientes', async () => {
            try {
                   await ModificarIngredientes.ModificarIngredients(1);
                    // Enviar orden
                  await ValidarProductosCheck.sendOrder();

            } catch (error) {
                throw new Error(`TC0002 (Modificar ingredientes) falló: ${error.message}`);
            }
            });

            //Recall
            it('TC0003: Recall', async () => {
            try {
                await OpenCheck.recallUltimaCuenta();

            } catch (error) {
                throw new Error(`TC0003(Recall) falló: ${error.message}`);
            }
            });
            
          it('TC0004: Pagar en Efectivo.', async () => {
            try {
                   await PaymentPages.pagarEnEfectivoYEnviarCorreo('google');

                   //Consulta si el boton esta disponible
                    const btnOrderRecall = ProductSelectionPages.accountButton;
    
                    if (await btnOrderRecall.isDisplayed()) {
                        await btnOrderRecall.click(); 
                    }
                   
            } catch (error) {
                throw new Error(`TC0004 (Pagar y Correo) falló: ${error.message}`);
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