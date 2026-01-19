const CLOSE_MESSAGE_GENERAL = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/closeMessageGeneral"]';
const CANCEL_DIALOG = '//android.widget.Button[@resource-id="com.juvomos.pos:id/cancelDialog"]';
const VOID_CLOSE_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/voidCloseButton"]';

class AnularPageCloseAccountModal {
    
    // Métodos de interacción
    
    async click_close_message_general(){
      await this.close_message_general.click()
    }

    async click_cancel_dialog(){
      await this.cancel_dialog.click()
    }

    async click_void_close_button(){
      await this.void_close_button.click()
    }

    // Getters de elementos
    
    get close_message_general(){ return $( CLOSE_MESSAGE_GENERAL ) }

    get cancel_dialog(){ return $( CANCEL_DIALOG ) }

    get void_close_button(){ return $( VOID_CLOSE_BUTTON ) }
}

export default new AnularPageCloseAccountModal()
