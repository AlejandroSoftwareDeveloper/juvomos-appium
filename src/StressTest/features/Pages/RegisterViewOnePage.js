// const CUSTOM_CARD                = `(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[${CARD_TO_SELECT}]/android.view.ViewGroup`

const JUVO               = "id:com.juvomos.pos:id/"
const CLOCK_IN_BTN       = JUVO + 'clockInButton'
const VIEW_HOURS_BUTTON  = JUVO + 'viewHoursButton'
const BACKTOPIN          = JUVO + 'backToPin'
const RETURN_PREV        = '~Navegar hacia arriba'
const MEAT_BALL_MENU     = '~Más opciones'
const CLOSE_APP          = '(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/content"])[2]'

class RegisterViewOnePage {

    async click_clock_in_btn() {
        this.clock_in_btn.click()
    }

    get clock_in_btn(){return $(CLOCK_IN_BTN)}

}

export default new RegisterViewOnePage()




