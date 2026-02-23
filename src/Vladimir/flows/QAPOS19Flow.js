class QAPOS19Flow {
    constructor(menuPage, paymentPage, holdPage) {
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;

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
            await this.holdPage.tapHoldItem();
            await this.menuPage.openOrder();
            await this.paymentPage.selectItemFromTicketByName('Burger Tender');
            this.holdPage.tapHoldItem();
            await this.menuPage.openOrder();
            await this.paymentPage.selectItemFromTicketByName('General Grill');
            this.holdPage.tapHoldItem();
            await this.menuPage.openOrder();

            // La app vuelve al menú automáticamente
            return; // CLAVE: corta aquí
        }

        // -------- SEGUNDA EJECUCIÓN --------
        // Solo reabrimos la cuenta y imprimimos
        //await this.menuPage.openOrder();
        /*await this.menuPage.openOrderSafe();*/
        await this.paymentPage.tapPrintSafe();
    }
}

module.exports = QAPOS19Flow;