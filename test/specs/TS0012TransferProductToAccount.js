describe("Transfer product from one account to another", () => {
    const juv = 'id:com.juvomos.pos:id/'
    // id de menus
    const pick_up = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]'
    const button_menu_account =  juv + 'btnOrderRecall'
    const first_account = '(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]'
    const second_account = '(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[2]'
    const account_menu =  juv + 'btnRecall'
    const first_element_in_account = juv + '(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]'

    const transfer_button = juv + 'btnTransferItem'
    const item_to_transfer = '(//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName"])[1]'
    let item_to_transfer_description = ''
    const account_card_from_trasnfer_account = '(//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName"])[1]'

    const btn_accept_transfer = juv + 'btnTransfer'
    const cancel_button = juv + 'idCancelButton'
    const save_changes_button = juv + 'voidCloseButton'


    it("TC0001: Open account list and select first account", async () => {
       //Open account list
       await $(button_menu_account).click()

       // Select account in list
       await $(first_account).click()

       // Select account in list
       await $(account_menu).click()
    });

    it("TC0002: Select first item.", async () => {
        // Get itme description before start transfer   
       item_to_transfer_description = await $(item_to_transfer).getText()

       //Click in item to transfer
      await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]').click()

    });

    it("TC0003: Select transfer option", async () => {
        //Select transfer option
        await $(transfer_button).click()

        //Select first account
        // await $(account_card_from_trasnfer_account).click()
        await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutItemCheckTransfer"]').click()

        // Click in accept transfer 
        await $(btn_accept_transfer).click()

        // Wait till transfer 
        await browser.pause(5000)

        // Click in clancel button
        await $(cancel_button).click()

        //Save changes 
        await $(save_changes_button).click()

        // Check menu exist
        await expect(await $('id:com.juvomos.pos:id/messageTitle')).toHaveText('Tipo de orden')
    });

 
    it("TC0004: Open menu and confirm account trasnfer", async () => {
       // Open menu account 
       await $(button_menu_account).click()

      // Open second account
       await $(second_account).click()

       await browser.pause(10000);

      // Check three items in account 
      // ERA: '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName"])[1]'
      const item1 = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"]/android.view.ViewGroup[1]')
      const item2 = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"]/android.view.ViewGroup[2]')
      const item3 = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"]/android.view.ViewGroup[3]')

       await expect( (!!item1 & !!item2 & !!item3) === 1 ).toBe(true)

    });
    
    it("TC0004: Close menu options", async () => {

        // Return  main menu
        await $('//android.widget.ImageButton[@content-desc="Navegar hacia arriba"]').click()

        // Check menu exist
        await expect(await $('id:com.juvomos.pos:id/messageTitle')).toHaveText('Tipo de orden')
    });

});
