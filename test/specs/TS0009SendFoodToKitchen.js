describe("Send food to coock", () => {
    const juv = 'id:com.juvomos.pos:id/'
    const clock_in          = juv + 'clockInButton'
    const back_pin          = juv + 'backToPin'
    const password_input    = juv + 'txt_pin_user'
    const reg_time          = juv + 'buttonTimeClock'
    const accept_button     = juv + 'checkBigImage'
    const show_account = juv + 'btnShowOrder'
    const pick_up = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]'

    // 1. Get pin validation
    it("TC0001: Enter employer seccion", async () => {
       // 1.1 Set field value
      const input = await $('id:com.juvomos.pos:id/txt_pin_user')
      await input.setValue('040404') 
      await $(reg_time).click();
      // await LoginFlow.insert_value_and_submit();

       // 1.2 Wait till validation
      await browser.pause(30000); // 5 seg

        // 1.3 Get back pin button
      const ELEMENT = await $(back_pin);
      const selector = ELEMENT.selector

        expect(selector === 'id:com.juvomos.pos:id/backToPin').toBe(true)
    });

    // 2. Select init work time
    it("TC0002: Select Time clock option", async () => {
       // 2.1 Click in time clock
      const btn = await $(clock_in)
      await btn.click() 

      // 2.2 Wait till snackbar appears
      await browser.pause(30000); // 5 seg

      // 2.3 Check registration model
      const ELEMENT = await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]')
      const selector = ELEMENT.selector

      expect(selector === '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]').toBe(true)

    });

    // 3. Check init work seccion 
    it("TC0003: Press pos to init seccion.", async () => {
       // 3.1 Check correct register  
      const btn = await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPos"]')
      await btn.click();

       // 3.2 Wait till snackbar appears
       await browser.pause(20000); //5seg

       // 3.3 Check user has menu view
       const ELEMENT = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/customersListRecycler"]')
       const selector = ELEMENT.selector

       expect(selector === '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/customersListRecycler"]').toBe(true)

    });

    //  Pick up food to send to kitchen 
    it("TC0004: Pick up option to send to kitchen.", async () => {
       //  Check correct register  
      const btn = await $(pick_up)
      await btn.click();

    });

    it("TC0005: Select card for qa3 test.", async () => {
      // Select card qa3
      const card_clicked = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"])[1]')
      await card_clicked.click()

       // Show modal and confirm
      const confirm = await $('id:com.juvomos.pos:id/btnCustomName')
      await confirm.click()

    });


    it("TC0006: Set price per element.", async () => {
        // Select card qa3
        await $(accept_button).click()

        // check weigth modal
        await browser.pause(1000)
        await $('id:com.juvomos.pos:id/one_btn_pin').click()
        await $(accept_button).click()

    });
    
    it("TC0007: Pick up again qa3 option.", async () => {
      // Select card qa3
      const card_clicked = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"])[1]')
      await card_clicked.click()

       // Show modal and confirm
      const confirm = await $('id:com.juvomos.pos:id/btnCustomName')
      await confirm.click()

    });


    it("TC0008: Set price per element second time.", async () => {
        // Select card qa3
        await $(accept_button).click()

        // check weigth modal
        await $('id:com.juvomos.pos:id/one_btn_pin').click()
        await $(accept_button).click()

    });

    it("TC0009: Open account and send to kitchen.", async () => {
        // Click in account button
        await $(show_account).click()

        // check order
        const text_order = await $('id:com.juvomos.pos:id/itemInvoiceName').getText()
        let result = await text_order.startsWith('qa3')
        await $('id:com.juvomos.pos:id/btnSendPointOfSale').click()

        // Check value to be true
        await expect(result).toBe(true)

    });


});
