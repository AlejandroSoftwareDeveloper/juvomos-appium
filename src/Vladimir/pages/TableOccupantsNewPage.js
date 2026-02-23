const BasePage = require('./BasePage');

class TableOccupantsNewPage extends BasePage {
    constructor() {
        super();

        this.anchorSelector = 'selectedTable';
        this.guestKeyboard = 'guestKeyboardNumeric';
        this.confirmButton = 'checkBigImage';
    }

    async selectNumberOfOccupants(number) {
        const occupants = number ?? Math.floor(Math.random() * 4) + 1;
        if (occupants < 1 || occupants > 4) {
            throw new Error('Número de ocupantes inválido, debe estar entre 1 y 4');
        }

        const driver = await this.getDriver();

        const keyboardElement = await driver.$(`//*[@resource-id="com.juvomos.pos:id/${this.guestKeyboard}"]`);

        await keyboardElement.waitForExist({ timeout: 15000 });

        const buttonMap = {
            1: 'one_btn_pin',
            2: 'two_btn_pin',
            3: 'three_btn_pin',
            4: 'four_btn_pin'
        };

        const buttonElement = await keyboardElement.$(`.//*[@resource-id="com.juvomos.pos:id/${buttonMap[occupants]}"]`);

        await buttonElement.waitForExist({ timeout: 10000 });
        await buttonElement.click();
    }

    async confirmSelection() {
        const driver = await this.getDriver();

        const confirmEl = await driver.$(`//*[@resource-id="com.juvomos.pos:id/${this.confirmButton}"]`);

        await confirmEl.waitForExist({ timeout: 10000 });
        await confirmEl.click();
    }

    async isDisplayed() {
        return await this.isDisplayedElement(this.anchorSelector);
    }
}

module.exports = TableOccupantsNewPage;