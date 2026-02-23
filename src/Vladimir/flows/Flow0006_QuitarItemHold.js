/*class Flow0006_QuitarItemHold {
    constructor(menuPage, paymentPage, holdPage, checkPage) {
        this.menuPage = menuPage;
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;
        this.checkPage = checkPage;
}

    async executeflow() {
       
        if (await this.checkPage.isDisplayed()) {
            await this.checkPage.tapRecall();
        }
        // Punto de estabilización mínimo
        await browser.pause(1000);   

        await this.paymentPage.selectItemFromTicketByName('Apache');
        await this.holdPage.tapHoldItem();

         await browser.pause(1000); 
    }
}*/

class Flow0006_QuitarItemHold {
    constructor(checkPage, paymentPage, holdPage) {
        this.checkPage = checkPage
        this.paymentPage = paymentPage;
        this.holdPage = holdPage;
    }

    async executeflow() {
        const driver = await this.paymentPage.getDriver();

        // ===== Paso 1: esperar Ticket (Payment) =====
        const ticketList = await driver.$(
            'id=com.juvomos.pos:id/idTicketListRecycler'
        );

        const ticketExists = await ticketList
            .waitForExist({ timeout: 20000 })
            .catch(() => false);

        const ticketVisible = ticketExists
            ? await ticketList.isDisplayed()
            : false;

        if (!ticketVisible) {
            throw new Error('Ticket no visible después de esperar 20s');
        }

        if (await this.checkPage.isDisplayed()) {
            await this.checkPage.tapRecall();
        }
        // Punto de estabilización mínimo
        await browser.pause(1000); 

        // ===== Paso 2: seleccionar item =====
        await this.paymentPage.selectItemFromTicketByName('Apache');

        // ===== Paso 3: esperar panel de opciones del item =====
        const itemOptions = await driver.$(
            'id=com.juvomos.pos:id/itemOptions'
        );

        const optionsExist = await itemOptions
            .waitForExist({ timeout: 20000 })
            .catch(() => false);

        const optionsVisible = optionsExist
            ? await itemOptions.isDisplayed()
            : false;

        if (!optionsVisible) {
            throw new Error('Opciones del item no visibles después de esperar 20s');
        }

        // ===== Paso 4: quitar Hold =====
        const holdButton = await driver.$(
            'id=com.juvomos.pos:id/btnHolItem'
        );

        const holdExists = await holdButton
            .waitForExist({ timeout: 20000 })
            .catch(() => false);

        const holdVisible = holdExists
            ? await holdButton.isDisplayed()
            : false;

        if (!holdVisible) {
            throw new Error('Botón Hold no visible después de esperar 20s');
        }

        await holdButton.click();

        return true;
    }
}

module.exports = Flow0006_QuitarItemHold;