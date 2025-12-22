describe("Close app with meatballs menu'",()=>{
 
    it("Upper right menu is clicked" ,async ( ) =>{
        //Select meatballs menu
        const selector = await $('//android.widget.ImageView[@content-desc="Más opciones"]')
        await selector.click()
    });

    it("Close apk is clicked" ,async ( ) =>{
        // Click in "Cerrar aplicacion" to close app
        const OPT_CLOSE = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/content"])[2]')
        await OPT_CLOSE.click()

        //Espero 5 seg para que cierre la aplicacion
        await browser.pause(5000) 
    });

    it("Check if app is still open" ,async ( ) =>{
        //Check if app close correctlye(pending better solution)
        const ELEMENT_ID = await $('(//android.widget.FrameLayout[@resource-id="com.juvomos.pos:id/containerFragmentHome"])[2]/android.view.ViewGroup').elementId
        const ENDS_CORRECTLY = !ELEMENT_ID.endsWith('0012');
        await expect(ENDS_CORRECTLY).toBe(true)
    });
});
