// PaymentPage.js

const SPLIT_PAYMENT_BTN          = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSplitPayment"]';
const CLOSE_PAY_BTN              = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/closePay"]';
const BALANCE_DUE_VALUE          = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/balanceDueValue"]';
const BALANCE_CC_VALUE           = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/balanceCcValue"]';
const AMOUNT_VALUE               = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/amountValue"]';
const FAST_PAY_9                 = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/fastPay1"]';
const FAST_PAY_10                = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/fastPay2"]';
const FAST_PAY_20                = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/fastPay3"]';
const PAYMENT_METHOD_CASH        = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/paymentName" and @text="Cash"]';
const PAYMENT_METHOD_CREDIT      = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/paymentName" and @text="Credit"]';
const NUMERIC_KEYPAD_ONE         = '//android.widget.Button[@resource-id="com.juvomos.pos:id/one_btn_pin"]';
const NUMERIC_KEYPAD_TWO         = '//android.widget.Button[@resource-id="com.juvomos.pos:id/two_btn_pin"]';
const NUMERIC_KEYPAD_THREE       = '//android.widget.Button[@resource-id="com.juvomos.pos:id/three_btn_pin"]';
const NUMERIC_KEYPAD_FOUR        = '//android.widget.Button[@resource-id="com.juvomos.pos:id/four_btn_pin"]';
const NUMERIC_KEYPAD_FIVE        = '//android.widget.Button[@resource-id="com.juvomos.pos:id/five_btn_pin"]';
const NUMERIC_KEYPAD_SIX         = '//android.widget.Button[@resource-id="com.juvomos.pos:id/six_btn_pin"]';
const NUMERIC_KEYPAD_SEVEN       = '//android.widget.Button[@resource-id="com.juvomos.pos:id/seven_btn_pin"]';
const NUMERIC_KEYPAD_EIGHT       = '//android.widget.Button[@resource-id="com.juvomos.pos:id/eight_btn_pin"]';
const NUMERIC_KEYPAD_NINE        = '//android.widget.Button[@resource-id="com.juvomos.pos:id/nine_btn_pin"]';
const NUMERIC_KEYPAD_ZERO        = '//android.widget.Button[@resource-id="com.juvomos.pos:id/zero_btn_pin"]';
const NUMERIC_KEYPAD_DOUBLE_ZERO = '//android.widget.Button[@resource-id="com.juvomos.pos:id/zero_zero_btn_pin"]';
const NUMERIC_KEYPAD_BACKSPACE   = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/numericBackArrow"]';
const PAYMENT_RELATIVE           = 'id:com.juvomos.pos:id/paymentRelative'


class PaymentPage {

    async click_split_payment(){
        await this.split_payment_btn.click();
    }

    async click_close_payment(){
        await this.close_pay_btn.click();
    }

    async select_payment_method_cash(){
        await this.payment_method_cash.click();
    }

    async select_payment_method_credit(){
        await this.payment_method_credit.click();
    }

    async select_fast_pay_9(){
        await this.fast_pay_9.click();
    }

    async select_fast_pay_10(){
        await this.fast_pay_10.click();
    }

    async select_fast_pay_20(){
        await this.fast_pay_20.click();
    }

    async enter_amount(amount){
        const digits = amount.toString().split('');
        for (const digit of digits) {
            switch(digit) {
                case '1': await this.numeric_keypad.one.click(); break;
                case '2': await this.numeric_keypad.two.click(); break;
                case '3': await this.numeric_keypad.three.click(); break;
                case '4': await this.numeric_keypad.four.click(); break;
                case '5': await this.numeric_keypad.five.click(); break;
                case '6': await this.numeric_keypad.six.click(); break;
                case '7': await this.numeric_keypad.seven.click(); break;
                case '8': await this.numeric_keypad.eight.click(); break;
                case '9': await this.numeric_keypad.nine.click(); break;
                case '0': await this.numeric_keypad.zero.click(); break;
            }
            await driver.pause(100);
        }
    }

    async click_numeric_backspace(){
        await this.numeric_keypad.backspace.click();
    }

    async get_balance_due(){
        return await this.balance_due_value.getText();
    }

    async get_balance_cc(){
        return await this.balance_cc_value.getText();
    }

    async get_amount(){
        return await this.amount_value.getText();
    }
    async click_payment_relative(){
         await this.payment_relative.click();
    }

    get split_payment_btn(){ return $(SPLIT_PAYMENT_BTN) }
    get close_pay_btn(){ return $(CLOSE_PAY_BTN) }
    get balance_due_value(){ return $(BALANCE_DUE_VALUE) }
    get balance_cc_value(){ return $(BALANCE_CC_VALUE) }
    get amount_value(){ return $(AMOUNT_VALUE) }
    get fast_pay_9(){ return $(FAST_PAY_9) }
    get fast_pay_10(){ return $(FAST_PAY_10) }
    get fast_pay_20(){ return $(FAST_PAY_20) }
    get payment_method_cash(){ return $(PAYMENT_METHOD_CASH) }
    get payment_method_credit(){ return $(PAYMENT_METHOD_CREDIT) }
    get payment_relative(){ return $(PAYMENT_RELATIVE) }
    get numeric_keypad(){ 
        return {
            one: $(NUMERIC_KEYPAD_ONE),
            two: $(NUMERIC_KEYPAD_TWO),
            three: $(NUMERIC_KEYPAD_THREE),
            four: $(NUMERIC_KEYPAD_FOUR),
            five: $(NUMERIC_KEYPAD_FIVE),
            six: $(NUMERIC_KEYPAD_SIX),
            seven: $(NUMERIC_KEYPAD_SEVEN),
            eight: $(NUMERIC_KEYPAD_EIGHT),
            nine: $(NUMERIC_KEYPAD_NINE),
            zero: $(NUMERIC_KEYPAD_ZERO),
            double_zero: $(NUMERIC_KEYPAD_DOUBLE_ZERO),
            backspace: $(NUMERIC_KEYPAD_BACKSPACE)
        }
    }
}

export default new PaymentPage();

