const BasePage = require('./BasePage');

class OrderRecallPage extends BasePage {
    constructor() {
        super();
    }

    // ELEMENTO ANCLA: Primer tipo de orden en filtro
    get firstOrderTypeFilter() {
        return this.driver.$('id=com.juvomos.pos:id/textOrderType');
    }

    // Plataformas
    get txtPosPlatform() { return this.driver.$('id=com.juvomos.pos:id/txtPosPlatformId'); }
    get txtOloPlatform() { return this.driver.$('id=com.juvomos.pos:id/txtOloPlatformId'); }

    // Recycler detalle de órdenes
    get orderDetails() {
        return this.driver.$$('id=com.juvomos.pos:id/check_detail_recycler');
    }

    // Botón refrescar recall
    get btnRefreshRecall() { return this.driver.$('id=com.juvomos.pos:id/btnRefreshRecall'); }

    // Validar visibilidad de la pantalla
    async isPageDisplayed() {
        return await this.isDisplayed(await this.firstOrderTypeFilter);
    }
}

module.exports = OrderRecallPage;