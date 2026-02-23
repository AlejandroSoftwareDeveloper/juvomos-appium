const { expect } = require('chai');

// Page Objects
const DineInPage = require('../pages/DineInPage.js');
const TableOccupantsNewPage = require('../pages/TableOccupantsNewPage.js');
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const DineInPaymentPageHold = require('../pages/DineInPaymentPageHold');
const CheckPage = require('../pages/CheckPage');

// Flow
const flow0002_dimeinocuparmesa = require('../flows/Flow0002_DimeInOcuparMesa');
const flow0003_seleccionar_2_itemmenu = require('../flows/Flow0003_Seleccionar_2_ItemMenu');
const flow0004_poneritemhold_enviarcheck = require('../flows/Flow0004_PonerItemHold_EnviarCheck');
const flow0005_quitaritemhold = require('../flows/Flow0006_QuitarItemHold.js');
const flow0006_seleccionarmismamesa = require('../flows/Flow0005_SeleccionarMismaMesa.js');


describe('Flujo: Quitar hold a item Send', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let dineInPage;
    let tableoccupantsPage;
    let menuPage;
    let paymentPage;
    let holdPage;
    let checkPage;

    let flow0002;
    let flow0003;
    let flow0004;
    let flow0005;
    let flow0006;

    before(async function () {
        /*if (typeof qapos34Flow !== 'function') {
            throw new Error('QAPOS34Flow no es un constructor. Revisa module.exports del Flow.');
        }*/

        if (typeof flow0002_dimeinocuparmesa !== 'function') {
            throw new Error('Flow0002_DimeInOcuparMesa no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0003_seleccionar_2_itemmenu !== 'function') {
            throw new Error('Flow0003_Seleccionar_2_ItemMenu no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0004_poneritemhold_enviarcheck !== 'function') {
            throw new Error('Flow0004_PonerItemHold_EnviarCheck no es un constructor. Revisa module.exports del Flow.');
        }
        
        if (typeof flow0005_quitaritemhold !== 'function') {
            throw new Error('Flow0005_QuitarItemHold no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0006_seleccionarmismamesa !== 'function') {
            throw new Error('Flow0006_SeleccionarMismaMesa no es un constructor. Revisa module.exports del Flow.');
        }

        dineInPage = new DineInPage();
        tableoccupantsPage = new TableOccupantsNewPage();
        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        holdPage = new DineInPaymentPageHold();
        checkPage = new CheckPage();

        flow0002 = new flow0002_dimeinocuparmesa(
            dineInPage,
            tableoccupantsPage
        );

        flow0003 = new flow0003_seleccionar_2_itemmenu(
            menuPage
        );

        flow0004 = new flow0004_poneritemhold_enviarcheck(
            dineInPage,
            menuPage,
            paymentPage,
            holdPage
        );

        flow0005 = new flow0005_quitaritemhold(
            menuPage,
            paymentPage,
            holdPage,
            checkPage
        );

        flow0006 = new flow0006_seleccionarmismamesa(
            dineInPage,
            tableoccupantsPage,
            checkPage
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

    it('Poner primer Itemen hold y enviar', async function () {
        try {
            await flow0004.executeflow();
            console.log('Check enviado correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

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

});