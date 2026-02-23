class Flow0011_ImprimirCheck {
    constructor(paymentPage) {
        this.paymentPage = paymentPage;
    }

    async executeflow() {
        const driver = await this.paymentPage.getDriver();

         // ===== Paso 1: Print =====
        // Espera hasta que el botón Print exista y sea visible
        const printButton = await driver.$('id=com.juvomos.pos:id/idPrintButton');

        const exists = await printButton
            .waitForExist({ timeout: 20000 })
            .catch(() => false);

        const visible = exists ? await printButton.isDisplayed() : false;

        if (!visible) {
            throw new Error('Botón Imprimir no visible después de esperar 20s');
        }

        await printButton.click();
        
        // ===== Paso 2: btnShowItem =====
        const showItemButton = await driver.$('id=com.juvomos.pos:id/btnShowItem');

        const showExists = await showItemButton
            .waitForExist({ timeout: 20000 })
            .catch(() => false);

        const showVisible = showExists ? await showItemButton.isDisplayed() : false;

        if (!showVisible) {
            throw new Error('Botón btnShowItem no visible después de esperar 20s');
        }

        await showItemButton.click();
        
        return true;

    }
}
module.exports = Flow0011_ImprimirCheck;