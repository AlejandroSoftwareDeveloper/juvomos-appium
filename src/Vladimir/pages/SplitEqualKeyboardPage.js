const BasePage = require('./BasePage');

class SplitEqualKeyboardPage extends BasePage {
    constructor() {
        super();

        // Elemento ancla: título visible del teclado de split
        this.anchorSelector = 'txtTitleSplitKeyboard';
    }

    /**
     * Verifica que el teclado de split esté visible
     */
    async isDisplayed() {
        return await this.isDisplayedElement(this.anchorSelector);
    }

    /**
     * Incrementa la cantidad de split usando el botón +
     */
    async increaseQuantity() {
        await this.click('quantityPlusSplit');
    }

    /**
     * Decrementa la cantidad de split usando el botón -
     */
    async decreaseQuantity() {
        await this.click('quantityLessSplit');
    }

    /**
     * Ingresa un número usando el teclado numérico
     * @param {string} number Ej: '2', '10'
     */
    async enterSplitQuantity(number) {
        const digits = number.toString().split('');

        for (const digit of digits) {
            await this.click(this.getDigitSelector(digit));
        }
    }

    /**
     * Confirma el split equitativo
     */
    async confirmSplit() {
        await this.click('check_pin');
    }

    /**
     * Cierra el teclado de split sin confirmar
     */
    async close() {
        await this.click('btnCloseSplitKeyboard');
    }

    /**
     * Mapea dígitos a selectores
     */
    getDigitSelector(digit) {
        const map = {
            '0': 'zero_btn_pin',
            '1': 'one_btn_pin',
            '2': 'two_btn_pin',
            '3': 'three_btn_pin',
            '4': 'four_btn_pin',
            '5': 'five_btn_pin',
            '6': 'six_btn_pin',
            '7': 'seven_btn_pin',
            '8': 'eight_btn_pin',
            '9': 'nine_btn_pin'
        };

        return map[digit];
    }
}

module.exports = SplitEqualKeyboardPage;