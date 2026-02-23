class QAPOS23Flow {
    constructor(ordertypePage, menuPage, paymentPage, holdPage, recallRchecksPage, recallcheckdetailPage) {
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;
        this.ordertypePage = ordertypePage;
        this.recallRchecksPage = recallRchecksPage;
        this.recallcheckdetailPage = recallcheckdetailPage;

        this.productsSelected = false;
    }

    async execute() {
    // -------- PRIMERA EJECUCIÓN: Crear check con item en hold --------
    if (!this.productsSelected) {
        if (await this.menuPage.isDisplayed()) {
            await this.menuPage.selectProductByName('Apache');
            this.productsSelected = true;
        }

        // Abrir cuenta → seleccionar item → hold
        await this.menuPage.openOrder();
        await this.paymentPage.selectItemFromTicketByName('Apache');
        await this.holdPage.tapHoldItem();
        await this.menuPage.openOrder();
        await this.paymentPage.tapSendOrderSafe();            
        return; // CLAVE: corta aquí
    }

    // -------- SEGUNDA EJECUCIÓN: Reabrir cuenta y enviar --------
    // La app va a la pantalla de tipo de orden
    await this.ordertypePage.tapOpen();

    // -------- PASO 3: Ir a la pantalla Recall --------
    // Esperar que la pantalla Recall se cargue
    await this.recallRchecksPage.refreshChecks();
    const driver = await this.recallRchecksPage.getDriver();

    await driver.waitUntil(
        async () => await this.recallRchecksPage.isDisplayed(),
        {
            timeout: 10000,
            timeoutMsg: 'La pantalla Recall no se cargó en 10s'
        }
    );

    // -------- PASO 4: Abrir el último check agregado --------
    await this.recallRchecksPage.openLastCheckSafe();

    //PASO 5: Editar check para quitar hold
    await this.recallcheckdetailPage.tapOpen();
    await this.paymentPage.selectItemFromTicketByName('Apache');
    await this.holdPage.tapHoldItem(); 

    //PASO 6: enviar check
    await this.paymentPage.tapSendOrderSafe();
   }
}

module.exports = QAPOS23Flow;