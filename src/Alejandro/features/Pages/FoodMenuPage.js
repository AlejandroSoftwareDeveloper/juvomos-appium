const PICK_UP_OPTION             = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]';
const ACCOUNT_BTN                = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]'
const SEARCH_BTN                 = '//android.widget.ImageView[@content-desc="Buscar"]'
const TEXT_INPUT                 = 'id:com.juvomos.pos:id/search_src_text'
const RESET_TEXT_INPUT           = '~Borrar consulta'
// const CUSTOM_CARD                = `(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[${CARD_TO_SELECT}]/android.view.ViewGroup`

class FoodMenuPage {

    async click_card(number){
      await $(`(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[${number}]/android.view.ViewGroup`).click()
    }

    async card_text(){
        const text = await $(`(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[${number}]/android.view.ViewGroup`)
        let data = await text.$('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name"]').getText()
        return data
    }

    async click_account_btn(){
        await this.account_btn.click()
    }

    async click_search_btn(){
        await this.search_btn.click()
    }

    async click_pick_up(){
        await this.pick_up.click()
    }

    async set_text_input_value(value){
        await this.text_input.setValue(value)
    }

    async click_reset_text_input(){
        await this.reset_text_input.click()
    }

    get pick_up(){ return $( PICK_UP_OPTION ) }
    get search_btn(){ return $( SEARCH_BTN ) }
    get account_btn(){ return $(ACCOUNT_BTN) }
    get text_input(){ return $(TEXT_INPUT) }
    get reset_text_input(){ return $(TEXT_INPUT) }

}

export default new FoodMenuPage()
