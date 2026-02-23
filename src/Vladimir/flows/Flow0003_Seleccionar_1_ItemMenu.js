class Flow0003_Seleccionar_1_ItemMenu {
    constructor(menuPage) {
        this.menuPage = menuPage;
}
    async executeflow() {
         if (await this.menuPage.isDisplayed()) {
                await this.menuPage.selectProductByName('General Grill');
            }
            await this.menuPage.openOrderSafe();
    }
}

module.exports = Flow0003_Seleccionar_1_ItemMenu;