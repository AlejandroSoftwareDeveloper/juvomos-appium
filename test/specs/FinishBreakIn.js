describe("Finish BreakIn", () => {
    const clock_in = 'id:com.juvomos.pos:id/buttonTimeClock'
    const break_out = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/breakOutButton"]'
    const back_pin = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/backToPin"]'

     // 1. Enter work section
    it("TC0001: Enter employer seccion", async () => {
      // 1.1 Set field value
      const input = await $('id:com.juvomos.pos:id/txt_pin_user')
      await input.setValue('040404') 
      await $(clock_in).click();

       // 1.2 Wait till validation
       await browser.pause(5000);

       // 1.3 Get back pin button
       const ELEMENT = await $(back_pin);
       const selector = ELEMENT.selector

       expect(selector === back_pin).toBe(true)
    });


     // 2. Finish breakIn time
    it("TC002: Finish BreakIn time", async () => {
       // 2.1 Click break out button
      const button = await $(break_out)
      await button.click();

      // 2.2 Wait till startime
      await browser.pause(5000);

    });

     // Do no show break message



});

