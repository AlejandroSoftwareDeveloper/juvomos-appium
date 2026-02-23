const BasePage = require('./BasePage');

class ClockInPage extends BasePage {
    constructor() {
        super();
    }

    // ELEMENTO ANCLA: Texto "Volver al PIN"
    get txtBackToPin() {
        return this.driver.$('id=com.juvomos.pos:id/backToPinText');
    }

    // Nombre del empleado
    get txtEmployeeName() {
        return this.driver.$('id=com.juvomos.pos:id/employeeName');
    }

    // Botón Registrar entrada
    get btnClockIn() {
        return this.driver.$('id=com.juvomos.pos:id/clockInText');
    }

    // Botón Ver horas trabajadas
    get btnViewHours() {
        return this.driver.$('id=com.juvomos.pos:id/viewHoursText');
    }

    // Validar visibilidad de la pantalla
    async isPageDisplayed() {
        return await this.isDisplayed(await this.txtBackToPin);
    }
}

module.exports = ClockInPage;