const scrollTicketList = require('../utils/scrollTicketList');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
class ModificarIngredientes {

     get Xplosion() {
        return $('//android.widget.TextView[@text="Xplosion"]/ancestor::android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutCardModifierItem"]');
    }
    get Bomba() {
        return $('//android.widget.TextView[@text="Bomba"]/ancestor::android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutCardModifierItem"]');
    }
    get OriginalHot() {
        return $('//android.widget.TextView[@text="Original Hot"]/ancestor::android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutCardModifierItem"]');
    }
    get listoButton() {
        return $('id=com.juvomos.pos:id/btnDone');
    }
    async modificar(xpath) {
    const item = await $(xpath);
    if (!await item.isDisplayed()) {
        await browser.execute('mobile: scroll', { strategy: 'accessibility id', selector: xpath });
    }
    await item.waitForDisplayed({ timeout: 15000 });
    await item.click();
}
    async ModificarIngredients(cantidad) {

    const ingredientes = [
        '//android.widget.TextView[contains(@text,"Cajun")]',
        '//android.widget.TextView[contains(@text,"Teriyaki")]',
        '//android.widget.TextView[contains(@text,"Mild")]'
    ];

    const modificadores = [
        this.Xplosion,
        this.Bomba,
        this.OriginalHot
    ];

    await scrollTicketList.scrollListToTop();

    for (let i = 0; i < cantidad; i++) {

        await this.modificar(ingredientes[i % ingredientes.length]);

        const modificador = modificadores[i % modificadores.length];
        await modificador.waitForDisplayed({ timeout: 10000 });
        await modificador.click();

        await this.listoButton.waitForDisplayed({ timeout: 10000 });
        await this.listoButton.click();

       // await ProductSelectionPages.goToAcc();
    }
}
    
}

module.exports = new ModificarIngredientes();