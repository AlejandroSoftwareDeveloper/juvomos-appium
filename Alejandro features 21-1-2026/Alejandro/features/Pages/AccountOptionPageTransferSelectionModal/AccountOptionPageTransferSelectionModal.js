const BTN_CLOSE_EMPLOYEE = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/btnCloseEmployee"]';
const BTN_TRANSFER_EMPLOYEE = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnTransferEmployee"]';
const BTN_TRANSFER_CHECK = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnTransferChec"]';

class AccountOptionPageTransferSelectionModal {
    
    // Métodos de interacción
    
    async click_btn_close_employee(){
      await this.btn_close_employee.click()
    }

    async click_btn_transfer_employee(){
      await this.btn_transfer_employee.click()
    }

    async click_btn_transfer_check(){
      await this.btn_transfer_check.click()
    }

    // Getters de elementos
    
    get btn_close_employee(){ return $( BTN_CLOSE_EMPLOYEE ) }

    get btn_transfer_employee(){ return $( BTN_TRANSFER_EMPLOYEE ) }

    get btn_transfer_check(){ return $( BTN_TRANSFER_CHECK ) }
}

export default new AccountOptionPageTransferSelectionModal()
