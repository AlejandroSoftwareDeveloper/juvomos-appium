import PinRegistration from '../../PageObjects/Registration/PinRegistrationObject'

class LoginBaseFlow {

   constructor(){
       this.password = null;
   }

   async set_input_login_with_value(password = null){
       this.password = password
       if(password)
           await PinRegistration.set_input_value(password);
   }

   async press_submit(){
       await PinRegistration.submit();
   }

   async validate_error_message(message = 'Ingrese un PIN válido'){
       await expect(PinRegistration.error_message).toHaveText(message)
   }

   async clear_password_input_field(){
       await PinRegistration.clean_input_field()
   }

   async current_password_and_give_it_password_are_diferent(){
       const dot = await PinRegistration.input_password.getText()
       await expect(this.password.length !== dot.length).toBe(true)
   }

}

export default LoginBaseFlow;
