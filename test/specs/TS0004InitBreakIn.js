import LoginFlow from '../../src/TestsFlows/LoginFlow'


describe("Start BreakIn", () => {
    const break_in = 'id:com.juvomos.pos:id/breakInButton'
    const back_pin = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/backToPin"]'
    const snack_bar = 'id:com.juvomos.pos:id/snackbar_text'
    const enter_pin_text = 'id:com.juvomos.pos:id/enterPinText'
    const input    =  'id:com.juvomos.pos:id/txt_pin_user'
    const clock_in = 'id:com.juvomos.pos:id/clockInButton'
    const reg_time = 'id:com.juvomos.pos:id/buttonTimeClock'


     // Enter work section
    it("TS0001: Enter in user session", async () => {

       // Set field value
      const inp = await $(input)
      await inp.setValue('040404') 
      await $(reg_time).click();

      // Wait till page load
      await browser.pause(20000);

    });

     //  Init break time
    it("TS0002: Init break time", async () => {

       // Set field value
       await $(break_in).click()

       // Wait till load
       await browser.pause(3000)

       // load snackbar
       const sb = await $(snack_bar)
       await expect(sb).toHaveText('Entrada exitosa')

    });

      // Get pin validation
    it("TC0003: Get back to pin window", async () => {
      // 1.1 Back to pin window
      await $(back_pin).click();

      // 1.2 Wait 5 seg till window load
      await browser.pause(10000)

      // 1.3 Validate pin window
      const pin_window = await $(enter_pin_text);
      expect(pin_window).toHaveText('Ingrese PIN')
    });



});

