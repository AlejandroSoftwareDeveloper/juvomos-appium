import PinRegistration from '../PageObjects/Registration/PinRegistrationObject'
import Helper from '../../src/PageObjects/GlobalObjects/GlobalHelpers'
import LoginBaseFlow from './BaseFlows/LoginBaseFlow'

class LoginFlow extends LoginBaseFlow {

    async insert_value_and_submit(value = ''){
        await this.set_input_login_with_value(value)
        await this.press_submit()
   }

    async insert_value_and_press_register_hours_button(value = ''){
        await this.set_input_login_with_value(value);
        await this.click_register_hours_button();
   }

    async wait_till_next_view_load(wait_time = 5000){
       await Helper.wait(wait_time)
    }

    async back_pin_exist(){
       await expect(await PinRegistration.back_pin).toBeDisplayed()
    }

    async click_back_pin_button(){
       await PinRegistration.click_back_pin()
    }

    async check_if_pin_window_is_displayed(sms = 'Ingrese PIN'){
       await PinRegistration.pin_view_message(sms)    
    }

    async close_app_with_meatball_menu_close_option(){
       await PinRegistration.click_in_meat_ball_menu();
       await PinRegistration.click_in_meat_ball_close_app_option();
    }

    // async check_register_out_button(){
    //     await PinRegistration.
    // }

}

export default new LoginFlow();
