
const ProductSelectionPages = require('./ProductSelectionPages');

class AplicarImpuesto {

    async selectproductImpuesto(cantidad) {
       const selectors = [
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Apache")]/parent::*',     
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Burger Tender")]/parent::*',
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"General Grill")]/parent::*'         
        ];

        //Scroll
         await this.scrollTicketListToTop();

        for (let i = 0; i < cantidad; i++) {
           await this.seleccionarItem(selectors[i]);
                              
            await this.cancel();
            await this.TaxExemptld();
            await this.close();
            await ProductSelectionPages.goToAcc();
        }
    }
    async scrollTicketListToTop() {
        const list = await $('id=com.juvomos.pos:id/idTicketListRecycler');
        await list.waitForDisplayed({ timeout: 5000 });

        await driver.execute('mobile: scrollGesture', {
            elementId: list.elementId,
            direction: 'up',
            percent: 1.0
        });
    }
    async seleccionarItem(xpath) {
        const item = $(xpath);
        await item.waitForDisplayed({ timeout: 10000 });
        await item.click();
    }
    async TaxExemptld() {
        const btnTaxExempt = $('id=com.juvomos.pos:id/btnTaxExempt');
        await btnTaxExempt.waitForDisplayed({ timeout: 5000 });
        await btnTaxExempt.click();

        const btnConfirmar = $('id=com.juvomos.pos:id/btnOk');
        await btnConfirmar.waitForDisplayed({ timeout: 10000 });
        await btnConfirmar.waitForEnabled();
        await btnConfirmar.click();
    }

    async cancel() {
        const btn = $('id=com.juvomos.pos:id/btnVoid');
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }
    async close() {
        const closeBtn = $('id=com.juvomos.pos:id/imgCloseButtonSecondary');
        if (await closeBtn.isDisplayed()) {
            await closeBtn.click();
        }
    }  

}

module.exports = new AplicarImpuesto();
