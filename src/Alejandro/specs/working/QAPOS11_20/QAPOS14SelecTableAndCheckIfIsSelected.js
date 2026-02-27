describe('Seleccionar mesa,crear check y verificar si esta ocupada.', () => {
    let tablenumber = 1

    async function mesavacia(i){
         const text = await $(`(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/tableItemGeneralLayout"])[${i}]//android.widget.TextView[@resource-id="com.juvomos.pos:id/tableCheckNumber"]`)
         return !!text.error
    }

    async function buscarmesavacia(){
        for (let i = tablenumber; i < 8; i++) {
            estavacia = await mesavacia(i)
            if(estavacia){
                tablenumber = i;
                break
            }
         }
     }

    it('TC0001: Selecciona mesa y mostrar seleccionada', async () => {
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Dine In"]').click()
        await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/rvNameAreas"]').waitForDisplayed({timeout:20000})
        await buscarmesavacia()
        await $(`(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/tableItemGeneralLayout"])[${tablenumber}]`).click()

        // Insertar cliente
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/one_btn_pin"]').click()
       await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/checkBigImage"]').click()
       //
       // Ir a la cuenta 
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Apache"]').click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()


       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()

       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Dine In"]').click()
       await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/rvNameAreas"]').waitForDisplayed({timeout:20000})

       const estavacia = await mesavacia(tablenumber)
       expect(!estavacia).toBe(true)

        // limpiar la mesa
       await $(`(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/tableItemGeneralLayout"])[${tablenumber}]`).click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/txtTicketNumber"]').click()
       await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnVoid"]').click()
       await $('//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/voidGeneralLayout"]').click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/voidCloseButton"]').click()

    })
})
