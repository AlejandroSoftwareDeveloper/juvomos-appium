import LoginFlow from '../../src/TestsFlows/LoginFlow'



describe("Check tips cash recieved", () => {


    const juv = 'id:com.juvomos.pos:id/'
    const clock_in = juv + 'clockInButton'
    const back_pin = juv + 'backToPin'
    const reg_time = juv + 'buttonTimeClock'
    const input = juv + 'txt_pin_user'
    const clock_out = juv + 'clockOutButton'
    const totalSheetTime = juv + 'txtValueTotalTipTimeSheet'
    const nav_back = '~Navegar hacia arriba'
    const snack_bar = juv + 'snackbar_text'
    const btn_cash_tips = juv + 'btnCashTips'
    const declare_tips_amount = juv + 'declareTipsAmountId'
    const btn_check = juv + 'checkBigImage'
    const enter_pin_text = juv + 'enterPinText'
    const totalTips = juv + 'totalCashDeclaredValue'
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
       // const ct = await $(declare_tips_amount)
       // await ct.clearValue() 
       // await ct.setValue(cash) 
       

       // Insert with button of keyboard


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
        await browser.pause(10000)

        // Get current tips value update
        new_cash = parseFloat(await $(totalSheetTime).getText())
        result = calculate_tips(current_cash, cash)
         

        // Confirm result
        await expect(new_cash).toBe(result)
         
        // Exit seccion
        await $(nav_back).click()
         
     })



});

