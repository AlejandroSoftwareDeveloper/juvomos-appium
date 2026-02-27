describe("Comentarios de objetos enviadas a la cocinas siempre activos.", async () => {


    // Revisar el script funciona bien
    async function textView(id,txt){
         await $(`//android.widget.TextView[@resource-id="com.juvomos.pos:id/${id}" and @text=${txt}]`).click()
    }

    async function button(id){
         await $(`//android.widget.Button[@resource-id="com.juvomos.pos:id/${id}"]`).click()
    }

    async function waitForItem(id,pos=1,timeout=10000){
        await $(`(//android.widget.ViewGroup[@resource-id="com.juvomos.pos:id/${id}"][${pos}]`).waitForDisplayed({timeout})
    }


    it('TC0001: Selecciona un objeto.', async () => {
      await $(`//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]`).click()
      await $(`//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Apache"]`).click()
      await $(`//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]`).click()
    })

    it('TC0002: Selecciona las opciones de comida y comentarios.', async () => {
       await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup').waitForDisplayed({timeout:30000})
       await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup').click()
       await $("id:com.juvomos.pos:id/btnKitchenComment").click()

       // Secondary
       const txt = await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/messageTitle"]').getText()
       expect(txt).toBe("Comentarios")
       await $('//android.widget.ImageView[@content-desc="JuvoPOS"]').click()
       await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]').click()

    })
    
    it('TC0003: Regresa a la pantalla principal.', async () => {
       await $(`//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]`).click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]').click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/cancelDialog"]').click()
    })
})


