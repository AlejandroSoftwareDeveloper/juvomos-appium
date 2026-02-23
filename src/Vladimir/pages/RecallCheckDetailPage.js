const BasePage = require('./BasePage');

/**
 * Page Object: RecallCheckDetailPage
 * Representa la pantalla de detalle de una cuenta recuperada (Recall Check Detail).
 * Esta pantalla permite visualizar items, totales y ejecutar acciones Abrir / Imprimir / Pagar.
 */
class RecallCheckDetailPage extends BasePage {
    constructor() {
        super();

        /**
         * ELEMENTO ANCLA
         * Recycler principal del detalle del ticket.
         * Es exclusivo de esta pantalla y garantiza que el check ya fue abierto.
         */
        this.anchorSelector = 'id=com.juvomos.pos:id/idTicketListRecycler';

        /**
         * HEADER / INFORMACIÓN DE LA CUENTA
         */
        this.ticketNumber = 'id=com.juvomos.pos:id/txtTicketNumber';
        this.orderType = 'id=com.juvomos.pos:id/textOrderType';
        this.employeeName = 'id=com.juvomos.pos:id/ticketEmployeeName';
        this.customerName = 'id=com.juvomos.pos:id/ticketCustomerName';
        this.tableName = 'id=com.juvomos.pos:id/ticketTable';
        this.guestsNumber = 'id=com.juvomos.pos:id/guestsNumber';

        /**
         * LISTA DE ITEMS DEL TICKET
         */
        this.itemsRecycler = 'id=com.juvomos.pos:id/idTicketListRecycler';
        this.itemName = 'id=com.juvomos.pos:id/itemInvoiceName';
        this.itemQuantity = 'id=com.juvomos.pos:id/itemInvoiceQuantity';
        this.itemPrice = 'id=com.juvomos.pos:id/itemInvoicePrice';
        this.itemTotal = 'id=com.juvomos.pos:id/itemInvoiceTotal';
        this.itemHoldIcon = 'id=com.juvomos.pos:id/imageHold';

        /**
         * TOTALES
         */
        this.totalsRecycler = 'id=com.juvomos.pos:id/invoiceTotalRecycler';
        this.totalItemName = 'id=com.juvomos.pos:id/totalItemName';
        this.totalItemValue = 'id=com.juvomos.pos:id/totalItemValue';

        /**
         * BALANCE
         */
        this.balanceTitle = 'id=com.juvomos.pos:id/idTitleBalanceText';
        this.balanceValue = 'id=com.juvomos.pos:id/idValueBalanceText';

        /**
         * BOTONES DE ACCIÓN
         */
        this.openButton = 'id=com.juvomos.pos:id/btnRecall';
        this.printButton = 'id=com.juvomos.pos:id/btnPrintRecall';
        this.payButton = 'id=com.juvomos.pos:id/btnPayRecall';

        /**
         * CERRAR PANTALLA
         */
        this.closeButton = 'id=com.juvomos.pos:id/imgCloseButton';
    }

    /**
     * Verifica si la pantalla de detalle del check está visible.
     */
    async isDisplayed() {
        try {
            const driver = await this.getDriver();
            const anchor = await driver.$(this.anchorSelector);
            return await anchor.isDisplayed();
        } catch {
            return false;
        }
    }

    /**
     * Obtiene el número de cuenta visible (ej: Cuenta #29).
     */
    async getTicketNumber() {
        const driver = await this.getDriver();
        const el = await driver.$(this.ticketNumber);
        return await el.getText();
    }

    /**
     * Abre la cuenta (botón Abrir).
     */
    async tapOpen() {
        const driver = await this.getDriver();
        const btn = await driver.$(this.openButton);
        await btn.click();
    }

    /**
     * Imprime la cuenta.
     */
    async tapPrint() {
        const driver = await this.getDriver();
        const btn = await driver.$(this.printButton);
        await btn.click();
    }

    /**
     * Inicia el flujo de pago.
     */
    async tapPay() {
        const driver = await this.getDriver();
        const btn = await driver.$(this.payButton);
        await btn.click();
    }

    /**
     * Cierra la pantalla de detalle del check.
     */
    async close() {
        const driver = await this.getDriver();
        const btn = await driver.$(this.closeButton);
        await btn.click();
    }
}

module.exports = RecallCheckDetailPage;
