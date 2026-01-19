const BasePage = require('./BasePage');

class DineInMenuPage extends BasePage {
    constructor() {
        super();

        // Elemento ancla: Grid de productos (menú Dine In)
        this.anchorSelector = 'menuItemsRecycler';

        // GridView de productos
        this.productsGrid = 'menuItemsRecycler';

        // Botón para mostrar la cuenta
        this.showOrderButton = 'btnShowOrder';
    }

    // Verifica que el menú Dine In esté visible
    /*async isDisplayed() {
        return await this.isDisplayedElement(this.anchorSelector);
    }*/
    async isDisplayed() {
        try {
            const driver = await this.getDriver();
            const el = await driver.$('id=com.juvomos.pos:id/btnShowOrder');
            return await el.isDisplayed();
        } catch {
            return false;
        }
    }


    // Selecciona un producto por nombre exacto
    /*async selectProductByName(productName) {
        const driver = await this.getDriver();

        const productSelector =
            `//*[@resource-id="com.juvomos.pos:id/category_product_name" and @text="${productName}"]`;

        const productEl = await driver.$(productSelector);
        await productEl.click();
    }*/
    
    async selectProductByName(productName) {
    const driver = await this.getDriver();

    const productCard = await driver.$(
        `//androidx.cardview.widget.CardView
         [.//android.widget.TextView
         [@resource-id="com.juvomos.pos:id/category_product_name"
         and @text="${productName}"]]`
    );

    const isVisible = await productCard.isDisplayed();
    if (!isVisible) {
        throw new Error(`Producto no visible: ${productName}`);
    }

    await productCard.click();
}
     
    // Selecciona un producto disponible aleatorio (no agotado)
    async selectRandomAvailableProduct() {
        const driver = await this.getDriver();

        const gridEl = await driver.$(
            `//*[@resource-id="com.juvomos.pos:id/${this.productsGrid}"]`
        );
        await gridEl.waitForExist({ timeout: 10000 });

        const items = await gridEl.$$(
            './androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"]'
        );

        if (!items || items.length === 0) {
            throw new Error('No se encontraron productos en el menú Dine In');
        }

        const availableItems = [];

        for (const item of items) {
            const notAvailable = await item.$(
                './/*[@resource-id="com.juvomos.pos:id/productNotAvailable"]'
            );

            if (!(await notAvailable.isExisting())) {
                availableItems.push(item);
            }
        }

        if (availableItems.length === 0) {
            throw new Error('No hay productos disponibles en Dine In');
        }

        const randomIndex = Math.floor(Math.random() * availableItems.length);
        await availableItems[randomIndex].click();
    }

    // Abre la cuenta actual
   
    async openOrder() {
        await this.click(this.showOrderButton);
    }
   /*
   async openOrder() {
       const driver = await this.getDriver();
       const showOrderButton = await driver.$(
        'id=com.juvomos.pos:id/btnShowOrder'
       );
       const exists = await showOrderButton.isExisting().catch(() => false);
       if (!exists) {
        // NO lanzar error → el flujo puede continuar
        return false;
       }
       await showOrderButton.click();
       return true;
    }

    async openOrder_2() {
        await this.click(this.showOrderButton);
    }
*/
    async goToPayment() {
        await this.openOrder();
        const driver = await this.getDriver();

        // Espera explícita y click en el botón Pagar
        const payButtonSelector = '//*[@resource-id="com.juvomos.pos:id/idPayButton"]';
        const payButton = await driver.$(payButtonSelector);
        await payButton.waitForDisplayed({ timeout: 20000 }); // clave: esperar a que sea visible
        await payButton.click();
    }

    // Propuesta exacta (NO implementada aquí)
     async sendOrder() {
    // Click en botón "Abrir" / "Enviar"
    }

    /**
     * Selecciona el PRIMER producto disponible del grid,
     * usando nombre y validando que no esté agotado.
     */
    async selectFirstAvailableProduct() {
        const driver = await this.getDriver();

        const gridEl = await driver.$(
            `//*[@resource-id="com.juvomos.pos:id/${this.productsGrid}"]`
        );
        await gridEl.waitForExist({ timeout: 10000 });

        const items = await gridEl.$$(
            './androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"]'
        );

        for (const item of items) {
            const notAvailable = await item.$(
                './/*[@resource-id="com.juvomos.pos:id/productNotAvailable"]'
            );

            // Solo selecciona productos NO agotados
            if (!(await notAvailable.isExisting())) {
                const productNameEl = await item.$(
                    './/*[@resource-id="com.juvomos.pos:id/category_product_name"]'
                );

                // Click en el card completo, no en el texto
                await item.click();

                return;
            }
        }

        throw new Error('No se encontró ningún producto disponible');
    }

    /**
     * Abre la cuenta actual.
     * Usa el botón real del XML: btnShowOrder
     */
    
   async openOrderSafe() {
    try {
        const driver = await this.getDriver(); // ✔
        const button = await driver.$(`id=com.juvomos.pos:id/${this.showOrderButton}`);
        const exists = await button.isExisting();
        if (!exists) {
            throw new Error('No se encontró btnShowOrder');
        }
        await button.click();
    } catch (error) {
        throw new Error('No se pudo abrir la cuenta: ' + error.message);
    }
}
    
    async openOrderAccount() {
        await this.openOrder();
    }

    /**
     * Selecciona el primer ítem del ticket,
     * correspondiente a los productos ya añadidos.
     */
    async selectFirstItemFromTicket() {
        const driver = await this.getDriver();

        const ticketRecycler =
            '//*[@resource-id="com.juvomos.pos:id/idTicketListRecycler"]';

        const recyclerEl = await driver.$(ticketRecycler);
        await recyclerEl.waitForExist({ timeout: 10000 });

        // Primer ítem real del ticket
        const firstItem = await recyclerEl.$('./android.view.ViewGroup');

        await firstItem.click();
    }

}

module.exports = DineInMenuPage;