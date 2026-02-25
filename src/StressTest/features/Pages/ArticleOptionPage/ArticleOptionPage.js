const IMG_CLOSE_BUTTON_SECONDARY = '//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]';
const IMG_DECREMENT = '//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgDecrement"]';
const IMG_INCREMENT = '//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgIncrement"]';
const QUANTITY_LESS = '//android.widget.RelativeLayout[@resource-id="com.juvomos.pos:id/quantityLess"]';
const ITEM_QUANTITY_VALUE = '//android.widget.RelativeLayout[@resource-id="com.juvomos.pos:id/itemQuantityValue"]';
const QUANTITY_PLUS = '//android.widget.RelativeLayout[@resource-id="com.juvomos.pos:id/quantityPlus"]';
const BTN_MODIFIERS = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnModifiers"]';
const BTN_REPEAT = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnRepeat"]';
const BTN_VOID = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnVoid"]';
const BTN_DISCOUNT = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnDiscount"]';
const BTN_KITCHEN_COMMENT = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnKitchenComment"]';
const BTN_RESEND = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnResend"]';
const BTN_TO_GO = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnToGo"]';
const BTN_TAX_EXEMPT = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTaxExempt"]';
const BTN_HOL_ITEM = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnHolItem"]';
const BTN_FIRE_ITEM = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnFireItem"]';
const BTN_TRANSFER_ITEM = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTransferItem"]';
const BTN_COUNT_DOWN_QRY = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnCountDownQry"]';

class ArticleOptionPage {
    
    // Métodos de interacción
    
    async click_img_close_button_secondary(){
      await this.img_close_button_secondary.click()
    }

    async click_img_decrement(){
      await this.img_decrement.click()
    }

    async click_img_increment(){
      await this.img_increment.click()
    }

    async click_quantity_less(){
      await this.quantity_less.click()
    }

    async click_item_quantity_value(){
      await this.item_quantity_value.click()
    }

    async click_quantity_plus(){
      await this.quantity_plus.click()
    }

    async click_btn_modifiers(){
      await this.btn_modifiers.click()
    }

    async click_btn_repeat(){
      await this.btn_repeat.click()
    }

    async click_btn_void(){
      await this.btn_void.click()
    }

    async click_btn_discount(){
      await this.btn_discount.click()
    }

    async click_btn_kitchen_comment(){
      await this.btn_kitchen_comment.click()
    }

    async click_btn_resend(){
      await this.btn_resend.click()
    }

    async click_btn_to_go(){
      await this.btn_to_go.click()
    }

    async click_btn_tax_exempt(){
      await this.btn_tax_exempt.click()
    }

    async click_btn_hol_item(){
      await this.btn_hol_item.click()
    }

    async click_btn_fire_item(){
      await this.btn_fire_item.click()
    }

    async click_btn_transfer_item(){
      await this.btn_transfer_item.click()
    }

    async click_btn_count_down_qry(){
      await this.btn_count_down_qry.click()
    }

    // Getters de elementos
    
    get img_close_button_secondary(){ return $( IMG_CLOSE_BUTTON_SECONDARY ) }

    get img_decrement(){ return $( IMG_DECREMENT ) }

    get img_increment(){ return $( IMG_INCREMENT ) }

    get quantity_less(){ return $( QUANTITY_LESS ) }

    get item_quantity_value(){ return $( ITEM_QUANTITY_VALUE ) }

    get quantity_plus(){ return $( QUANTITY_PLUS ) }

    get btn_modifiers(){ return $( BTN_MODIFIERS ) }

    get btn_repeat(){ return $( BTN_REPEAT ) }

    get btn_void(){ return $( BTN_VOID ) }

    get btn_discount(){ return $( BTN_DISCOUNT ) }

    get btn_kitchen_comment(){ return $( BTN_KITCHEN_COMMENT ) }

    get btn_resend(){ return $( BTN_RESEND ) }

    get btn_to_go(){ return $( BTN_TO_GO ) }

    get btn_tax_exempt(){ return $( BTN_TAX_EXEMPT ) }

    get btn_hol_item(){ return $( BTN_HOL_ITEM ) }

    get btn_fire_item(){ return $( BTN_FIRE_ITEM ) }

    get btn_transfer_item(){ return $( BTN_TRANSFER_ITEM ) }

    get btn_count_down_qry(){ return $( BTN_COUNT_DOWN_QRY ) }
}

export default new ArticleOptionPage()
