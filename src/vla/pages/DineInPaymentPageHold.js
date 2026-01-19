const BasePage = require('./BasePage');

class DineInPaymentPageHold extends BasePage {
    constructor() {
        super();

        // Elemento ancla: panel de opciones del item
        this.anchorSelector = 'itemOptions';
    }

    /**
     * Verifica que la pantalla de opciones del item esté visible
     */
    async isDisplayed() {
        return await this.isDisplayedElement(this.anchorSelector);
    }

    /**
     * Selecciona el primer item del ticket (cuenta abierta)
     * Basado en XML: idQuantityInItem
     */
    async selectFirstItemFromTicket() {
        const driver = await this.getDriver();

        // Selector del primer item del ticket
        const firstItemSelector =
            '//*[@resource-id="com.juvomos.pos:id/idQuantityInItem"]';

        const itemEl = await driver.$(firstItemSelector);
        await itemEl.waitForDisplayed({ timeout: 15000 });
        await itemEl.click();
    }

    /**
     * Pone en espera (Hold) el item seleccionado
     * Basado en XML: btnHolItem
     */
    async tapHoldItem() {
        const holdButtonSelector = 'btnHolItem';

        // Click seguro usando BasePage
        await this.click(holdButtonSelector);
    }
}

module.exports = DineInPaymentPageHold;