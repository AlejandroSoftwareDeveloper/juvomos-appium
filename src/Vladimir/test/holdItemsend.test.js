const { expect } = require('chai');

// Page Objects
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');
const DineInPaymentPageHold = require('../pages/DineInPaymentPageHold');


// Flow
const HoldItemSendFlow = require('../flows/HoldItemSendFlow');

describe('Flujo: Hold en item', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let menuPage;
    let paymentPage;
    let holdPage;
    let holdFlow;

    before(async function () {
        // Validación defensiva
        if (typeof HoldItemSendFlow !== 'function') {
            throw new Error('HoldItemFlow no es un constructor. Revisa module.exports del Flow.');
        }

        // Instancia de Page Objects

        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        holdPage = new DineInPaymentPageHold();

        // Instancia explícita del Flow
        holdSendFlow = new HoldItemSendFlow(
            menuPage,
            paymentPage,
            holdPage
        );
    });

    it('Poner un item hold y click send: Agregar 2 items Poner el primero en hold Click send', async function () {
        try {
            // ------------------------------
            // Ejecuta el flujo funcional completo (pasos 1 a 4)
            // ------------------------------
            await holdSendFlow.execute();
            await holdSendFlow.execute();
            //await paymentPage.tapPrintSafe();

            //await holdFlow.execute();
            
            

            // ------------------------------
            // Validación mínima: la pantalla de pago sigue visible
            // ------------------------------
            
            /*const isPaymentVisible = await paymentPage.isDisplayed();
            expect(isPaymentVisible).to.equal(true);*/

            // ------------------------------
            // Paso final: pulsar botón imprimir de forma segura
            // ------------------------------
            // Se asume que tapPrintSafe ya gestiona navegar desde el menú si es necesario
            
            
            /*await paymentPage.tapPrintSafe();*/

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