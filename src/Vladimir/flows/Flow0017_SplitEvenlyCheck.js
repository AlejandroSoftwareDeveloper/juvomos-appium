class Flow0017_SplitEvenlyCheck {
    constructor(splitcheckPage) {
        this.splitcheckPage = splitcheckPage;
    }

    async executeflow() {
        /*
        const driver = await this.splitcheckPage.getDriver();

        // Espera hasta que el botón split exista y sea visible
        const spltEvenlyButton = await driver.$('id=com.juvomos.pos:id/btnSplitEvenly');

        const exists = await spltButton
            .waitForExist({ timeout: 20000 })
            .catch(() => false);

        const visible = exists ? await spltEvenlyButton.isDisplayed() : false;

        if (!visible) {
            throw new Error('Botón SplitEvenly no visible después de esperar 20s');
        }

        await spltEvenlyButton.click();
        return true;
        */
    
        
        const isSplitDisplayed = await this.splitcheckPage.isDisplayed();
        if (!isSplitDisplayed) {
            throw new Error('Pantalla Split Check no visible');
        }

        // 3. Presionar "Split Evenly" usando la Page
        await this.splitcheckPage.tapSplitEvenly();

        return true;

    }
}
module.exports = Flow0017_SplitEvenlyCheck;