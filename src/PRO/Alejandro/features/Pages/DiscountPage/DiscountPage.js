

const TICKET_NUMBER = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/ticketNumber" and @text="Cuenta # "]';
const DISCOUNT_TEXT = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/discountText" and @text="Descuento"]';
const CLOSE_DISCOUNT_BUTTON = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/closeDiscount"]';
const DISCOUNTS_GRID = '//android.widget.GridView[@resource-id="com.juvomos.pos:id/discountsRecycler"]';
const DISCOUNT_NAME = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/discountName"]';
const DISCOUNT_VALUE = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/discountValue"]';
const END_OF_YEAR_DISCOUNT = "id:com.juvomos.pos:id/layoutDiscount"


class DiscountPage {

    async click_close_discount(){
      await this.close_discount_button.click()
    }

    async click_first_discount(){
      await this.first_discount_item.click()
    }

   async click_end_of_year_discount(){
      await this.end_of_year_discount.click()
   }

    get ticket_number(){ return $(TICKET_NUMBER) }
    
    get discount_text(){ return $(DISCOUNT_TEXT) }
    
    get close_discount_button(){ return $(CLOSE_DISCOUNT_BUTTON) }
    
    get discounts_grid(){ return $(DISCOUNTS_GRID) }
    
    get first_discount_item(){ return $(DISCOUNTS_GRID).$('//android.view.ViewGroup[@index="0"]') }
    
    get discount_name(){ return $(DISCOUNT_NAME) }

    get end_of_year_discount(){ return $(END_OF_YEAR_DISCOUNT) }
    
    get discount_value(){ return $(DISCOUNT_VALUE) }

}

export default new DiscountPage()
