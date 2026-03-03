//QAPOS157DiscountItem-SendCheck.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const SelectMesaDineIn = require('../pages/SelectMesaDineIn');
const AplicarDescuento = require('../pages/AplicarDescuento');
//const AplicarImpuesto = require('../pages/AplicarImpuesto');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const OpenCheck = require('../pages/OpenCheck');
const BreakTest = require('../utils/BreakTest');

describe('Discount Item (Send Check)', () => {

    // Agregar varios tipos de productos items al check
    // OK
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

    // Aplicar descuento
    it('TC0003: Aplicar Descuento', async () => {
        try {
            await AplicarDescuento.AplicarDescuentoIndividual(1);

        } catch (error) {
            throw new Error(`TC0003 (Aplicar Descuento) falló: ${error.message}`);
        }
    });

    //Quitar descuento
    it('TC0004: Quitar Descuento', async () => {
        try {
            await AplicarDescuento.AplicarDescuentoIndividual(1);       

            await BreakTest.Cerrar();
            await BreakTest.Cerrar2();
            //  await ProductSelectionPages.goToAcc(); 

        } catch (error) {
            throw new Error(`TC0004 (Quitar Descuento) falló: ${error.message}`);
        }
    });

    //Aplicar Segundo descuento
    it('TC0005: Segundo Descuento', async () => {
        try {
            await AplicarDescuento.AplicarDescuentoIndividual(1);

        } catch (error) {
            throw new Error(`TC0005 (Segundo Descuento) falló: ${error.message}`);
        }
    });

    //Aplicar descuento
    it('TC0006: Descuento 20%', async () => {
        try {
            await AplicarDescuento.AplicarDescuento();
            await SelectMesaDineIn.selectConfirmar();
            //  await ProductSelectionPages.goToAcc();  

            // Enviar orden    
            // await ValidarProductosCheck.sendOrder();                    

        } catch (error) {
            throw new Error(`TC0006 (Descuento 20%) falló: ${error.message}`);
        }
    });

    it('TC0007: Pagar en Efectivo Enviar Correo por cada cuenta.', async () => {
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
    // //Retornar a la pantalla de inicio
    it('TC0008: Retorno Inicio', async () => {
        try {                
            await BreakTest.closeTOrden();   
            await BreakTest.botonCancel();             

        } catch (error) {
            throw new Error(`TC0005 (Retorno Inicio) falló: ${error.message}`);
        }
    });                     

});
