const BasePage = require('./BasePage');

class LicensePinPage extends BasePage {
    constructor() {
        super();
    }

    // ELEMENTO ANCLA: Imagen logo de licencia
    get imgLogoLicense() {
        return this.driver.$('id=com.juvomos.pos:id/imgLogoLicense');
    }

    // Input PIN
    get inputPinStore() {
        return this.driver.$('id=com.juvomos.pos:id/editPinStore');
    }

    // Botones numéricos
    get btn1() { return this.driver.$('id=com.juvomos.pos:id/one_btn_pin'); }
    get btn2() { return this.driver.$('id=com.juvomos.pos:id/two_btn_pin'); }
    get btn3() { return this.driver.$('id=com.juvomos.pos:id/three_btn_pin'); }
    get btn4() { return this.driver.$('id=com.juvomos.pos:id/four_btn_pin'); }
    get btn5() { return this.driver.$('id=com.juvomos.pos:id/five_btn_pin'); }
    get btn6() { return this.driver.$('id=com.juvomos.pos:id/six_btn_pin'); }
    get btn7() { return this.driver.$('id=com.juvomos.pos:id/seven_btn_pin'); }
    get btn8() { return this.driver.$('id=com.juvomos.pos:id/eight_btn_pin'); }
    get btn9() { return this.driver.$('id=com.juvomos.pos:id/nine_btn_pin'); }
    get btn0() { return this.driver.$('id=com.juvomos.pos:id/zero_btn_pin'); }

    // Botón Check PIN
    get btnCheckPin() {
        return this.driver.$('id=com.juvomos.pos:id/checkBigImage');
    }

    // Validar visibilidad de la pantalla
    async isPageDisplayed() {
        return await this.isDisplayed(await this.imgLogoLicense);
    }
}

module.exports = LicensePinPage;