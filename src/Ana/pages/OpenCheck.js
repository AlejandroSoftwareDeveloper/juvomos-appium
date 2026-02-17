const CancelarProductos = require('./CancelarProductos');
class OpenCheck {
  get openCheckButton() {
    return $('id=com.juvomos.pos:id/btnOpenCheck');
  }

  get checksList() {
    return $$('id=com.juvomos.pos:id/layout_check_detail_item');
  }

  get accountNumberButton() {
    return $('id=com.juvomos.pos:id/txtTicketNumber');
  }

  get openButton() {
    return $('id=com.juvomos.pos:id/btnOrderRecall');
  }

  get accountsRecycler() {
    return $('id=com.juvomos.pos:id/check_detail_recycler');
  }
  async  recallUltimaCuenta() {
    await this.open();
    await this.selectLastCreatedAccount();
    await CancelarProductos.openRecall();
}
  async getAccountNumber() {
    await this.accountNumberButton.waitForDisplayed({ timeout: 15000 });
    const text = await this.accountNumberButton.getText();
    return text.replace('Cuenta #', '').trim();
  }

  async waitForChecks() {
  await browser.waitUntil(
    async () => (await this.checksList).length > 0,
    { timeout: 15000 }
  );
}

  async open() {
  await this.openButton.waitForDisplayed({ timeout: 15000 });
  await this.openButton.waitForEnabled({ timeout: 15000 });
  await this.openButton.click();

  await this.waitForChecks(); 
  }

 

  async selectLastCreatedAccount() {
    await this.waitForChecks();
    await this.checksList[0].click();
  }

  async selectAccount(accountNumber) {
    const account = $(`android=new UiSelector().resourceId("com.juvomos.pos:id/txtTicketNumber")` +`.textStartsWith("Cuenta #${accountNumber}")`);

    await account.waitForDisplayed({ timeout: 15000 });
    await account.click();
  }
}

module.exports = new OpenCheck();
