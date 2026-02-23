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
        this.ticketItem = 'com.juvomos.pos:id/ticketItem'; // <-- debe ser string
        this.btnOpcionesCuenta = 'com.juvomos.pos:id/btnOpcionesCuenta';
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
        const driver = await this.getDriver();
        const splitBtn = await driver.$(
            'id=com.juvomos.pos:id/idSplitButton'
        );

        await splitBtn.waitForDisplayed({ timeout: 10000 });
        await splitBtn.click();
    }

    async tapSplitSafe() {
        const driver = await this.getDriver();
        try {
            const splitBtn = await driver.$('id=com.juvomos.pos:id/idSplitButton');
            if (!(await splitBtn.isDisplayed())) {
                console.log("Split no disponible → orden vacía, flujo seguro");
                return false;
            }
            await splitBtn.click();
            return true;
        } catch {
            console.log("SplitButton no encontrado, flujo seguro");
            return false;
        }
    }

    async isSplitButtonVisible(timeout = 5000) {
        const driver = await this.getDriver();
        try {
            const splitBtn = await driver.$('id=com.juvomos.pos:id/idSplitButton');
            return await splitBtn.isDisplayed({ timeout });
        } catch {
            // Si no existe o no está visible
            return false;
        }
}

    // ===== Nuevo método: seleccionar primer producto del ticket =====
    /*
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
*/
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
    /*
     async tapOpcionesCuenta() {
        // Validar que el selector es correcto
        if (!this.ticketItem || typeof this.ticketItem !== 'string') {
            throw new Error('ticketItem no está definido o no es un string válido');
        }

        const tickets = await $$(this.ticketItem);  // WDIO nativo $$ recibe string
        if (!tickets || tickets.length === 0) {
            throw new Error('No se encontró ningún ticket disponible para abrir opciones de la cuenta');
        }

        if (!(await tickets[0].isDisplayed())) {
            throw new Error('El ticket encontrado no está visible');
        }

        await tickets[0].click();
        await this.waitForElement(this.btnOpcionesCuenta);
        await this.click(this.btnOpcionesCuenta);
    }
}*/

    async tapOpcionesCuenta() {
        const driver = await this.getDriver();

        // Botón del ticket (primer elemento visible)
        const ticketButton = await driver.$('id=com.juvomos.pos:id/txtTicketNumber');

        // Verificar que el botón esté visible
        const visible = await ticketButton.isDisplayed().catch(() => false);
        if (!visible) {
            throw new Error('No se encontró ningún ticket disponible para abrir opciones de la cuenta');
        }

        await ticketButton.click();
        return true;
    }

    async isSplitVisibleSafe() {
        const driver = await this.getDriver();
        const el = await driver.$('id=com.juvomos.pos:id/idSplitButton');
        return await el.isExisting();
    }

}

module.exports = DineInPaymentPagePrueba;