const { expect } = require('chai');

// Page Objects
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const DineInPaymentPageHold = require('../pages/DineInPaymentPageHold');
const SplitCheckPage = require('../pages/SplitCheckPage');


// Flow
const qapos29Flow = require('../flows/QAPOS29Flow');

describe('Flujo: Split numero de check sin check number', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let menuPage;
    let paymentPage;
    let holdPage;
    let splitcheckPage;
    let qapos29;

    before(async function () {
        // Validación defensiva
        if (typeof qapos29Flow !== 'function') {
            throw new Error('QAPOS29Flow no es un constructor. Revisa module.exports del Flow.');
        }

        // Instancia de Page Objects

        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        holdPage = new DineInPaymentPageHold();
        splitcheckPage = new SplitCheckPage();

        // Instancia explícita del Flow
        qapos29 = new qapos29Flow(
            menuPage,
            paymentPage,
            holdPage,
            splitcheckPage
        );
    });

    it('Split numero de check sin check number: Crear check con 2 items Click split Agregar check', async function () {
        try {
            // ------------------------------
            // Ejecuta el flujo funcional completo (pasos 1 a 4)
            // ------------------------------
            await qapos29.execute();
            await qapos29.execute();

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