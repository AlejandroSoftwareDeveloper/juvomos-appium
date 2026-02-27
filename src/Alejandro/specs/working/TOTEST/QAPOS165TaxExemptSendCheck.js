describe('Tax excempt items send to kitchen amd pay with cash.', () => {

    // it('TC0001: Close seccion', async () => {
    //    await $('//android.widget.ImageView[@content-desc="JuvoPOS"]').click()
    //    await $('//android.widget.ImageView[@content-desc="Más opciones"]').click()
    //    await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/title" and @text="Cerrar aplicación"]').click()
    // })
    //
    // it('TC0002: Login app.', async () => {
    //    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/eight_btn_pin"]').click()
    //    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/five_btn_pin"]').click()
    //    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/zero_btn_pin"]').click()
    //    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/nine_btn_pin"]').click()
    //    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/one_btn_pin"]').click()
    //    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/six_btn_pin"]').click()
    //    await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/checkBigImage"]').click()
    // })


    it('TC0003: Select items.', async () => {
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Apache"]').click()
        
        // Item con modificadores
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Ribs & Chicken"]').click()
        await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutCardModifierItem"])[1]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnDone"]').click()

        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Ribs & Chicken"]').click()
        await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutCardModifierItem"])[1]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnDone"]').click()


        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Ribs & Chicken"]').click()
        await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/layoutCardModifierItem"])[1]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnDone"]').click()


        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="General Grill"]').click()
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="General Grill"]').click()

        //Selecciona cuenta
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()

        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]').click()

        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').waitForDisplayed({timeout:10000})
        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()
    })



    it('TC0004: Apply tax exempt on first item', async () => {
         await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]').click()       
         await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTaxExempt"]').click()
         await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOk"]').click()
         await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]').click()

        // Check Tax exempt
        let tax_exist = await $('//android.widget.ImageView[@content-desc="V"]')
        expect(!tax_exist.error).toBe(true)
    })

    it('TC0005: Remove tax exempt first item', async () => {
         await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]').click()       
         await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTaxExempt"]').click()
         await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOk"]').click()
         await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]').click()

        // Check Tax exempt
        let tax_exist = await $('//android.widget.ImageView[@content-desc="V"]')
        expect(!tax_exist.error).toBe(false)
    })

    it('TC0006: Apply tax exempt third item', async () => {
         await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[3]').click()
         await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTaxExempt"]').click()
         await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOk"]').click()
         await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]').click()

        // Check Tax exempt
        let tax_exist = await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[3]//android.widget.ImageView[@content-desc="V"]')
        expect(!tax_exist.error).toBe(true)
    })

    it('TC0007: Remove tax exempt third item', async () => {
         await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[3]')
         await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTaxExempt"]').click()
         await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOk"]').click()
         await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]').click()

        // Check Tax exempt
        let tax_exist = await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[3]//android.widget.ImageView[@content-desc="V"]')
        expect(!tax_exist.error).toBe(false)
    })

    it('TC0008: Pay with cash', async () => {
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idPayButton"]').click()
        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/paymentRelative"])[1]/android.widget.LinearLayout').click()
        await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnNoPrint"]').click()

        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]').click()

    })



})
