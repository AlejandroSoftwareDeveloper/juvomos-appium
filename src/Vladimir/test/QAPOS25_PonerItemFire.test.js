const { expect } = require('chai');

// Page Objects
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const DineInPaymentPageHold = require('../pages/DineInPaymentPageHold');
const FireSchedulePage = require('../pages/FireSchedulePage');


// Flow
const qapos25Flow = require('../flows/QAPOS25Flow');

describe('Flujo: Fire', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let menuPage;
    let paymentPage;
    let holdPage;
    let fireschedulePage;
    let qapos25;

    before(async function () {
        // Validación defensiva
        if (typeof qapos25Flow !== 'function') {
            throw new Error('QAPOS25Flow no es un constructor. Revisa module.exports del Flow.');
        }

        // Instancia de Page Objects

        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        holdPage = new DineInPaymentPageHold();
        fireschedulePage = new FireSchedulePage();

        // Instancia explícita del Flow
        qapos25 = new qapos25Flow(
            menuPage,
            paymentPage,
            holdPage,
            fireschedulePage
        );
    });

    it('Fire: Crear check con varios items Click en item Click en fire', async function () {
        try {
            // ------------------------------
            // Ejecuta el flujo funcional completo (pasos 1 a 4)
            // ------------------------------
            await qapos25.execute();
            await qapos25.execute();

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