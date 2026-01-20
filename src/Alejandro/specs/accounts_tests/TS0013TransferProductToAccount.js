import {
  PICK_UP_OPTION,
  BTN_ORDER_RECALL,
  LAYOUT_CHECK_ITEM,
  BTN_RECALL,
  BTN_TRANSFER_ITEM,
  BTN_TRANSFER,
  BTN_CANCEL,
  BTN_SAVE_CHANGES,
  NAV_BACK
} from '../../features/selectors/constants'

describe("Transfer product from one account to another", () => {

    let item_to_transfer_description = ''
    const CUSTOM_CARD  = '(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[7]/android.view.ViewGroup'

    it("TC0001: Select customs card for test.", async () => {
      // Select card qa3
        // const card_clicked = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"])[1]')

      await $(PICK_UP_OPTION).click()

      const card_clicked = await $(CUSTOM_CARD)
      await card_clicked.click()
      await card_clicked.click()

    });

    it("TC0002: Send to kitchen item 1.", async () => {

      //Open account 
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
      // Send to kitchen 
      await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]').click()
      await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnFireItem"]').click()

      //Fast send
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnFireNow"]').click()

    });


    it("TC0003: Send to kitchen item 2.", async () => {

      //Open account 
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

      // Send to kitchen 
      await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[2]').click()
      await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnFireItem"]').click()

      //Fast send
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnFireNow"]').click()

    });


    it("TC0004: Create account.", async () => {
      //Open account 
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

      // Store account
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()

    });


    it("TC0005: Add to more items for second account.", async () => {
      // Select card qa3
      // const card_clicked = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"])[1]')

      await $(PICK_UP_OPTION).click()

      const card_clicked = await $(CUSTOM_CARD)
      await card_clicked.click()
      await card_clicked.click()

    });

    it("TC0006: Send to kitchen item 1.", async () => {

      //Open account 
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
      // Send to kitchen 
      await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]').click()
      await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnFireItem"]').click()

      //Fast send
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnFireNow"]').click()

    });

    it("TC0007: Send to kitchen item 2.", async () => {

      //Open account 
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

      // Send to kitchen 
      await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[2]').click()
      await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnFireItem"]').click()

      //Fast send
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnFireNow"]').click()

    });

    it("TC0008: Create account.", async () => {
      //Open account 
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

      // Store account
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()

    });

    it("TC0009: Select account list.", async () => {
      //Open account list
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]').click()

      // wait
      await browser.pause(10000)

       //Select account
      await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]')
    });


    it("TC0010: Select item and transfer", async () => {
        // Select account
        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').click()

        // Select account
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()

        // Slecte item1
        await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"]/android.view.ViewGroup[1]').click()

        // Transfer button
        await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTransferItem"]').click()

        // Select account
        await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutItemCheckTransfer"])[1]').click()

        // Click transfer
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnTransfer"]').click()

         // wait tranfer
        await browser.pause(10000)

        // Go main menu 
        await  $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]').click()

        // Guardar cambios
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/voidCloseButton"]').click()
    });


    it("TC0011: Open menu and confirm account transfer", async () => {
        //Open account list
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]').click()

        //wait
        await browser.pause(10000)

        // Select account
        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[2]').click()


        const item1 = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"]/android.view.ViewGroup[1]')
        const item2 = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"]/android.view.ViewGroup[2]')
        const item3 = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"]/android.view.ViewGroup[3]')

        await expect( (!!item1 & !!item2 & !!item3) === 1 ).toBe(true)
    });


    it("TC0012: Clean acounts", async () => {

        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()

        //wait
        await browser.pause(2000)

        // // Select account
        // await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[2]').click()

        //Clean item 1
        await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]').click()
        await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnVoid"]').click()
        await $('//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/voidGeneralLayout"]').click()


        //Clean item 2
        await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[2]').click()
        await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnVoid"]').click()
        await $('//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/voidGeneralLayout"]').click()

        //Clean item 3
        await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[3]').click()
        await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnVoid"]').click()
        await $('//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/voidGeneralLayout"]').click()


        // wait
        await browser.pause(10000)

        
         // Show account
        await $('id:com.juvomos.pos:id/btnOrderRecall').click()

        // wait
        await browser.pause(10000)

        // //Clean item 1
        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').click()

        //Account
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()


        await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"]/android.view.ViewGroup').click()
        await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnVoid"]').click()
        await $('//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/voidGeneralLayout"]').click()

    });

});

