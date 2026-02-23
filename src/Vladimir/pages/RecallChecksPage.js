const BasePage = require('./BasePage');

class RecallChecksPage extends BasePage {
    constructor() {
        super();

        this.anchorSelector = 'id=com.juvomos.pos:id/check_detail_recycler';
        this.checksRecycler = 'id=com.juvomos.pos:id/check_detail_recycler';
        this.checkContainer = 'id=com.juvomos.pos:id/check_container';
        this.orderTypeFilterRecycler = 'id=com.juvomos.pos:id/orderTypeFilterRecycler';
        this.closeButton = 'id=com.juvomos.pos:id/imgCloseButtonSecondary';
        this.refreshButton = 'id=com.juvomos.pos:id/btnRefreshRecall';
    }

    async isDisplayed() {
        try {
            const driver = await this.getDriver();
            const anchor = await driver.$(this.anchorSelector);
            return await anchor.isDisplayed();
        } catch {
            return false;
        }
    }

    async getAllChecks() {
        const driver = await this.getDriver();
        const recycler = await driver.$(this.checksRecycler);
        await recycler.waitForExist({ timeout: 10000 });
        return await recycler.$$(this.checkContainer);
    }

    async executeAccountByNumber(accountNumber) {
        try {
            const visible = await this.isDisplayed();
            if (!visible) return false;

            const driver = await this.getDriver();

            // Espera máxima a que aparezca el check
            const selector = `//*[@resource-id="com.juvomos.pos:id/txtValueOrderCheck" and @text="${accountNumber}"]`;
            const accountNumberEl = await driver.$(selector);
            await accountNumberEl.waitForExist({ timeout: 15000 });

            // Contenedor clickeable real del check
            const container = await accountNumberEl.$(
                './ancestor::android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/check_container"]'
            );

            await container.waitForExist({ timeout: 10000 });

            // Long press seguro sobre el check
            await driver.touchAction([
                { action: 'press', element: container },
                { action: 'wait', ms: 300 },
                { action: 'release' }
            ]);

            return true;
        } catch (error) {
            console.error('Error executeAccountByNumber:', error.message);
            return false;
        }
    }


    async openLastCheckSafe() {
        const driver = await this.getDriver();

        // Verificar que la pantalla Recall esté visible
        const visible = await this.isDisplayed();
        if (!visible) {
            throw new Error('La pantalla Recall no está visible');
        }

        // Recycler de checks
        const recycler = await driver.$(this.checksRecycler);
        await recycler.waitForExist({ timeout: 10000 });

        const allChecks = await recycler.$$(this.checkContainer);
        if (!allChecks || allChecks.length === 0) {
            throw new Error('No hay checks en la lista');
        }

        // Último check agregado
        const lastCheck = allChecks[allChecks.length - 1];

        // Tap directo sin scrollIntoView
        await lastCheck.click(); // o await lastCheck.touchAction('tap');

        return true;
    }

    async refreshChecks() {
        const driver = await this.getDriver();
        const btn = await driver.$(this.refreshButton);
        await btn.click();
    }

    async close() {
        const driver = await this.getDriver();
        const btn = await driver.$(this.closeButton);
        await btn.click();
    }
}

module.exports = RecallChecksPage;