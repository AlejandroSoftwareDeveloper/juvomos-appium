const JUVO                = "id:com.juvomos.pos:id/"
const PAGE_TEXT           = JUVO + "enterPinText"
const BTN_ZERO            = JUVO + "zero_btn_pin"
const BTN_ONE             = JUVO + "one_btn_pin"
const BTN_TWO             = JUVO + "two_btn_pin"
const BTN_THREE           = JUVO + "three_btn_pin"
const BTN_FOUR            = JUVO + "four_btn_pin"
const BTN_FIVE            = JUVO + "five_btn_pin"
const BTN_SIX             = JUVO + "six_btn_pin"
const BTN_SEVEN           = JUVO + "seven_btn_pin"
const BTN_EIGHT           = JUVO + "eight_btn_pin"
const BTN_NINE            = JUVO + "nine_btn_pin"
const HOURS_REGISTER_BTN  = JUVO + "buttonTimeClock"
const ACCEPT_BTN          = JUVO + "checkBigImage"
const BACKSPACE           = '(//android.widget.ImageView[@content-desc="Ingrese PIN"])[1]'
const PIN_INPUT           = JUVO + "txt_pin_user"

class PinRegistrationPage {

    async click_card(number){
      await $(`(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[${number}]/android.view.ViewGroup`).click()
    }

    async card_text(){
        const text = await $(`(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[${number}]/android.view.ViewGroup`)
        let data = await text.$('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name"]').getText()
        return data
    }

    async click_btn_zero() {
        await this.btn_zero.click()
    }
    async click_btn_one()  {
        await this.btn_one.click()
    }
    async click_btn_two()  {
        await this.btn_two.click()
    }
    async click_btn_three(){
        await this.btn_three.click()
    }           
    async click_btn_four() {
        await this.btn_four.click()
    }            
    async click_btn_five() {
        await this.btn_five.click()
    }            
    async click_btn_six()  {
        await this.btn_six.click()
    }             
    async click_btn_seven(){
        await this.btn_seven.click()
    }            
    async click_btn_eight(){
        await this.btn_eight.click()
    }           
    async click_btn_nine() {
        await this.btn_nine.click()
    }           
    async click_hours_register_btn(){
        await this.hours_register_btn.click()
    }
    async click_backspace(){
        await this.backspace.click()
    }

    async accept_btn(){ 
        await this.accept_btn.click()
    }

    async get_pin_input(){
      const pi = this.pin_input
      return pi
    }

    async get_backspace(){
      const bs = this.backspace
      return bs
    }

    async get_btn_zero(){
        const btn = this.btn_zero
        return btn
    }
    async get_btn_one(){
        const btn = this.btn_one
        return btn
    }
    async get_btn_two(){
        const btn = this.btn_two
        return btn
    }
    async get_btn_three(){
        const btn = this.btn_three
        return btn
    }           
    async get_btn_four(){
        const btn = this.btn_four
        return btn
    }            
    async get_btn_five(){
        const btn = this.btn_five
        return btn
    }            
    async get_btn_six(){
        const btn = this.btn_six
        return btn
    }             
    async get_btn_seven(){
        const btn = this.btn_seven
        return btn
    }            
    async get_btn_eight(){
        const btn = this.btn_eight
        return btn
    }           
    async get_btn_nine(){
        const btn = this.btn_nine
        return btn
    }           

    async get_hours_register_btn(){
        const btn = this.hours_register_btn
        return btn
    }

    async accept_btn(){
        const btn = this.accept_btn
        return btn
    }
    async check_all_number(){
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


    get page_text(){return $(PAGE_TEXT)}
    get btn_zero(){return $(BTN_ZERO)}
    get btn_one(){return $(BTN_ONE)}
    get btn_two(){return $(BTN_TWO)}
    get btn_three(){return $(BTN_THREE)}           
    get btn_four(){return $(BTN_FOUR)}            
    get btn_five(){return $(BTN_FIVE)}            
    get btn_six(){return $(BTN_SIX)}             
    get btn_seven(){return $(BTN_SEVEN)}            
    get btn_eight(){return $(BTN_EIGHT)}           
    get btn_nine(){return $(BTN_NINE)}           
    get hours_register_btn(){return $(HOURS_REGISTER_BTN)}
    get backspace(){return $(BACKSPACE)}
    get accept_btn(){return $(ACCEPT_BTN)}
    get pin_input(){return $(PIN_INPUT)}

}

export default new PinRegistrationPage()




