import LoginFlow from '../../src/TestsFlows/LoginFlow'

describe("Register with correct pin", () => {
    const enter_pin_text = 'id:com.juvomos.pos:id/enterPinText'

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
       await LoginFlow.wait_till_next_view_load(15000);
    });

    it("TC0005: Return to main window when click in pin button" , async () => {
       await $('id:com.juvomos.pos:id/imgCloseButton').click()
        await LoginFlow.click_back_pin_button();
        const pin_window = await $(enter_pin_text);
       await expect(pin_window).toHaveText('Ingrese PIN')
   });
});





