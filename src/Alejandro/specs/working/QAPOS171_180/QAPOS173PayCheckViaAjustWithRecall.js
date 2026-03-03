
describe("Paga el cheque con ajuste via recall check.",()=>{
    it("TC0001: Crea un check y envia a la cocina.",async()=>{

        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Apache"]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

        // Enviar a la cocina
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()
    })


    it("TC0002: Recall check. ",async () => {

    })


    it("TC0002: Pay and ajust and repay. ",async () => {



    })
})

