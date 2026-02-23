const BasePage = require('./BasePage');

class FloorPlanPage extends BasePage {
    constructor() {
        super();
    }

    // ELEMENTO ANCLA: Primer nombre de área (si existe)
    get firstAreaName() {
        return this.driver.$('id=com.juvomos.pos:id/tvNameArea');
    }

    // Mesas
    get tableNumbers() {
        return this.driver.$$('id=com.juvomos.pos:id/tableNumberValue');
    }

    get tableEmployeeNames() {
        return this.driver.$$('id=com.juvomos.pos:id/tableEmployeeName');
    }

    // Botón refrescar propina
    get btnRefreshFloor() { return this.driver.$('id=com.juvomos.pos:id/btnRefreshFloor'); }

    // Validar visibilidad de la pantalla
    async isPageDisplayed() {
        return await this.isDisplayed(await this.firstAreaName);
    }
}

module.exports = FloorPlanPage;