const ProductSelectionPages = require('./ProductSelectionPages');

class EscribirComentario {

    async Coment(cantidad) {
        
        const selectors = [
           // '//android.widget.TextView[contains(@text,"Apache")]/parent::*'
           '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Apache")]/parent::*',     
           '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Burger Tender")]/parent::*',
           '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"General Grill")]/parent::*',
           '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Ribs & Chicken")]/parent::*'        
         ];
        
        for (let i = 0; i < cantidad && i < selectors.length; i++) {
            await this.seleccionarItem(selectors[i]);
            
            await this.WriteComment();
            await this.TextoComment(i + 1);
            if (await driver.isKeyboardShown()) {
                await driver.hideKeyboard();                
            }
            await this.BtnComment();
            await this.close();
            await ProductSelectionPages.goToAcc();
        }      
        
    }                         
               
   async seleccionarItem(xpath) {
        const item = await $(xpath);

        if (!(await item.isDisplayed())) {
            await this.scrollTicketListDown();
        }

        await item.waitForDisplayed({ timeout: 10000 });
        await item.click();
    }
    async scrollTicketListDown() {
        await driver.execute('mobile: scrollGesture', {
        left: 60,
        top: 650,
        width: 600,
        height: 400,
        direction: 'down',
        percent: 0.8
    }); 
    }
    async WriteComment() {
        const kitchenCommentBtn = await $('id=com.juvomos.pos:id/btnKitchenComment');
        await kitchenCommentBtn.waitForDisplayed({ timeout: 5000 });
        await kitchenCommentBtn.click();
    }

    async TextoComment(i) {
        const commentInput = await $('id=com.juvomos.pos:id/commentKitchen');
        await commentInput.waitForDisplayed({ timeout: 5000 });
        await commentInput.click(); 
        await commentInput.clearValue();
        await commentInput.addValue(`Comentario de Prueba ${i}`);
    }

    async BtnComment() {
        const addCommentBtn = await $('id=com.juvomos.pos:id/messageBtnAddComment');
        await addCommentBtn.waitForDisplayed({ timeout: 5000 });
        await addCommentBtn.click();
    }

    async close() {
        const closeBtn = $('id=com.juvomos.pos:id/imgCloseButtonSecondary');
        if (await closeBtn.isExisting() && await closeBtn.isDisplayed()) {
            await closeBtn.click();
        }
    }
    
}

module.exports = new EscribirComentario();
