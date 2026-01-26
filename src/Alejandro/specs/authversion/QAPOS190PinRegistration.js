import LoginFlow from '../../features/TestsFlows/LoginFlow.js'
import { ENTER_PIN_TEXT } from '../../features/selectors/constants.js'
import PinRegistrationPage  from '../../features/Pages/PinRegistrationPage/PinRegistrationPage.js'

describe("Register with correct pin", () => {

    it("Password input is correct",async () =>{
        const inp = await PinRegistrationPage.get_pin_input()
       await expect(!!inp).toBe(true)
    });

    it("Backspace button is correct", async () =>{
         const btn = await PinRegistrationPage.get_backspace()
         await expect(!!btn).toBe(true)
    });

    it("Accept button is correct", async () =>{
        const accept = await PinRegistrationPage.accept_btn()
       await expect(!!accept).toBe(true)
    });

    it("Register button is correct", async () =>{
        const reg = await PinRegistrationPage.get_hours_register_btn()
        await expect(!!reg).toBe(true)
    });


    it("Number buttons are correct", async () =>{
        await PinRegistrationPage.check_all_number()
    })

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
       const pin_window = await $(ENTER_PIN_TEXT);
       await expect(pin_window).toHaveText('Ingrese PIN')
   });
});
