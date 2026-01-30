import { PICK_UP_OPTION, BTN_SHOW_ORDER, BTN_DISCOUNT, DISCOUNT_VALUE, LAYOUT_DISCOUNT } from '../../../features/selectors/constants.js'

describe("Send food to coock with discount", () => {

    let discount_percent = 0.0
    const CUSTOM_CARD  = '(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[7]/android.view.ViewGroup'

    //  Pick up food to send to kitchen 
    it("TC0001: Pick up option to send to kitchen.", async () => {
       //  Check correct register  
       await $(PICK_UP_OPTION).click();
    });

    it("TC0002: Select custom card for test.", async () => {
           //Select twice samme element
          await $(CUSTOM_CARD).click()
          await $(CUSTOM_CARD).click()
    });

    it("TC0003: Open account and send to apply discount.", async () => {
        // Click in account button
        await $(BTN_SHOW_ORDER).click()
    });


    it("TC0004: Select discount option.", async () => {
        // Select dicount option
        await $(BTN_DISCOUNT).click()

        // get discount value
        discount_percent = await $(DISCOUNT_VALUE).getText()

        // Apply discount 
        await $(LAYOUT_DISCOUNT).click()

    });
    
        
    it("TC0005: Send to kitchen.", async () => {
        // Click in account button
        await $(BTN_SHOW_ORDER).click()

        // Send to kitchen
        await $('id:com.juvomos.pos:id/btnSendPointOfSale').click()

    });


    it("TC0006: Clean acount", async () => {

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

