const JUVO  = "id:com.juvomos.pos:id/"
const ZERO                = JUVO + 'zero_btn_pin' 
const ONE                 = JUVO + 'one_btn_pin' 
const TWO                 = JUVO + 'two_btn_pin'
const THREE               = JUVO + 'three_btn_pin' 
const FOUR                = JUVO + 'four_btn_pin' 
const FIVE                = JUVO + 'five_btn_pin' 
const SIX                 = JUVO + 'six_btn_pin' 
const SEVEN               = JUVO + 'seven_btn_pin' 
const EIGHT               = JUVO + 'eight_btn_pin' 
const NINE                = JUVO + 'nine_btn_pin' 
const HOURS_REGISTER_BTN  = JUVO + "buttonTimeClock"
const ACCEPT_BTN          = JUVO + "checkBigImage"
const BACKSPACE           = '(//android.widget.ImageView[@content-desc="Ingrese PIN"])[1]'

 const STRATEGIES         = {
    click_backspace_button: {
        action: "click",
        elm:  BACKSPACE,
    },
    click_register_hours_button: {
        action: "click",
        elm:  HOURS_REGISTER_BTN,
    },
    click_accept_button: {
        action: "click",
        elm:  ACCEPT_BTN,
    },

    click_zero_button: {
        action: "click",
        elm:  ZERO,
    },
    click_one_button: {
        action: "click",
        elm:  ONE,
    },

    click_two_button: {
        action: "click",
        elm:  TWO,
    },

    click_three_button: {
        action: "click",
        elm:  THREE,
    },

    click_four_button: {
        action:"click",
        elm:  FOUR,
    },
    click_five_button: {
        action: "click",
        elm:  FIVE,
    },
    click_six_button: {
        action:"click",
        elm:  SIX,
    },
    click_seven_button: {
        action: "click",
        elm:  SEVEN,
    },
    click_eight_button: {
        action: "click",
        elm:  EIGHT,
    },
    click_nine_button: {
        action: "click",
        elm:  NINE,
    },

} 
export default STRATEGIES;
