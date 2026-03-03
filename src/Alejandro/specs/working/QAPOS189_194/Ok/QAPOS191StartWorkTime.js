import LoginFlow                                                           from '../../../features/TestsFlows/LoginFlow.js'
import { PIN_LOGIN,PIN_INPUT, CLOCK_IN_BUTTON, BACK_TO_PIN_BUTTON, REG_TIME_BUTTON } from '../../../features/selectors/constants.js'

describe("Validate start work time process", () => {

    // Get pin validation
    it("TC0001: Enter employer seccion", async () => {
        // Set field value
        const input = await $(PIN_INPUT)
        await input.setValue(PIN_LOGIN) 
        await $(REG_TIME_BUTTON).click();
        // await LoginFlow.insert_value_and_submit();

        // Wait till validation
        await $(BACK_TO_PIN_BUTTON).waitForDisplayed({ timeout: 20000 });
        // await browser.pause(20000);

        // Get back pin button
        const ELEMENT = await $(BACK_TO_PIN_BUTTON);
        const selector = ELEMENT.selector

        expect(selector === BACK_TO_PIN_BUTTON).toBe(true)
    });

    // Select init work time
    it("TC0002: Select Time clock option", async () => {
       // Click in time clock
      await $(CLOCK_IN_BUTTON).click()
       
      // Wait till pos load
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]').waitForDisplayed({ timeout: 30000 });
      // await browser.pause(30000);

    });

    //  Check init work seccion 
    it("TC0003: Press pos to init seccion", async () => {
       // Check correct register  
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]').click()
        
       // Wait till window load
      await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').waitForDisplayed({ timeout: 30000 });
      // await browser.pause(5000);
    });


    it("TC0004: Return to main window when click in close option" , async () => {
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
       // await $(IMG_CLOSE_BUTTON).click()
       await LoginFlow.close_app_with_meatball_menu_close_option()
       await LoginFlow.wait_till_next_view_load();
       await LoginFlow.check_if_pin_window_is_displayed();
   });

});
