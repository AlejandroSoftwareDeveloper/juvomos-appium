describe("Start BreakIn", () => {
    const clock_in = 'id:com.juvomos.pos:id/buttonTimeClock'
    const break_in = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/breakInButton"]'
    const back_pin = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/backToPin"]'
    const snack_bar = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/snackbar_text"]'

    // 1. Click on meatballs menu
    it("TC0001: Upper right menu is clicked" , _ => {
        $('//android.widget.ImageView[@content-desc="Más opciones"]').click();
    });

    // 2. Click on "Cerrar aplicacion" to close apk
    it("TC0002: Close apk is clicked" ,async ( ) =>{
        // 2.1 Click in "Cerrar aplicacion" to close app
        const app = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/content"])[2]')
        await app.click()
        // 2.2 Wait 5 seg till apk is closed
        await browser.pause(5000) 
    });


     // 3. Enter work section
    it("TC0003: Enter employer seccion", async () => {
       // 3.1 Set field value
      const input = await $('id:com.juvomos.pos:id/txt_pin_user')
      await input.setValue('040404') 
      await $(clock_in).click();

       // 3.2 Wait till validation
       await browser.pause(5000);

        // 3.3 Get back pin button
        const ELEMENT = await $(back_pin);
        const selector = ELEMENT.selector

        expect(selector === back_pin).toBe(true)
    });


     // 4. Start breakIn timout
    it("TC0004: Start BreakIn time", async () => {
       // 4.1 Click break in button
      const button = await $(break_in)
      await button.click();

      // 4.2 Wait till startime
      await browser.pause(3000);
       
      // 4.3 Press back to pin
     const ELEMENT = await $(snack_bar)
     const selector = ELEMENT.selector

     expect(selector === snack_bar).toBe(true)
       
    });

});

