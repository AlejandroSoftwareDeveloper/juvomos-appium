import LoginFlow from '../features/TestsFlows/LoginFlow.js'
import {
  PIN_INPUT,
  REG_TIME_BUTTON,
  BREAK_OUT_BUTTON,
  SNACKBAR_TEXT,
  CLOCK_IN_BUTTON,
  BACK_TO_PIN_BUTTON,
  ENTER_PIN_TEXT
} from '../features/selectors/constants.js'

describe("Finish BreakIn", () => {

     // Enter work section
    it("TS0001: Start work session", async () => {

       // Set field value
      const inp = await $(PIN_INPUT)
      await inp.setValue('090909') 
      await $(REG_TIME_BUTTON).click();

      //  Wait till page load
      await browser.pause(20000);

    })

      // Init rest time
    it("TC0002: Finish rest time", async () => {
       // Set field value
       await $(BREAK_OUT_BUTTON).click()

       // Wait till load
       await browser.pause(1500)

       // load snackbar
       const sb = await $(SNACKBAR_TEXT)
       await expect(sb).toHaveText('Salida exitosa')
    });


});
