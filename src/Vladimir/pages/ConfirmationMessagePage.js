//Clase para los elementos de la pantalla de:
//Añadido exitosamente cuando se inicia la sesion de trabajo

const BasePage = require('./BasePage');

class ConfirmationMessagePage extends BasePage {
    constructor() {
        super();
    }

    // ELEMENTO ANCLA: Título del mensaje
    get txtMessageTitle() {
        return this.driver.$('id=com.juvomos.pos:id/messageTitle');
    }

    // Detalle del mensaje
    get txtMessagePart1() {
        return this.driver.$('id=com.juvomos.pos:id/messagePart1');
    }

    // Botones
    get btnTimeClock() { return this.driver.$('id=com.juvomos.pos:id/btnTimeClock'); }
    get btnPos() { return this.driver.$('id=com.juvomos.pos:id/btnPos'); }

    // Validar visibilidad de la pantalla
    async isPageDisplayed() {
        return await this.isDisplayed(await this.txtMessageTitle);
    }
}

module.exports = ConfirmationMessagePage;