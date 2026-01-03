import LoginFlow from '../../src/TestsFlows/LoginFlow'


describe("Finish BreakIn", () => {
    const clock_in = 'id:com.juvomos.pos:id/clockInButton'
    const break_out = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/breakOutButton"]'
    const back_pin = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/backToPin"]'
    const snack_bar = 'id:com.juvomos.pos:id/snackbar_text'
    const clock_out = 'id:com.juvomos.pos:id/clockOutButton'

    const break_in = 'id:com.juvomos.pos:id/breakInButton'
    const enter_pin_text = 'id:com.juvomos.pos:id/enterPinText'
    const input    =  'id:com.juvomos.pos:id/txt_pin_user'
    const reg_time = 'id:com.juvomos.pos:id/buttonTimeClock'

     // 1. Enter work section
    it("TS0001: Start work session", async () => {

       // 1.1 Set field value
      const inp = await $(input)
      await inp.setValue('040404') 
      await $(reg_time).click();

      // 2.2 Wait till page load
      await browser.pause(5000);

       // Start work time
      const btnci = await $(clock_in)
      await btnci.click() 

      // 2.2 Wait till snackbar appears
      await browser.pause(5000);

       //Press pos button
      const btn2 = await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]')
      await btn2.click();

      // Log out and enter again
      await $('id:com.juvomos.pos:id/imgCloseButton').click()
      await LoginFlow.close_app_with_meatball_menu_close_option()
      await LoginFlow.wait_till_next_view_load();
      await LoginFlow.check_if_pin_window_is_displayed();

      await inp.setValue('040404') 
      await $(reg_time).click();

      // Wait till page load
      await browser.pause(5000);

    })

      // Init rest time
    it("TC0002: Init rest time", async () => {
       // Set field value
       await $(break_in).click()

       // Wait till load
       await browser.pause(3000)

       // load snackbar
       const sb = await $(snack_bar)
       await expect(sb).toHaveText('Entrada exitosa')

    });





     //1. Enter work section
    it("TC0003: Finish user work time", async () => {
      // 1.4 Click finish work time
       await $(clock_out).click()

      // 1.5 Wait 5 seg till window load
      await browser.pause(3000)

      const nb = await $(snack_bar);
      await expect(await nb).toHaveText('Salida fue exitosa')

    });

    // 1. Get pin validation
    it("TC0004: Get back to pin window", async () => {
      // 1.1 Back to pin window
      await $(back_pin).click();

      // 1.2 Wait 5 seg till window load
      await browser.pause(3000)

      // 1.3 Validate pin window
      const pin_window = await $(enter_pin_text);
      expect(pin_window).toHaveText('Ingrese PIN')
    });

});

