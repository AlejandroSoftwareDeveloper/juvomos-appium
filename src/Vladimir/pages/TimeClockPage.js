const BasePage = require('./BasePage');

class TimeClockPage extends BasePage {
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

    // Botones acciones
    get btnClockIn() { return this.driver.$('id=com.juvomos.pos:id/clockInText'); }
    get btnBreakIn() { return this.driver.$('id=com.juvomos.pos:id/breakInText'); }
    get btnClockOut() { return this.driver.$('id=com.juvomos.pos:id/clockOutText'); }
    get btnCashTips() { return this.driver.$('id=com.juvomos.pos:id/cashTipsImgText'); }

    // Validar visibilidad de la pantalla
    async isPageDisplayed() {
        return await this.isDisplayed(await this.txtBackToPin);
    }
}

module.exports = TimeClockPage;