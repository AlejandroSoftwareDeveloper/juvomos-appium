const BasePage = require('./BasePage');

/**
 * Pantalla: Pago en efectivo o crédito
 * Responsabilidad: Interacciones y validación de visibilidad
 */
class PaymentCashoCreditPage extends BasePage {
    constructor() {
        super();

        // ===== Elemento ancla =====
        this.anchor = 'paymentMethodsRecycler';

        // ===== Botones principales =====
        this.splitPaymentButton = 'btnSplitPayment';
        this.closePaymentButton = 'imgCloseButton';

        // ===== Balance =====
        this.balanceDueValue = 'balanceDueValue';

        // ===== Fast cash =====
        this.fastPay1 = 'fastPay1';
        this.fastPay2 = 'fastPay2';
        this.fastPay3 = 'fastPay3';
    }

    /**
     * Verifica si la pantalla está visible.
     * NUNCA lanza error.
     */
    async isDisplayed() {
        return await this.isDisplayedElement(this.anchor);
    }

    /**
     * Devuelve el saldo pendiente o null si no se puede leer.
     */
    async getBalanceDue() {
        return await this.getText(this.balanceDueValue).catch(() => null);
    }

    /**
     * Selecciona pago rápido (1, 2 o 3) de manera segura.
     */
    async selectFastCash(index) {
        const map = { 1: this.fastPay1, 2: this.fastPay2, 3: this.fastPay3 };
        const selector = map[index];
        if (!selector) return false;

        return await this.click(selector)
            .then(() => true)
            .catch(() => false);
    }

    /**
     * Selecciona método de pago por nombre visible.
     */
    async selectPaymentMethodByName(name) {
        const driver = await this.getDriver();
        const xpath = `//*[@resource-id="com.juvomos.pos:id/paymentName" and @text="${name}"]`;
        const el = await driver.$(xpath);

        if (!(await el.isExisting().catch(() => false))) return false;

        await el.click();
        return true;
    }

    /**
     * Cierra la pantalla de pago.
     */
    async closePayment() {
        return await this.click(this.closePaymentButton);
    }
}

module.exports = PaymentCashoCreditPage;