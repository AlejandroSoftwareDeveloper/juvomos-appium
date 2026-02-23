const { expect } = require('chai');

// Page Objects
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const DineInPaymentPageHold = require('../pages/DineInPaymentPageHold');
const SplitCheckPage = require('../pages/SplitCheckPage');


// Flow
const qapos28Flow = require('../flows/QAPOS28Flow');

describe('Flujo: Split numero de check', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let menuPage;
    let paymentPage;
    let holdPage;
    let splitcheckPage;
    let qapos28;

    before(async function () {
        // Validación defensiva
        if (typeof qapos28Flow !== 'function') {
            throw new Error('QAPOS28Flow no es un constructor. Revisa module.exports del Flow.');
        }

        // Instancia de Page Objects

        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        holdPage = new DineInPaymentPageHold();
        splitcheckPage = new SplitCheckPage();

        // Instancia explícita del Flow
        qapos28 = new qapos28Flow(
            menuPage,
            paymentPage,
            holdPage,
            splitcheckPage
        );
    });

    it('Split numero de check: Crear check con 2 items. Click split. Agregar check. Asignar un item al check nuevo. Send Recall Split', async function () {
        try {
            // ------------------------------
            // Ejecuta el flujo funcional completo (pasos 1 a 4)
            // ------------------------------
            await qapos28.execute();
            await qapos28.execute();
            await qapos28.execute();
            

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