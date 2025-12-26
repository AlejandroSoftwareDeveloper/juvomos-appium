describe("Validate finish work process", () => {

    const clock_out = 'id:com.juvomos.pos:id/clockOutButton'
    // const break_in = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/breakInButton"]'
    const back_pin = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/backToPin"]'
    const snack_bar = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/snackbar_text"]'
    const clock_in = 'id:com.juvomos.pos:id/buttonTimeClock'

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


    // 4. Select finish work time
    it("TC0004: Select Time clock option", async () => {
       // 4.1 Click in time clock
      const btn = await $(clock_out)
      await btn.click() 
       
      // 4.2 Wait till snackbar appears
      await browser.pause(5000);

      // 4.3 Check registration model
      const ELEMENT = await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]')
      const selector = ELEMENT.selector
       
      expect(selector === '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]').toBe(true)

    });

    // 1. Get pin validation
    it("TC0005: Check finish work time", async () => {
        // 1.3 Get back pin button
        const ELEMENT = await $(back_pin);
        const selector = ELEMENT.selector

        expect(selector === '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/backToPin"]').toBe(true)
    });

});

