class QAPOS27Flow {
    constructor(menuPage, paymentPage, holdPage, fireschedulePage, opencheckoptionsPage) {
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;
        this.fireschedulePage = fireschedulePage;
        this.opencheckoptionsPage = opencheckoptionsPage;

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
            await this.paymentPage.tapOpcionesCuenta();
            // La app vuelve al menú automáticamente
            return; // CLAVE: corta aquí
        }

        // -------- SEGUNDA EJECUCIÓN --------
        await this.opencheckoptionsPage.tapFireCheck();
        await this.fireschedulePage.tapApplyFire();
    }
}

module.exports = QAPOS27Flow