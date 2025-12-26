import PinRegistration from '../../src/page_objets/registration/PinRegistrationObject'
import Helper from '../../src/page_objets/global_objects/GlobalHelpers'

describe("Validate pin registration ", () => {

     // 1 Check if validate empty field
    it("TC0001: Show pin error message 'Ingrese un PIN válido' if input field is empty",async () => {

       // 1.1 Click and wait till snackbar appears
       await PinRegistration.submit()

       // 1.2 Capture popup message
       await chaiExpect(await PinRegistration.txt()).to.be
            .equal('Ingrese un PIN válido',"[ERR] Mensaje no encontrado")

       // 1.3 Clear input field
       await PinRegistration.clean_input_field()
    });

    // 2. Check if password field accept specialchar
    it("TC0002: Password field do support number", async () => {

       // 2.1 Insert custom value
       const VALID_PASS = '1234567890';
       await PinRegistration.set_input_value(VALID_PASS)
       const PASS_FIELD_DATA = await PinRegistration.input_password.getText();

       // 2.2 Get visual dots
       expect(PASS_FIELD_DATA.length === VALID_PASS.length).toBe(true);
       await PinRegistration.clean_input_field()

    });

    // 3. Check if password field accept specialchar
    it("TC0003: Password field do not support specialchars", async () => {
         // 3.1 Insert custom value
         const INVALID_PASS = '!@#$%^&*';
         await PinRegistration.set_input_value(INVALID_PASS)
         const PASS_FIELD_DATA = await PinRegistration.input_password.getText();

         // 3.2 Get visual dots
         expect(PASS_FIELD_DATA.length !== INVALID_PASS.length).toBe(true);
         await PinRegistration.clean_input_field()
    });


    // 4. Check if user insert correct pin
    it("TC0004: Authenticate with correct pin", async () => {

         // 4.1 Insert custom value
        await PinRegistration.insert_code_and_accept('040404')

        // 4.2 Wait till load next view
        await Helper.wait();

        // 4.3 Get back pin button
        await chaiExpect(await PinRegistration.back_pin.selector).to.be
            .equal('id:com.juvomos.pos:id/backToPin', "[ERR] El valor no es correcto.")
    });
    // 5. Return to pin registration view
    it("TC0005: Back to pin registration", async () => {
       // 5.1 Click in back pin to return to registration
       await PinRegistration.back_pin.click()

       // 5.2 Wait till load next view
       await Helper.wait(1500);

       // 5.3 confirm pin registration view
       await expect(PinRegistration.pin_text).toHaveText('Ingrese PIN');
    });


});

