class Flow0004_PonerItemHold_and_itemFire_EnviarCheck {
    constructor(dineInPage, menuPage, paymentPage, holdPage,fireschedulePage) {
        this.dineInPage = dineInPage;
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;
        this.fireschedulePage = fireschedulePage;
}

    async executeflow() {
        await this.paymentPage.selectItemFromTicketByName('Apache');
        await this.holdPage.tapHoldItem();
        await this.menuPage.openOrderSafe();
        await this.paymentPage.selectItemFromTicketByName('Burger Tender');
        await this.holdPage.tapFireItem();
        await this.fireschedulePage.tapApplyFire();
        await this.menuPage.openOrderSafe();
        await this.paymentPage.tapSendOrderSafe();  
    }
        
}

module.exports = Flow0004_PonerItemHold_and_itemFire_EnviarCheck;