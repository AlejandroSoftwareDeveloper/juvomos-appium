import LoginFlow from '../../src/TestsFlows/LoginFlow'

describe("Register with correct pin", () => {
    const enter_pin_text = 'id:com.juvomos.pos:id/enterPinText'

    it("TC0001: Show pin error message 'Ingrese un PIN válido' if input field is empty",async () => {
       await LoginFlow.insert_value_and_submit();
       await LoginFlow.validate_error_message();
       await LoginFlow.clear_password_input_field();
    });

    it("TC0002: Insert correct pin and authenticate", async () => {
       await LoginFlow.insert_value_and_submit('090909');
       await LoginFlow.wait_till_next_view_load(15000);
    });

    it("TC0003: Return to main window when click in pin button" , async () => {
       await LoginFlow.click_back_pin_button();
       const pin_window = await $(enter_pin_text);
       await expect(pin_window).toHaveText('Ingrese PIN')
   });
});





