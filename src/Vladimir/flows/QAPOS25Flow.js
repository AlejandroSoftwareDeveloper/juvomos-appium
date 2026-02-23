class QAPOS25Flow {
    constructor(menuPage, paymentPage, holdPage, fireschedulePage) {
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;
        this.fireschedulePage = fireschedulePage;

        this.productsSelected = false;
    }

    async execute() {

        // -------- PRIMERA EJECUCIÓN --------
        if (!this.productsSelected) {

            if (await this.menuPage.isDisplayed()) {
                await this.menuPage.selectProductByName('Apache');
                await this.menuPage.selectProductByName('Burger Tender');
                await this.menuPage.selectProductByName('General Grill');
                this.productsSelected = true;
            }

            // Abrir cuenta → seleccionar item → hold
            await this.menuPage.openOrder();
            await this.paymentPage.selectItemFromTicketByName('Apache');
            await this.holdPage.tapFireItem();
            await this.fireschedulePage.tapApplyFire();
            await this.menuPage.openOrder();
            await this.paymentPage.selectItemFromTicketByName('Burger Tender');
            await this.holdPage.tapFireItem();
            await this.fireschedulePage.tapApplyFire();
            await this.menuPage.openOrder();
            await this.paymentPage.selectItemFromTicketByName('General Grill');
            await this.holdPage.tapFireItem();
            await this.fireschedulePage.tapApplyFire();
            await this.menuPage.openOrder();

            // La app vuelve al menú automáticamente
            return; // CLAVE: corta aquí
        }

        // -------- SEGUNDA EJECUCIÓN --------
        await this.paymentPage.tapSendOrderSafe();
    }
}

module.exports = QAPOS25Flow