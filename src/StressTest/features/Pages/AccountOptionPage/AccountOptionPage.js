const CLOSE_CHECK_OPTIONS = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/closeCheckOptions"]';
const BTN_VOID = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnVoid"]';
const BTN_DISCOUNT = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnDiscount"]';
const BTN_TAX_EXEMPT = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTaxExempt"]';
const BTN_GRATUITY = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnGratuity"]';
const BTN_RESEND = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnResend"]';
const BTN_TRANSFER = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTransfer"]';
const BTN_COUPON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnCoupon"]';

class AccountOptionPage {
    
    // Métodos de interacción
    
    async click_close_check_options(){
      await this.close_check_options.click()
    }

    async click_btn_void(){
      await this.btn_void.click()
    }

    async click_btn_discount(){
      await this.btn_discount.click()
    }

    async click_btn_tax_exempt(){
      await this.btn_tax_exempt.click()
    }

    async click_btn_gratuity(){
      await this.btn_gratuity.click()
    }

    async click_btn_resend(){
      await this.btn_resend.click()
    }

    async click_btn_transfer(){
      await this.btn_transfer.click()
    }

    async click_btn_coupon(){
      await this.btn_coupon.click()
    }

    // Getters de elementos
    
    get close_check_options(){ return $( CLOSE_CHECK_OPTIONS ) }

    get btn_void(){ return $( BTN_VOID ) }

    get btn_discount(){ return $( BTN_DISCOUNT ) }

    get btn_tax_exempt(){ return $( BTN_TAX_EXEMPT ) }

    get btn_gratuity(){ return $( BTN_GRATUITY ) }

    get btn_resend(){ return $( BTN_RESEND ) }

    get btn_transfer(){ return $( BTN_TRANSFER ) }

    get btn_coupon(){ return $( BTN_COUPON ) }
}

export default new AccountOptionPage()
