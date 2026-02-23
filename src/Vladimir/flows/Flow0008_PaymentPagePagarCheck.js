class Flow0008_PaymentPagePagarCheck {
    constructor(paymentPage) {
        this.paymentPage = paymentPage;
    }

    async executeflow() {
        const driver = await this.paymentPage.getDriver();

        // Espera hasta que el botón Pay exista y sea visible
        const payButton = await driver.$('id=com.juvomos.pos:id/idPayButton');

        const exists = await payButton.waitForExist({ timeout: 20000 }).catch(() => false);
        const visible = exists ? await payButton.isDisplayed() : false;

        if (!visible) {
            throw new Error('Pantalla de pago no visible después de esperar 20s');
        }

        await payButton.click();
        return true;
    }
}

module.exports = Flow0008_PaymentPagePagarCheck;