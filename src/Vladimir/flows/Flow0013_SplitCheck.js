class Flow0013_SplitCheck {
    constructor(paymentPage, splitcheckPage) {
        this.paymentPage = paymentPage;
        this.splitcheckPage = splitcheckPage;
    }

    async executeflow() {
        const driver = await this.paymentPage.getDriver();

        // Espera hasta que el botón split exista y sea visible
        const spltButton = await driver.$('id=com.juvomos.pos:id/idSplitButton');

        const exists = await spltButton
            .waitForExist({ timeout: 20000 })
            .catch(() => false);

        const visible = exists ? await spltButton.isDisplayed() : false;

        if (!visible) {
            throw new Error('Botón Imprimir no visible después de esperar 20s');
        }

        await spltButton.click();
        return true;
        
        
    
        /*
        const isSplitDisplayed = await this.splitCheckPage.isDisplayed();
        if (!isSplitDisplayed) {
            throw new Error('Pantalla Split Check no visible');
        }

        // 3. Presionar "Split Evenly" usando la Page
        await this.splitCheckPage.tapSplitEvenly();

        return true;*/

    }
}
module.exports = Flow0013_SplitCheck;