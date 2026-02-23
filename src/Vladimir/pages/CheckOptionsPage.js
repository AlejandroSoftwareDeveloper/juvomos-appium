// CheckOptionsPage.js
// Page Object para la pantalla de opciones de la cuenta (Check Options)

const BasePage = require('./BasePage');

class CheckOptionsPage extends BasePage {
    constructor() {
        super();

        this.checkNumber = 'com.juvomos.pos:id/checkNumber';

        this.btnVoid = 'com.juvomos.pos:id/btnVoid';
        this.btnDiscount = 'com.juvomos.pos:id/btnDiscount';
        this.btnTaxExempt = 'com.juvomos.pos:id/btnTaxExempt';
        this.btnGratuity = 'com.juvomos.pos:id/btnGratuity';

        this.btnHoldCheck = 'com.juvomos.pos:id/btnHoldCheck';
        this.btnFireCheck = 'com.juvomos.pos:id/btnFireCheck';
        this.btnResend = 'com.juvomos.pos:id/btnResend';
        this.btnTransfer = 'com.juvomos.pos:id/btnTransfer';

        this.btnCoupon = 'com.juvomos.pos:id/btnCoupon';
        this.btnPosition = 'com.juvomos.pos:id/btnPosition';
    }

// Fix: espera el elemento usando solo resource-id
    async waitForElement(selector, timeout = 15000) {
        const el = await $(`//*[@resource-id="${selector}"]`);
        await el.waitForExist({ timeout });
        return el;
    }


    async waitForPage() {
        await this.waitForElement(this.checkNumber);
    }

    // FIX 2: espera interna antes del click
    async clickHoldCheck() {
        await this.waitForPage();
        await this.click(this.btnHoldCheck);
    }

    async holdCheckSafe() {
        await this.waitForPage();
        const visible = await this.isDisplayed(this.btnHoldCheck);
        if (!visible) {
            throw new Error('Botón Hold Check no visible');
        }
        await this.click(this.btnHoldCheck);
    }

    async clickVoid() { await this.click(this.btnVoid); }
    async clickDiscount() { await this.click(this.btnDiscount); }
    async clickTaxExempt() { await this.click(this.btnTaxExempt); }
    async clickGratuity() { await this.click(this.btnGratuity); }
    async clickFireCheck() { await this.click(this.btnFireCheck); }
    async clickResend() { await this.click(this.btnResend); }
    async clickTransfer() { await this.click(this.btnTransfer); }
    async clickCoupon() { await this.click(this.btnCoupon); }
    async clickPosition() { await this.click(this.btnPosition); }
}

module.exports = CheckOptionsPage;