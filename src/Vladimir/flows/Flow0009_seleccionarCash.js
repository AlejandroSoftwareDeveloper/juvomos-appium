class Flow0009_seleccionarCash {
    constructor(paymentCashoCreditPage) {
        this.paymentCashoCreditPage = paymentCashoCreditPage;
    }

    async executeflow() {
        const driver = await this.paymentCashoCreditPage.getDriver();

        // Espera hasta que la pantalla de pago esté visible
        const anchorSelector = '//*[@resource-id="com.juvomos.pos:id/paymentMethodsRecycler"]';
        const anchor = await driver.$(anchorSelector);
        const exists = await anchor.waitForExist({ timeout: 20000 }).catch(() => false);

        if (!exists) {
            throw new Error('Pantalla de selección de método de pago no visible después de esperar 20s');
        }

        // Espera y selecciona método de pago CASH
        const cashSelector = '//*[@resource-id="com.juvomos.pos:id/paymentName" and @text="Cash"]';
        const cashButton = await driver.$(cashSelector);

        const cashExists = await cashButton.waitForExist({ timeout: 15000 }).catch(() => false);
        const cashVisible = cashExists ? await cashButton.isDisplayed() : false;

        if (!cashVisible) {
            throw new Error('Botón de pago Cash no encontrado o no visible');
        }

        await cashButton.click();
        return true; // Flujo completado correctamente
    }
}

module.exports = Flow0009_seleccionarCash;