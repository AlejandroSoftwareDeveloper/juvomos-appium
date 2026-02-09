import LoginFlow from '../../../features/TestsFlows/LoginFlow.js'
import {
  PIN_LOGIN,
  PIN_INPUT,
  REG_TIME_BUTTON,
  BREAK_IN_BUTTON,
  SNACKBAR_TEXT,
  ENTER_PIN_TEXT,
  BACK_TO_PIN_BUTTON
} from '../../../features/selectors/constants.js'

describe("Start BreakIn", () => {
     // Enter work section
    it("TS0001: Enter in user session", async () => {

       // Set field value
      const inp = await $(PIN_INPUT)
      await inp.setValue(PIN_LOGIN) 
      await $(REG_TIME_BUTTON).click();

      // Wait till page load
      await browser.pause(20000);

    });

     //  Init break time
    it("TS0002: Init break time", async () => {

       // Set field value
       await $(BREAK_IN_BUTTON).click()

       // Wait till load
       await $(SNACKBAR_TEXT).waitForDisplayed({ timeout: 10000 });
       // await browser.pause(3000)

       // load snackbar
       const sb = await $(SNACKBAR_TEXT)
       await expect(sb).toHaveText('Entrada exitosa')

    });

      // Get pin validation
    it("TC0003: Get back to pin window", async () => {
      // 1.1 Back to pin window
      await $(BACK_TO_PIN_BUTTON).click();

      // 1.2 Wait 5 seg till window load
      await $(ENTER_PIN_TEXT).waitForDisplayed({ timeout: 10000 });
      // await browser.pause(10000)

      // 1.3 Validate pin window
      const pin_window = await $(ENTER_PIN_TEXT);
      expect(pin_window).toHaveText('Ingrese PIN')
    });



});
