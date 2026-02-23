const BasePage = require('./BasePage');

class OrderTypePage extends BasePage {
    constructor() {
        super();
    }

    // ELEMENTO ANCLA: Texto "Tipo de orden"
    get txtOrderTypeTitle() {
        return this.driver.$('id=com.juvomos.pos:id/messageTitle');
    }

    // Subtítulo
    get txtOrderTypeSubtitle() {
        return this.driver.$('id=com.juvomos.pos:id/messageSubTitle');
    }

    // Botones tipo de orden
    get btnOpen() { return this.driver.$('id=com.juvomos.pos:id/btnOrderRecall'); }

    // Nombres de tipos de orden
    get orderTypes() {
        return this.driver.$$('id=com.juvomos.pos:id/orderTypeName');
    }

    // Botón cerrar
    get btnClose() { return this.driver.$('id=com.juvomos.pos:id/imgCloseButton'); }

    // Validar visibilidad de la pantalla
    async isPageDisplayed() {
        return await this.isDisplayed(await this.txtOrderTypeTitle);
    }

    async tapOpenSafe() {
        try {
            // Verifica que esta pantalla esté activa
            const isVisible = await this.isPageDisplayed().catch(() => false);
            if (!isVisible) {
                return false;
            }

            const button = await this.btnOpen;
            const exists = await button.isExisting();

            if (!exists) {
                return false;
            }

            await button.click();
            return true;
        } catch {
            return false;
        }
    }
    
    async tapOpen() {
        try {
            const driver = await this.getDriver();

            // Validar pantalla activa por elemento ancla
            const anchor = await driver.$('id=com.juvomos.pos:id/messageTitle');
            const isVisible = await anchor.isDisplayed().catch(() => false);

            if (!isVisible) {
                return false;
            }

            // Botón Abrir real según XML
            const btnOpen = await driver.$('id=com.juvomos.pos:id/btnOrderRecall');
            const exists = await btnOpen.isExisting();

            if (!exists) {
                return false;
            }

            await btnOpen.click();
            return true;
        } catch {
            return false;
        }
    }



}

module.exports = OrderTypePage;