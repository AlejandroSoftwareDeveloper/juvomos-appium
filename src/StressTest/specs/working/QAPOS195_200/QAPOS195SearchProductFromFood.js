describe("Search product from Food", () => {

    let elm1 = ''

    it('TC0001: Select search options',async () => {
        //select picup
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
        
       // Get first item description
      elm1 = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"])[1]').$('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name"]').getText()

    });

    it('TC0002: Select search',async () => {
        await $('//android.widget.ImageView[@content-desc="Buscar"]').click()
    })

    it('TC0003: Insert search context is correct',async () => {
       await $('//android.widget.AutoCompleteTextView[@resource-id="com.juvomos.pos:id/search_src_text"]').setValue(elm1)

       let temp = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"])[1]').$('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name"]').getText()
       await expect(temp).toBe(elm1)


    })

    it('TC0004: Clean evn',async () => {
        await $('// android.widget.ImageView[@content-desc="Borrar consulta"]').click()
        await $('// android.widget.ImageView[@content-desc="Borrar consulta"]').click()

        //Check account
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]').click()

        let to = await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/messageTitle"]')

        await expect(to).toHaveText('Tipo de orden')

    })

});
