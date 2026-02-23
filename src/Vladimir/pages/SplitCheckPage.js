const BasePage = require('./BasePage');

class SplitCheckPage extends BasePage {
    constructor() {
        super();

        // ===== Elemento ancla =====
        // Un elemento estable que indica que la pantalla de split está visible
        this.anchorSelector = 'id=com.juvomos.pos:id/layout_split_fragment';

        // ===== Botones principales =====
        this.btnAddTicket = 'id=com.juvomos.pos:id/btnAddTicket';
        this.btnSplitEvenly = 'id=com.juvomos.pos:id/btnSplitEvenly';
        this.btnSplitByPosition = 'id=com.juvomos.pos:id/btnSplitPosition';
        this.btnCancel = 'id=com.juvomos.pos:id/btnCancel';
        this.btnDone = 'id=com.juvomos.pos:id/btnDone';

        // ===== Recycler / listas =====
        this.recyclerSplitChecks = 'id=com.juvomos.pos:id/recyclerSplitChecks';
        this.splitRecycler = 'id=com.juvomos.pos:id/split_recycler';

        // ===== Elementos de items =====
        this.txtCheckNumberSplit = 'id=com.juvomos.pos:id/txtCheckNumberSplit';
        this.txtProductNameSplit = 'id=com.juvomos.pos:id/txtProductNameSplit';
        this.txtQuantitySplit = 'id=com.juvomos.pos:id/txtQuantitySplit';
    }

    /**
     * Verifica si la pantalla Split Check está visible
     */
    async isDisplayed() {
        return await this.isDisplayedElement(this.anchorSelector);
    }

    /**
     * Agrega una nueva cuenta
     */
    async tapAddTicket() {
        await this.click(this.btnAddTicket);
    }

    async tapAddTicketSafe() {
        const driver = await this.getDriver();
        const btn = await driver.$('id=com.juvomos.pos:id/btnAddTicket'); // directamente aquí
        const visible = await btn.isDisplayed().catch(() => false);
        if (!visible) {
            throw new Error('Botón Agregar Cuenta no visible en pantalla Split Check');
        }
        await btn.click();
    }

    /**
     * Divide equitativamente las cuentas
     */
    async tapSplitEvenly() {
        await this.click(this.btnSplitEvenly);
    }

    /**
     * Divide las cuentas por posición
     */
    async tapSplitByPosition() {
        await this.click(this.btnSplitByPosition);
    }

    /**
     * Cancela la operación de split
     */
    async tapCancel() {
        await this.click(this.btnCancel);
    }

    /**
     * Termina la operación de split
     */
    async tapDone() {
        await this.click(this.btnDone);
    }

    async tapDoneSafe() {
    const driver = await this.getDriver();
    const doneBtn = await driver.$('id=com.juvomos.pos:id/btnDone');
    if (!(await doneBtn.isExisting())) {
        console.log("Done no disponible → ejecución bloqueada correctamente");
        return false;
    }
    await doneBtn.click();
    return true;
}
    /**
     * Retorna todos los items en el recycler principal de split
     */
    async getAllSplitChecks() {
        const driver = await this.getDriver();
        const recycler = await driver.$(this.recyclerSplitChecks);
        await recycler.waitForExist({ timeout: 10000 });
        return await recycler.$$(this.txtCheckNumberSplit);
    }

    /**
     * Retorna todos los productos de un split específico
     */
    async getProductsFromSplit(splitIndex = 0) {
        const driver = await this.getDriver();
        const recycler = await driver.$(this.splitRecycler);
        await recycler.waitForExist({ timeout: 10000 });
        const allItems = await recycler.$$(this.txtProductNameSplit);
        return allItems;
    }

 async selectProductFromSplit(productName) {
    const driver = await this.getDriver();
    const recycler = await driver.$('id=com.juvomos.pos:id/split_recycler');
    await recycler.waitForExist({ timeout: 10000 });

    const allCards = await recycler.$$('id=com.juvomos.pos:id/cardSplit');

    for (const card of allCards) {
        const productText = await card.$('id=com.juvomos.pos:id/txtProductNameSplit');
        const text = await productText.getText();
        if (text.trim() === productName) {
            await productText.waitForDisplayed({ timeout: 5000 });
            await productText.click(); // click directo sobre el TextView
            return;
        }
    }

    throw new Error(`Producto "${productName}" no encontrado en los split cards`);
}

    async selectSplitCheckByIndex(index = 0) {
        const driver = await this.getDriver();
        if (!(await this.isDisplayed())) {
            throw new Error('Pantalla Split Check no visible');
        }

        const recycler = await driver.$(this.recyclerSplitChecks);
        await recycler.waitForExist({ timeout: 10000 });

        const checks = await recycler.$$(this.txtCheckNumberSplit);

        if (!checks || checks.length === 0) {
            throw new Error('No hay cuentas disponibles en Split');
        }

        if (index >= checks.length) {
            throw new Error(`Índice de cuenta inválido: ${index}`);
        }

        await checks[index].waitForDisplayed({ timeout: 5000 });
        await checks[index].click();
    }

    async isDoneExecutableSafe() {
        const driver = await this.getDriver();
        const el = await driver.$('id=com.juvomos.pos:id/btnDone');

        const exists = await el.isExisting();
        if (!exists) {
            return false; // No existe → correcto
        }

        const enabled = await el.isEnabled();
        return enabled; // true = ERROR funcional
    }

    async isDoneButtonVisible(timeout = 5000) {
        const driver = await this.getDriver();
        try {
            const doneBtn = await driver.$('id=com.juvomos.pos:id/btnDone');
            return await doneBtn.isDisplayed({ timeout });
        } catch {
           // Si no existe o no está visible
            return false;
        }
    }

}

module.exports = SplitCheckPage;