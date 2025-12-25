describe("Validate pin registration ", () => {

    const pin_text = 'id:com.juvomos.pos:id/enterPinText'
    const back_pin = 'id:com.juvomos.pos:id/backToPin'
    const error_message = 'id:com.juvomos.pos:id/alertMessageText'
    const login_label = 'id:com.juvomos.pos:id/loginErrorNotification'

    const input_password = 'id:com.juvomos.pos:id/txt_pin_user';
    const accept_button = 'id:com.juvomos.pos:id/checkBigImage';

    // Helper functions
    async function insert_code_and_accept(code){
        await $(input_password).setValue(code);
        await $(accept_button).click();
    }
  

      async function clean_input_field(){
            await $(input_password).clearValue();
            await browser.pause(250)
      }


      // 2. Check if validate empty field
    it("TC0001: Show pin error message 'Ingrese un PIN válido' if input field is empty",async () => {
       await $(accept_button).click();

       // 2.1 Wait till snackbar appears
       await browser.pause(1000);

       // 2.2 Capture popup message
       const notification = await $(error_message);
       const error = await notification.getText();
       await notification.click();

       // 2.3 Show message
       await expect( error === 'Ingrese un PIN válido' ).toBe(true)

        clean_input_field()
    });

    // 3. Check if password field accept specialchar
    it("TC0002: Password field do support number", async () => {
         // 3.1 Insert custom value
        const VALID_PASS = '1234567890';
        const input = await $(input_password);
        await input.setValue(VALID_PASS);
        const PASS_FIELD_DATA = await input.getText();

         // 3.2 Get visual dots
         expect(PASS_FIELD_DATA.length === VALID_PASS.length).toBe(true);
         clean_input_field()

    });

    // 4. Check if password field accept specialchar
    it("TC0003: Password field do not support specialchars", async () => {
         // 4.1 Insert custom value
        const INVALID_PASS = '!@#$%^&*';
        const input = await $(input_password);
        await input.setValue(INVALID_PASS);
        const PASS_FIELD_DATA = await input.getText();

         // 4.2 Get visual dots
         expect(PASS_FIELD_DATA.length !== INVALID_PASS.length).toBe(true);
         clean_input_field()

    });


    // 5. Check if user insert correct pin
    it("TC0005: Authenticate with correct pin", async () => {
         // 5.1 Insert custom value
        const VALID_PASS = '040404';
        await insert_code_and_accept(VALID_PASS)

        // 5.2 Wait till load next view
        await browser.pause(5000);

         // 5.3 Get back pin button
        const ELEMENT = await $(back_pin);
        const selector = ELEMENT.selector

        expect(selector === 'id:com.juvomos.pos:id/backToPin').toBe(true)
        clean_input_field()

    });

    // 6. Return to pin registration view
    it("TC0006: Back to pin registration", async () => {
        // 6.1 Click in back pin to return to registration
        const BACK_PIN = await $(back_pin);
        await BACK_PIN.click();

        // 6.2 Wait till load next view
        await browser.pause(5000);

         // 6.3 confirm pin registration view
        const ELEMENT = await $(pin_text)
        const selector = ELEMENT.selector;
        
        expect(selector === pin_text).toBe(true);
    });

});

