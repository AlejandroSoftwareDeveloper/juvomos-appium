
import LoginFlow from '../../src/TestsFlows/LoginFlow'
import {
  CLOCK_OUT_BUTTON,
  SNACKBAR_TEXT,
  PIN_INPUT,
  REG_TIME_BUTTON,
  ENTER_PIN_TEXT,
  BACK_TO_PIN_BUTTON
} from '../../src/selectors/constants'

describe("Validate finish work time", () => {

    // const back_pin = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/backToPin"]'
    // const snack_bar = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/snackbar_text"]'
    // const input  = 'id:com.juvomos.pos:id/txt_pin_user'
    // const clock_in = 'id:com.juvomos.pos:id/buttonTimeClock'
    // const clock_out = 'id:com.juvomos.pos:id/clockOutButton'
    // const enter_pin_text ='id:com.juvomos.pos:id/enterPinText'

     
     //1. Enter work section
    it("TC0001: Finish user work time", async () => {
      // 1.4 Click finish work time
       await $(CLOCK_OUT_BUTTON).click()

      // 1.5 Wait 5 seg till window load
      await browser.pause(2000)

      const nb = await $(SNACKBAR_TEXT);
      await expect(await nb).toHaveText('Salida fue exitosa')

    });


    // 1. Get pin validation
    it("TC0002: Get back to pin window", async () => {
      // 1.1 Back to pin window
      await $(BACK_TO_PIN_BUTTON).click();

      // 1.2 Wait 5 seg till window load
      await browser.pause(10000) // 3 seg

      // 1.3 Validate pin window
      const pin_window = await $(ENTER_PIN_TEXT);
      expect(pin_window).toHaveText('Ingrese PIN')
    });

});