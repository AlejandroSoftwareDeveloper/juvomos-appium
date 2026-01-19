import LoginFlow from '../../../src/TestsFlows/LoginFlow'
import { PIN_INPUT, ACCEPT_BUTTON, SNACKBAR_TEXT,PIN_INPUT_REGISTER } from '../../../src/selectors/constants'
import { BTN_ZERO, BTN_ONE, BTN_TWO, BTN_THREE, BTN_FOUR,BTN_FIVE,BTN_SIX,BTN_SEVEN,BTN_EIGHT,BTN_NINE } from '../../../src/selectors/constants'

describe("Validate instalation process ", () => {
    // Helper fucntion
    // async function insert_code_and_accept(code){
    //     await $(PIN_INPUT_REGISTER).setValue(code);
    //     await $(ACCEPT_BUTTON).click();
    // }
    
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
        await expect((!!ZERO & !!ONE & !!TWO & !!THREE & !!FOUR & !!FIVE & !!SIX & !!SEVEN & !!EIGHT & !!NINE ) === 1).toBe(true)
    })


      // Check if validate empty field
    it("TC0001: Show pin message 'Ingrese PIN' if input field is empty",async () => {
       await $(ACCEPT_BUTTON).click();

       //  Wait till snackbar appears
       await browser.pause(1000);

       //  Capture snackbar text
       const snackbar_text = await $(SNACKBAR_TEXT).getText();

       //  Show message
       await expect(snackbar_text).toBe('Ingrese PIN')
    });

    //  Check if password field accept specialchar
    it("TC0002: Password field do support number", async () => {
         //  Insert custom value
        const VALID_PASS = '1234567890';
        const input = await $(PIN_INPUT_REGISTER);
        await input.setValue(VALID_PASS);
        const PASS_FIELD_DATA = await input.getText();

         // Get visual dots
        await expect(PASS_FIELD_DATA.length === VALID_PASS.length).toBe(true);
        await $(PIN_INPUT_REGISTER).clearValue();
        await browser.pause(250)

    });


     // Check if insertion accept specialchars
    it("TC0003: Submit register action with specialchars show message 'Licencia no encontrada'", async () => {
        //  Insert custom value
        const INVALID_PASS = '!@#$%^&*';

         await $('id:com.juvomos.pos:id/editPinStore').setValue(INVALID_PASS)
         await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/checkBigImage"]').click()
        // await LoginFlow.insert_code_and_accept(INVALID_PASS)

        // wait for snackbar
        await browser.pause(2000) // 3 seg

        //  Capture snackbar text
        const snackbar_text = await $(SNACKBAR_TEXT).getText();

        //  Show text with warning
        await expect(snackbar_text === 'Licencia no encontrada').toBe(true)
    });


    // Check snackbar message
    it("TC0004: Submit register action with chars show message 'Licencia no encontrada'", async () => {

        //  Insert custom value
        const INVALID_PASS = 'Admin123';


         await $('id:com.juvomos.pos:id/editPinStore').setValue(INVALID_PASS)
         await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/checkBigImage"]').click()

        // await LoginFlow.insert_code_and_accept(INVALID_PASS)

        //  Wait for apk to validate and load
        await browser.pause(3000) // 3 seg

        // Capture snackbar text
        const snackbar_text = await $(SNACKBAR_TEXT).getText();

        //  Show text with warning
        await expect(snackbar_text === 'Licencia no encontrada').toBe(true)
        await $(PIN_INPUT_REGISTER).clearValue();
        await browser.pause(250)

    });

    // Insert valid instalation password
    it("TC0005: Valid instalation password inserted (below 60)", async () => {

        //  Insert custom value
        const VALID_PASS = '647125';
        await $(PIN_INPUT_REGISTER).setValue(VALID_PASS);

        //  Get visual dots 
         const PASS_FIELD_DATA = await $(PIN_INPUT_REGISTER).getText();

        //  Indirect validation of characters
        await expect(PASS_FIELD_DATA.length === 6).toBe(true);

        await $(ACCEPT_BUTTON).click();

        //  Wait 10000 seconds for apk to validate and load
        await browser.pause(56000)  // Currently Takes more than 10 seconds

    });

    it("TC0006: Select work station",async()=> {

       await $('(//android.widget.FrameLayout[@resource-id="com.juvomos.pos:id/stationItemLayout"])[1]').click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnConfirmLicense"]').click()
       await browser.pause(50000)

    })


    // Insert valid instalation password
    it("TC0007: Check pin view is currently active ", async () => {

       //  Get pin view
       await LoginFlow.check_if_pin_window_is_displayed();
    });

});
