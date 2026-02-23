const { expect } = require('chai');

// Page Objects
const DineInPage = require('../pages/DineInPage.js');
const TableOccupantsNewPage = require('../pages/TableOccupantsNewPage.js');
const DineInMenuPage = require('../pages/DineInMenuPage.js');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba.js');
const PaymentCashoCreditPage = require('../pages/PaymentCashoCreditPage.js');
const PaymentCompletePage = require('../pages/PaymentCompletePage.js');
// Flow
const flow0002_dimeinocuparmesa = require('../flows/Flow0002_DimeInOcuparMesa.js');
const flow0003_seleccionar_1_itemmenu = require('../flows/Flow0003_Seleccionar_1_ItemMenu.js');
const flow0003_seleccionar_2_itemmenu = require('../flows/Flow0003_Seleccionar_2_ItemMenu.js');
const flow0011_imprimircheck = require('../flows/Flow0011_ImprimirCheck.js');
const flow0012_imprimircheck = require('../flows/Flow0012_ImprimirCheck.js');

describe('Flujo: Abrir Cheque y agregar item', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let dineInPage;
    let tableoccupantsPage;
    let menuPage;
    let paymentPage;

    let flow0002;
    let flow0003;
    let flow0003_1;
    let flow0011;
    let flow0012;


    before(async function () {

        if (typeof flow0002_dimeinocuparmesa !== 'function') {
            throw new Error('Flow0002_DimeInOcuparMesa no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0003_seleccionar_1_itemmenu !== 'function') {
            throw new Error('Flow0003_Seleccionar_1_ItemMenu no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0003_seleccionar_2_itemmenu !== 'function') {
            throw new Error('Flow0003_Seleccionar_2_ItemMenu no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0011_imprimircheck !== 'function') {
            throw new Error('Flow0011_ImprimirCheck no es un constructor. Revisa module.exports del Flow.');
        }

        if (typeof flow0012_imprimircheck !== 'function') {
            throw new Error('Flow0012_ImprimirCheck no es un constructor. Revisa module.exports del Flow.');
        }

        dineInPage = new DineInPage();
        tableoccupantsPage = new TableOccupantsNewPage();
        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        paymentcashocreditPage = new PaymentCashoCreditPage();
        paymentcompletePage = new PaymentCompletePage();

        flow0002 = new flow0002_dimeinocuparmesa(
            dineInPage,
            tableoccupantsPage
        );

         flow0003_1 = new flow0003_seleccionar_1_itemmenu(
            menuPage
        );

        flow0003 = new flow0003_seleccionar_2_itemmenu(
            menuPage
        );

        flow0011 = new flow0011_imprimircheck(
            paymentPage
        );

        flow0012 = new flow0012_imprimircheck(
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


    it('Imprimir Check y regresar al menu', async function () {
        try {
            await flow0011.executeflow();
            console.log('Item eleccionados correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

    it('Agregar 1 Item del Menu al check e ir a check', async function () {
        try {
            await flow0003_1.executeflow();
            console.log('Item eleccionados correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });

    it('Imprimir Check', async function () {
        try {
            await flow0012.executeflow();
            console.log('Item eleccionados correctamente');
        } catch (error) {
            await safeScreenshot(menuPage); // <-- reemplazo seguro
            throw error;
        }
    });
});