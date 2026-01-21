const JUVO = "id:com.juvomos.pos:id/"

// Elementos principales de la pantalla
const PAGE_WELCOME_TEXT = JUVO + "txtWelcomeLicenseId"
const PAGE_INSTRUCTIONS = JUVO + "enterPinToContinue"
const LOGO_IMAGE = JUVO + "imgLogoLicense"
const PIN_INPUT = JUVO + "editPinStore"

// Teclado numérico
const BTN_ZERO = JUVO + "zero_btn_pin"
const BTN_ONE = JUVO + "one_btn_pin"
const BTN_TWO = JUVO + "two_btn_pin"
const BTN_THREE = JUVO + "three_btn_pin"
const BTN_FOUR = JUVO + "four_btn_pin"
const BTN_FIVE = JUVO + "five_btn_pin"
const BTN_SIX = JUVO + "six_btn_pin"
const BTN_SEVEN = JUVO + "seven_btn_pin"
const BTN_EIGHT = JUVO + "eight_btn_pin"
const BTN_NINE = JUVO + "nine_btn_pin"

// Acciones
const BACKSPACE_BTN = JUVO + "clear_back_arrow"
const ACCEPT_BTN = JUVO + "check_pin"

class LicenseRegistrationPage {

    // Métodos de click para el teclado numérico
    async click_btn_zero() {
        await this.btn_zero.click()
    }
    
    async click_btn_one() {
        await this.btn_one.click()
    }
    
    async click_btn_two() {
        await this.btn_two.click()
    }
    
    async click_btn_three() {
        await this.btn_three.click()
    }
    
    async click_btn_four() {
        await this.btn_four.click()
    }
    
    async click_btn_five() {
        await this.btn_five.click()
    }
    
    async click_btn_six() {
        await this.btn_six.click()
    }
    
    async click_btn_seven() {
        await this.btn_seven.click()
    }
    
    async click_btn_eight() {
        await this.btn_eight.click()
    }
    
    async click_btn_nine() {
        await this.btn_nine.click()
    }

    // Métodos de acción
    async click_backspace() {
        await this.backspace_btn.click()
    }

    async click_accept() {
        await this.accept_btn.click()
    }

    // Métodos getter para elementos del teclado
    async get_btn_zero() {
        const btn = this.btn_zero
        return btn
    }
    
    async get_btn_one() {
        const btn = this.btn_one
        return btn
    }
    
    async get_btn_two() {
        const btn = this.btn_two
        return btn
    }
    
    async get_btn_three() {
        const btn = this.btn_three
        return btn
    }
    
    async get_btn_four() {
        const btn = this.btn_four
        return btn
    }
    
    async get_btn_five() {
        const btn = this.btn_five
        return btn
    }
    
    async get_btn_six() {
        const btn = this.btn_six
        return btn
    }
    
    async get_btn_seven() {
        const btn = this.btn_seven
        return btn
    }
    
    async get_btn_eight() {
        const btn = this.btn_eight
        return btn
    }
    
    async get_btn_nine() {
        const btn = this.btn_nine
        return btn
    }

    // Métodos getter para elementos de acción
    async get_backspace_btn() {
        const btn = this.backspace_btn
        return btn
    }

    async get_accept_btn() {
        const btn = this.accept_btn
        return btn
    }

    // Métodos getter para elementos principales
    async get_pin_input() {
        const input = this.pin_input
        return input
    }

    async get_welcome_text() {
        const text = await this.page_welcome_text.getText()
        return text
    }

    async get_instructions_text() {
        const text = await this.page_instructions.getText()
        return text
    }

    // Método para verificar que todos los botones numéricos existen
    async check_all_numbers() {
        const methodNames = [
            'zero', 'one', 'two', 'three',
            'four', 'five', 'six', 'seven',
            'eight', 'nine'
        ];
        
        const elements = await Promise.all(
            methodNames.map(method => this["get_btn_" + method]())
        );
        
        const allExist = elements.every(el => !!el);
        chai.expect(allExist).to.equal(true);
    }

    // Getter para elementos de la página
    get page_welcome_text() { return $(PAGE_WELCOME_TEXT) }
    get page_instructions() { return $(PAGE_INSTRUCTIONS) }
    get logo_image() { return $(LOGO_IMAGE) }
    get pin_input() { return $(PIN_INPUT) }
    
    // Getters para el teclado numérico
    get btn_zero() { return $(BTN_ZERO) }
    get btn_one() { return $(BTN_ONE) }
    get btn_two() { return $(BTN_TWO) }
    get btn_three() { return $(BTN_THREE) }
    get btn_four() { return $(BTN_FOUR) }
    get btn_five() { return $(BTN_FIVE) }
    get btn_six() { return $(BTN_SIX) }
    get btn_seven() { return $(BTN_SEVEN) }
    get btn_eight() { return $(BTN_EIGHT) }
    get btn_nine() { return $(BTN_NINE) }
    
    // Getters para acciones
    get backspace_btn() { return $(BACKSPACE_BTN) }
    get accept_btn() { return $(ACCEPT_BTN) }

}

export default new LicenseRegistrationPage()