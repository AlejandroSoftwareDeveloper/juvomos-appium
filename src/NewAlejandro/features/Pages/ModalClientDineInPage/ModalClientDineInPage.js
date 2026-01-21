

// ModalClientDineInPage.js
const CLOSE_BUTTON = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/closeGuests"]';
const MESA_LABEL = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/selectedTable"]';
const GUESTS_LABEL = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/guestsText"]';
const GUESTS_INPUT = '//android.widget.EditText[@resource-id="com.juvomos.pos:id/editGuestNumber"]';
const BUTTON_1 = '//android.widget.Button[@resource-id="com.juvomos.pos:id/one_btn_pin"]';
const BUTTON_2 = '//android.widget.Button[@resource-id="com.juvomos.pos:id/two_btn_pin"]';
const BUTTON_3 = '//android.widget.Button[@resource-id="com.juvomos.pos:id/three_btn_pin"]';
const BUTTON_4 = '//android.widget.Button[@resource-id="com.juvomos.pos:id/four_btn_pin"]';
const BUTTON_5 = '//android.widget.Button[@resource-id="com.juvomos.pos:id/five_btn_pin"]';
const BUTTON_6 = '//android.widget.Button[@resource-id="com.juvomos.pos:id/six_btn_pin"]';
const BUTTON_7 = '//android.widget.Button[@resource-id="com.juvomos.pos:id/seven_btn_pin"]';
const BUTTON_8 = '//android.widget.Button[@resource-id="com.juvomos.pos:id/eight_btn_pin"]';
const BUTTON_9 = '//android.widget.Button[@resource-id="com.juvomos.pos:id/nine_btn_pin"]';
const BUTTON_0 = '//android.widget.Button[@resource-id="com.juvomos.pos:id/zero_btn_pin"]';
const CLEAR_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/clear_back_arrow"]';
const CHECK_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/check_pin"]';

class ModalClientDineInPage {
    async click_close(){
        await this.close_button.click();
    }

    async click_button(num){
        const buttonMap = {
            '0': this.button_0,
            '1': this.button_1,
            '2': this.button_2,
            '3': this.button_3,
            '4': this.button_4,
            '5': this.button_5,
            '6': this.button_6,
            '7': this.button_7,
            '8': this.button_8,
            '9': this.button_9
        };
        await buttonMap[num].click();
    }

    async click_clear(){
        await this.clear_button.click();
    }

    async click_check(){
        await this.check_button.click();
    }

    async set_guests_number(num){
        await this.guests_input.setValue(num);
    }

    async get_mesa_number(){
        return await this.mesa_label.getText();
    }

    async get_guests_label(){
        return await this.guests_label.getText();
    }

    get close_button(){ return $(CLOSE_BUTTON) }
    get mesa_label(){ return $(MESA_LABEL) }
    get guests_label(){ return $(GUESTS_LABEL) }
    get guests_input(){ return $(GUESTS_INPUT) }
    get button_1(){ return $(BUTTON_1) }
    get button_2(){ return $(BUTTON_2) }
    get button_3(){ return $(BUTTON_3) }
    get button_4(){ return $(BUTTON_4) }
    get button_5(){ return $(BUTTON_5) }
    get button_6(){ return $(BUTTON_6) }
    get button_7(){ return $(BUTTON_7) }
    get button_8(){ return $(BUTTON_8) }
    get button_9(){ return $(BUTTON_9) }
    get button_0(){ return $(BUTTON_0) }
    get clear_button(){ return $(CLEAR_BUTTON) }
    get check_button(){ return $(CHECK_BUTTON) }
}

export default new ModalClientDineInPage();

