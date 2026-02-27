
describe("Visualize check corectly.",()=>{
    it("TC0001: Create check corretly",async()=>{
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
       await $(FOUR_TICKET_LIST).click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

        // Enviar check
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()
    })
})
