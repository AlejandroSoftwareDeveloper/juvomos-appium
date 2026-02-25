const BTN_CLOSE_FIRE = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/btnCloseFire"]';
const FIRE_DEFAULT = '//android.widget.AutoCompleteTextView[@resource-id="com.juvomos.pos:id/fireDefault"]';
const BTN_FIRE_ONE = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnFireOne"]';
const BTN_FIRE_TWO = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnFireTwo"]';
const BTN_FIRE_THREE = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnFireThree"]';
const BTN_FIRE_NOW = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnFireNow"]';
const BTN_APPLY_FIRE = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnApplyFire"]';

class ArticleOptionPageSendToKitchenModal {
    
    // Métodos de interacción
    
    async click_btn_close_fire(){
      await this.btn_close_fire.click()
    }

    async click_fire_default(){
      await this.fire_default.click()
    }

    async click_btn_fire_one(){
      await this.btn_fire_one.click()
    }

    async click_btn_fire_two(){
      await this.btn_fire_two.click()
    }

    async click_btn_fire_three(){
      await this.btn_fire_three.click()
    }

    async click_btn_fire_now(){
      await this.btn_fire_now.click()
    }

    async click_btn_apply_fire(){
      await this.btn_apply_fire.click()
    }

    // Getters de elementos
    
    get btn_close_fire(){ return $( BTN_CLOSE_FIRE ) }

    get fire_default(){ return $( FIRE_DEFAULT ) }

    get btn_fire_one(){ return $( BTN_FIRE_ONE ) }

    get btn_fire_two(){ return $( BTN_FIRE_TWO ) }

    get btn_fire_three(){ return $( BTN_FIRE_THREE ) }

    get btn_fire_now(){ return $( BTN_FIRE_NOW ) }

    get btn_apply_fire(){ return $( BTN_APPLY_FIRE ) }
}

export default new ArticleOptionPageSendToKitchenModal()
