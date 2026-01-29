import {
  CLOCK_OUT_BUTTON,
  SNACKBAR_TEXT,
  ENTER_PIN_TEXT,
  BACK_TO_PIN_BUTTON
} from '../../features/selectors/constants.js'

describe("Validate finish work time", () => {

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
