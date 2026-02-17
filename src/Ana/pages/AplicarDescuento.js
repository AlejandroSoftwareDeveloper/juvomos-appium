const scrollTicketList = require('../utils/scrollTicketList');
const ProductSelectionPages = require('../pages/ProductSelectionPages');

class AplicarDescuento {

    get Descuento (){
       return $('//android.widget.Button[@text="Descuento"]');}

    get EndYear (){
        return $('id=com.juvomos.pos:id/layoutDiscount');
        }
    get DescuentoBtn (){
        return $('id=com.juvomos.pos:id/btnDiscount')
    }
    get DescuentoBtn50 (){
        return $('id=com.juvomos.pos:id/layoutDiscount')
    }
    async AplicarDescuento() {
    await this.Descuento.waitForDisplayed({ timeout: 10000 });
    await this.Descuento.click();

    await this.EndYear.waitForDisplayed({ timeout: 10000 });
    await this.EndYear.click();
}

async DescuentoIndividual(xpath) {
    const item = await $(xpath);
    if (!await item.isDisplayed()) {
        await browser.execute('mobile: scroll', { strategy: 'accessibility id', selector: xpath });
    }
    await item.waitForDisplayed({ timeout: 15000 });
    await item.click();
}

async AplicarDescuentoIndividual(cantidad) {
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
        await this.DescuentoIndividual(selectors[i]);

        await this.DescuentoBtn.waitForDisplayed({ timeout: 10000 });
        await this.DescuentoBtn.click();

        await this.DescuentoBtn50.waitForDisplayed({ timeout: 10000 });
        await this.DescuentoBtn50.click();

        await ProductSelectionPages.goToAcc();    
    }

}
   
    
    
    }

module.exports = new AplicarDescuento();