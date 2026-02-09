class DineInProducts {

    async selectInvoiceProduct(name) {
    const item = $(
        `//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and normalize-space(@text)="${name}"]` +
        '/ancestor::*[@clickable="true"][1]'
    );
    return item.waitForDisplayed({ timeout: 10000 }).then(() => item.click());
    }

    async selectproduct() {

             await this.selectInvoiceProduct('Apache');

        }

}

module.exports = new DineInProducts();
