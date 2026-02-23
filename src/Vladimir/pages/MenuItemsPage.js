const BasePage = require('./BasePage');

class MenuItemsPage extends BasePage {
    constructor() {
        super();
    }

    // ELEMENTO ANCLA: Primer nombre de producto
    get firstProductName() {
        return this.driver.$('id=com.juvomos.pos:id/category_product_name');
    }

    // Precios
    get productPrices() {
        return this.driver.$$('id=com.juvomos.pos:id/item_price');
    }

    // Botones stock
    get btnStock() {
        return this.driver.$$('id=com.juvomos.pos:id/buttonStock');
    }

    // Botón mostrar orden
    get btnShowOrder() { return this.driver.$('id=com.juvomos.pos:id/btnShowOrder'); }

    // Validar visibilidad de la pantalla
    async isPageDisplayed() {
        return await this.isDisplayed(await this.firstProductName);
    }
}

module.exports = MenuItemsPage;