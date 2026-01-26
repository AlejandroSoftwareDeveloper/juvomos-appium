import LoginFlow from '../../features/TestsFlows/LoginFlow.js'
import {
  CLOCK_IN_BUTTON,
  REG_TIME_BUTTON,
  PIN_INPUT,
  TOTAL_TIP_TIMESHEET,
  NAV_BACK,
  SNACKBAR_TEXT,
  BTN_CASH_TIPS,
  DECLARE_TIPS_AMOUNT,
  ACCEPT_BUTTON,
  TOTAL_TIPS_DECLARED,
  BTN_ONE,
  BTN_ZERO,
  // CANCEL_DIALOG
} from '../../features/selectors/constants.js'

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
    // const backspace = '(//android.widget.ImageView[@content-desc="Ingrese PIN"])[1]'

    const one = juv + 'one_btn_pin'
    const zero = juv + 'zero_btn_pin'
    const cancel_dialog = juv + 'btnCancelDialogTimeSheet' 


    function calculate_tips(current_tips, aditional_tips){
        return parseFloat(current_tips) + parseFloat(aditional_tips)
    }

    async function clean_backspace(){
       await $('(//android.widget.ImageView[@content-desc="Ingrese PIN"])[1]').click()
    }


    // async function check_buttons(){
    //      let back = await $(NAV_BACK)
    //      let cancel = await $(CANCEL_DIALOG)
    //      console.log(!!back)
    //      return !!back ? NAV_BACK : CANCEL_DIALOG
    // }

     it("TC0001: Check tips current value", async () => {

         // Enter in work hour view
        const vhb = await $('id:com.juvomos.pos:id/viewHoursButton')
        await vhb.click();

        // Wait till load time finish
        await browser.pause(5000)

        // Get current tips value
        current_cash = parseFloat(await $(totalSheetTime).getText())

        // Get to previous menu
        // await $(nav_back ).click()
        // await $(await check_buttons()).click()

        await $('id:com.juvomos.pos:id/btnCancelDialogTimeSheet').click()
        // let back = await $(NAV_BACK)
        // let cancel = 
        // // El back error existe por que  el boton no existe
        // console.log(`Back es ${!!back.error} y Cancel es ${!!cancel.error}`)

     })


     it("TC0002: Insert tips in modal", async () => {

      // Click in btn cash tips button
     await $('id:com.juvomos.pos:id/btnCashTips').click()

      for (let i = 0 ; i < 10 ;i++){
          await clean_backspace()
      }

      // Insert tips in modal
       await $(one).click()
       await $(zero).click()
       await $(zero).click()

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
        let new_cash = parseFloat(await $(totalSheetTime).getText())
        let result = calculate_tips(current_cash, cash)

        // Confirm result
        await expect(new_cash).toBe(result)

        // Exit seccion
        // await $(nav_back).click()
        // await $(await check_buttons()).click()
        await $('id:com.juvomos.pos:id/btnCancelDialogTimeSheet').click()

     })

});
