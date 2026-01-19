const BasePage = require('./BasePage');

class DineInPaymentPagePrueba extends BasePage {
    constructor(driver) {
        super(driver);

        // ===== Elemento ancla =====
        // Define de forma inequívoca que esta pantalla está visible
        this.payButton = 'id=com.juvomos.pos:id/idPayButton';

        // ===== Elementos relevantes =====
        this.cancelButton = 'id=com.juvomos.pos:id/idCancelButton';
        this.sendButton = 'id=com.juvomos.pos:id/btnSendPointOfSale';
        this.printButton = 'id=com.juvomos.pos:id/idPrintButton';
        this.discountButton = 'id=com.juvomos.pos:id/idBtnDiscount';
        this.splitButton = 'id=com.juvomos.pos:id/idSplitButton';

        // ===== Lista de productos en el ticket =====
        this.ticketItemsRecycler = 'id=com.juvomos.pos:id/idTicketListRecycler';
        this.ticketItemContainer = 'id=com.juvomos.pos:id/linearLayout23';
    }

    /**
     * Verifica si la pantalla está visible.
     * Regla del proyecto: nunca debe lanzar excepción.
     */
    async isDisplayed() {
        try {
            const element = await this.driver.$(this.payButton);
            return await element.isDisplayed();
        } catch (error) {
            return false;
        }
    }

    // ===== Acciones básicas =====
    async tapPay() {
        await this.driver.$(this.payButton).click();
    }

    async tapCancel() {
        await this.driver.$(this.cancelButton).click();
    }

    async tapSendOrder() {
        await this.driver.$(this.sendButton).click();
    }

    async tapPrintSafe() {
        const driver = await this.getDriver();
        const printButton = await driver.$(this.printButton);
        const visible = await printButton.isDisplayed().catch(() => false);
        if (!visible) {
            return false; // no forzar navegación aquí
        }

        await printButton.click();
        return true;
    }

    async tapSendOrderSafe() {
        const driver = await this.getDriver();
        const sendButton = await driver.$(this.sendButton);
        const visible = await sendButton.isDisplayed().catch(() => false);
        if (!visible) {
            throw new Error('No se puede enviar la orden: botón Send no visible');
        }

        await sendButton.click();
        return true;
    }


    async tapDiscount() {
        await this.driver.$(this.discountButton).click();
    }

    async tapSplit() {
        await this.driver.$(this.splitButton).click();
    }

    // ===== Nuevo método: seleccionar primer producto del ticket =====
    async selectFirstItemFromTicket() {
        const driver = await this.getDriver();

        // Espera que el RecyclerView del ticket esté presente
        const recycler = await driver.$(this.ticketItemsRecycler);
        await recycler.waitForExist({ timeout: 10000 });

        // Obtiene todos los contenedores de productos dentro del ticket
        const items = await recycler.$$(this.ticketItemContainer);

        if (!items || items.length === 0) {
            throw new Error('No hay productos en el ticket para seleccionar');
        }

        // Selecciona el primer producto
        await items[0].click();
    }

    async selectFirstItemFromTicket() {
        const driver = await this.getDriver();

        // Espera que el RecyclerView del ticket esté presente
        const recycler = await driver.$(this.ticketItemsRecycler);
        await recycler.waitForExist({ timeout: 10000 });

        // Obtiene todos los contenedores de productos dentro del ticket
        const items = await recycler.$$(this.ticketItemContainer);

        if (!items || items.length === 0) {
            throw new Error('No hay productos en el ticket para seleccionar');
        }

        // Selecciona el primer producto
        await items[0].click();
    }

    async selectItemFromTicketByName(productName) {
        const driver = await this.getDriver();

        // Espera el RecyclerView del ticket
        const recycler = await driver.$(this.ticketItemsRecycler);
        await recycler.waitForExist({ timeout: 10000 });

        // Todos los contenedores de ítems
        const items = await recycler.$$(this.ticketItemContainer);

        if (!items || items.length === 0) {
            throw new Error('No hay productos en el ticket');
        }

        for (const item of items) {
            // Nombre del producto dentro del item
            const nameElement = await item.$(
            'id=com.juvomos.pos:id/itemInvoiceName'
        );

        const text = await nameElement.getText();

        if (text.trim() === productName) {
            await item.click();
            return true;
        }
    }

    throw new Error(`Producto no encontrado en el ticket: ${productName}`);
}
}

module.exports = DineInPaymentPagePrueba;