describe("Validate registration process ", () => {
    
    const clock_in = 'id:com.juvomos.pos:id/clockInButton'
    const back_pin = 'id:com.juvomos.pos:id/backToPin'
    // const error_message = 'id:com.juvomos.pos:id/alertMessageText'
    // const login_label = 'id:com.juvomos.pos:id/loginErrorNotification'
    //
    // const input_password = 'id:com.juvomos.pos:id/txt_pin_user';
    // const accept_button = 'id:com.juvomos.pos:id/checkBigImage';

    // Helper function
    // async function insert_code_and_accept(code){
    //     await $(input_password).setValue(code);
    //     await $(accept_button).click();
    // }
  
     // 1. Check if validate empty field
    it("TC0001: Press clock in buttton",async () => {
       await $(accept_button).click();

       // 1.1 Wait till snackbar appears
       await browser.pause(1000);

       // 1.2 Capture popup message
       const notification = await $(error_message);
       const error = await notification.getText();
       await notification.click();

       // 1.3 Show message
       await expect( error === 'Ingrese un PIN válido' ).toBe(true)
    });

    // 2. Check if password field accept specialchar
    it("TC0002: Password field do support number", async () => {
         // 2.1 Insert custom value
        const VALID_PASS = '1234567890';
        const input = await $(input_password);
        await input.setValue(VALID_PASS);
        const PASS_FIELD_DATA = await input.getText();

         // 2.2 Get visual dots
         expect(PASS_FIELD_DATA.length === VALID_PASS.length).toBe(true);
    });

    // 3. Check if password field accept specialchar
    it("TC0003: Password field do not support specialchars", async () => {
         // 3.1 Insert custom value
        const INVALID_PASS = '!@#$%^&*';
        const input = await $(input_password);
        await input.setValue(INVALID_PASS);
        const PASS_FIELD_DATA = await input.getText();

         // 3.2 Get visual dots
         expect(PASS_FIELD_DATA.length !== INVALID_PASS.length).toBe(true);
    });


    // 4. Check if password field accept specialchar
    it("TC0005: Authenticate with correct pin", async () => {
         // 4.1 Insert custom value
        const VALID_PASS = '040404';
        await insert_code_and_accept(VALID_PASS)

        // 4.2 Wait till load next view
        await browser.pause(5000);

         // 4.3 Get back pin button
        const ELEMENT = await $(back_pin);
        const selector = ELEMENT.selector
        
        expect(selector === 'id:com.juvomos.pos:id/backToPin').toBe(true)

    });

});

