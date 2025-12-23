describe("Validate pin registration ", () => {

    // const pin_view = '//android.widget.FrameLayout[@resource-id="com.juvomos.pos:id/containerFragmentAuthentication"])[2]/android.view.ViewGroup'
    // Clean input 
    // let input_password = 'id:com.juvomos.pos:id/txt_pin_user';
    // let accept_button = 'id:com.juvomos.pos:id/checkBigImage';
    //
    //
    // async function insert_code_and_accept(code){
    //     await $(input_password).setValue(code);
    //     await $(accept_button).click();
    // }
    //
    // // 1. Clean field before each test
    // beforeEach("Clean input field",async () => {
    //     // 1.1 Press accept button to activate validation event
    //     await $(input_password).clearValue();
    //     await browser.pause(250)
    // });
    //
    //   // 2. Check if validate empty field
    // it("Show pin message if input field is empty",async () => {
    //    await $(accept_button).click();
    //    // 2.1 Wait till snackbar appears
    //    await browser.pause(1000);
    //
    //    // 2.2 Capture snackbar text
    //    const snackbar_text = await $('id:com.juvomos.pos:id/snackbar_text').getText();
    //
    //    // 2.3 Show message
    //    expect(snackbar_text).toBe('Ingrese PIN')
    //    await browser.pause(5000);
    // });
    //
    // // 3. Check if password field accept specialchar
    // it("Password field do not support specialchars", async () => {
    //      // 3.1 Insert custom value
    //     const INVALID_PASS = '!@#$%^&*';
    //     const input = await $(input_password);
    //     await input.setValue(INVALID_PASS);
    //     const PASS_FIELD_DATA = await input.getText();
    //
    //      // 3.2 Get visual dots
    //      expect(PASS_FIELD_DATA.length !== INVALID_PASS.length).toBe(true);
    // });
    //
    //     // 4. Check if insertion accept specialchars
    // it("Submit register action with specialchars show message 'Licencia no encontrada'", async () => {
    //     // 4.1 Insert custom value
    //     const INVALID_PASS = '!@#$%^&*';
    //     await insert_code_and_accept(INVALID_PASS)
    //
    //     await browser.pause(5000)
    //     // 4.2 Capture snackbar text
    //     const snackbar_text = await $('id:com.juvomos.pos:id/snackbar_text').getText();
    //
    //     // 4.3 Show text with warning
    //     expect(snackbar_text === 'Licencia no encontrada').toBe(true)
    //     await browser.pause(5000);
    // });
    //
    //
    //  // 5. Check if password field accept char
    // it("Password field do not support chars", async () => {
    //      // 5.1 Insert custom value
    //      const INVALID_PASS = 'Admin123';
    //      const input = await $(input_password)
    //      await input.setValue(INVALID_PASS);
    //
    //      // 5.2 Get visual dots 
    //      const PASS_FIELD_DATA = await input.getText();
    //
    //      // 5.2 Indirect validation of characters
    //      expect(PASS_FIELD_DATA.length !== INVALID_PASS.length).toBe(true);
    // });
    //
    //
    // // 6. Check if insertion accept chars
    // it("Submit register action with chars show message 'Licencia no encontrada'", async () => {
    //     // 6.1 Insert custom value
    //     const INVALID_PASS = 'Admin123';
    //     await $(input_password).setValue(INVALID_PASS);
    //     await $(accept_button).click();
    //
    //     // 6.2 Wait for apk to validate and load
    //     await browser.pause(5000)
    //
    //     // 6.3 Capture snackbar text
    //     const snackbar_text = await $('id:com.juvomos.pos:id/snackbar_text').getText();
    //
    //     // 6.4 Show text with warning
    //     expect(snackbar_text === 'Licencia no encontrada').toBe(true)
    // });
    //
    // // 7. Insert valid instalation password
    // it("Valid instalation password inserted", async () => {
    //     // 7.1 Insert custom value
    //     const VALID_PASS = '647145';
    //     await $(input_password).setValue(VALID_PASS);
    //     await $(accept_button).click();
    //
    //     // 6.2 Wait for apk to validate and load
    //     await browser.pause(5000)
    // });
    //
        
    // Check pin view
    // it("Apk was closed" ,async ( ) =>{
    //     //Check if app close correctlye(pending better solution)
    //     const ELEMENT_ID = await $(pin_view).elementId
    //     const ENDS_CORRECTLY = !ELEMENT_ID.endsWith('0050');
    //     await expect(ENDS_CORRECTLY).toBe(true)
    // });

});

