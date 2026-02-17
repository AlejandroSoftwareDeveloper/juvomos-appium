class CancelarProductos {

    async selectproductcancel(cantidad) {
        const selectors = [
            '//android.widget.TextView[contains(@text,"Apache")]/parent::*',
            '//android.widget.TextView[contains(@text,"General Grill")]/parent::*'
        ];

        for (let i = 0; i < cantidad; i++) {
            await this.seleccionarItem(selectors[i]);
            await this.cancel();
            await this.cold();
            await this.close();
        }
    }

    async cancel() {
        const btn = $('id=com.juvomos.pos:id/btnVoid');
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }

    async cold() {
        const btn = $('id=com.juvomos.pos:id/voidGeneralLayout');
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }

    async seleccionarItem(xpath) {
        const item = $(xpath);
        await item.waitForDisplayed({ timeout: 10000 });
        await item.click();
    }

    async close() {
        const closeBtn = $('id=com.juvomos.pos:id/imgCloseButtonSecondary');
        if (await closeBtn.isDisplayed()) {
            await closeBtn.click();
        }
    }
   
  
    

    get btnRecall() {
        return $$('id=com.juvomos.pos:id/btnRecall');
    }

    async openRecall() {
        await browser.waitUntil(async () => {
            const buttons = await this.btnRecall;
            return buttons.length > 0;
        }, { timeout: 15000 });

        const buttons = await this.btnRecall;
        await buttons[0].click();
    }
}

module.exports = new CancelarProductos();
