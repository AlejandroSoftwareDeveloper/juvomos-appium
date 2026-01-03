const JUV = 'id:com.juvomos.pos:id/';
const PIN_TEXT = JUV + 'enterPinText'
const BACK_PIN = JUV + 'backToPin'
const ERROR_MESSAGE = JUV + 'alertMessageText'
const INPUT_PASSWORD = JUV + 'txt_pin_user';
const ACCEPT_BUTTON = JUV + 'checkBigImage';
const MEATBALLMENU = '//android.widget.ImageView[@content-desc="Más opciones"]'
const MEATBALLMENUCLOSEAPP = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/title" and @text="Cerrar aplicación"]'
const REGISTERHOURSBUTTON = JUV + 'buttonTimeClock'

class PinRegistration {
  
   async show_error_txt(){
      return await this.error_message.getText()
   }

   async clean_input_field(){
        await this.input_password.clearValue();
   }

   async submit(){
        await this.accept_button.click();
   }

    async set_input_value(code){
        await this.input_password.setValue(code);
        return await this.input_password;
    }

    async click_back_pin(){ 
        await this.back_pin.click()
    }


    async pin_view_message(sms = 'Ingrese PIN'){
        await expect(this.pin_text).toHaveText(sms);
    }


    async click_in_meat_ball_menu(){
        await this.meatballmenu.click()
    }

    async click_in_meat_ball_close_app_option(){
        await this.meatballmenucloseapp.click()
    }

    async click_register_hours_button(){
        await this.register_hours_button.click();
    }
    

    get pin_welcome_view(){ return $(PIN_WELCOME_VIEW) }
    get pin_text(){ return $(PIN_TEXT) }
    get input_password(){ return $(INPUT_PASSWORD) }
    get back_pin(){ return $(BACK_PIN) }
    get error_message(){ return $(ERROR_MESSAGE) }
    get login_label(){ return $(LOGIN_LABEL) }
    get accept_button(){ return $(ACCEPT_BUTTON) }
    get register_hours_button(){ return $(REGISTERHOURSBUTTON) }
    get meatballmenu(){ return $(MEATBALLMENU) }
    get meatballmenucloseapp(){ return $(MEATBALLMENUCLOSEAPP) }
   
}

export default new PinRegistration()
