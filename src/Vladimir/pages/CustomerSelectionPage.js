const BasePage = require('./BasePage');

class CustomerSelectionPage extends BasePage {
    constructor() {
        super();
    }

    // ELEMENTO ANCLA: Texto "Seleccionar cliente"
    get txtSelectCustomer() {
        return this.driver.$('id=com.juvomos.pos:id/linearLayout32 > android.widget.TextView');
    }

    // Input búsqueda cliente
    get inputSearchCustomer() {
        return this.driver.$('id=com.juvomos.pos:id/editSearchCustomer');
    }

    // Botón cancelar
    get btnCancel() { return this.driver.$('id=com.juvomos.pos:id/closeCustomer'); }

    // Botón nuevo cliente
    get btnAddNewCustomer() { return this.driver.$('id=com.juvomos.pos:id/addNewCustomerText'); }

    // Validar visibilidad de la pantalla
    async isPageDisplayed() {
        return await this.isDisplayed(await this.inputSearchCustomer);
    }
}

module.exports = CustomerSelectionPage;