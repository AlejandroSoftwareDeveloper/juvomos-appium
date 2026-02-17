class BreakTest {
   async botonCuenta() {
        await this.accountButton.waitForDisplayed({ timeout: 10000 });
        await this.accountButton.click();
        await this.cancelButton.waitForDisplayed({ timeout: 10000 });
        await this.cancelButton.click();
        await this.cancelButtonMsG.waitForDisplayed({ timeout: 10000 });
        await this.cancelButtonMsG.click();


    }
    get accountButton() {
        return $('id=com.juvomos.pos:id/btnShowOrder');
    }

     get cancelButtonMsG() {
        return $('id=com.juvomos.pos:id/cancelDialog');
    }

    get cancelButton() {
        return $('id=com.juvomos.pos:id/idCancelButton');
    }

    get CloseOrden() {
        return $('id=com.juvomos.pos:id/imgCloseButton')
    }

    async botonCancel() {

        await this.cancelButton.waitForDisplayed({ timeout: 10000 });
        await this.cancelButton.click();
    }

    async closeTOrden() {
        await this.CloseOrden.waitForDisplayed({ timeout: 10000 });
        await this.CloseOrden.click();
        }

    
}

module.exports = new BreakTest();
