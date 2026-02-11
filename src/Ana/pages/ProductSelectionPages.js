class ProductSelectionPages {

    //selecciono los productos en una cuenta
    get productGrid() {
        return $('class name:android.widget.GridView');
    }

    get apache() {
        return $('//android.widget.TextView[@text="Apache"]/ancestor::androidx.cardview.widget.CardView');

    }

    get burgerTender() {
        return $('//android.widget.TextView[@text="Burger Tender"]/ancestor::androidx.cardview.widget.CardView');
    }

    get generalGrill() {
        return $('//android.widget.TextView[@text="General Grill"]/ancestor::androidx.cardview.widget.CardView');
    }
    get ribsAndChicken() {
        return $(
            '//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Ribs & Chicken"]' +
            '/ancestor::androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"]'
        );
    }
    get Food () {
        return $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemDepartmentName" and @text="Food2.0"]/parent::*');
    }
    get Entree () {
        return $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/selectedCategoryItem" and @text="Entree"]/parent::*');
    }
    get ChickenBowl () {
        return $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Chicken Bowl"]/parent::*');
    }
    get BeefBowl () {
        return $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Beef Bowl"]/parent::*');
    }
    get ChickenPasta () {
        return $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Chicken Pasta"]/..');
    }
    get mild() {
        return $('//android.widget.TextView[@text="Mild"]/ancestor::android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutCardModifierItem"]');
    }

    get listoButton() {
        return $('id=com.juvomos.pos:id/btnDone');
    }

    get beveragesDepartment() {
        return $(
            '//android.widget.TextView[@text="Beverages" and @resource-id="com.juvomos.pos:id/itemDepartmentName"]' +
            '/parent::android.widget.LinearLayout'
        );
    }

    get fantaOrange() {
        return $(
            '//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Fanta Orange"]' +
            '/ancestor::androidx.cardview.widget.CardView'
        );
    }
    get coke() {
        return $(
            '//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Coke"]' +
            '/ancestor::androidx.cardview.widget.CardView'
        );
    }
    async selectThreeProducts() {
        await this.waitForPage();

        await this.apache.waitForDisplayed();
        await this.apache.click();

        await this.burgerTender.waitForDisplayed();
        await this.burgerTender.click();

        await this.generalGrill.waitForDisplayed();
        await this.generalGrill.click();
    }

    async MostrarProductos() {
        const showItemBtn = await $('id=com.juvomos.pos:id/btnShowItem');
        await showItemBtn.waitForDisplayed({ timeout: 10000 });
        await showItemBtn.click();
    }

    async selectNewProducts(cant) {
        await this.waitForPage();

        const productsFlow = [
            async () => {
                await this.Food.waitForDisplayed({ timeout: 20000 });
                await this.Food.click();
                await this.Entree.waitForDisplayed({ timeout: 20000 });
                await this.Entree.click();
            },        
            async () => {
                await this.BeefBowl.waitForDisplayed({ timeout: 20000 });
                await this.BeefBowl.click();
            },
            async () => {
                await this.ChickenPasta.waitForDisplayed({ timeout: 20000 });
                await this.ChickenPasta.click();
            }
        ];

        if (cant > productsFlow.length) {
            throw new Error(`Cantidad solicitada (${cant}) mayor a productos disponibles (${productsFlow.length})`);
        }

        for (let i = 0; i < cant; i++) {
            await productsFlow[i]();
        }
    }

    //seleccionar la cantidad de productos
    async selectProducts(cant) {
        await this.waitForPage();

        const productsFlow = [
            async () => { await this.apache.waitForDisplayed(); await this.apache.click(); },
            async () => { await this.burgerTender.waitForDisplayed(); await this.burgerTender.click(); },
            async () => { await this.generalGrill.waitForDisplayed(); await this.generalGrill.click(); },
            async () => {
                await this.ribsAndChicken.waitForDisplayed({ timeout: 20000 });
                await this.ribsAndChicken.click();
                await this.mild.waitForDisplayed({ timeout: 10000 });
                await this.mild.click();
                await this.listoButton.waitForEnabled({ timeout: 10000 });
                await this.listoButton.click();
            },
            async () => {
                await this.beveragesDepartment.waitForDisplayed({ timeout: 15000 });
                await this.beveragesDepartment.click();
            },
            async () => { await this.coke.waitForDisplayed(); await this.coke.click(); },
            async () => { await this.fantaOrange.waitForDisplayed(); await this.fantaOrange.click(); },
            async () => {
                await this.Food.waitForDisplayed({ timeout: 20000 });
                await this.Food.click();
                await this.Entree.waitForDisplayed({ timeout: 20000 });
                await this.Entree.click();
            },        
            async () => {
                await this.ChickenBowl.waitForDisplayed({ timeout: 20000 });
                await this.ChickenBowl.click();
            },
            async () => {
                await this.BeefBowl.waitForDisplayed({ timeout: 20000 });
                await this.BeefBowl.click();
            }


        ];

        if (cant > productsFlow.length) {
            throw new Error(`Cantidad solicitada (${cant}) mayor a productos disponibles (${productsFlow.length})`);
        }

        for (let i = 0; i < cant; i++) {
            await productsFlow[i]();
        }
    }


    async goToAccount() {
        const btn = $('id=com.juvomos.pos:id/btnShowOrder');
        await btn.waitForDisplayed({ timeout: 20000 });
        await btn.waitForEnabled({ timeout: 20000 });
        await btn.click();      

    }
    async goToAcc() {
        await this.accountButton.waitForDisplayed({ timeout: 10000 });
        await this.accountButton.click();
    }
    get accountButton() {
        return $('id=com.juvomos.pos:id/btnShowOrder');
    }

    get gridView() {
        return $('class name:android.widget.GridView');
    }

    get recyclerView() {
        return $('class name:androidx.recyclerview.widget.RecyclerView');
    }

    async waitForPage() {
        await browser.waitUntil(async () => {
            return (await this.gridView.isDisplayed()) ||
                (await this.recyclerView.isDisplayed());
        }, {
            timeout: 20000,
            timeoutMsg: 'No apareció GridView ni RecyclerView de productos'
        });
    }
}

module.exports = new ProductSelectionPages();
