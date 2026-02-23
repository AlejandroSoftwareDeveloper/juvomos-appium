// Descripción: Test Mocha para verificar la disponibilidad de la mesa, ocuparla y crear un chech con iten y enviarlos usando el flow.

// Librerías necesarias
const { expect } = require('chai');
const fs = require('fs'); // para guardar screenshots

// Flow
const occupiedtablewithorderFlow = require('../flows/OccupiedTableWithOrderFlow');

describe('Flujo: Mesa ocuapda con orden', function () {
    this.retries(1); // Reintento simple ante fallo transitorio
    
    let occupiedtablewithorder;

    before(async function () {
        // Validación defensiva
        if (typeof occupiedtablewithorderFlow !== 'function') {
            throw new Error('OccupiedTableWithOrderFlow no es un constructor. Revisa module.exports del Flow.');
        }

       // Instancia explícita del Flow
       occupiedtablewithorder = new occupiedtablewithorderFlow();
    });

    it('Mesa ocuapda con orden: Seleccionar varios productos Clic en Deni In Clic en una de las mesas Seleccionar cantidad comenzales Enviar', async function () {
        try {
            // ------------------------------
            // Ejecuta el flujo funcional completo (pasos 1 a 4)
            // ------------------------------
            await occupiedtablewithorder.executeFlow(1, 1);
            await occupiedtablewithorder.executeFlow(1, 1);

            console.log('Botón de send pulsado correctamente');

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