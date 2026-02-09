// Se accede a To Go
class OrderSelectionPages {

  get container() {
    return $('id=com.juvomos.pos:id/orderTypeContainer');
  }

  get toGoCard() {
    return $('android=new UiSelector()' +'.resourceId("com.juvomos.pos:id/cardOrderType")' +'.childSelector(new UiSelector().text("To Go"))');
  }

  async isOrderTypeVisible() {
    return await this.container.isDisplayed().catch(() => false);
  }

  async selectToGoIfPresent() {
    const visible = await this.isOrderTypeVisible();

    if (!visible) {
      return; 
    }

    await this.toGoCard.waitForDisplayed({ timeout: 15000 });
    await this.toGoCard.click();
  }
  
}

module.exports = new OrderSelectionPages();
