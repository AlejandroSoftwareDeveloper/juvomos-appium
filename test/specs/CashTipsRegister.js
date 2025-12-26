describe("Validate finish work process", () => {

    const clock_out = 'id:com.juvomos.pos:id/clockOutButton'
    const back_pin = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/backToPin"]'
    const clock_in = 'id:com.juvomos.pos:id/buttonTimeClock'
    const accept_button = 'id:com.juvomos.pos:id/checkBigImage'
    const cashtips = 'id:com.juvomos.pos:id/btnCashTips'
    const cashfield = 'id:com.juvomos.pos:id/declareTipsAmountId'
    const snack_bar = 'id:com.juvomos.pos:id/snackbar_text'

     // 1. Enter work section
    it("TC0003: Enter employer seccion", async () => {
       // 1.1 Set field value
      const input = await $('id:com.juvomos.pos:id/txt_pin_user')
      await input.setValue('040404') 
      await $(clock_in).click();

       // 1.2 Wait till validation
      await browser.pause(5000);

      // 1.3 Get back pin button
      const ELEMENT = await $(back_pin);
      const selector = ELEMENT.selector

      expect(selector === back_pin).toBe(true)
    });


    // 2. Select cash tips register
    it("TC0004: Select cash tips and register tips", async () => {
       // 2.1 Click in time clock
      const btn = await $(cashtips)
      await btn.click() 
       
      // 2.2 Wait till modal load
      await browser.pause(250);
        
      // 2.3 Check registration model
      const ELEMENT = await $(cashfield)
      await ELEMENT.clearValue();
      await ELEMENT.setValue('10.00');
      await $(accept_button).click();

      // 2.4 Check for message
      await browser.pause(3000);
      const NELEMENT = await $(snack_bar)

      // const selector = NELEMENT.selector
       
      expect(NELEMENT).toHaveText('Cash tip saved successfully')

    });

    // 3. Load work hours
    it("TC0005: Open work hours", async () => {
        // 3.1 Get back pin button
        const ELEMENT = await $( 'id:com.juvomos.pos:id/viewHoursButton');
        await ELEMENT.click()

        // 3.2 Wait till view load
        await browser.pause(5000)
    });


    // 4. Check tips are not zero
    it("TC0005: Check tips are in menu", async () => {
        // 4.1 Get back pin button
        const ELEMENT = await $('id:com.juvomos.pos:id/txtValueTotalTipTimeSheet');

        // 4.2 Turn value in number
        let value = await ELEMENT.getText();
        value = parseFloat(value)

        // 4.3 Check value is bigger than 0
        expect(value > 0).toBe(true)
    });


     const return_main_menu = '~Navegar hacia arriba'
    //5. Return to main menu
    it("TC0005: Get back to main menu", async () => {
      // 5.1 Get back pin button
      const ELEMENT = await $(return_main_menu);
      ELEMENT.click();
      await browser.pause()

      // 5.2 Get back pin button
      const NELEMENT = await $(back_pin);
      const selector = NELEMENT.selector

      expect(selector === back_pin).toBe(true)
    });


});

