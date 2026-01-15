import LoginFlow from '../../src/TestsFlows/LoginFlow'
import { ENTER_PIN_TEXT } from '../../src/selectors/constants'
import { PIN_INPUT, ACCEPT_BUTTON, SNACKBAR_TEXT,PIN_INPUT_REGISTER, REG_TIME_BUTTON } from '../../src/selectors/constants'
import { BTN_ZERO, BTN_ONE, BTN_TWO, BTN_THREE, BTN_FOUR,BTN_FIVE,BTN_SIX,BTN_SEVEN,BTN_EIGHT,BTN_NINE } from '../../src/selectors/constants'

describe("Register with correct pin", () => {
    // const enter_pin_text = 'id:com.juvomos.pos:id/enterPinText' // reemplazado por constante

    it("Password input is correct",async () =>{
        const inp = await $(PIN_INPUT)
       await expect(!!inp).toBe(true)
    });

    it("Backspace button is correct", async () =>{
       const btn = await $('(//android.widget.ImageView[@content-desc="Ingrese PIN"])[2]')
       await expect(!!btn).toBe(true)
    });

    it("Accept button is correct", async () =>{
        const accept = await $(ACCEPT_BUTTON)
       await expect(!!accept).toBe(true)
    });

    it("Register button is correct", async () =>{
        const reg = await $(REG_TIME_BUTTON)
        await expect(!!reg).toBe(true)
    });


    it("Number buttons are correct", async () =>{
        const ZERO  = await $(BTN_ZERO)
        const ONE   = await $(BTN_ONE)
        const TWO   = await $(BTN_TWO)
        const THREE = await $(BTN_THREE)
        const FOUR  = await $(BTN_FOUR)
        const FIVE  = await $(BTN_FIVE)
        const SIX   = await $(BTN_SIX)
        const SEVEN = await $(BTN_SEVEN)
        const EIGHT = await $(BTN_EIGHT)
        const NINE  = await $(BTN_NINE)
        // await expect().toBe(true)
        chai.expect((!!ZERO & !!ONE & !!TWO & !!THREE & !!FOUR & !!FIVE & !!SIX & !!SEVEN & !!EIGHT & !!NINE ) === 1).to.equal(true)
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
