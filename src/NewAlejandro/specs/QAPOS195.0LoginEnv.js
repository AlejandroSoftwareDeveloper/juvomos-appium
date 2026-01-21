import { PIN_INPUT, CLOCK_IN_BUTTON, BACK_TO_PIN_BUTTON, REG_TIME_BUTTON } from '../features/selectors/constants.js'

describe("Init work section ",async() => {


    // Get pin validation
    it("TC0001: Enter employer seccion", async () => {
        // Set field value
        const input = await $(PIN_INPUT)
        await input.setValue('090909') 
        await $(REG_TIME_BUTTON).click();
        // await LoginFlow.insert_value_and_submit();

        // Wait till validation
        await browser.pause(20000);

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
      await browser.pause(30000);

    });

    //  Check init work seccion 
    it("TC0003: Press pos to init seccion", async () => {
       // Check correct register  
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]').click()
        
       // Wait till window load
      await browser.pause(5000);
    });



    // it("TC0001: Enter employer seccion", async () => {
    //    // 1.1 Set field value
    //   // const input = await $('id:com.juvomos.pos:id/txt_pin_user')
    //   await $(BTN_ZERO).click()
    //   await $(BTN_NINE).click()
    //   await $(BTN_ZERO).click()
    //   await $(BTN_NINE).click()
    //   await $(BTN_ZERO).click()
    //   await $(BTN_NINE).click()

    //   // await input.setValue('040404') 

    //   await $(REG_TIME_BUTTON).click();
    //   // await LoginFlow.insert_value_and_submit();

    //    // 1.2 Wait till validation
    //   await browser.pause(30000); // 5 seg

    //     // 1.3 Get back pin button
    //   const ELEMENT = await $(BACK_TO_PIN_BUTTON);
    //   const selector = ELEMENT.selector

    //     expect(selector === BACK_TO_PIN_BUTTON).toBe(true)
    // });

    // // 2. Select init work time
    // it("TC0002: Select Time clock option", async () => {
    //    // 2.1 Click in time clock
    //   const btn = await $(CLOCK_IN_BUTTON)
    //   await btn.click() 

    //   // 2.2 Wait till snackbar appears
    //   await browser.pause(30000); // 5 seg

    //   // 2.3 Check registration model
    //   const ELEMENT = await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]')
    //   const selector = ELEMENT.selector

    //   expect(selector === '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]').toBe(true)
    // });

    // // 3. Check init work seccion 
    // it("TC0003: Press pos to init seccion.", async () => {
    //    // 3.1 Check correct register  
    //   const btn = await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]')
    //   await btn.click();

    //    // 3.2 Wait till snackbar appears
    //    await browser.pause(20000); //5seg

    //    // 3.3 Check user has menu view
    //    const ELEMENT = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/customersListRecycler"]')
    //    const selector = ELEMENT.selector

    //    expect(selector === '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/customersListRecycler"]').toBe(true)

    // });
});
