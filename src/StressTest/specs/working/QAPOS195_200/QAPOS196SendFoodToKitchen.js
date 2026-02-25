import { BTN_SHOW_ORDER, PICK_UP_OPTION, } from '../../../features/selectors/constants.js'

describe("Send food to coock", () => {

    const CUSTOM_CARD = '(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[7]/android.view.ViewGroup' 

    it("TC0001: Pick up option to send to kitchen.", async () => {
         await $(PICK_UP_OPTION).click()

    });

    it("TC0002: Select custom card for test.", async () => {
          await $(CUSTOM_CARD).click()
    });

    it("TC0003: Pick up again custom option.", async () => {
      await $(CUSTOM_CARD).click()
    });

    it("TC0004: Open account and send to kitchen.", async () => {
        // Click in account button
        await $(BTN_SHOW_ORDER).click()

        // check order
        const text_order = await $('id:com.juvomos.pos:id/itemInvoiceName').getText()
        let result = await text_order.startsWith('Burger Tender')
        await $('id:com.juvomos.pos:id/btnSendPointOfSale').click()

        // Check value to be true
        await expect(result).toBe(true)

    });


    it("TC0005: Clean acount", async () => {

        // Enter account
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]').click()
        
         // wait load
        await browser.pause(10000)


        // select account
        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').click()


        // Open menu
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()


        // select elm1
       await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]').click()

       // Click to "Anular"
       await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnVoid"]').click()

        // Click Cold option
       await $('//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/voidGeneralLayout"]').click()



        // select elm2
       await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[2]').click()

       // Click to "Anular"
       await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnVoid"]').click()

        // Click Cold option
       await $('//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/voidGeneralLayout"]').click()


    });



});
