//QAPOS07NombreCliente-Split.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const SeleccionarClienteCheck = require('../pages/SeleccionarClienteCheck');
const DividirCheck = require('../pages/DividirCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const OrderSelectionDelivery = require('../pages/OrderSelectionDelivery');
const ConsultarCuentaPOS = require('../pages/ConsultarCuentaPOS');
const BreakTest = require('../utils/BreakTest');
const PaymentPages = require('../pages/PaymentPages');
const OpenCheck = require('../pages/OpenCheck');

describe('Nombre Cliente | Split', () => {

     // Acceder To Go, seleccionar 6 productos 
      it('TC0001: Se crea una cuenta y se le asigna un cliente', async () => {
      try {
            await OrderSelectionPages.selectToGoIfPresent();
            await ProductSelectionPages.waitForPage();
            await ProductSelectionPages.selectProducts(7);     
            await ProductSelectionPages.goToAcc();        

      } catch (error) {
        throw new Error(`TC0001 (Productos) falló: ${error.message}`);                 
      }
      });
       //Asignar un cliente
      it('TC0002: Asignar un cliente', async () => {
      try {
            
          await SeleccionarClienteCheck.selectClient();
          await OrderSelectionDelivery.addCustomerToCheck('Mary');
          await ProductSelectionPages.goToAcc();

      } catch (error) {
            throw new Error(`TC0002 (Cliente) falló: ${error.message}`);
      }
      });
     //Dividir en 3 cuentas y Enviar
      it('TC0003: Dividir en 3 cuentas', async () => {
      try {
            await DividirCheck.dividirCheck(3);     
            await ProductSelectionPages.goToAcc();                  
            
            
      } catch (error) {
            throw new Error(`TC0003 (cuentas) falló: ${error.message}`);
      }
      });
     
       //Verificar cada check
      it('TC0004: En el POS presionar boton opciones de cheques y verificar cada cheque', async () => {
    try {
        await ConsultarCuentaPOS.procesarCheque(1, 'meromero');
        await ConsultarCuentaPOS.procesarCheque(2, 'luis');

        // Enviar orden
        await ValidarProductosCheck.sendOrder();

    } catch (error) {
        throw new Error(`TC0004 (POS) falló: ${error.message}`);
    }
});
      //Retornar a la pantalla de inicio y pagar checks
            it('TC0006: Retorno Inicio', async () => {
            try {                
                
                await OpenCheck.recallUltimaCuenta();
                const correos = ['1','2','3'];
                
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
