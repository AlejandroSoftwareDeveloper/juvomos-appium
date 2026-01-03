import LoginFlow from '../../src/TestsFlows/LoginFlow'



describe("Check tips cash recieved", () => {

    const clock_in = 'id:com.juvomos.pos:id/clockInButton'
    const back_pin = 'id:com.juvomos.pos:id/backToPin'
    const reg_time = 'id:com.juvomos.pos:id/buttonTimeClock'
    const input = 'id:com.juvomos.pos:id/txt_pin_user'
    const clock_out = 'id:com.juvomos.pos:id/clockOutButton'

    const totalSheetTime = 'id:com.juvomos.pos:id/txtValueTotalTipTimeSheet'
    const nav_back = '~Navegar hacia arriba'
    const snack_bar = 'id:com.juvomos.pos:id/snackbar_text'

    const btn_cash_tips = 'id:com.juvomos.pos:id/btnCashTips'

    const declare_tips_amount = 'id:com.juvomos.pos:id/declareTipsAmountId'

    const btn_check = 'id:com.juvomos.pos:id/checkBigImage'
    const enter_pin_text = 'id:com.juvomos.pos:id/enterPinText'
    const totalTips = 'id:com.juvomos.pos:id/totalCashDeclaredValue'

    let cash = '1.00'
    let current_cash = '0.00'

    function calculate_tips(current_tips, aditional_tips){
        return parseFloat(current_tips) + parseFloat(aditional_tips)
    }

    it("TS0001: Start work session", async () => {

       // 1.1 Set field value
      const inp = await $(input)
      await inp.setValue('040404') 
      await $(reg_time).click();

      // 2.2 Wait till page load
      await browser.pause(5000);

       // Start work time
      const btn = await $(clock_in)
      await btn.click() 

      // 2.2 Wait till snackbar appears
      await browser.pause(5000);

       //Press pos button
      const btn2 = await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]')
      await btn2.click();

      // Log out and enter again
      await $('id:com.juvomos.pos:id/imgCloseButton').click()
      await LoginFlow.close_app_with_meatball_menu_close_option()
      await LoginFlow.wait_till_next_view_load();
      await LoginFlow.check_if_pin_window_is_displayed();

      await inp.setValue('040404') 
      await $(reg_time).click();

      // Wait till page load
      await browser.pause(5000);

    })

     it("TC0002: Check tips current value", async () => {
         
         // Enter in work hour view
        const vhb = await $('id:com.juvomos.pos:id/viewHoursButton')
        await vhb.click();

        // Wait till load time finish
        await browser.pause(5000)

        // Get current tips value
        current_cash = parseFloat(await $(totalSheetTime).getText())

        // Get to previous menu
        await $(nav_back).click()

     })

     it("TC0003: Insert tips in modal", async () => {

        // Click in btn cash tips button
       await $('id:com.juvomos.pos:id/btnCashTips').click()

       // Insert tips in modal
       const ct = await $(declare_tips_amount)
       await ct.clearValue() 
       await ct.setValue(cash) 

       // Insert tips and wait
       await $(btn_check).click()

      // Wait till load time finish
      await browser.pause(3000)

       //Check snackbar message 
      const snack = await $(snack_bar)
      await expect(snack).toHaveText('Cash tip saved successfully')

     })


     it("TC0004: Get current tips if added successfuly", async () => {

         // Enter in work hour view
        const vhb = await $('id:com.juvomos.pos:id/viewHoursButton')
        await vhb.click();

        // Wait till load time finish
        await browser.pause(5000)

        // Get current tips value update
        new_cash = parseFloat(await $(totalSheetTime).getText())
        result = calculate_tips(current_cash, cash)
         
        // Exit seccion
        await $(nav_back).click()
         
        // Confirm result
        await expect(new_cash).toBe(result)
     })


     //1. Enter work section
    it("TC0005: Finish user work time", async () => {
      // 1.4 Click finish work time
       await $(clock_out).click()

      // 1.5 Wait 5 seg till window load
      await browser.pause(2000)

      const nb = await $(snack_bar);
      await expect(await nb).toHaveText('Salida fue exitosa')

    });


    // Get pin validation
    it("TC0006: Get back to pin window", async () => {
      //  Back to pin window
      await $(back_pin).click();

      // Wait 5 seg till window load
      await browser.pause(3000)

      //  Validate pin window
      const pin_window = await $(enter_pin_text);
      expect(pin_window).toHaveText('Ingrese PIN')
    });

});

