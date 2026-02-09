// Se accede a Dine In
class OrderSelectionDineIn {

  get container() {
    return $('id=com.juvomos.pos:id/cardOrderType');
  }

  get dineInCard() {
    return $(
  '//android.widget.FrameLayout[@resource-id="com.juvomos.pos:id/cardOrderType"]' +
  '[.//android.widget.TextView[@text="Dine In"]]'
);
  }

  async isOrderTypeVisible() {
    return await this.container.isDisplayed().catch(() => false);
  }

  async selectDineInPresent() {
    const visible = await this.isOrderTypeVisible();

    if (!visible) {
      return; 
    }

    await this.dineInCard.waitForDisplayed({ timeout: 15000 });
    await this.dineInCard.click();
  }
}

module.exports = new OrderSelectionDineIn();