import LoginFlow from '../../src/TestsFlows/LoginFlow'

describe("Register with correct pin", () => {

    it("TC0001: Show pin error message 'Ingrese un PIN válido' if input field is empty",async () => {
       await LoginFlow.insert_value_and_submit();
       await LoginFlow.validate_error_message();
       await LoginFlow.clear_password_input_field();
    });

    it("TC0002: Password error must appear if input field do not support specialchars", async () => {
       const INVALID_PASS = '!@#$%^&*';
       await LoginFlow.set_input_login_with_value(INVALID_PASS);
       await LoginFlow.current_password_and_give_it_password_are_diferent();
       await LoginFlow.clear_password_input_field();
    });

    it("TC0003: Insert correct pin and authenticate", async () => {
       await LoginFlow.insert_value_and_submit('040404');
       await LoginFlow.wait_till_next_view_load();
    });

    // it("TC0005: Return to main window when click in pin button" , async () => {
    //    await LoginFlow.click_back_pin_button();
       // await LoginFlow.close_app_with_meatball_menu_close_option()
       // await LoginFlow.click_back_pin_button();
       // await LoginFlow.wait_till_next_view_load();
       // await LoginFlow.check_if_pin_window_is_displayed();
   // });
});





