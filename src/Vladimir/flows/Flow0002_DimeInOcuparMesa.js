class Flow0002_DimeInOcuparMesa {
    constructor(dineInPage, tableoccupantsPage) {
        this.dineInPage = dineInPage;
        this.tableoccupantsPage = tableoccupantsPage;
}

    async executeflow(tableNumber = null, occupants = null) {

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
    }
}

module.exports = Flow0002_DimeInOcuparMesa;