const { expect } = require('chai');

// Page Objects
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const DineInPaymentPageHold = require('../pages/DineInPaymentPageHold');


// Flow
const qapos21Flow = require('../flows/QAPOS21Flow');

describe('Flujo: Quitar hold a check', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let menuPage;
    let paymentPage;
    let holdPage;
    let qapos21;

    before(async function () {
        // Validación defensiva
        if (typeof qapos21Flow !== 'function') {
            throw new Error('QAPOS21Flow no es un constructor. Revisa module.exports del Flow.');
        }

        // Instancia de Page Objects

        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        holdPage = new DineInPaymentPageHold();

        // Instancia explícita del Flow
        qapos21 = new qapos21Flow(
            menuPage,
            paymentPage,
            holdPage
        );
    });

    it('Quitar hold a check: Agregar 2 items Poner el check en Hold Click print Quitar el hold del check Click print', async function () {
        try {
            await qapos21.execute();
            await qapos21.execute(); 

            console.log('Botón de imprimir pulsado correctamente');

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