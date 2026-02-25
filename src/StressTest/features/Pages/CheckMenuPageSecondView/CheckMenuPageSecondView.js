const BTN_RECALL = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]';
const BTN_PAY_RECALL = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPayRecall"]';

class CheckMenuPageSecondView {
    
    // Métodos de interacción
    
    async click_btn_recall(){
      await this.btn_recall.click()
    }

    async click_btn_pay_recall(){
      await this.btn_pay_recall.click()
    }

    // Getters de elementos
    
    get btn_recall(){ return $( BTN_RECALL ) }

    get btn_pay_recall(){ return $( BTN_PAY_RECALL ) }
}

export default new CheckMenuPageSecondView()
