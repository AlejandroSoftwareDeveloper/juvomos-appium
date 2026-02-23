const BasePage = require('./BasePage');

class DineInPaymentPage extends BasePage {
    constructor() {
        super();

        // ELEMENTO ANCLA
        // Recycler del ticket: garantiza que la cuenta Dine In está cargada
        this.anchorSelector = 'idTicketListRecycler';

        // Información de la cuenta
        this.orderTypeLabel = 'textOrderType';      // "Dine In"
        this.tableLabel = 'ticketTable';            // "Mesa #X"
        this.guestsLabel = 'guestsNumber';          // "N Personas"

        // Acciones principales
        this.payButton = 'idPayButton';
        this.cancelButton = 'idCancelButton';
        this.printButton = 'idPrintButton';
        this.splitButton = 'idSplitButton';
        this.discountButton = 'idBtnDiscount';
    }

    // Verifica que estamos en la pantalla de pago Dine In
    async isDisplayed() {
        return await this.isDisplayedElement(this.anchorSelector);
    }

    // Validaciones de contexto
    async getOrderType() {
        return await this.getText(this.orderTypeLabel);
    }

    async getTableText() {
        return await this.getText(this.tableLabel);
    }

    async getGuestsText() {
        return await this.getText(this.guestsLabel);
    }

    // Acciones de pago
    async pay() {
        await this.click(this.payButton);
    }

    async cancel() {
        await this.click(this.cancelButton);
    }

    async print() {
        await this.click(this.printButton);
    }

    async splitBill() {
        await this.click(this.splitButton);
    }

    async applyDiscount() {
        await this.click(this.discountButton);
    }
    
    async isSplitButtonVisible() {
        const el = await this.driver.$(`id=${this.splitButton}`);
        return await el.isDisplayed().catch(() => false);
    }

    async tapSplitSafe() {
        const visible = await this.isSplitButtonVisible();
        if (!visible) {
            throw new Error('Botón Split no visible');
        }
        await this.splitBill();
    }

    async isSendButtonVisible() {
        const el = await this.driver.$(`id=${this.sendButton}`);
        return await el.isDisplayed().catch(() => false);
    }

    async tapSendOrderSafe() {
        const visible = await this.isSendButtonVisible();
        if (!visible) {
            throw new Error('No se puede enviar la orden: botón Send no visible');
        }
        await el.click();
    }



}

module.exports = DineInPaymentPage;