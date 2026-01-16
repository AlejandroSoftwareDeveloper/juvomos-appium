import {
  BTN_ORDER_RECALL,
  LAYOUT_CHECK_ITEM,
  get_employee_id,
  BTN_RECALL,
  BTN_VOID,
  VOID_GENERAL_LAYOUT,
  BTN_CANCEL,
  BTN_SAVE_CHANGES
} from '../../src/selectors/constants'

describe("Cancel product ", () => {
    // const juv = 'id:com.juvomos.pos:id/'

    // id de menus
    // const open_accounts = juv + 'btnOrderRecall'
    // const layout_item = juv + 'layout_check_detail_item'
    // const get_employee_id = juv + 'txtValueEmployeeCheck'

    // const open_menu_account = juv + 'btnRecall'

    //  Pick up food to send to kitchen 
    it("TC0001: Pick up option to send to kitchen.", async () => {
       //  Check correct register  
      const btn = await $(BTN_ORDER_RECALL)
      await btn.click();

      // Load next screen
      await browser.pause(40000) //3seg
    });
    
    it("TC0002: Check emmployee id", async () => {
       //  Check correct register  
      const upper_case_employee_id = await $(get_employee_id)
      await expect(upper_case_employee_id).toHaveText('QA 3')
       
    });


    it("TC0003: Click in account and press button recall to open menu config", async () => {
       // Click account
      const btn2 = await $(LAYOUT_CHECK_ITEM)
      await btn2.click();
       
      // Load next screen
      await browser.pause(30000) // 3seg

       // Click account
      const btn3 = await $(BTN_RECALL)
      await btn3.click();
       
      // Load next screen
      await browser.pause(10000) // 3seg

    });

    it("TC0004: Select instace list ", async () => {
       // Click account
        await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]').click()
        
        // void order
        await $(BTN_VOID).click()
        await $(VOID_GENERAL_LAYOUT).click()

    });

    it("TC0005: Saves change where product are deleted", async () => {
       // Click "Cancelar"
       await $(BTN_CANCEL).click()
        
       // Click in "Guardar cambios"
       await $("id:com.juvomos.pos:id/voidCloseButton").click()

    });


});
