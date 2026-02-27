describe('Select table,pay check and check if occupied.', () => {
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

    it('TC0001: Selecciona mesa y pagar mesa y mostrar desocupada', async () => {
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Dine In"]').click()
        await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/rvNameAreas"]').waitForDisplayed({timeout:20000})
        await buscarmesavacia()
        await $(`(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/tableItemGeneralLayout"])[${tablenumber}]`).click()

        // Insertar cliente
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/one_btn_pin"]').click()
       await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/checkBigImage"]').click()

       // Ir a la cuenta 
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Apache"]').click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idPayButton"]').click()

        // Pagar con cash 
       await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/paymentRelative"])[1]').click()

        // Pagar no imprimir 
       await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnNoPrint"]').click()

       // Chequear que las mesa esta libre
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Dine In"]').click()

       const estavacia = await mesavacia(tablenumber)
       expect(estavacia).toBe(true)

       await $('//android.widget.ImageButton[@content-desc="Navegar hacia arriba"]').click()
    })
})
