const BasePage = require('./BasePage');

class FireSchedulePage extends BasePage {
    constructor() {
        super();

        // Elemento ancla: título visible de la pantalla "Enviar a cocina"
        this.anchorSelector = 'com.juvomos.pos:id/fireTitle';
    }

    /**
     * Verifica que la pantalla Enviar a cocina esté visible
     */
    async isDisplayed() {
        return await this.isDisplayedElement(this.anchorSelector);
    }

    /**
     * Cierra la pantalla de Fire (botón X)
     * XML: btnCloseFire
     */
    async tapClose() {
        await this.click('com.juvomos.pos:id/btnCloseFire');
    }

    /**
     * Selecciona Fire a 15 minutos
     * XML: btnFireOne
     */
    async selectFire15Min() {
        await this.click('com.juvomos.pos:id/btnFireOne');
    }

    /**
     * Selecciona Fire a 20 minutos
     * XML: btnFireTwo
     */
    async selectFire20Min() {
        await this.click('com.juvomos.pos:id/btnFireTwo');
    }

    /**
     * Selecciona Fire a 30 minutos
     * XML: btnFireThree
     */
    async selectFire30Min() {
        await this.click('com.juvomos.pos:id/btnFireThree');
    }

    /**
     * Envía el item de forma inmediata a cocina
     * XML: btnFireNow
     */
    async tapFireNow() {
        await this.click('com.juvomos.pos:id/btnFireNow');
    }

    /**
     * Aplica el Fire seleccionado
     * XML: btnApplyFire
     */
    async tapApplyFire() {
        await this.click('com.juvomos.pos:id/btnApplyFire');
    }
}

module.exports = FireSchedulePage;