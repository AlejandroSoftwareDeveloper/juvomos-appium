describe("Validate registration process ", () => {
    const clock_in = 'id:com.juvomos.pos:id/clockInButton'
    const back_pin = 'id:com.juvomos.pos:id/backToPin'
  
    // 1. Get pin validation
    it("TC0001: Enter employer seccion", async () => {
       // 1.1 Set field value
      const input = await $('id:com.juvomos.pos:id/txt_pin_user')
      await input.setValue('040404') 
      await $('id:com.juvomos.pos:id/checkBigImage').click();

       // 1.2 Wait till validation
       await browser.pause(5000);

        // 1.3 Get back pin button
        const ELEMENT = await $(back_pin);
        const selector = ELEMENT.selector

        expect(selector === 'id:com.juvomos.pos:id/backToPin').toBe(true)
    });

    // 2. Select init work time
    it("TC0002: Select Time clock option", async () => {
       // 2.1 Click in time clock
      const btn = await $(clock_in)
      await btn.click() 
       
      // 2.2 Wait till snackbar appears
      await browser.pause(5000);

      // 2.3 Check registration model
      const ELEMENT = await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]')
      const selector = ELEMENT.selector
       
      expect(selector === '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]').toBe(true)

    });

    // 3. Check init work seccion 
    it("TC0003: Press pos to init seccion", async () => {
       // 3.1 Check correct register  
      const btn = await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]')
      await btn.click();

       // 3.2 Wait till snackbar appears
       await browser.pause(5000);

       // 3.3 Check user has menu view
       const ELEMENT = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/customersListRecycler"]')
       const selector = ELEMENT.selector

       expect(selector === '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/customersListRecycler"]').toBe(true)

    });

});

