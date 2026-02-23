class Flow0012_ImprimirCheck {
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
        
        return true;

    }
}
module.exports = Flow0012_ImprimirCheck;