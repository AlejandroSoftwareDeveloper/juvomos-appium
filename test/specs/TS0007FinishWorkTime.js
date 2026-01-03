import LoginFlow from '../../src/TestsFlows/LoginFlow'
import WorkTime from '../../src/TestsFlows/LoginFlow'

describe("Validate finish work time", () => {

    const back_pin = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/backToPin"]'
    const snack_bar = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/snackbar_text"]'
    const input  = 'id:com.juvomos.pos:id/txt_pin_user'
    const clock_in = 'id:com.juvomos.pos:id/buttonTimeClock'
    const clock_out = 'id:com.juvomos.pos:id/clockOutButton'
    const enter_pin_text ='id:com.juvomos.pos:id/enterPinText'

     
     //1. Enter work section
    it("TC0001: Finish user work time", async () => {
      // 1.4 Click finish work time
       await $(clock_out).click()

      // 1.5 Wait 5 seg till window load
      await browser.pause(2000)

      const nb = await $(snack_bar);
      await expect(await nb).toHaveText('Salida fue exitosa')

    });


    // 1. Get pin validation
    it("TC0002: Get back to pin window", async () => {
      // 1.1 Back to pin window
      await $(back_pin).click();

      // 1.2 Wait 5 seg till window load
      await browser.pause(3000)

      // 1.3 Validate pin window
      const pin_window = await $(enter_pin_text);
      expect(pin_window).toHaveText('Ingrese PIN')
    });

});

