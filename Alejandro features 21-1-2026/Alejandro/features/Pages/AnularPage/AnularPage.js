const CLOSE_VOID = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/closeVoid"]';
const VOID_REASON_COLD = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/voidGeneralLayout"]';
const VOID_ITEM_NAME = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/voidItemName"]';

class AnularPage {
    
    // Métodos de interacción
    
    async click_close_void(){
      await this.close_void.click()
    }

    async click_void_reason_cold(){
      await this.void_reason_cold.click()
    }

    // Getters de elementos
    
    get close_void(){ return $( CLOSE_VOID ) }

    get void_reason_cold(){ return $( VOID_REASON_COLD ) }

    get void_item_name(){ return $( VOID_ITEM_NAME ) }
}

export default new AnularPage()
