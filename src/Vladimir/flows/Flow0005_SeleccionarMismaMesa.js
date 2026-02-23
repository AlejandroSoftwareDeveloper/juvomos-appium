class Flow0005_SeleccionarMismaMesa {
    constructor(dineInPage, tableoccupantsPage, checkPage) {
        this.dineInPage = dineInPage;
        this.tableoccupantsPage = tableoccupantsPage;
}

    async executeflow(tableNumber) {
        // Validación inicial segura
        if (!await this.dineInPage.isDisplayed()) {
            throw new Error('DineInPage no visible al iniciar Flow0006');
        }

        // Acción
        await this.dineInPage.selectDineIn();

        // Punto de estabilización: esperar a que la pantalla de mesas exista
        await browser.pause(1000);

        // Selección de mesa
        if (tableNumber) {
            await this.dineInPage.selectTable(tableNumber);
        } else {
            await this.dineInPage.selectRandomFreeTable();
        }
    }

}

module.exports = Flow0005_SeleccionarMismaMesa;