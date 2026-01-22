const MESSAGE_TITLE = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/messageTitle"]';
const CLOSE_BUTTON = '//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButton"]';
const OPEN_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]';
const DINE_IN_ITEM = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Dine In"]';
const TO_GO_ITEM = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="To Go"]';
const PICK_UP_ITEM = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]';
const DELIVERY_ITEM = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Delivery"]';

class FoodPageMenuModal {
    
    // Métodos de interacción
    async click_message_title(){
      await this.message_title.click()
    }

    async click_close_button(){
      await this.close_button.click()
    }

    async click_open_button(){
      await this.open_button.click()
    }

    async click_dine_in_item(){
      await this.dine_in_item.click()
    }

    async click_to_go_item(){
      await this.to_go_item.click()
    }

    async click_pick_up_item(){
      await this.pick_up_item.click()
    }

    async click_delivery_item(){
      await this.delivery_item.click()
    }

    // Getters de elementos
    
    get message_title(){ return $( MESSAGE_TITLE ) }

    get close_button(){ return $( CLOSE_BUTTON ) }

    get open_button(){ return $( OPEN_BUTTON ) }

    get dine_in_item(){ return $( DINE_IN_ITEM ) }

    get to_go_item(){ return $( TO_GO_ITEM ) }

    get pick_up_item(){ return $( PICK_UP_ITEM ) }

    get delivery_item(){ return $( DELIVERY_ITEM ) }
}

export default new FoodPageMenuModal()
