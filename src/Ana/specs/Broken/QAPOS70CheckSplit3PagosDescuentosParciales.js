//QAPOS70CheckSplit3PagosDescuentosParciales.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const AplicarDescuento = require('../pages/AplicarDescuento');
const DividirCheck = require('../pages/DividirCheck');

describe('Check con Split en tres pagos y descuentos parciales', () => {

    // Agregar 6 items al check 
          it('TC0001: Crear Check', async () => {
          try {
                
                await OrderSelectionPages.selectToGoIfPresent();
    
                await ProductSelectionPages.waitForPage();
                await ProductSelectionPages.selectProducts(7);
                await ProductSelectionPages.goToAcc();                
               
    
          } catch (error) {
                throw new Error(`TC0001 (cuenta) falló: ${error.message}`);
          }
          });
          
        //Aplicar descuento
            it('TC0002: Descuento 10%', async () => {
            try {
              await AplicarDescuento.AplicarDescuentoIndividual(2);

            } catch (error) {
                throw new Error(`TC0002 (Descuento 10%) falló: ${error.message}`);
            }
            });

       //Dividir en 3 cuentas
            it('TC0002: Dividir en 3 cuentas', async () => {
            try {
                    await DividirCheck.dividirCheck(3);     
                    await ProductSelectionPages.goToAcc();                            
                    
            } catch (error) {
                    throw new Error(`TC0002 (Dividir) falló: ${error.message}`);
            }
            });

           
           it('TC0006: Pagar en Efectivo Enviar Correo por cada cuenta.', async () => {
            try {
                const correos = ['1', '2', '3'];                                    
                for (let i = 0; i < correos.length; i++) {    

                    await PaymentPages.pagarEnEfectivoYEnviarCorreo(correos[i]);

                    // Solo ejecutar goToAcc si NO es la última iteración
                    if (i < correos.length - 1) {
                        await ProductSelectionPages.goToAcc();  
                    }
                }   
            } catch (error) {
                throw new Error(`TC0006 (Pagar y Correo) falló: ${error.message}`);
            }
        });            
      
                    

 });