
const ProductSelectionPages = require('./ProductSelectionPages');
//const scrollTicketList = require('../utils/scrollTicketList');
const scrollTicketList = require('../utils/scrollTicketList');

class AplicarImpuesto {

    async selectproductImpuesto(cantidad) {
       const selectors = [
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Apache")]/parent::*',     
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Burger Tender")]/parent::*',
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"General Grill")]/parent::*',   
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Ribs & Chicken")]/parent::*',
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Coke")]/parent::*'               
        ];

        //Scroll
         await scrollTicketList.scrollListToTop();

        for (let i = 0; i < cantidad; i++) {
           await this.seleccionarItem(selectors[i]);
                              
            await this.cancel();
            await this.TaxExemptld();
            await this.close();
            await ProductSelectionPages.goToAcc();
        }
    }
 
    async seleccionarItem(xpath) {
         const item = await $(xpath);

        if (!(await item.isDisplayed())) {
            await scrollTicketList.scrollListDown();
        }

        await item.waitForDisplayed({ timeout: 10000 });
        await item.click();
    }
    /*async scrollTicketListDown() {
        await driver.execute('mobile: scrollGesture', {
        left: 60,
        top: 650,
        width: 600,
        height: 400,
        direction: 'down',
        percent: 0.8
    }); 
    }*/
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
