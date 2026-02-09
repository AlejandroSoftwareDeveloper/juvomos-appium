const ProductSelectionPages = require('./ProductSelectionPages');

class MarcarProductToGo {

  async seleccionarProductoDisponible(cantidad) {
    const selectors = [
      '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName" and contains(@text,"Burger Tender")]/parent::*',
      '//android.widget.TextView[contains(@text,"Apache")]/parent::*',
      '//android.widget.TextView[contains(@text,"General Grill")]/parent::*'
    ];

    for (let i = 0; i < cantidad; i++) {
      await this.seleccionarItem(selectors[i]);
      await this.seleccionarToGo();
      await this.close();
      await ProductSelectionPages.goToAccount();
    }
    await this.scrollProductos();
  }

  async scrollProductos() {
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
  }

  async seleccionarItem(xpath) {
    const item = $(xpath);
    await item.waitForDisplayed({ timeout: 10000 });
    await item.click();
  }

  async seleccionarToGo() {
    const btnToGo = $('id=com.juvomos.pos:id/btnToGo');
    await btnToGo.waitForDisplayed({ timeout: 5000 });
    await btnToGo.click();
  }

  async close() {
    const closeBtn = $('id=com.juvomos.pos:id/imgCloseButtonSecondary');
    await closeBtn.waitForDisplayed({ timeout: 10000 });
    await closeBtn.click();
  }
}

module.exports = new MarcarProductToGo();
