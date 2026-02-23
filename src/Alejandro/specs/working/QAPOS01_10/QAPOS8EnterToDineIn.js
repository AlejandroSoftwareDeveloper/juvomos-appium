describe("Go to dine in from menu page",()=>{

     let name = null
    it("TC0001: Enter to DineIn page.", async () => {
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Dine In"]').click()
    });

    it("TC0002: Check Dine in page load.", async () => {
      await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/tableItemGeneralLayout"])[1]').waitForDisplayed({timeout:30000})
   });

    it("TC0003: Return to MenuPage.", async () => {
         await $('//android.widget.ImageButton[@content-desc="Navegar hacia arriba"]').click()
    });
})


