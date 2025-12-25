describe("Close app with meatballs menu'",()=>{
 
    // 1. Check we are in registration window 
    beforeEach('Check you are in welcome licence view',_ =>{
        $('id:com.juvomos.pos:id/txtWelcomeLicenseId').click();
    })

    // 2. Click on meatballs menu
    it("TC0001: Upper right menu is clicked" ,_ =>{
        $('//android.widget.ImageView[@content-desc="Más opciones"]').click();
    });

    // 3. Click on "Cerrar aplicacion" to close apk
    it("TC0002: Close apk is clicked" ,async ( ) =>{
        // 3.1 Click in "Cerrar aplicacion" to close app
        const app = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/content"])[2]')
        await app.click()
        // 3.2 Wait 5 seg till apk is closed
        await browser.pause(5000) 
    });

    // 4. Check apk in close 
    it("TC0003: Apk was closed" ,async ( ) =>{
        // 4.1 Check if app close correctlye(pending better solution)
        const ELEMENT_ID = await $('(//android.widget.FrameLayout[@resource-id="com.juvomos.pos:id/containerFragmentHome"])[2]/android.view.ViewGroup').elementId
        const ENDS_CORRECTLY = !ELEMENT_ID.endsWith('0012');
        await expect(ENDS_CORRECTLY).toBe(true)
    });
});
