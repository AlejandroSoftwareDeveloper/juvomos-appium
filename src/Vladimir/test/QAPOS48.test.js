const { expect } = require('chai');

// Page Objects
const DineInPage = require('../pages/DineInPage.js');
const TableOccupantsNewPage = require('../pages/TableOccupantsNewPage.js');
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const SplitCheckPage = require('../pages/SplitCheckPage');
const CheckPage = require('../pages/CheckPage');
const SplitEqualKeyboardPage = require('../pages/SplitEqualKeyboardPage');

// Flow
const flow0002_dimeinocuparmesa = require('../flows/Flow0002_DimeInOcuparMesa');
const flow0003_seleccionar_3_itemmenu = require('../flows/Flow0003_Seleccionar_3_ItemMenu');
const flow0005_seleccionarmismamesa = require('../flows/Flow0005_SeleccionarMismaMesa.js');
const flow0013_splitCheck = require('../flows/Flow0013_SplitCheck');
const flow0014_enviarCheck = require('../flows/Flow0014_EnviarCheck');
const flow0015_abrirCheck = require('../flows/Flow0015_AbrirCheck');
const flow0016_splitcuentaentres = require('../flows/Flow0016_SplitCuentaEnTres');
const flow0017_splitevenlycheck = require('../flows/Flow0017_SplitEvenlyCheck');

describe('Flujo: Check con Hold y Fire', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let dineInPage;
    let tableoccupantsPage;
    let menuPage;
    let paymentPage;
    let splitcheckPage;
    let checkPage;
    let splitKeyboardPage;


    let flow0002;
    let flow0003;
    let flow0005;
    let flow0013;
    let flow0014;
    let flow0015;
    let flow0016;
    let flow0017;


    before(async function () {

        if (typeof flow0002_dimeinocuparmesa !== 'function') {
            throw new Error('Flow0002_DimeInOcuparMesa no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0003_seleccionar_3_itemmenu !== 'function') {
            throw new Error('Flow0003_Seleccionar_3_ItemMenu no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0005_seleccionarmismamesa !== 'function') {
            throw new Error('Flow0005_SeleccionarMismaMesa no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0013_splitCheck !== 'function') {
            throw new Error('Flow0013_SplitCheck no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0014_enviarCheck !== 'function') {
            throw new Error('Flow0014_EnviarCheck no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0015_abrirCheck !== 'function') {
            throw new Error('Flow0015_AbrirCheck no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0016_splitcuentaentres !== 'function') {
            throw new Error('Flow0016_SplitCuentaEnTres no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0017_splitevenlycheck !== 'function') {
            throw new Error('Flow0017_SplitEvenlyCheck no es un constructor. Revisa module.exports del Flow.');
        }


        dineInPage = new DineInPage();
        tableoccupantsPage = new TableOccupantsNewPage();
        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        splitcheckPage = new SplitCheckPage();
        checkPage = new CheckPage();
        splitKeyboardPage = new SplitEqualKeyboardPage();
        

        flow0002 = new flow0002_dimeinocuparmesa(
            dineInPage,
            tableoccupantsPage
        );

        flow0003 = new flow0003_seleccionar_3_itemmenu(
            menuPage
        );

        flow0005 = new flow0005_seleccionarmismamesa(
            dineInPage,
            tableoccupantsPage
        );
        
        flow0013 = new flow0013_splitCheck(
            paymentPage
        );

        flow0014 = new flow0014_enviarCheck(
            paymentPage
        );

        flow0015 = new flow0015_abrirCheck(
           checkPage
        );

        flow0016 = new flow0016_splitcuentaentres(
           splitKeyboardPage
        );

        flow0017 = new flow0017_splitevenlycheck(
           splitcheckPage
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

    it('Seleccionar 3 Item del Menu e ir a check', async function () {
        try {
            await flow0003.executeflow();
            console.log('Item eleccionados correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

    it('Enviar Check', async function () {
        try {
            await flow0014.executeflow();
            console.log('Check enviado satisfactoriamente');
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

    it('Abrir Check', async function () {
        try {
            await flow0015.executeflow();
            console.log('Check abierto correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

    it('Split check', async function () {
        try {
            await flow0013.executeflow();
            console.log('Split check satisfactoriamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

    it('SplitEvenly check', async function () {
        try {
            await flow0017.executeflow();
            console.log('Split check satisfactoriamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

    it('Split check en tres', async function () {
        try {
            await flow0016.executeflow();
            console.log('Split check satisfactoriamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });
    
});