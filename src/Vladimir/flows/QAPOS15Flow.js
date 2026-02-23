class QAPOS15Flow {
    constructor(dineInPage, tableoccupantsPage, menuPage, paymentPage, splitcheckPage) {
        
        this.dineInPage = dineInPage;
        this.tableoccupantsPage = tableoccupantsPage;
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.splitcheckPage = splitcheckPage;

        this.productsSelected = false;
    }

    async execute(tableNumber, occupants) {

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

            await this.menuPage.openOrder();

            this.productsSelected = true;
            return;
        }
        
        // Validamos primero si el botón Split existe
        const splitVisible = await this.paymentPage.isSplitButtonVisible();

        if (splitVisible) {
            // Solo si existe se ejecuta el flujo normal
            console.log("ERROR FUNCIONAL: Split no debe existir con orden vacía");
            await this.paymentPage.tapSplitSafe();
            await this.splitcheckPage.tapAddTicketSafe();
            const doneExists = await this.splitcheckPage.isDoneButtonVisible();
            if (doneExists) {
                throw new Error(
                    'ERROR FUNCIONAL: Botón Done existe con orden vacía'
                );
                
            } 
            console.log('VALIDACIÓN EXITOSA: Botón Split y Done no existen con orden vacía');
        } 
    }
}

module.exports = QAPOS15Flow;