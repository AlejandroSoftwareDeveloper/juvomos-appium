// PaymentOptionsPage.js

const BACK_TO_PAYMENT_BTN       = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnBackToPayment"]';
const ORDER_TOTAL_LABEL         = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTotalText"]';
const ORDER_AMOUNT_VALUE        = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderAmount"]';
const CHANGE_LABEL              = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/changeText"]';
const CHANGE_AMOUNT_VALUE       = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/changeAmount"]';
const EMAIL_BUTTON              = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layout_sendEmail"]';
const EMAIL_TEXT                = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/sendEmailText"]';
const PRINT_BUTTON              = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnPrint"]';
const PRINT_TEXT                = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/printText"]';
const NO_PRINT_BUTTON           = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnNoPrint"]';
const NO_PRINT_TEXT             = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/noPrintText"]';

class PaymentOptionsPage {

    async click_back_to_payment(){
        await this.back_to_payment_btn.click();
    }

    async click_email_button(){
        await this.email_button.click();
    }

    async click_print_button(){
        await this.print_button.click();
    }

    async click_no_print_button(){
        await this.no_print_button.click();
    }

    async get_order_total(){
        return await this.order_amount_value.getText();
    }

    async get_change_amount(){
        return await this.change_amount_value.getText();
    }

    get back_to_payment_btn(){ return $(BACK_TO_PAYMENT_BTN) }
    get order_total_label(){ return $(ORDER_TOTAL_LABEL) }
    get order_amount_value(){ return $(ORDER_AMOUNT_VALUE) }
    get change_label(){ return $(CHANGE_LABEL) }
    get change_amount_value(){ return $(CHANGE_AMOUNT_VALUE) }
    get email_button(){ return $(EMAIL_BUTTON) }
    get email_text(){ return $(EMAIL_TEXT) }
    get print_button(){ return $(PRINT_BUTTON) }
    get print_text(){ return $(PRINT_TEXT) }
    get no_print_button(){ return $(NO_PRINT_BUTTON) }
    get no_print_text(){ return $(NO_PRINT_TEXT) }
}

export default new PaymentOptionsPage();