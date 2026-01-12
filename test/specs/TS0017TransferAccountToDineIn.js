describe("Trasnfer product between acccounts", () => {

      // Estas prubas son subseptibles a cambios
    it("TC0001: Open account Dine in ", async () => {
       //Open pick up option
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()

       // Select item
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="QA"]').click()

       // Select account in list
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
    });


    it("TC0002: Send to kitchen", async () => {
       // get produtc status
      product_name = await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName"]').getText()
      product_price = await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceTotal"]').getText()
      
        //send to kitchen
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()

       // check account option existence
       await expect(await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/messageTitle"]')).toHaveText('Tipo de orden')

    });

    it("TC0003: Select account and transfer", async () => {
        // Click in "abrir"
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]').click()

        //Select account with qa9
        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').click()

        // Wait till load 
         await browser.pause(10000);

        // Go to back interface 
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()

        //Select account 
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/txtTicketNumber"]')/click()

        // Select transfer and employee
        await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTransfer"]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnTransferEmployee"]').click()

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
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]')
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]')

    });
   
  

});
