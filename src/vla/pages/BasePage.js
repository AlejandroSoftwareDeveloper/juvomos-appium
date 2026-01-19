
// Clase base para todas las páginas. Contiene métodos genéricos para interactuar con elementos.

const DriverSingleton = require('../singleton/Driver');

class BasePage {

    async getDriver() {
        return await DriverSingleton.getDriver();
    }

    // Detecta si es XPath o resource-id
    resolveSelector(selector) {
        if (selector.startsWith('//')) {
            return selector;          // XPath
        }
        return `id=${selector}`;      // resource-id
    }

    async click(selector) {
        const driver = await this.getDriver();
        const element = await driver.$(this.resolveSelector(selector));
        await element.click();
    }

    async type(selector, text) {
        const driver = await this.getDriver();
        const element = await driver.$(this.resolveSelector(selector));
        await element.setValue(text);
    }

    // NUNCA lanza error
    async isDisplayedElement(selector) {
        try {
            const driver = await this.getDriver();
            const element = await driver.$(this.resolveSelector(selector));
            return await element.isDisplayed();
        } catch {
            return false;
        }
    }

    async getText(selector) {
        const driver = await this.getDriver();
        const element = await driver.$(this.resolveSelector(selector));
        return await element.getText();
    }
}

module.exports = BasePage;