describe("Close app with meatballs menu'",()=>{
 
    beforeEach('Check you are in welcome licence view',_ =>{
        $('id:com.juvomos.pos:id/txtWelcomeLicenseId').click();
    })

    it("Upper right menu is clicked" ,_ =>{
        $('//android.widget.ImageView[@content-desc="Más opciones"]').click();
    });

    it("Close apk is clicked" ,async ( ) =>{
        // Click in "Cerrar aplicacion" to close app
        const app = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/content"])[2]')
        await app.click()
        // Wait 5 seg till apk is closed
        await browser.pause(5000) 
    });

    it("Apk was closed" ,async ( ) =>{
        //Check if app close correctlye(pending better solution)
        const ELEMENT_ID = await $('(//android.widget.FrameLayout[@resource-id="com.juvomos.pos:id/containerFragmentHome"])[2]/android.view.ViewGroup').elementId
        const ENDS_CORRECTLY = !ELEMENT_ID.endsWith('0012');
        await expect(ENDS_CORRECTLY).toBe(true)
    });
});
