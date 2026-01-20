const TICKET_NUMBER = '//android.widget.Button[@resource-id="com.juvomos.pos:id/txtTicketNumber"]';
const TICKET_CUSTOMER_NAME = '//android.widget.Button[@resource-id="com.juvomos.pos:id/ticketCustomerName"]';
const FIRST_ITEM = '(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]';
const SECOND_ITEM = '(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[2]';
const SEND_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]';
const CANCEL_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]';
const PAY_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/idPayButton"]';
const PRINT_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/idPrintButton"]';
const DISCOUNT_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/idBtnDiscount"]';
const SPLIT_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/idSplitButton"]';

class CheckMenuPage {
    
    // Métodos de interacción
    
    async click_ticket_number(){
      await this.ticket_number.click()
    }
    async get_ticket_number(){
        const number = await this.ticket_number.getText()
        return number
    }

    async click_ticket_customer_name(){
      await this.ticket_customer_name.click()
    }

    async click_first_item(){
      await this.first_item.click()
    }

    async click_second_item(){
      await this.second_item.click()
    }

    async click_send_button(){
      await this.send_button.click()
    }

    async click_cancel_button(){
      await this.cancel_button.click()
    }

    async click_pay_button(){
      await this.pay_button.click()
    }

    async click_print_button(){
      await this.print_button.click()
    }

    async click_discount_button(){
      await this.discount_button.click()
    }

    async click_split_button(){
      await this.split_button.click()
    }

    // Getters de elementos
    
    get ticket_number(){ return $( TICKET_NUMBER ) }

    get ticket_customer_name(){ return $( TICKET_CUSTOMER_NAME ) }

    get first_item(){ return $( FIRST_ITEM ) }

    get second_item(){ return $( SECOND_ITEM ) }

    get send_button(){ return $( SEND_BUTTON ) }

    get cancel_button(){ return $( CANCEL_BUTTON ) }

    get pay_button(){ return $( PAY_BUTTON ) }

    get print_button(){ return $( PRINT_BUTTON ) }

    get discount_button(){ return $( DISCOUNT_BUTTON ) }

    get split_button(){ return $( SPLIT_BUTTON ) }
}

export default new CheckMenuPage()
