const scrollTicketList = require('../utils/scrollTicketList');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
class AplicarHold {

     async selectproductHold(cantidad) {
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
                                  
                await this.Hold();

                //Consulta si el boton esta disponible
                const btnOrderRecall = ProductSelectionPages.accountButton;

                if (await btnOrderRecall.isDisplayed()) {
                    await btnOrderRecall.click(); 
                }

             /*  if (goBackAfterHold) {
                    await ProductSelectionPages.goToAcc(); // solo cuando se necesite
                }*/

              //  await this.TaxExemptld();
                //await this.close();
               
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
          async Hold() {
            const btnToGo = $('id=com.juvomos.pos:id/btnHolItem');
            await btnToGo.waitForDisplayed({ timeout: 5000 });
            await btnToGo.click();
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
    
      /*  async cancel() {
            const btn = $('id=com.juvomos.pos:id/btnVoid');
            await btn.waitForDisplayed({ timeout: 5000 });
            await btn.click();
        }
        async close() {
            const closeBtn = $('id=com.juvomos.pos:id/imgCloseButtonSecondary');
            if (await closeBtn.isDisplayed()) {
                await closeBtn.click();
            }
        }  */
    
    
}

module.exports = new AplicarHold();