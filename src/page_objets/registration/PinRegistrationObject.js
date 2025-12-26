let juv = 'id:com.juvomos.pos:id/';
const PIN_TEXT = juv + 'enterPinText'
const BACK_PIN = juv + 'backToPin'
const ERROR_MESSAGE = juv + 'alertMessageText'
// const LOGIN_LABEL = juv + 'LOGINERRORNOTIFICATION'
const INPUT_PASSWORD = juv + 'txt_pin_user';
const ACCEPT_BUTTON = juv + 'checkBigImage';

class PinRegistration {


    insert(chars) {
      this.input_password.setValue(chars)
      return this
    }

    insert_chars2(chars) {
       this.input_password.setValue(chars)
       return this
    }

    insert_chars3(chars) {
       this.input_password.setValue(chars)
       return this
    }

   async txt(){
      return await this.error_message.getText()
   }

   async insert_code_and_accept(code){
        await this.input_password.setValue(code);
        await this.accept_button.click();
    }
  
   async clean_input_field(){
        await this.input_password.clearValue();
   }

     async submit(){
         await this.accept_button.click();
    }

    async set_input_value(code){
        await this.input_password.setValue(code);
        return this.input_password;
    }

    async popup(){
        await this.error_message.waitForDisplayed({timeout:3000});
    }

    get pin_welcome_view(){ return $(PIN_WELCOME_VIEW) }
    get pin_text(){ return $(PIN_TEXT) }
    get input_password(){ return $(INPUT_PASSWORD) }
    get back_pin(){ return $(BACK_PIN) }
    get error_message(){ return $(ERROR_MESSAGE) }
    get login_label(){ return $(LOGIN_LABEL) }
    get accept_button(){ return $(ACCEPT_BUTTON) }
   
    // async function accept_button(){
    //     await $(accept_button).waitForDisplayed({timeout:3000});
    //     return await $(accept_button);
    // }
}

export default new PinRegistration()
