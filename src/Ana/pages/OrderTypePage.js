class OrderTypePage {

    get toGoButton() {
    return $('android=new UiSelector().textContains("To Go")');
    }   

    async waitForPage() {
        await this.toGoButton.waitForDisplayed({ timeout: 15000 });
    }
}

module.exports = new OrderTypePage();
