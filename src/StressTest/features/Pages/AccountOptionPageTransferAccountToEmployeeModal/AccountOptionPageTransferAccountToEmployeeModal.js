const FIRST_EMPLOYEE_NAME = '(//android.widget.TextView[@resource-id="com.juvomos.pos:id/employeeName"])[1]';
const BTN_TRANSFER = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnTransfer"]';
const IMG_CLOSE_BUTTON = '//android.widget.ImageView[@content-desc="JuvoPOS"]';

class AccountOptionPageTransferAccountToEmployeeModal {
    
    // Métodos de interacción
    
    async get_first_employee_name(){
      const name = await this.first_employee_name.getText()
      return name
    }

    async click_first_employee_name(){
     await this.first_employee_name.click()
    }

    async click_btn_transfer(){
      await this.btn_transfer.click()
    }

    async click_img_close_button(){
      await this.img_close_button.click()
    }



    // Getters de elementos
    
    get first_employee_name(){ return $( FIRST_EMPLOYEE_NAME ) }

    get btn_transfer(){ return $( BTN_TRANSFER ) }

    get img_close_button(){ return $( IMG_CLOSE_BUTTON ) }
}

export default new AccountOptionPageTransferAccountToEmployeeModal()
