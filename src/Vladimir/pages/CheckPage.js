const BasePage = require('./BasePage');

class CheckPage extends BasePage {
    constructor() {
        super();

        // ------------------------------
        // ELEMENTO ANCLA
        // Recycler principal de tickets: garantiza que la pantalla de cuenta está cargada
        // ------------------------------
        this.anchorSelector = 'idTicketListRecycler';

        // ------------------------------
        // Información de la cuenta
        // ------------------------------
        this.ticketNumberButton = 'txtTicketNumber';      // Botón con número de cuenta
        this.orderTypeButton = 'textOrderType';          // "Dine In"
        this.employeeButton = 'ticketEmployeeName';      // Empleado asignado
        this.customerButton = 'ticketCustomerName';      // Cliente
        this.tableButton = 'ticketTable';                // Mesa #
        this.guestsButton = 'guestsNumber';             // # Personas

        // ------------------------------
        // Acciones sobre items
        // ------------------------------
        this.firstItemHold = 'imageHold';                // Icono Hold
        this.firstItemSend = 'imageSend';                // Icono Send

        // ------------------------------
        // Acciones de cuenta
        // ------------------------------
        this.changeTableButton = 'btnChangedTable';     // Cambiar mesa
        this.transferAccountButton = 'btnTransfer';     // Transferir cuenta

        // ------------------------------
        // Acciones generales
        // ------------------------------
        this.recallButton = 'btnRecall';                // Abrir cuenta
        this.printButton = 'btnPrintCheckRecall';       // Imprimir
        this.payButton = 'btnPayRecall';                // Pagar
    }

    // ------------------------------
    // Validaciones de pantalla
    // ------------------------------
    async isDisplayed() {
        return await this.isDisplayedElement(this.anchorSelector);
    }

    // ------------------------------
    // Información de la cuenta
    // ------------------------------
    async getTicketNumber() {
        return await this.getText(this.ticketNumberButton);
    }

    async getOrderType() {
        return await this.getText(this.orderTypeButton);
    }

    async getTableText() {
        return await this.getText(this.tableButton);
    }

    async getGuestsText() {
        return await this.getText(this.guestsButton);
    }

    async getEmployeeName() {
        return await this.getText(this.employeeButton);
    }

    async getCustomerName() {
        return await this.getText(this.customerButton);
    }

    // ------------------------------
    // Acciones sobre items
    // ------------------------------
    async tapFirstItemHold() {
        await this.click(this.firstItemHold);
    }

    async tapFirstItemSend() {
        await this.click(this.firstItemSend);
    }

    // ------------------------------
    // Acciones sobre la cuenta
    // ------------------------------
    async tapChangeTable() {
        await this.click(this.changeTableButton);
    }

    async tapTransferAccount() {
        await this.click(this.transferAccountButton);
    }

    // ------------------------------
    // Acciones generales
    // ------------------------------
    async tapRecall() {
        await this.click(this.recallButton);
    }

    async tapPrint() {
        await this.click(this.printButton);
    }

    async tapPay() {
        await this.click(this.payButton);
    }
}

module.exports = CheckPage;