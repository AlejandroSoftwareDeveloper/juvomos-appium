class QAPOS28Flow {
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
        await this.splitcheckPage.selectProductFromSplitSafe('Apache');
    }
}

module.exports = QAPOS28Flow


/*class QAPOS28Flow {
    constructor(menuPage, paymentPage, holdPage, splitcheckPage) {
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;
        this.splitcheckPage = splitcheckPage;

        this.productsSelected = false;
    }

    async execute() {
        console.log('[QAPOS28] execute() iniciado');
        // -------- PRIMERA EJECUCIÓN --------
        if (!this.productsSelected) {
            console.log('[QAPOS28] Primera ejecución');
            if (await this.menuPage.isDisplayed()) {
                await this.menuPage.selectProductByName('Apache');
                await this.menuPage.selectProductByName('Burger Tender');
                this.productsSelected = true;
            } else {
                console.log('[QAPOS28] MenuPage NO visible');
            }
             
            // Abrir cuenta → seleccionar item → hold
            console.log('[QAPOS28] Abriendo orden');
            await this.menuPage.openOrder();
            console.log('[QAPOS28] Fin primera ejecución (return)');
            if (await this.paymentPage.isDisplayed()) {
                console.log('[QAPOS28] PaymentPage visible → tapSplit');
                await this.paymentPage.tapSplit();
            } else {
                console.log('[QAPOS28] PaymentPage NO visible');
            }
            return; // CLAVE: corta aquí
        }

        // -------- SEGUNDA EJECUCIÓN --------
        console.log('[QAPOS28] Segunda ejecución');

        if (await this.splitcheckPage.isDisplayed()) {
            console.log('[QAPOS28] SplitCheckPage visible → flujo split');
            await this.splitcheckPage.tapAddTicketSafe();
            await this.splitcheckPage.selectProductFromSplit('Apache');
            await this.splitcheckPage.selectSplitCheckByIndex(1);
            await this.splitcheckPage.tapDoneSafe();
            return;
        } else {
            console.log('[QAPOS28] SplitCheckPage NO visible');
        }

        console.log('[QAPOS28] Ninguna pantalla esperada visible');
    }

    
}

module.exports = QAPOS28Flow*/

/*class QAPOS28Flow {
    constructor(menuPage, paymentPage, holdPage, splitcheckPage) {
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;
        this.splitcheckPage = splitcheckPage;
    }

    async execute() {

        // ===== ESTAMOS EN MENU =====
        if (await this.menuPage.isDisplayed()) {
            await this.menuPage.selectProductByName('Apache');
            await this.menuPage.selectProductByName('Burger Tender');
            await this.menuPage.openOrder();
            return;
        }

        // ===== ESTAMOS EN PAYMENT =====
        if (await this.paymentPage.isDisplayed()) {
            await this.paymentPage.tapSplit();
            return;
        }

        // ===== ESTAMOS EN SPLIT CHECK =====
        if (await this.splitcheckPage.isDisplayed()) {
            await this.splitcheckPage.tapAddTicketSafe();
            await this.splitcheckPage.selectProductFromSplit('Apache');
            await this.splitcheckPage.selectSplitCheckByIndex(1);
            await this.splitcheckPage.tapDoneSafe();
            return;
        }

        throw new Error('QAPOS28Flow: ninguna pantalla esperada está visible');
    }
}

module.exports = QAPOS28Flow;

*/