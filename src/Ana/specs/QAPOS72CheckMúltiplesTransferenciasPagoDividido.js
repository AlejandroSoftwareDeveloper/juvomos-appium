//QAPOS72CheckMúltiplesTransferenciasPagoDividido.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const ConsultarCuentaPOS = require('../pages/ConsultarCuentaPOS');
const OpenCheck = require('../pages/OpenCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const DividirCheck = require('../pages/DividirCheck');
const BreakTest = require('../utils/BreakTest');

describe('Check con múltiples transferencias y pago dividido ', () => {

    it('TC0001: Se crea una cuenta', async () => {
        try {
            await OrderSelectionPages.selectToGoIfPresent();
            await ProductSelectionPages.waitForPage();
            await ProductSelectionPages.selectProducts(4);
            await ProductSelectionPages.goToAcc();
            await ValidarProductosCheck.sendOrder();
        } catch (error) {
            throw new Error(`TC0001 (Cuenta) falló: ${error.message}`);
        }
    });

    it('TC0002: Recall', async () => {
        try {
            await OpenCheck.recallUltimaCuenta();
        } catch (error) {
            throw new Error(`TC0002 (Recall) falló: ${error.message}`);
        }
    });

    it('TC0003: Transferir cajero (1)', async () => {
        try {
            await ConsultarCuentaPOS.transferirCajero();
        } catch (error) {
            throw new Error(`TC0003 (Transferencia 1) falló: ${error.message}`);
        }
    });

    it('TC0004: Recall', async () => {
        try {
            await OpenCheck.recallUltimaCuenta();
        } catch (error) {
            throw new Error(`TC0004 (Recall) falló: ${error.message}`);
        }
    });

    it('TC0005: Transferir cajero (2)', async () => {
        try {
            await ConsultarCuentaPOS.transferirCajero();
        } catch (error) {
            throw new Error(`TC0005 (Transferencia 2) falló: ${error.message}`);
        }
    });

    it('TC0006: Recall', async () => {
        try {
            await OpenCheck.recallUltimaCuenta();
        } catch (error) {
            throw new Error(`TC0006 (Recall) falló: ${error.message}`);
        }
    });

    //Dividir en 2 cuentas
    it('TC0007: Dividir en 2 cuentas', async () => {
    try {
            await DividirCheck.dividirCheck(2);     
            
            //Consulta si el boton esta disponible
                const btnShowOrder = ProductSelectionPages.accountButton;

                if (await btnShowOrder.isDisplayed()) {
                    await btnShowOrder.click(); 
                }
           // await ProductSelectionPages.goToAcc();        
                // Enviar orden
           // await ValidarProductosCheck.sendOrder();
            
    } catch (error) {
            throw new Error(`TC0007 (Dividir) falló: ${error.message}`);
    }
    });

    it('TC0008: Pagar en Efectivo y Enviar Correo', async () => {
        try {
            const correos = ['correo.com', 'google.com'];                                    
            for (let i = 0; i < correos.length; i++) {    
            
                await PaymentPages.pagarEnEfectivoYEnviarCorreo(correos[i]);
            }   
        } catch (error) {
            throw new Error(`TC0008 (Pago y Correo) falló: ${error.message}`);
        }
    });  

});
