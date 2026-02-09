//valido los productos de la cuenta creada
class ValidarProductosCheck {

    get guestsButton() {
        return $('id=com.juvomos.pos:id/guestsNumber');
    }

    async waitForPage() {
        await this.guestsButton.waitForDisplayed({ timeout: 15000 });
    }

    async validateProduct(productName) {
        const product = $(
            `android=new UiSelector().resourceId("com.juvomos.pos:id/itemInvoiceName").textContains("${productName}")`
        );
        await product.waitForDisplayed({ timeout: 10000 });
    }

    async validateAllProducts() {
        await this.validateProduct('Apache');
        await this.validateProduct('Burger Tender');
        await this.validateProduct('General Grill');
    }
    get sendButton() {
    return $('id=com.juvomos.pos:id/btnSendPointOfSale');
    }

    async sendOrder() {
    await this.sendButton.waitForDisplayed({ timeout: 10000 });
    await this.sendButton.click();
    }
}

module.exports = new ValidarProductosCheck();
