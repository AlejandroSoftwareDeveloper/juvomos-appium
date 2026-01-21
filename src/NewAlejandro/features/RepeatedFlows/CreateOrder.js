const card_to_select             =  7
const PICK_UP_OPTION             = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]';
const CUSTOM_CARD                = `(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[${card_to_select}]/android.view.ViewGroup`
const SEND_TO_KITCHEN_V2         = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnFireNow"]'
const BTN_SHOW_ORDER             = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]'
const FIRE_ITEM                  = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnFireItem"]'
const BTN_SEND_POINT_OF_SALE     = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]'


class CreateOrder {
  
    async select_card(){
       // Click in menu
      await this.pick_up_option.click()

      // Click twice
      const card_clicked = await this.custom_card
      await card_clicked.click()
      await card_clicked.click()
    }
    
    async send_to_kitchen_item_number(number){
      //Open account 
      await this.btn_show_order.click()
      // Send to kitchen 
      await $(`(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[${number}]`).click()
      await this.fire_item.click()

      //Fast send
      await this.send_to_kitchen_v2.click()
    }

    async open_and_store_account(){
      //Open account 
      await this.btn_show_order.click()

      // Store account
      await this.btn_send_point_of_sale.click()
    }
    
    async click_custom_card(){
        await this.custom_card.click()
    }


    get pick_up_option(){ return $(PICK_UP_OPTION) }
    get custom_card(){ return $(CUSTOM_CARD) }
    get send_to_kitchen_v2(){ return $(SEND_TO_KITCHEN_V2) }
    get btn_show_order(){return $(BTN_SHOW_ORDER)}
    get fire_item() {return $(FIRE_ITEM)}
    get btn_send_point_of_sale(){ return $(BTN_SEND_POINT_OF_SALE) }  
}

export default new CreateOrder()
