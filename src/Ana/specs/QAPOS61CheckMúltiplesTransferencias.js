// QAPOS61CheckMúltiplesTransferencias.js

const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const PaymentPages = require('../pages/PaymentPages');
const ConsultarCuentaPOS = require('../pages/ConsultarCuentaPOS');
const OpenCheck = require('../pages/OpenCheck');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const BreakTest = require('../utils/BreakTest');

describe('Crear nuevo check múltiples transferencias', () => {

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

    it('TC0007: Pagar en Efectivo y Enviar Correo', async () => {
        try {
            await PaymentPages.pagarEnEfectivoYEnviarCorreo('correo.com');
        } catch (error) {
            throw new Error(`TC0007 (Pago y Correo) falló: ${error.message}`);
        }
    });
    //Retornar a la pantalla de inicio
        it('TC0008: Retorno Inicio', async () => {
        try {                
            await BreakTest.closeTOrden();   
            await BreakTest.botonCancel();                     
        

        } catch (error) {
            throw new Error(`TC0008 (Retorno Inicio) falló: ${error.message}`);
        }
        });

});
