import LoginFlow from '../../src/TestsFlows/LoginFlow'


describe("Validate start work time process", () => {
    const clock_in = 'id:com.juvomos.pos:id/clockInButton'
    const back_pin = 'id:com.juvomos.pos:id/backToPin'
    const reg_time = 'id:com.juvomos.pos:id/buttonTimeClock'
 

    // Get pin validation
    it("TC0001: Enter employer seccion", async () => {
       // Set field value
      const input = await $('id:com.juvomos.pos:id/txt_pin_user')
      await input.setValue('040404') 
      await $(reg_time).click();
      // await LoginFlow.insert_value_and_submit();

       // Wait till validation
       await browser.pause(20000);

        // Get back pin button
        const ELEMENT = await $(back_pin);
        const selector = ELEMENT.selector

        expect(selector === 'id:com.juvomos.pos:id/backToPin').toBe(true)
    });

    // Select init work time
    it("TC0002: Select Time clock option", async () => {
       // Click in time clock
      await $(clock_in).click()
       
      // Wait till pos load
      await browser.pause(30000);

    });

    //  Check init work seccion 
    it("TC0003: Press pos to init seccion", async () => {
       // Check correct register  
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]').click()
        
       // Wait till window load
      await browser.pause(5000);
    });


    it("TC0004: Return to main window when click in close option" , async () => {
       await $('id:com.juvomos.pos:id/imgCloseButton').click()
       await LoginFlow.close_app_with_meatball_menu_close_option()
       await LoginFlow.wait_till_next_view_load();
       await LoginFlow.check_if_pin_window_is_displayed();
   });

});

