describe("Cancel account ", () => {
    const juv = 'id:com.juvomos.pos:id/'

    // id de menus
    const open_accounts = juv + 'btnOrderRecall'
    const layout_item = juv + 'layout_check_detail_item'
    const get_employee_id = juv + 'txtValueEmployeeCheck'

    const open_menu_account = juv + 'btnRecall'

    //  Pick up food to send to kitchen 
    it("TC0001: Pick up option to send to kitchen.", async () => {
       //  Check correct register  
      const btn = await $(open_accounts)
      await btn.click();

      // Load next screen
      await browser.pause(30000) //3 seg
    });
    
    it("TC0002: Check employee id", async () => {
       //  Check correct register  
      const upper_case_employee_id = await $(get_employee_id)
      await expect(upper_case_employee_id).toHaveText('QA 3')
       
    });


    it("TC0003: Click in account and press button recall to open menu config", async () => {
       // Click account
      const btn2 = await $(layout_item)
      await btn2.click();
       
      // Load next screen
      await browser.pause(10000) //3 seg

       // Click account
      const btn3 = await $(open_menu_account)
      await btn3.click();
       
      // Load next screen
      await browser.pause(10000) //3 seg

    });

    it("TC0004: Cancel first item in instace list", async () => {
        // Click account
        await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]').click()

        // void order
        await $('id:com.juvomos.pos:id/btnVoid').click()
        await $('id:com.juvomos.pos:id/voidGeneralLayout').click()

    });

    it("TC0004: Cancel second item in instace list", async () => {
        // Click account
        await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[2]').click()

        // void order
        await $('id:com.juvomos.pos:id/btnVoid').click()
        await $('id:com.juvomos.pos:id/voidGeneralLayout').click()

    });
});
