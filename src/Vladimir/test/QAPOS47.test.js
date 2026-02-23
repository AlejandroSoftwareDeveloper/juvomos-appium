const { expect } = require('chai');

// Page Objects
const DineInPage = require('../pages/DineInPage.js');
const TableOccupantsNewPage = require('../pages/TableOccupantsNewPage.js');
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const DineInPaymentPageHold = require('../pages/DineInPaymentPageHold');
const FireSchedulePage = require('../pages/FireSchedulePage');
const CheckPage = require('../pages/CheckPage');
const CheckOptionsPage = require('../pages/CheckOptionsPage');

const PaymentCashoCreditPage = require('../pages/PaymentCashoCreditPage');
const PaymentCompletePage = require('../pages/PaymentCompletePage');

// Flow
const flow0002_dimeinocuparmesa = require('../flows/Flow0002_DimeInOcuparMesa');
const flow0003_seleccionar_2_itemmenu = require('../flows/Flow0003_Seleccionar_2_ItemMenu');
const flow0004_poneritemHold_and_itemfire_enviarcheck = require('../flows/Flow0004_PonerItemHold_and_itemFire_EnviarCheck');
const flow0005_seleccionarmismamesa = require('../flows/Flow0005_SeleccionarMismaMesa.js');
const flow0006_quitaritemhold = require('../flows/Flow0006_QuitarItemHold.js');
const flow0008_paymentpagepagarcheck = require('../flows/Flow0008_PaymentPagePagarCheck');
const flow0009_seleccionarcash = require('../flows/Flow0009_seleccionarCash');
const flow0010_confirmarpago = require('../flows/Flow0010_ConfirmarPago');


describe('Flujo: Check con Hold y Fire', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let dineInPage;
    let tableoccupantsPage;
    let menuPage;
    let paymentPage;
    let holdPage;
    let fireschedulePage;
    let checkPage;
    let checkOptionsPage;
    let paymentcashocreditPage;
    let paymentcompletePage;

    let flow0002;
    let flow0003;
    let flow0004;
    let flow0005;
    let flow0006;
    let flow0008;
    let flow0009;
    let flow0010;

    before(async function () {

        if (typeof flow0002_dimeinocuparmesa !== 'function') {
            throw new Error('Flow0002_DimeInOcuparMesa no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0003_seleccionar_2_itemmenu !== 'function') {
            throw new Error('Flow0003_Seleccionar_2_ItemMenu no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0004_poneritemHold_and_itemfire_enviarcheck !== 'function') {
            throw new Error('Flow0004_PonerItemHold_and_itemFire_EnviarCheck no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0005_seleccionarmismamesa !== 'function') {
            throw new Error('Flow0005_SeleccionarMismaMesa no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0006_quitaritemhold !== 'function') {
            throw new Error('Flow0006_QuitarItemHold no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0008_paymentpagepagarcheck !== 'function') {
            throw new Error('Flow0008_PaymentPagePagarCheck no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0009_seleccionarcash !== 'function') {
            throw new Error('Flow0009_seleccionarCash no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0010_confirmarpago !== 'function') {
            throw new Error('Flow0010_ConfirmarPago no es un constructor. Revisa module.exports del Flow.');
        }

        dineInPage = new DineInPage();
        tableoccupantsPage = new TableOccupantsNewPage();
        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        holdPage = new DineInPaymentPageHold();
        checkPage = new CheckPage();
        checkOptionsPage = new CheckOptionsPage();
        fireschedulePage = new FireSchedulePage();
        paymentcashocreditPage = new PaymentCashoCreditPage();
        paymentcompletePage = new PaymentCompletePage();

        flow0002 = new flow0002_dimeinocuparmesa(
            dineInPage,
            tableoccupantsPage
        );

        flow0003 = new flow0003_seleccionar_2_itemmenu(
            menuPage
        );

        flow0004 = new flow0004_poneritemHold_and_itemfire_enviarcheck(
            dineInPage,
            menuPage,
            paymentPage,
            holdPage,
            fireschedulePage
        );

        flow0005 = new flow0005_seleccionarmismamesa(
            dineInPage,
            tableoccupantsPage
        );

        flow0006 = new flow0006_quitaritemhold(
            checkPage,
            paymentPage,
            holdPage
        );
        
        flow0008 = new flow0008_paymentpagepagarcheck(
            paymentPage
        );
        
        flow0009 = new flow0009_seleccionarcash(
            paymentcashocreditPage
        );
        
        flow0010 = new flow0010_confirmarpago(
            paymentcompletePage
        );
    });

    // Función auxiliar para capturar screenshot seguro
    async function safeScreenshot(page) {
        try {
            const driver = await page.getDriver();
            const session = await driver.getSession();
            if (session) {
                const timestamp = new Date().toISOString().replace(/:/g, '-');
                const screenshotPath = `./screenshots/failure_${timestamp}.png`;
                await driver.saveScreenshot(screenshotPath);
                console.log(`Screenshot guardado en: ${screenshotPath}`);
            }
        } catch (err) {
            console.warn('No se pudo capturar screenshot: driver no activo');
        }
    }

    it('Preparar mesa', async function () {
        try {
            await flow0002.executeflow(1, 1);
            console.log('Mesa seleccionada correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

    it('Seleccionar 2 Item del Menu e ir a check', async function () {
        try {
            await flow0003.executeflow();
            console.log('Item eleccionados correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

    it('Poner primer Itemen hold y segundo en fire e enviar', async function () {
        try {
            await flow0004.executeflow();
            console.log('Check enviado correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });
    //falta el it de quitar el hold

    it('Seleccionar la misma mesa', async function () {
        try {
            await flow0005.executeflow(1);
            console.log('Mesa seleccionada correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

    it('Quitar primer Item de hold', async function () {
        try {
            await flow0006.executeflow();
            console.log('Check enviado correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });  

    it('Seleccionar Pagar Cuenta', async function () {
        try {
            await flow0008.executeflow();
            console.log('Boton de pago ejecutado correctamente');
        } catch (error) {
            await safeScreenshot(paymentPage); // <-- reemplazo seguro
            throw error;
        }
    }); 

    it('Seleccionar metodo de pago cash', async function () {
        try {
            await flow0009.executeflow();
            console.log('Metodo de pago Cash seleccionados correctamente');
        } catch (error) {
            await safeScreenshot(paymentcashocreditPage); // <-- reemplazo seguro
            throw error;
        }
    });
    
    it('Confirmar Pago Cash', async function () {
        try {
            await flow0010.executeflow();
            console.log('Confirmado el pago cash');
        } catch (error) {
            await safeScreenshot(paymentcompletePage); // <-- reemplazo seguro
            throw error;
        }
    });
    
});