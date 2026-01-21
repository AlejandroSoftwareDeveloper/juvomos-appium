const LAYOUT_CHECK_DETAIL_ITEM = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"][1]'
const LAYOUT_CHECK_DETAIL_ITEM_UNIQUE = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"]'
const TXT_VALUE_EMPLOYEE_CHECK = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/txtValueEmployeeCheck"]'
const TXT_VALUE_ORDER_TYPE_CHECK = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/txtValueOrderTypeCheck"]'
const TXT_VALUE_AMOUNT_CHECK = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/txtValueAmountCheck"]'
const IMG_CLOSE_BUTTON_SECONDARY = '//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]'
const ACCOUNT_NUMBER    = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/txtValueOrderCheck"]'


class OrderListPage {
    
    // Métodos de interacción
    
    async click_layout_check_detail_item(){
      await this.layout_check_detail_item.click()
    }

    async get_txt_value_employee_check(){
      const name = await this.txt_value_employee_check.getText()
      return name
    }

    async click_txt_value_employee_check(){
      await this.txt_value_employee_check.click()
    }

    async click_txt_value_order_type_check(){
      await this.txt_value_order_type_check.click()
    }

    async click_txt_value_amount_check(){
      await this.txt_value_amount_check.click()
    }

    async click_img_close_button_secondary(){
      await this.img_close_button_secondary.click()
    }

    async click_layout_check_detail_item_unique(){ 
         this.click_layout_check_detail_item_unique.click()
    }


    async get_account_number(){ 
       const number = await this.account_number.getText()
       return number
    }

    // Getters de elementos
    
    get layout_check_detail_item(){ return $( LAYOUT_CHECK_DETAIL_ITEM ) }

    get layout_check_detail_item_unique(){ return $( LAYOUT_CHECK_DETAIL_ITEM_UNIQUE ) }

    get txt_value_employee_check(){ return $( TXT_VALUE_EMPLOYEE_CHECK ) }

    get txt_value_order_type_check(){ return $( TXT_VALUE_ORDER_TYPE_CHECK ) }

    get txt_value_amount_check(){ return $( TXT_VALUE_AMOUNT_CHECK ) }

    get img_close_button_secondary(){ return $( IMG_CLOSE_BUTTON_SECONDARY ) }

    get account_number(){ return $( ACCOUNT_NUMBER) }


}

export default new OrderListPage()
