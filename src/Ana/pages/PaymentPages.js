class PaymentPages {

  async goToPayment() {
    await $('id=com.juvomos.pos:id/idPayButton').click();
  }

  get payButton() {
    return $('id=com.juvomos.pos:id/btnPayRecall');
  }
  async goToPay() {
    await this.payButton.waitForDisplayed({ timeout: 15000 });
    await this.payButton.waitForEnabled({ timeout: 15000 });
    await this.payButton.click();
  }
  async waitForPayScreen() {
    await browser.waitUntil(async () => {
      return (await this.paymentMethodsRecycler.isDisplayed().catch(() => false)) ||
            (await this.sendEmailButton.isDisplayed().catch(() => false)) ||
            (await this.emailInput.isDisplayed().catch(() => false));
    }, {
      timeout: 20000,
      timeoutMsg: 'No apareció ninguna pantalla válida de Payment'
    });
  }     

  async waitForPaymentScreen() {
    await $('id=com.juvomos.pos:id/paymentMethodsRecycler').waitForDisplayed();
  }

  async selectCashPay() {
    await this.waitForPaymentScreen();

    if (await this.paymentMethodsRecycler.isDisplayed().catch(() => false)) {
      if (await this.cashOption.isDisplayed().catch(() => false)) {
        await this.cashOption.click();
      }
    }
  }

  get paymentMethodsRecycler() {
  return $('id=com.juvomos.pos:id/paymentMethodsRecycler');
  }
  get cashOption() {
      return this.paymentMethodsRecycler.$('android=new UiSelector().text("Cash")');
  }

  async isCashSelected() {
    return await this.cashOption.isDisplayed();
  }

  async selectCashPayment() {
    const cashContainer = await $('id=com.juvomos.pos:id/paymentRelative');
    await cashContainer.waitForDisplayed({ timeout: 10000 });
    await cashContainer.click();
  }

  //Envio de Email
  async selectSendEmail() {
    await $('id=com.juvomos.pos:id/layout_sendEmail').click();
  }

  async enterEmail(email) {
    const input = await $('android=new UiSelector().className("android.widget.EditText")');
    await input.setValue(email);
  }

  async clickSendEmail() {
    await $('id=com.juvomos.pos:id/btn_send_email_principal_dialog_crd').click();
  }

  get emailInput() {
    return $('android=new UiSelector().className("android.widget.EditText")');
  }

  get sendEmail() {
    return $('id=com.juvomos.pos:id/btn_send_email_principal_dialog_crd');
  }

    async pagarEnEfectivoYEnviarCorreo(email) {
    await this.goToPayment();
    await this.waitForPayScreen();
    await this.selectCashPay();
    await this.selectSendEmail();
    await this.enterEmail(email);
    await this.clickSendEmail();
}







}

module.exports = new PaymentPages();