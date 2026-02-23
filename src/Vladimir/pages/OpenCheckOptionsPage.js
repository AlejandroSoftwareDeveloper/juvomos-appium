const BasePage = require('./BasePage');

class OpenCheckOptionsPage extends BasePage {
    constructor() {
        super();

        /**
         * Elemento ancla: título visible de la pantalla "Opciones de la cuenta"
         */
        this.anchorSelector = 'com.juvomos.pos:id/itemOptionText';

        // Botones principales
        this.btnVoidCheck = 'com.juvomos.pos:id/btnVoid';
        this.btnDiscount = 'com.juvomos.pos:id/btnDiscount';
        this.btnTaxExempt = 'com.juvomos.pos:id/btnTaxExempt';
        this.btnGratuity = 'com.juvomos.pos:id/btnGratuity';
        this.btnHoldCheck = 'com.juvomos.pos:id/btnHoldCheck';
        this.btnFireCheck = 'com.juvomos.pos:id/btnFireCheck';
        this.btnResend = 'com.juvomos.pos:id/btnResend';
        this.btnTransfer = 'com.juvomos.pos:id/btnTransfer';
        this.btnCoupon = 'com.juvomos.pos:id/btnCoupon';
        this.btnPosition = 'com.juvomos.pos:id/btnPosition';

        // Botón cerrar
        this.closeButton = 'com.juvomos.pos:id/imgCloseButtonSecondary';
    }

    /**
     * Verifica que la pantalla Opciones de la cuenta esté visible
     */
    async isDisplayed() {
        return await this.isDisplayedElement(this.anchorSelector);
    }

    /**
     * Cierra la pantalla de opciones
     */
    async tapClose() {
        await this.click(this.closeButton);
    }

    /**
     * Pone la cuenta en espera (Hold)
     */
    async tapHoldCheck() {
        await this.click(this.btnHoldCheck);
    }

    /**
     * Envia la cuenta a cocina (Fire)
     */
    async tapFireCheck() {
        await this.click(this.btnFireCheck);
    }

    /**
     * Reenviar la cuenta a cocina
     */
    async tapResend() {
        await this.click(this.btnResend);
    }

    /**
     * Transferir la cuenta
     */
    async tapTransfer() {
        await this.click(this.btnTransfer);
    }

    /**
     * Aplicar cupón
     */
    async tapCoupon() {
        await this.click(this.btnCoupon);
    }

    /**
     * Posicionar cuenta
     */
    async tapPosition() {
        await this.click(this.btnPosition);
    }

    /**
     * Otros métodos opcionales: tapVoid, tapDiscount, tapTaxExempt, tapGratuity
     */
    async tapVoid() {
        await this.click(this.btnVoidCheck);
    }

    async tapDiscount() {
        await this.click(this.btnDiscount);
    }

    async tapTaxExempt() {
        await this.click(this.btnTaxExempt);
    }

    async tapGratuity() {
        await this.click(this.btnGratuity);
    }
}

module.exports = OpenCheckOptionsPage;