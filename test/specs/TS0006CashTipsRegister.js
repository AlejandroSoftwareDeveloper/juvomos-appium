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


     it("TC0001: Check tips current value", async () => {
         
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

     it("TC0002: Insert tips in modal", async () => {

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


     it("TC0003: Get current tips if added successfuly", async () => {

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



});

