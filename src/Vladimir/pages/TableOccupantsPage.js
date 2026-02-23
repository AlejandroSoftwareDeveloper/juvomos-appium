const BasePage = require('./BasePage');

class TableOccupantsPage extends BasePage {
    constructor() {
        super();

        // Elemento ancla para validar que la pantalla está visible
        this.anchorSelector = 'selectedTable'; // TextView que indica el número de mesa

        // Layout del teclado numérico
        this.guestKeyboard = 'guestKeyboardNumeric';
        
        // Botón de confirmación (check)
        this.confirmButton = 'checkBigImage';
    }

    // Selecciona el número de ocupantes usando los botones del teclado
    async selectNumberOfOccupants(number) {
        const driver = await this.getDriver(); // <-- usar driver singleton

        // Si no se pasa un número, generamos aleatorio entre 1 y 4
        const occupants = number ?? Math.floor(Math.random() * 4) + 1;

        if (occupants < 1 || occupants > 4) {
            throw new Error('Número de ocupantes inválido, debe estar entre 1 y 4');
        }

        // Asegurarse de que el teclado está visible
        const keyboardVisible = await this.isDisplayedElement(this.guestKeyboard);
        if (!keyboardVisible) {
            throw new Error('Teclado de ocupantes no visible');
        }

        // Map de número a id de botón según XML
        const buttonMap = {
            1: 'one_btn_pin',
            2: 'two_btn_pin',
            3: 'three_btn_pin',
            4: 'four_btn_pin'
        };

        // Click en el botón correspondiente al número de ocupantes
        const keyboardElement = await driver.$(`//*[@resource-id="com.juvomos.pos:id/${this.guestKeyboard}"]`);
        const buttonSelector = `.//*[@resource-id="com.juvomos.pos:id/${buttonMap[occupants]}"]`;
        const buttonElement = await keyboardElement.$(buttonSelector);
        await buttonElement.click();
    }

    // Confirma la selección de ocupantes
    async confirmSelection() {
        await this.click(this.confirmButton);
    }

    // Verifica si la pantalla de ocupantes está visible
    async isDisplayed() {
        return await this.isDisplayedElement(this.anchorSelector);
    }
}

module.exports = TableOccupantsPage;