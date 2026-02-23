class Flow0014_EnviarCheck {
    constructor(paymentPage) {
        this.paymentPage = paymentPage;
    }

    async executeflow() {
        const driver = await this.paymentPage.getDriver();

        // Esperar botón Send Order
        const sendOrderButton = await driver.$(
            'id=com.juvomos.pos:id/btnSendPointOfSale'
        );

        const exists = await sendOrderButton
            .waitForExist({ timeout: 20000 })
            .catch(() => false);

        const visible = exists
            ? await sendOrderButton.isDisplayed()
            : false;

        if (!visible) {
            throw new Error('Botón Send no visible después de esperar 20s');
        }

        await sendOrderButton.click();
        return true;
    }
}

module.exports = Flow0014_EnviarCheck;