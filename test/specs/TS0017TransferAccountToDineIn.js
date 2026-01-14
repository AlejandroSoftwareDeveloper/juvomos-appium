import {
  PICK_UP_OPTION,
  BTN_SHOW_ORDER,
  BTN_SEND_TO_KITCHEN,
  BTN_ORDER_RECALL,
  LAYOUT_CHECK_ITEM,
  BTN_RECALL,
  BTN_TRANSFER,
  BTN_TRANSFER_EMPLOYEE
} from '../../src/selectors/constants'

describe("Trasnfer product between acccounts", () => {

      // Estas prubas son subseptibles a cambios
    it("TC0001: Open account Dine in ", async () => {
       //Open pick up option
       await $(PICK_UP_OPTION).click()

       // Select item
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="QA"]').click()

       // Select account in list
       await $(BTN_SHOW_ORDER).click()
    });


    it("TC0002: Send to kitchen", async () => {
       // get produtc status
      product_name = await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName"]').getText()
      product_price = await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceTotal"]').getText()
      
        //send to kitchen
       await $(BTN_SEND_TO_KITCHEN).click()

       // check account option existence
       await expect(await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/messageTitle"]')).toHaveText('Tipo de orden')

    });

    it("TC0003: Select account and transfer", async () => {
        // Click in "abrir"
        await $(BTN_ORDER_RECALL).click()

        //Select account with qa9
        await $(LAYOUT_CHECK_ITEM + '[1]').click()

        // Wait till load 
         await browser.pause(10000);

        // Go to back interface 
        await $(BTN_RECALL).click()

        //Select account 
        await $('id:com.juvomos.pos:id/txtTicketNumber').click()

        // Select transfer and employee
        await $(BTN_TRANSFER).click()
        await $(BTN_TRANSFER_EMPLOYEE).click()

        // wait till list load
        await browser.pause(5000)

        // Get employee name 
        const temp  = await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/employeeName" and @text="QA 3"]')
        employee_name = temp.getText()
        temp.click()

        // transfer to employee
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnTransfer"]').click()

        // wait till list load
        await browser.pause(5000)
        
        // Back to menu
        await $(PICK_UP_OPTION)
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]')

    });
   
  

});
