class Flow0007_PonerCheckHold_Enviar {
    constructor(dineInPage, menuPage, paymentPage, checkoptionsPage) {
        this.dineInPage = dineInPage;
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.checkoptionsPage = checkoptionsPage;
    }

    async executeflow() {
        // 3. Poner el check en HOLD (con espera y validación interna)
        await this.checkoptionsPage.holdCheckSafe();
    
/*
        await this.menuPage.openOrderSafe();
        await this.paymentPage.tapSendOrderSafe();*/
    }
}

module.exports = Flow0007_PonerCheckHold_Enviar;