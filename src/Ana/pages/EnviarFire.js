
const ProductSelectionPages = require('./ProductSelectionPages');

class EnviarFire {

    async selectproductFire(cantidad) {
       const selectors = [
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Ribs & Chicken")]/parent::*',     
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Coke")]/parent::*',  
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Fanta Orange ")]/parent::*' 
     ];
            await this.scrollProductos();
        for (let i = 0; i < cantidad; i++) {
            await this.seleccionarItem(selectors[i]);                        
            await this.btnFireItem();         
            await ProductSelectionPages.goToAcc();           
        }
    }

    async scrollProductos() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
    }


    async seleccionarItem(xpath) {
        const item = $(xpath);
        await item.waitForDisplayed({ timeout: 10000 });
        await item.click();
    }
    async btnFireItem() {
        //Enviar a la cocina
        const btnFireItem = $('id=com.juvomos.pos:id/btnFireItem');
        await btnFireItem.waitForDisplayed({ timeout: 5000 });
        await btnFireItem.click();
        //establecer tiempo
        const fireTime = $('id=com.juvomos.pos:id/fireTwoTxt');
        await fireTime.waitForDisplayed({ timeout: 10000 });
        await fireTime.waitForEnabled();
        await fireTime.click();
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

module.exports = new EnviarFire();
