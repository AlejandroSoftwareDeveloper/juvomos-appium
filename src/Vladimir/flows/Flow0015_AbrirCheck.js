class Flow0015_AbrirCheck {
    constructor(checkPage) {
        this.checkPage = checkPage;
    }

    async executeflow() {
        const driver = await this.checkPage.getDriver();

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

        await browser.pause(1000);
        return true;
    }
}
module.exports = Flow0015_AbrirCheck;