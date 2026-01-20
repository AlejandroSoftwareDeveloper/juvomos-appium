import LoginFlow from '../../features/TestsFlows/LoginFlow'
import {
  PIN_INPUT,
  REG_TIME_BUTTON,
  BREAK_IN_BUTTON,
  SNACKBAR_TEXT,
  ENTER_PIN_TEXT,
  BACK_TO_PIN_BUTTON
} from '../../features/selectors/constants'

describe("Start BreakIn", () => {
    // const break_in = 'id:com.juvomos.pos:id/breakInButton'
    // const back_pin = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/backToPin"]'
    // const snack_bar = 'id:com.juvomos.pos:id/snackbar_text'
    // const enter_pin_text = 'id:com.juvomos.pos:id/enterPinText'
    // const input    =  'id:com.juvomos.pos:id/txt_pin_user'
    // const clock_in = 'id:com.juvomos.pos:id/clockInButton'
    // const reg_time = 'id:com.juvomos.pos:id/buttonTimeClock'


     // Enter work section
    it("TS0001: Enter in user session", async () => {

       // Set field value
      const inp = await $(PIN_INPUT)
      await inp.setValue('040404') 
      await $(REG_TIME_BUTTON).click();

      // Wait till page load
      await browser.pause(20000);

    });

     //  Init break time
    it("TS0002: Init break time", async () => {

       // Set field value
       await $(BREAK_IN_BUTTON).click()

       // Wait till load
       await browser.pause(3000)

       // load snackbar
       const sb = await $(SNACKBAR_TEXT)
       await expect(sb).toHaveText('Entrada exitosa')

    });

      // Get pin validation
    it("TC0003: Get back to pin window", async () => {
      // 1.1 Back to pin window
      await $(BACK_TO_PIN_BUTTON).click();

      // 1.2 Wait 5 seg till window load
      await browser.pause(10000)

      // 1.3 Validate pin window
      const pin_window = await $(ENTER_PIN_TEXT);
      expect(pin_window).toHaveText('Ingrese PIN')
    });



});
