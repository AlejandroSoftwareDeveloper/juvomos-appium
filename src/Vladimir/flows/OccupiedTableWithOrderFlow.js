const DineInPage = require('../pages/DineInPage');
const TableOccupantsNewPage = require('../pages/TableOccupantsNewPage');
const DineInMenuPage = require('../pages/DineInMenuPage');
const DineInPaymentPagePrueba = require('../pages/DineInPaymentPagePrueba');

class OccupiedTableWithOrderFlow {
    constructor() {
        // Page Objects existentes y estables
        this.dineInPage = new DineInPage();
        this.tableOccupantsPage = new TableOccupantsNewPage();
        this.menuPage = new DineInMenuPage();
        this.paymentPage = new DineInPaymentPagePrueba();
    }

    /**
     * Ejecuta el flujo completo de:
     * - Mesa ocupada
     * - Con orden enviada
     *
     @param {1} tableNumber (opcional)
     @param {1} occupants (opcional)
     * @param {number} productsCount cantidad de productos a agregar
     */
    async executeFlow(tableNumber, occupants) {


        // ================================
        // 4. Agregar productos
        // ================================

        if (!this.productsSelected) {
            
            // ================================
            // 1. Seleccionar tipo de orden
            // ================================

            // Espera y valida que la pantalla de tipos de orden esté visible
            await this.dineInPage.isDisplayed();

            // Selecciona el tipo de orden Dine In
            await this.dineInPage.selectDineIn();

            // ================================
            // 2. Seleccionar mesa
            // ================================

            // Si no se pasa número de mesa, se elige una libre aleatoria
            if (tableNumber) {
                await this.dineInPage.selectTable(tableNumber);
            } else {
                await this.dineInPage.selectRandomFreeTable();
            }

            // ================================
            // 3. Definir ocupantes
            // ================================

            // Selecciona número de ocupantes (fijo o aleatorio válido)
            if (occupants) {
                await this.tableOccupantsPage.selectNumberOfOccupants(occupants);
            } else {
                await this.tableOccupantsPage.selectNumberOfOccupants();
            }

            // Confirma la selección de ocupantes
            await this.tableOccupantsPage.confirmSelection();

            if (await this.menuPage.isDisplayed()) {
                await this.menuPage.selectProductByName('Apache');
                await this.menuPage.selectProductByName('Burger Tender');
                await this.menuPage.selectProductByName('General Grill');
                this.productsSelected = true;
            }
            // Abrir cuenta → seleccionar item → hold
            await this.menuPage.openOrder();
            // La app vuelve al menú automáticamente
            return; // CLAVE: corta aquí
        }            
        
        //PASO 5: enviar check
        await this.paymentPage.tapSendOrderSafe();
    }
}

module.exports = OccupiedTableWithOrderFlow;