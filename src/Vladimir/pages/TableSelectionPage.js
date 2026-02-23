class TableSelectionPage {
    constructor(driver) {
        this.driver = driver;

        // =================================================
        // ELEMENTO ANCLA: contenedor general de mesas
        // =================================================
        this.mesasContainerId = 'com.juvomos.pos:id/rvTables';
    }

    // =================================================
    // Verifica si la pantalla está visible usando el ancla
    // =================================================
    async isDisplayed() {
        try {
            const container = await this.driver.$(`~${this.mesasContainerId}`);
            return await container.isDisplayed();
        } catch (error) {
            return false; // Nunca lanza error
        }
    }

    // =================================================
    // Selecciona una mesa específica por nombre (ej: "Mesa #1")
    // =================================================
    async selectMesa(mesaNombre) {
        // Buscar la mesa por resource-id y texto
        const mesas = await this.driver.$$(`//*[@resource-id="com.juvomos.pos:id/tableNumberValue"]`);

        for (const mesa of mesas) {
            const text = await mesa.getText();
            if (text === mesaNombre) {
                await mesa.click(); // Hacer click en la mesa
                return;
            }
        }

        // Si no encuentra la mesa, no hace nada (flujo seguro)
    }

    // =================================================
    // Verifica si una mesa específica está disponible
    // =================================================
    async isMesaDisponible(mesaNombre) {
        try {
            // Buscar todas las mesas
            const mesas = await this.driver.$$(`//*[@resource-id="com.juvomos.pos:id/tableNumberValue"]`);

            for (const mesa of mesas) {
                const text = await mesa.getText();

                if (text === mesaNombre) {
                    // Verificamos si la mesa tiene empleado asignado
                    const parent = await mesa.parentElement(); // Obtener contenedor de la mesa
                    const empleado = await parent.$(`~com.juvomos.pos:id/tableEmployeeName`);
                    const nombreEmpleado = await empleado.getText();

                    // Mesa disponible si no hay empleado asignado
                    return nombreEmpleado === 'N/A';
                }
            }

            // Si no encuentra la mesa, asumimos no disponible
            return false;
        } catch (error) {
            return false; // Nunca lanza error
        }
    }
}

module.exports = TableSelectionPage;