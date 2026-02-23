const { expect } = require('chai');

// Page Objects
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const DineInPaymentPageHold = require('../pages/DineInPaymentPageHold');
const OrderTypePage = require('../pages/OrderTypePage');
const RecallChecksPage = require('../pages/RecallChecksPage');
const RecallCheckDetailPage = require('../pages/RecallCheckDetailPage');

// Flow
const qapos23Flow = require('../flows/QAPOS23Flow');

describe('Flujo: Recall check con item con hold y send', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let menuPage;
    let paymentPage;
    let holdPage;
    let ordertypePage;
    let recallRchecksPage;
    let recallcheckdetailPage;

    before(async function () {
        // Validación defensiva
        if (typeof qapos23Flow !== 'function') {
            throw new Error('QAPOS23Flow no es un constructor. Revisa module.exports del Flow.');
        }

        // Instancia de Page Objects

        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        holdPage = new DineInPaymentPageHold();
        ordertypePage = new OrderTypePage();
        recallRchecksPage = new RecallChecksPage();
        recallcheckdetailPage = new RecallCheckDetailPage();

        // Instancia explícita del Flow
        qapos23 = new qapos23Flow(
            ordertypePage,
            menuPage,
            paymentPage,
            holdPage,
            recallRchecksPage,
            recallcheckdetailPage
        );
    });

    it('Recall check con item con hold y send: Crear check con item en hold Click send Click recall al check Quitar hold del item Click send', async function () {
        try {
            // ------------------------------
            // Ejecuta el flujo funcional completo (pasos 1 a 4)
            // ------------------------------
            await qapos23.execute();
            await qapos23.execute();
            

            console.log('Prueba');

        } catch (error) {
            // ------------------------------
            // Captura screenshot ante fallo
            // ------------------------------
            try {
                const driver = await menuPage.getDriver();
                const session = await driver.getSession();
                if (session) {
                    const timestamp = new Date().toISOString().replace(/:/g, '-');
                    const screenshotPath = `./screenshots/failure_${timestamp}.png`;
                    await driver.saveScreenshot(screenshotPath);
                }
            } catch (screenshotError) {
                console.warn('No se pudo capturar screenshot: UiAutomator2 no está activo');
            }

            throw error;
        }
    });
});