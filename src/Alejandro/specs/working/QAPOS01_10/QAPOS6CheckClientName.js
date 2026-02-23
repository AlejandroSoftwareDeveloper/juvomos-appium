
describe("Check client name in account",()=>{

     let name = null
     // let base_url = '(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/customerDataLayout"])[1]')

    it("TC0001: Create cliente account.", async () => {

      await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
      await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Apache"]').click()
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

    });

    it("TC0002: Assign client to checks.", async () => {
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/ticketCustomerName"]').click()
      await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/searchCustomerText"]').click()
      await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/customerDataLayout"])[1]').waitForDisplayed({timeout:30000})
      name = await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/customerDataLayout"])[1]').$('//android.widget.TextView[@resource-id="com.juvomos.pos:id/customerName"]').getText()
      await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/customerDataLayout"])[1]').click()

      // Adicionar cliente
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnAddCustomer"]').click()

   });

    it("TC0003: Confirm client name in checks.", async () => {
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
     const tmp = await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/ticketCustomerName"]').getText()


      expect(name).toHaveText(tmp)
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]').click()
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/cancelDialog"]').click()
    });
})

