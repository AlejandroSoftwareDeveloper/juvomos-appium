describe("Validate instalation process", () => {
    let input_global = 'id:com.juvomos.pos:id/txt_pin_user';
    let accept_button_global = 'id:com.juvomos.pos:id/checkBigImage';

    beforeEach("Clean input field",async () => {
        // Press accept button to activate validation event
        const input = $(input_global)
        await input.clearValue()
        await browser.pause(250)
    });

    it("Show pin message if input field is empty",async () => {
       const accept_button = await $(accept_button_global);
       await accept_button.click();

       // Wait till snackbar appears
       await browser.pause(1000);

       //Capture snackbar text
       const snackbar = await $('id:com.juvomos.pos:id/snackbar_text');
       const snackbar_text = await snackbar.getText();

       expect(snackbar_text).toBe('Ingrese PIN')
       await browser.pause(5000);
    });

    it("Password field do not support specialchars", async () => {
         //Insert custom value
         const INVALID_PASS = '":;\'><,./!@#$%^&*\(\)\[\]\{\}\\';
         const input = $(input_global)
         await input.setValue(INVALID_PASS);
         const PASS_FIELD_DATA = await input.getText();
         
         //Get visual dots
         expect(PASS_FIELD_DATA.length !== INVALID_PASS.length).toBe(true);
    });

    it("Password field do not support chars", async () => {
         //Insert custom value
         const INVALID_PASS = 'Admin123';
         const input = $(input_global)
         await input.setValue(INVALID_PASS);

         //Get visual dots 
         const PASS_FIELD_DATA = await input.getText();
         expect(PASS_FIELD_DATA.length !== INVALID_PASS.length).toBe(true);
    });


    it("Valid char password inserted", async () => {
        //Insert custom value
        const INVALID_PASS = '":;\'><,./!@#$%^&*\(\)\[\]\{\}\\';
        const input = $(input_global)
        await input.setValue(INVALID_PASS);
        const accept_button = await $(accept_button_global);
        await accept_button.click();

        await browser.pause(5000)
        //Capture snackbar text
        const snackbar = await $('id:com.juvomos.pos:id/snackbar_text');
        const snackbar_text = await snackbar.getText();


        expect(snackbar_text !== 'Licencia no encontrada').toBe(true)
        await browser.pause(5000);
    });


    it("Valid password inserted", async () => {
        //Insert custom value
        const INVALID_PASS = '647145';
        const input = $(input_global)
        await input.setValue(INVALID_PASS);
        const accept_button = await $(accept_button_global);
        await accept_button.click();

        await browser.pause(5000)
        //Capture snackbar text
        const snackbar = await $('id:com.juvomos.pos:id/snackbar_text');
        const snackbar_text = await snackbar.getText();


        expect(snackbar_text !== 'Licencia no encontrada').toBe(true)
        await browser.pause(5000);
    });
});

