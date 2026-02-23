// Descripción: Página para seleccionar la opción Dine In y la mesa.

const BasePage = require('./BasePage');

class DineInPage extends BasePage {
    constructor() {
        super();

        // Elemento ancla (solo id)
        this.anchorSelector = 'orderTypeRecycler';

        // Botón Dine In (XPath válido)
        this.dineInButton = '//*[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Dine In"]';
    }

    // Seleccionar Dine In
    async selectDineIn() {
        const driver = await this.getDriver();

        // Esperamos que el elemento ancla exista primero
        const anchorEl = await driver.$(`//*[@resource-id="com.juvomos.pos:id/${this.anchorSelector}"]`);
        await anchorEl.waitForExist({ timeout: 20000 }); // aumento de timeout para evitar fallas

        // Verificamos visibilidad con método que ya funciona
        const isVisible = await this.isDisplayedElement(this.anchorSelector);
        if (!isVisible) {
            throw new Error('Pantalla Dine In no visible');
        }

        // Click en el botón Dine In
        const dineInEl = await driver.$(this.dineInButton);
        await dineInEl.click();
    }



    // Seleccionar una mesa por número
    async selectTable(tableNumber) {
        if (tableNumber === undefined || tableNumber === null) {
            throw new Error('Debe especificar un número de mesa válido');
        }
        const driver = await this.getDriver();
        const tableSelector = `//*[@resource-id="com.juvomos.pos:id/tableNumberValue" and @text="Mesa #${tableNumber}"]`;
        const tableEl = await driver.$(tableSelector);
        await tableEl.click();
    }

    // Seleccionar aleatoriamente una mesa libre
    async selectRandomFreeTable() {
        const driver = await this.getDriver();

        // Selector del GridView de mesas
        const tablesGridSelector = '//*[@resource-id="com.juvomos.pos:id/floorLayoutId"]/android.widget.GridView';

        // Esperar que el GridView exista (no solo esté visible)
        const grid = await driver.$(tablesGridSelector);
        await grid.waitForExist({ timeout: 20000 });

        // Tomamos todos los items de mesa como descendientes directos
        const tables = await grid.$$(
            './/*[@resource-id="com.juvomos.pos:id/tableItemGeneralLayout"]'
        );

        if (!tables || tables.length === 0) {
            throw new Error('No se encontraron mesas en el GridView');
        }

        // Filtrar mesas libres (tableEmployeeName = "N/A")
        const freeTables = [];
        for (const table of tables) {
            const employeeNameEl = await table.$(
                './/*[@resource-id="com.juvomos.pos:id/tableEmployeeName"]'
            );
            const employeeName = await employeeNameEl.getText();
            if (employeeName === 'N/A') {
                freeTables.push(table);
            }
        }

        if (freeTables.length === 0) {
            throw new Error('No hay mesas libres');
        }

        // Elegimos una mesa libre aleatoria
        const randomIndex = Math.floor(Math.random() * freeTables.length);
        const selectedTable = freeTables[randomIndex];

        // Obtenemos el número de mesa
        const tableNumberEl = await selectedTable.$(
            './/*[@resource-id="com.juvomos.pos:id/tableNumberValue"]'
        );
        const tableNumberText = await tableNumberEl.getText(); // ej: "Mesa #3"

        // Click en la mesa seleccionada
        await selectedTable.click();

        return tableNumberText;
    }

    // Verificar si la pantalla Dine In está visible
    /*
    async isDisplayed() {
        const driver = await this.getDriver();
        const anchorEl = await driver.$(`//*[@resource-id="com.juvomos.pos:id/${this.anchorSelector}"]`);
        await anchorEl.waitForExist({ timeout: 20000 }); // usamos waitForExist para robustez
        return await this.isDisplayedElement(this.anchorSelector);
    }
    */


    async isDisplayed() {
    return await this.isDisplayedElement(this.anchorSelector);
}
}

module.exports = DineInPage;