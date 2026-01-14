import LoginFlow from '../../src/TestsFlows/LoginFlow'

describe("Validate instalation process", () => {
    let input_password = 'id:com.juvomos.pos:id/txt_pin_user';
    let accept_button  = 'id:com.juvomos.pos:id/checkBigImage';

    // Helper fucntion
    async function insert_code_and_accept(code){
        await $(input_password).setValue(code);
        await $(accept_button).click();
    }

      // Check if validate empty field
    it("TC0001: Show pin message 'Ingrese PIN' if input field is empty",async () => {
       await $(accept_button).click();

       //  Wait till snackbar appears
       await browser.pause(1000);

       //  Capture snackbar text
       const snackbar_text = await $('id:com.juvomos.pos:id/snackbar_text').getText();

       //  Show message
       await expect(snackbar_text).toBe('Ingrese PIN')
    });

    //  Check if password field accept specialchar
    it("TC0002: Password field do support number", async () => {
         //  Insert custom value
        const VALID_PASS = '1234567890';
        const input = await $(input_password);
        await input.setValue(VALID_PASS);
        const PASS_FIELD_DATA = await input.getText();

         // Get visual dots
        await expect(PASS_FIELD_DATA.length === VALID_PASS.length).toBe(true);
        await $(input_password).clearValue();
        await browser.pause(250)

    });
    //

        //  Check if insertion accept specialchars
    it("TC0003: Submit register action with specialchars show message 'Licencia no encontrada'", async () => {
        //  Insert custom value
        const INVALID_PASS = '!@#$%^&*';
        await insert_code_and_accept(INVALID_PASS)

        // wait for snackbar
        await browser.pause(2000) // 3 seg
        
        //  Capture snackbar text
        const snackbar_text = await $('id:com.juvomos.pos:id/snackbar_text').getText();

        //  Show text with warning
        await expect(snackbar_text === 'Licencia no encontrada').toBe(true)
    });


    // Check snackbar message
    it("TC0004: Submit register action with chars show message 'Licencia no encontrada'", async () => {

        //  Insert custom value
        const INVALID_PASS = 'Admin123';
        await insert_code_and_accept(INVALID_PASS)

        //  Wait for apk to validate and load
        await browser.pause(3000) // 3 seg

        // Capture snackbar text
        const snackbar_text = await $('id:com.juvomos.pos:id/snackbar_text').getText();

        //  Show text with warning
        await expect(snackbar_text === 'Licencia no encontrada').toBe(true)
        await $(input_password).clearValue();
        await browser.pause(250)

    });

    // Insert valid instalation password
    it("TC0005: Valid instalation password inserted (below 60)", async () => {

        //  Insert custom value
        const VALID_PASS = '647125';
        await $(input_password).setValue(VALID_PASS);

        //  Get visual dots 
         const PASS_FIELD_DATA = await $(input_password).getText();

        //  Indirect validation of characters
        await expect(PASS_FIELD_DATA.length === 6).toBe(true);

        await $(accept_button).click();

        //  Wait 10000 seconds for apk to validate and load
        await browser.pause(56000)  // Currently Takes more than 10 seconds

    });

    // Insert valid instalation password
    it("TC0006: Check pin view is currently active ", async () => {
        //  Get pin view
       await LoginFlow.check_if_pin_window_is_displayed();
    });

});
