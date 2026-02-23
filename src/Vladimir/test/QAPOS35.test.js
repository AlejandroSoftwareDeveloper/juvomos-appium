const { expect } = require('chai');

// Page Objects
const DineInPage = require('../pages/DineInPage.js');
const TableOccupantsNewPage = require('../pages/TableOccupantsNewPage.js');
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const CheckOptionsPage = require('../pages/CheckOptionsPage');
const CheckPage = require('../pages/CheckPage');
const OpenCheckOptionsPage = require('../pages/OpenCheckOptionsPage');

// Flow
const flow0002_dimeinocuparmesa = require('../flows/Flow0002_DimeInOcuparMesa');
const flow0003_seleccionar_2_itemmenu = require('../flows/Flow0003_Seleccionar_2_ItemMenu');
const flow0004_poneritemhold_enviarcheck = require('../flows/Flow0004_PonerItemHold_EnviarCheck');
const flow0005_quitaritemhold = require('../flows/Flow0006_QuitarItemHold.js');
const flow0006_seleccionarmismamesa = require('../flows/Flow0005_SeleccionarMismaMesa.js');
const flow0007_ponercheckhold_enviar = require('../flows/Flow0007_PonerCheckHold_Enviar.js');
const flow0008_abriropcionescheck = require('../flows/Flow0008_AbrirOpcionesCheck.js');


describe('Flujo: Quitar hold a check Send', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let dineInPage;
    let tableoccupantsPage;
    let menuPage;
    let paymentPage;
    let checkoptionsPage;
    let checkPage;
    let opencheckoptionsPage;
    let abriropcionescheck;

    //Flow
    let flow0002;
    let flow0003;
    let flow0004;
    let flow0005;
    let flow0006;
    let flow0007;
    let flow0008;

    before(async function () {
        
        if (typeof flow0002_dimeinocuparmesa !== 'function') {
            throw new Error('Flow0002_DimeInOcuparMesa no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0003_seleccionar_2_itemmenu !== 'function') {
            throw new Error('Flow0003_Seleccionar_2_ItemMenu no es un constructor. Revisa module.exports del Flow.');
        }
/*
        if (typeof flow0004_poneritemhold_enviarcheck !== 'function') {
            throw new Error('Flow0004_PonerItemHold_EnviarCheck no es un constructor. Revisa module.exports del Flow.');
        }
        
        if (typeof flow0005_quitaritemhold !== 'function') {
            throw new Error('Flow0005_QuitarItemHold no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0006_seleccionarmismamesa !== 'function') {
            throw new Error('Flow0006_SeleccionarMismaMesa no es un constructor. Revisa module.exports del Flow.');
        }
*/
        if (typeof flow0007_ponercheckhold_enviar !== 'function') {
            throw new Error('Flow0007_PonerCheckHold_Enviar no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0008_abriropcionescheck !== 'function') {
            throw new Error('Flow0008_AbrirOpcionesCheck no es un constructor. Revisa module.exports del Flow.');
        }

        dineInPage = new DineInPage();
        tableoccupantsPage = new TableOccupantsNewPage();
        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        checkPage = new CheckPage();
        opencheckoptionsPage = new OpenCheckOptionsPage();
        checkoptionsPage = new CheckOptionsPage();
        abriropcionescheck = new flow0008_abriropcionescheck();

        flow0002 = new flow0002_dimeinocuparmesa(
            dineInPage,
            tableoccupantsPage
        );

        flow0003 = new flow0003_seleccionar_2_itemmenu(
            menuPage
        );
/*
        flow0006 = new flow0005_quitaritemhold(
            menuPage,
            paymentPage,
            checkOptionsPage,
            checkPage
        );

        flow0005 = new flow0006_seleccionarmismamesa(
            dineInPage,
            tableoccupantsPage,
            checkPage
        );
*/
        flow0007 = new flow0007_ponercheckhold_enviar(
            dineInPage,
            menuPage,
            paymentPage,
            checkoptionsPage
        );

        flow0008 = new flow0008_abriropcionescheck(
            paymentPage
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

    it('Ir a las opciones del check', async function () {
        try {
            await flow0008.executeflow();
            //console.log('Item eleccionados correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

    it('Poner check en hold y enviar', async function () {
        try {
            await flow0007.executeflow();
            console.log('Check enviado correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });
/*
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
*/
});