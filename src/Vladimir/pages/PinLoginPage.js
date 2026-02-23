//Clase para los elementos la pantalla de autenticación 

const BasePage = require('./BasePage');

class PinLoginPage extends BasePage {
    constructor(driver) {
        super(driver);

        // ===== ELEMENTO ANCLA =====
        // Define que esta pantalla está visible
        this.anchor = 'id=com.juvomos.pos:id/layoutPinAuth';

        // ===== ELEMENTOS PRINCIPALES =====
        this.pinInput = 'id=com.juvomos.pos:id/txt_pin_user';

        // Teclado numérico
        this.key1 = 'id=com.juvomos.pos:id/one_btn_pin';
        this.key2 = 'id=com.juvomos.pos:id/two_btn_pin';
        this.key3 = 'id=com.juvomos.pos:id/three_btn_pin';
        this.key4 = 'id=com.juvomos.pos:id/four_btn_pin';
        this.key5 = 'id=com.juvomos.pos:id/five_btn_pin';
        this.key6 = 'id=com.juvomos.pos:id/six_btn_pin';
        this.key7 = 'id=com.juvomos.pos:id/seven_btn_pin';
        this.key8 = 'id=com.juvomos.pos:id/eight_btn_pin';
        this.key9 = 'id=com.juvomos.pos:id/nine_btn_pin';
        this.key0 = 'id=com.juvomos.pos:id/zero_btn_pin';

        // Acciones
        this.clearButton = 'id=com.juvomos.pos:id/clear_back_arrow';
        this.confirmButton = 'id=com.juvomos.pos:id/check_pin';

        // Opcional / flujo alterno
        this.timeClockButton = 'id=com.juvomos.pos:id/buttonTimeClock';
    }

    // ===== VALIDACIÓN DE PANTALLA =====
    async isDisplayed() {
        return await this.safeIsDisplayed(this.anchor);
    }

    // ===== ACCIONES =====
    async enterPin(pin) {
        const digits = pin.toString().split('');

        for (const digit of digits) {
            await this.tapDigit(digit);
        }
    }

    async tapDigit(digit) {
        const map = {
            '0': this.key0,
            '1': this.key1,
            '2': this.key2,
            '3': this.key3,
            '4': this.key4,
            '5': this.key5,
            '6': this.key6,
            '7': this.key7,
            '8': this.key8,
            '9': this.key9,
        };

        if (!map[digit]) {
            throw new Error(`Dígito inválido: ${digit}`);
        }

        await this.click(map[digit]);
    }

    async confirmPin() {
        await this.click(this.confirmButton);
    }

    async clearPin() {
        await this.click(this.clearButton);
    }

    async goToTimeClock() {
        await this.click(this.timeClockButton);
    }
}

module.exports = PinLoginPage;