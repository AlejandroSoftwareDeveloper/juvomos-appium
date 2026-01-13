describe("Search product from Food", () => {
    const juv = 'id:com.juvomos.pos:id/'
    const lupa ='//android.widget.ImageView[@content-desc="Buscar"]'
    const comida  '//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemDepartmentName" and @text="Food2.0"]'

    // Add product start in order type
    it('TC0001: Check search functions are correct loaded',async () => {
        //Click in pick up
        await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()

        // Check lupa and  food buttons are present
        let lpa = await $(lupa)
        let food = await $(comida)

        await expect( (!!lpa & !!food) === 1 ).toBe(true)

    })


    it('TC0002: Check food are selected',async () => {
        // Select food list
         await $(food).click()

        // Check catergoria row is shown
        await expect(await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/categoryRow"]')).toBe(true)
    })

    it('TC0003: Check search option open and close and can be inserted new data',async () => {
        // Select food list
        await $(lupa).click()

        //Insert randon value
        let search = await $('//android.widget.AutoCompleteTextView[@resource-id="com.juvomos.pos:id/search_src_text"]')
        await search.setValue('asd83b')

        //wait till load
        await browser.pause(3000)

        // Check item do not load 
        let item await $('(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[1]/android.view.ViewGroup')

        // Clean consult
        const clean = await $('//android.widget.ImageView[@content-desc="Borrar consulta"]')
        clean.click()
        clean.click()

        // Check result is ok
        await expect( !!item === 0 ).toBe(true)
    })
    // Sin terminar 
    // it('TC0004: Search for data',async () => {
    // })
});
