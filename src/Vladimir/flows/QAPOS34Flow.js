class QAPOS34Flow {
    constructor(dineInPage, tableoccupantsPage, menuPage, paymentPage, holdPage, checkPage) {
    this.dineInPage = dineInPage;
    this.tableoccupantsPage = tableoccupantsPage;
    this.menuPage = menuPage;
    this.paymentPage = paymentPage;
    this.holdPage = holdPage;
    this.checkPage = checkPage; // NUEVO
    this.productsSelected = false;
}



    async execute(tableNumber = null, occupants = null) {

        // -------- PRIMERA EJECUCIÓN --------
        if (!this.productsSelected) {

            await this.dineInPage.isDisplayed();
            await this.dineInPage.selectDineIn();

            if (tableNumber) {
                await this.dineInPage.selectTable(tableNumber);
            } else {
                await this.dineInPage.selectRandomFreeTable();
            }

            if (occupants) {
                await this.tableoccupantsPage.selectNumberOfOccupants(occupants);
            } else {
                await this.tableoccupantsPage.selectNumberOfOccupants();
            }

            await this.tableoccupantsPage.confirmSelection();
            //Seleccionar productos
            if (await this.menuPage.isDisplayed()) {
                await this.menuPage.selectProductByName('Apache');
                await this.menuPage.selectProductByName('Burger Tender');
            }
            await this.menuPage.openOrderSafe();

            await this.paymentPage.selectFirstItemFromTicket();
            await this.holdPage.tapHoldItem();
            await this.menuPage.openOrder();
            this.productsSelected = true;
            
            // La app vuelve al menú automáticamente
            return; // CLAVE: corta aquí
        }

        // -------- SEGUNDA EJECUCIÓN --------
        // Solo reabrimos la cuenta y Send
        
        await this.paymentPage.tapSendOrderSafe();
        await this.dineInPage.isDisplayed();
        await this.dineInPage.selectDineIn();
        if (tableNumber) {
                await this.dineInPage.selectTable(tableNumber);
        } else {
            await this.dineInPage.selectRandomFreeTable();
        }

        if (await this.checkPage.isDisplayed()) {
            await this.checkPage.tapRecall();
            console.log('Cuenta abierta correctamente usando CheckPage');
        }
        await this.paymentPage.selectFirstItemFromTicket();
        await this.holdPage.tapHoldItem();
        await this.paymentPage.tapSendOrderSafe();
    }
}

module.exports = QAPOS34Flow;