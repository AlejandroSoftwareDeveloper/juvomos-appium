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

    async  OpenCheckRecall() {
      await this.accountNumberButton.waitForDisplayed({ timeout: 10000 });
      await this.accountNumberButton.click();
      await CancelarProductos.cancel();
      await CancelarProductos.cold();
      await CancelarProductos.close();
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
    /*const firstText = (await this.checksList[0].getText()).trim();
    const secondText = (await this.checksList[1].getText()).trim();

    if (firstText.endsWith('.1')) {
        await this.checksList[0].click();
        return;
    }

    if (secondText.endsWith('.1')) {
        await this.checksList[1].click();
        return;
    }*/
    // Recorremos los primeros dos elementos
    /*  for (let i = 0; i < 2; i++) {
          const ticket = this.checksList[i];
          // Buscamos el TextView que tiene el número de cuenta
          const ticketTextElement = await ticket.$('id=com.juvomos.pos:id/itemInvoiceName');
          const ticketText = (await ticketTextElement.getText()).trim();

          if (ticketText.endsWith('.1')) {
              await ticket.click();
              return;
          }
      }*/

  }

  async selectAccount(accountNumber) {
    const account = $(`android=new UiSelector().resourceId("com.juvomos.pos:id/txtTicketNumber")` +`.textStartsWith("Cuenta #${accountNumber}")`);

    await account.waitForDisplayed({ timeout: 15000 });
    await account.click();
  }
}

module.exports = new OpenCheck();
