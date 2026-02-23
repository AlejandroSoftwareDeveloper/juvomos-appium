class Flow0003_Seleccionar_3_ItemMenu {
    constructor(menuPage) {
        this.menuPage = menuPage;
}
    async executeflow() {
         if (await this.menuPage.isDisplayed()) {
                await this.menuPage.selectProductByName('Apache');
                await this.menuPage.selectProductByName('Burger Tender');
                await this.menuPage.selectProductByName('General Grill');
            }
            await this.menuPage.openOrderSafe();
    }
}

module.exports = Flow0003_Seleccionar_3_ItemMenu;