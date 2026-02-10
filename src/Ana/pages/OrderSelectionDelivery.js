// Se accede a Delivery

class OrderSelectionDelivery {

  get container() {
    return $('id=com.juvomos.pos:id/cardOrderType');
  }

  get dineInCard() {
    return $(
  '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Delivery"]/parent::*'
);}
  async isOrderTypeVisible() {
    return await this.container.isDisplayed().catch(() => false);
  }

  async selectDeliveryIfPresent() {
    const visible = await this.isOrderTypeVisible();

    if (!visible) {
      return; 
    }

    await this.dineInCard.waitForDisplayed({ timeout: 15000 });
    await this.dineInCard.click();
  }

  async addCustomerToCheck(name) {
    await this.waitCustomerScreen();
    await this.searchCustomer(name);
    await this.selectCustomerResult(name);
    await this.confirmAddCustomer();
}
async waitCustomerScreen() {
    const container = await $('id=com.juvomos.pos:id/idCustomerContainerRight');
    await container.waitForDisplayed({ timeout: 10000 });
}
async searchCustomer(name) {
    const input = await $('id=com.juvomos.pos:id/editSearchCustomer');
    await input.waitForDisplayed({ timeout: 10000 });
    await input.setValue(name);

    // espera a que la lista se refresque
    await browser.pause(500);

    const searchIconContainer = await $(
        '//android.widget.TextView[@resource-id="com.juvomos.pos:id/searchCustomerText"]/parent::*'
    );
    await searchIconContainer.waitForDisplayed({ timeout: 5000 });
    await searchIconContainer.click();
}

async selectCustomerResult() {
    const customerItem = await $('id=com.juvomos.pos:id/customerDataLayout');
    await customerItem.waitForDisplayed({ timeout: 10000 });
    await customerItem.click();
}

async confirmAddCustomer() {
    const addBtn = await $('id=com.juvomos.pos:id/btnAddCustomer');
    await addBtn.waitForDisplayed({ timeout: 10000 });
    await addBtn.click();
}


}

module.exports = new OrderSelectionDelivery();