const { expect } = require('chai');

// Page Objects
const DineInPage = require('../pages/DineInPage.js');
const TableOccupantsNewPage = require('../pages/TableOccupantsNewPage.js');
const DineInMenuPage = require('../pages/DineInMenuPage.js');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba.js');
const SplitCheckPage = require('../pages/SplitCheckPage.js');



// Flow
const QAPOS15Flow = require('../flows/QAPOS15Flow.js');

describe('Flujo: Crear check split', function () {
    this.retries(1); // Reintento simple ante fallo transitorio

    let dineInPage;
    let tableoccupantsPage;
    let menuPage;
    let paymentPage;
    let splitcheckPage;
    let qapos15;

    before(async function () {
        if (typeof QAPOS15Flow !== 'function') {
            throw new Error('QAPOS15Flow no es un constructor');
        }

        // Instancias reales (NO usar this.)
        dineInPage = new DineInPage();
        tableoccupantsPage = new TableOccupantsNewPage();
        menuPage = new DineInMenuPage();
        paymentPage = new DineInPaymentPagePrueba();
        splitcheckPage = new SplitCheckPage();

        qapos15 = new QAPOS15Flow(
            dineInPage,
            tableoccupantsPage,
            menuPage,
            paymentPage,
            splitcheckPage
        );
    });

    it('Preparar mesa y abrir orden', async function () {
        try {
            // Ejecuta solo la preparación de mesa y selección de menú
            await qapos15.execute(1, 1);
            console.log('Mesa seleccionada y orden abierta correctamente');
        } catch (error) {
            await captureScreenshot(menuPage);
            throw error;
        }
    });

    it('Validar que Split y Done no existen con orden vacía', async function () {
        try {
            // Ejecuta la parte de validación del flujo
            await qapos15.execute(1, 1);
        } catch (error) {
            await captureScreenshot(menuPage);
            throw error;
        }
    });

    async function captureScreenshot(page) {
        try {
            const driver = await page.getDriver();
            const timestamp = new Date().toISOString().replace(/:/g, '-');
            await driver.saveScreenshot(`./screenshots/failure_${timestamp}.png`);
        } catch (screenshotError) {
            console.warn('No se pudo capturar screenshot: UiAutomator2 no está activo');
        }
    }

/*
    it('Crear check split: Click en split con orden vacia Click en add check Click done', async function () {
        try {
            await qapos15.execute(1, 1);
            await qapos15.execute(1, 1);
            console.log('Botón de split pulsado correctamente');

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
    });*/
});