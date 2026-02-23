const { expect } = require('chai');

// Page Objects
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const DineInPaymentPageHold = require('../pages/DineInPaymentPageHold');
const OpenCheckOptionsPage = require('../pages/OpenCheckOptionsPage');
const FireSchedulePage = require('../pages/FireSchedulePage');

// Flow
const qapos27Flow = require('../flows/QAPOS27Flow');

describe('Flujo: Fire check', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let menuPage;
    let paymentPage;
    let holdPage;
    let fireschedulePage;
    let opencheckoptionsPage;
    let qapos27;

    before(async function () {
        // Validación defensiva
        if (typeof qapos27Flow !== 'function') {
            throw new Error('QAPOS27Flow no es un constructor. Revisa module.exports del Flow.');
        }

        // Instancia de Page Objects

        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        holdPage = new DineInPaymentPageHold();
        fireschedulePage = new FireSchedulePage();
        opencheckoptionsPage = new OpenCheckOptionsPage();

        // Instancia explícita del Flow
        qapos27 = new qapos27Flow(
            menuPage,
            paymentPage,
            holdPage,
            fireschedulePage,
            opencheckoptionsPage
        );
    });

    it('Fire check: Crear check con varios items Click en check options Click en fire', async function () {
        try {
            // ------------------------------
            // Ejecuta el flujo funcional completo (pasos 1 a 4)
            // ------------------------------
            await qapos27.execute();
            await qapos27.execute();

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