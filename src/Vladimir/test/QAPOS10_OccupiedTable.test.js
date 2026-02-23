// Descripción: Test Mocha para verificar la disponibilidad de la mesa usando el flow.

// Librerías necesarias
const { expect } = require('chai'); // assertions mínimas
const fs = require('fs'); // para guardar screenshots

// Importamos nuestro DriverSingleton (gestión única del driver)
const DriverSingleton = require('../singleton/Driver');

// Importamos el flujo que vamos a probar
const OccupiedTableFlow = require('../flows/OccupiedTableFlow');

describe('Flujo: Mesa ocupada sin orden', function () {
    this.timeout(60000); // timeout extendido para Appium

    let driver; // instancia del driver
    let flow;   // instancia del flujo

    // Antes de ejecutar los tests
    before(async () => {
        // Obtiene la instancia única del driver
        driver = await DriverSingleton.getDriver();
        // Inicializa el flow con el driver
        flow = new OccupiedTableFlow(driver);
    });

    // Test principal del flujo
    it('Debe permitir seleccionar nuevamente la misma mesa sin pedido', async () => {
        try {
            // Ejecuta todos los pasos del flujo definido en OccupiedTableFlow
            await flow.executeFlow();

            // Validación mínima: verificar que la página DineIn está visible
            const isVisible = await flow.dineInPage.isDisplayed();
            expect(isVisible).to.be.true;

        } catch (err) {
            // Captura screenshot solo en caso de fallo
            const screenshot = await driver.takeScreenshot();
            fs.writeFileSync('./screenshots/fail_occupiedTable.png', screenshot, 'base64');

            // Relanza el error para que Mocha registre la falla
            throw err;
        }
    });

    // Después de los tests: opcional cerrar driver si deseas limpiar
    after(async () => {
        // await driver.deleteSession(); // Descomentar si quieres cerrar Appium al final
    });
});