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

     // Enter work section
    it("TS0001: Start work session", async () => {

       // Set field value
      const inp = await $(input)
      await inp.setValue('040404') 
      await $(reg_time).click();

      //  Wait till page load
      await browser.pause(20000);

    })

      // Init rest time
    it("TC0002: Finish rest time", async () => {
       // Set field value
       await $(break_out).click()

       // Wait till load
       await browser.pause(1500)

       // load snackbar
       const sb = await $(snack_bar)
       await expect(sb).toHaveText('Salida exitosa')
    });


});

