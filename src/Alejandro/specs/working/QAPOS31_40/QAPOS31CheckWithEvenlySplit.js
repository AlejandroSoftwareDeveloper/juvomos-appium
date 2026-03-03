describe('Check With Evenly Split', () => {
    let item = 4
    let noerr1 = null
    let noerr2 = null

    const Button       = (id) => `//android.widget.Button[@resource-id="com.juvomos.pos:id/${id}"]`
    const ViewGroup    = (io) => `//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/${id}"]`
    const LinearLayOut = (io) => `//android.view.LinearLayout[@resource-id="com.juvomos.pos:id/${id}"]`


    it('Create check with modifiers evenly split and verify that items with modifiers', async () => {
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()

        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name" and @text="Apache"]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

        // Selecciona la lista de tickets
        await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup').click()

        // Aplica descuento
        await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnDiscount"]').click()
        await $('//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layoutDiscount"]').click()

        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()


        // Lista de check
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]').click()

        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').waitForDisplayed({timeout:30000})
        let temp = await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]')

        if(!temp.error){
           await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').click()
           await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/recallContainerLeft"]').waitForDisplayed({timeout:20000})
           await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()
           await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idSplitButton"]').click()
           await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSplitEvenly"]').click()
           await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/two_btn_pin"]').click()
           await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/checkBigImage"]').click()
           await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnDone"]').click()
        }else{
            await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]').click()
            return false
        }


        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]').click()

        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').waitForDisplayed({timeout:30000})
        let temp2 = await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]')

        if(!temp2.error){
        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').click()

        let exit1 = await $('//android.widget.ImageView[@content-desc="V"]')
        noerr1 = !exit1.noerror


        await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButton"]').click()
        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[2]').click()

        let exit2 = await $('//android.widget.ImageView[@content-desc="V"]')
        noerr2 = !exit2.noerror

        }else{
            await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]').click()
            return false
        }
      
        // // //Divide el objeto
        await $('//android.widget.ImageButton[@content-desc="Navegar hacia arriba"]').click()

        expect(noerr2).toBe(noerr1)

    })
})
