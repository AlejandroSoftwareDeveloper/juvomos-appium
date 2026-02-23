class QAPOS29Flow {
    constructor(menuPage, paymentPage, holdPage, splitcheckPage) {
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;
        this.splitcheckPage = splitcheckPage;

        this.productsSelected = false;
    }

    async execute() {

        // -------- PRIMERA EJECUCIÓN --------
        if (!this.productsSelected) {

            if (await this.menuPage.isDisplayed()) {
                await this.menuPage.selectProductByName('Apache');
                await this.menuPage.selectProductByName('Burger Tender');
                this.productsSelected = true;
            }

            // Abrir cuenta → seleccionar item → hold
            await this.menuPage.openOrder();
            return; // CLAVE: corta aquí
        }

        // -------- SEGUNDA EJECUCIÓN --------
        await this.paymentPage.tapSplit();
        await this.splitcheckPage.tapAddTicketSafe();
    }
}

module.exports = QAPOS29Flow