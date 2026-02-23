class Flow0003_Seleccionar_2_ItemMenu {
    constructor(menuPage) {
        this.menuPage = menuPage;
}
    async executeflow() {
        if (await this.menuPage.isDisplayed()) {
                await this.menuPage.selectProductByName('Apache');
                await this.menuPage.selectProductByName('Burger Tender');
        }
            //await this.menuPage.openOrderSafe();

        // Validar que seguimos en Menu antes de abrir orden
        const stillInMenu = await this.menuPage.isDisplayed();
        if (!stillInMenu) {
            throw new Error('[Flow0003] Se perdió la pantalla Menu antes de abrir la orden.');
        }

        // 4. Abrir orden (acción final del flujo)
        await this.menuPage.openOrderSafe();
    }
}

module.exports = Flow0003_Seleccionar_2_ItemMenu;