const BasePage = require('./BasePage');

/**
 * Pantalla: Payment Complete / Ajustar pago
 * Responsabilidad: Interacciones y validación de visibilidad de la pantalla de pago completado
 */
class PaymentCompletePage extends BasePage {
    constructor() {
        super();

        // ===== Elemento ancla =====
        this.anchor = 'com.juvomos.pos:id/layout_payment_complete_principal';

        // ===== Botones principales =====
        this.backToPaymentButton = 'com.juvomos.pos:id/btnBackToPayment';
        this.printButton = 'com.juvomos.pos:id/btnPrint';
        this.noPrintButton = 'com.juvomos.pos:id/btnNoPrint';
        this.sendEmailButton = 'com.juvomos.pos:id/layout_sendEmail';

        // ===== Campos informativos =====
        this.ticketNumber = 'com.juvomos.pos:id/invoiceTicketNumber';
        this.orderTotalText = 'com.juvomos.pos:id/orderTotalText';
        this.orderAmount = 'com.juvomos.pos:id/orderAmount';
        this.changeText = 'com.juvomos.pos:id/changeText';
        this.changeAmount = 'com.juvomos.pos:id/changeAmount';
    }

    /**
     * Verifica si la pantalla está visible
     * NO debe lanzar excepción
     */
    async isDisplayed() {
        return await this.isDisplayedElement(this.anchor);
    }

    // ===== Acciones básicas =====
    
    async tapBackToPayment() {
        return await this.click(this.backToPaymentButton);
    }

    async tapPrint() {
        return await this.click(this.printButton);
    }

    async tapNoPrint() {
        return await this.click(this.noPrintButton);
    }

    async tapSendEmail() {
        return await this.click(this.sendEmailButton);
    }

    // ===== Lectura de información =====

    async getTicketNumber() {
        return await this.getText(this.ticketNumber);
    }

    async getOrderTotal() {
        return await this.getText(this.orderAmount);
    }

    async getChangeAmount() {
        return await this.getText(this.changeAmount);
    }
}

module.exports = PaymentCompletePage;