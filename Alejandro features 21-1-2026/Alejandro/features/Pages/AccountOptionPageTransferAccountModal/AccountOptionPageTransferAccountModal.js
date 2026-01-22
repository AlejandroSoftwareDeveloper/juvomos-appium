const BTN_CLOSE_EMPLOYEE = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/btnCloseEmployee"]';
const BTN_SEARCH = '//android.widget.ImageView[@resource-id="com.juvomos.pos:id/btnSearch"]';
const EDIT_EMPLOYEE_SEARCH = '//android.widget.EditText[@resource-id="com.juvomos.pos:id/editEmployeeSearch"]';
const FIRST_LAYOUT_ITEM_CHECK_TRANSFER = '(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutItemCheckTransfer"])[1]';
const BTN_TRANSFER = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnTransfer"]';

class AccountOptionPageTransferAccountModal {
    
    // Métodos de interacción
    
    async click_btn_close_employee(){
      await this.btn_close_employee.click()
    }

    async click_btn_search(){
      await this.btn_search.click()
    }

    async click_edit_employee_search(){
      await this.edit_employee_search.click()
    }

    async click_first_layout_item_check_transfer(){
      await this.first_layout_item_check_transfer.click()
    }

    async click_btn_transfer(){
      await this.btn_transfer.click()
    }

    // Getters de elementos
    
    get btn_close_employee(){ return $( BTN_CLOSE_EMPLOYEE ) }

    get btn_search(){ return $( BTN_SEARCH ) }

    get edit_employee_search(){ return $( EDIT_EMPLOYEE_SEARCH ) }

    get first_layout_item_check_transfer(){ return $( FIRST_LAYOUT_ITEM_CHECK_TRANSFER ) }

    get btn_transfer(){ return $( BTN_TRANSFER ) }
}

export default new AccountOptionPageTransferAccountModal()
