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

    async function clickItem(id,pos=1){
        await $(`(//android.widget.ViewGroup[@resource-id="com.juvomos.pos:id/${id}"][${pos}]`).click()
    }

    it('TC0001: Selecciona un objeto.', async () => {
      await textView("orderTypeName","Pick Up")
      await textView("category_product_name","Apache")
      await button("btnShowOrder")
    })

    it('TC0002: Selecciona las opciones de comida.', async () => {
       await waitForItem("customerDataLayout",1,30000);
       await clickItem("customerDataLayout");
       await $("id:com.juvomos.pos:id/btnKitchenComment").click()
    })

    it('TC0003: Regresa a la pantalla principal.', async () => {
       await waitForItem("customerDataLayout",1,30000);
       await clickItem("customerDataLayout");

       await $("id:com.juvomos.pos:id/btnKitchenComment").click()
    })
})


