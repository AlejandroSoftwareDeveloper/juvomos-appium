class Flow0016_SplitCuentaEnTres {
    constructor(splitKeyboardPage) {
        this.splitKeyboardPage = splitKeyboardPage;
    }

    async executeflow() {
        const driver = await this.splitKeyboardPage.getDriver();

        // ===== Ancla REAL del teclado (contenedor, no texto) =====
        const splitKeyboardContainer = await driver.$(
            'id=com.juvomos.pos:id/splitKeyboardContainer'
        );

        // ===== Espera segura (no lanza excepción) =====
        const exists = await splitKeyboardContainer
            .waitForExist({ timeout: 20000 })
            .then(() => true)
            .catch(() => false);

        if (!exists) {
            return false; // NO romper sesión
        }

        const visible = await splitKeyboardContainer
            .isDisplayed()
            .then(v => v)
            .catch(() => false);

        if (!visible) {
            return false;
        }

        // ===== Acción =====
        const entered = await this.splitKeyboardPage
            .enterSplitQuantity('3')
            .then(() => true)
            .catch(() => false);

        if (!entered) {
            return false;
        }

        const confirmed = await this.splitKeyboardPage
            .confirmSplit()
            .then(() => true)
            .catch(() => false);

        return confirmed;
    }
}

module.exports = Flow0016_SplitCuentaEnTres;