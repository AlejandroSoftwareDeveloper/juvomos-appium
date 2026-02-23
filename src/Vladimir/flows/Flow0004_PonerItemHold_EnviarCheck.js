class Flow0004_PonerItemHold_EnviarCheck {
    constructor(dineInPage, menuPage, paymentPage, holdPage) {
        this.dineInPage = dineInPage;
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;
}

    async executeflow() {
        await this.paymentPage.selectItemFromTicketByName('Apache');
        await this.holdPage.tapHoldItem();
        await this.menuPage.openOrderSafe();
        await this.paymentPage.tapSendOrderSafe();  
    }
        
}

module.exports = Flow0004_PonerItemHold_EnviarCheck;