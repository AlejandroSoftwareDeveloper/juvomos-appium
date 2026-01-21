const JUV = 'id:com.juvomos.pos:id/';
const BACK_PIN = JUV + 'backToPin'
const VIEW_HOURS_BUTTON = JUV + 'viewHoursButton'
const BREAK_IN_BUTTON = JUV +  'breakInButton'
const CLOCK_OUT_BUTTON = JUV + 'clockOutButton'
const BTN_CASH_TIPS = JUV + 'btnCashTips'
const ERROR_MESSAGE = JUV + 'alertMessageText'

class SecondaryWorkTime {

    async click_on_clock_out_button(){
        await this.clock_out_button.click()
    }

    get view_hours_button(){ return $('VIEW_HOURS_BUTTON')} 
    get break_in_button(){ return $('BREAK_IN_BUTTON')}
    get clock_out_button(){return $('CLOCK_OUT_BUTTON')}
    get btn_cash_tips(){return $('BTN_CASH_TIPS')}
    get error_message(){return $('ERROR_MESSAGE')}

}

export default new SecondaryWorkTime()

