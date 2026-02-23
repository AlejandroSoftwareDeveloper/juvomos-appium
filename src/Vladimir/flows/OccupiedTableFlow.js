// Descripción: Flow que gestiona la selección de una mesa ocupada sin realizar pedido.

const DineInPage = require('../pages/DineInPage');
const TableOccupantsNewPage = require('../pages/TableOccupantsNewPage');
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPage = require('../pages/DineInPaymentPage');

class OccupiedTableFlow {
    constructor() {
        this.dineInPage = new DineInPage();
        this.tableOccupantsNewPage = new TableOccupantsNewPage();
        this.dineInMenuPage = new DineInMenuPage();
        this.dineInPaymentPage = new DineInPaymentPage();
    }

    // Flujo principal de "Mesa ocupada sin orden"
    async executeFlow(tableNumber, occupants) {
        // Paso 1: Esperar que Dine In esté visible y seleccionarlo
        const isDineInVisible = await this.dineInPage.isDisplayed();
        if (!isDineInVisible) {
            throw new Error('Pantalla Dine In no visible');
        }
        await this.dineInPage.selectDineIn();

        // Paso 2: Seleccionar la mesa indicada o una aleatoria libre si no se pasa `tableNumber`
        //let selectedTableNumber = tableNumber;
        let selectedTableNumber = tableNumber;
        if (!selectedTableNumber) {
            const tableText = await this.dineInPage.selectRandomFreeTable();
            selectedTableNumber = parseInt(tableText.replace('Mesa #', ''), 10);
        } else {
            await this.dineInPage.selectTable(selectedTableNumber);
        }

        // Paso 3: Seleccionar número de ocupantes usando TableOccupantsNewPage
        if (occupants) {
            await this.tableOccupantsNewPage.selectNumberOfOccupants(occupants);
        } else {
            await this.tableOccupantsNewPage.selectNumberOfOccupants(); // aleatorio 1-4
        }
        await this.tableOccupantsNewPage.confirmSelection();

        // Paso 4: Validar que quedamos en el menú Dine In
        const isMenuVisible = await this.dineInMenuPage.isDisplayed();
        if (!isMenuVisible) {
            throw new Error('No se llegó al menú Dine In');
        }

        // Paso 5: Ir a pantalla de pago
        await this.dineInMenuPage.goToPayment();

        // Paso 6: Validar que la pantalla de pago se mostró
        const isPaymentVisible = await this.dineInPaymentPage.isDisplayed();
        if (!isPaymentVisible) {
            throw new Error('No se llegó a la pantalla de pago de Dine In');
        }

        // Paso 7: Cancelar pago para regresar a Dine In Menu
        await this.dineInPaymentPage.cancel();

        // Paso 8: Validar regreso a la pantalla Dine In Menu
        const isDineInVisibleAgain = await this.dineInPage.isDisplayed();
        if (!isDineInVisibleAgain) {
            throw new Error('No se volvió a la pantalla Dine In tras cancelar el pago');
        }

        // Paso 9: Validar que la pantalla de mesas esté visible
        // No seleccionamos Dine In de nuevo, solo verificamos el grid de mesas
        const isTableScreenVisible = await this.dineInPage.isDisplayed(); // ya usa anchorSelector de mesas
        if (!isTableScreenVisible) {
            throw new Error('No se abrió la pantalla de mesas Dine In al final del flujo');
        }
        
        // Paso 10: Esperar que Dine In esté visible y seleccionarlo
        isDineInVisible = await this.dineInPage.isDisplayed();
        if (!isDineInVisible) {
            throw new Error('Pantalla Dine In no visible');
        }
        await this.dineInPage.selectDineIn();
         // Una vez visible, seleccionamos Dine In
         //await this.dineInPage.selectDineIn();

        // Paso 11: Seleccionar la mesa indicada o una aleatoria libre si no se pasa `tableNumber`
        //let selectedTableNumber = tableNumber;
        selectedTableNumber = tableNumber;
        if (!selectedTableNumber) {
            const tableText = await this.dineInPage.selectRandomFreeTable();
            selectedTableNumber = parseInt(tableText.replace('Mesa #', ''), 10);
        } else {
            await this.dineInPage.selectTable(selectedTableNumber);
        }

        // Paso 12: Seleccionar número de ocupantes usando TableOccupantsNewPage
        if (occupants) {
            await this.tableOccupantsNewPage.selectNumberOfOccupants(occupants);
        } else {
            await this.tableOccupantsNewPage.selectNumberOfOccupants(); // aleatorio 1-4
        }
        await this.tableOccupantsNewPage.confirmSelection();

        // Paso 13: Validar que quedamos en el menú Dine In
        isMenuVisible = await this.dineInMenuPage.isDisplayed();
        if (!isMenuVisible) {
            throw new Error('No se llegó al menú Dine In');
        }
    }
}



module.exports = OccupiedTableFlow;