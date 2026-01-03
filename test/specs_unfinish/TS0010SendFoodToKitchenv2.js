describe("Send food to coock", () => {
    const juv = 'id:com.juvomos.pos:id/'
    const clock_in          = juv + 'clockInButton'
    const back_pin          = juv + 'backToPin'
    const password_input    = juv + 'txt_pin_user'
    const reg_time          = juv + 'buttonTimeClock'
    const accept_button     = juv + 'checkBigImage'
    

    // id de menus
    const tipo_de_orden = juv + 'messageTitle'
    const elegir_tipo_de_orden = juv +  'messageSubTitle'
    const abrir_menu = juv + 'btnOrderRecall'
    const pick_up = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]'
    const dine_in = '~Dine in'
    const to_go = '~To Go'
    const delivery = '~Delivery'

    const qa3_price = juv + 'priceValue'
    const peso_input =  juv + 'byWeightValue'
    const show_account = juv + 'btnShowOrder'

    // me quede en la vistas de las cards

    //  Pick up food to send to kitchen 
    it("TC0001: Pick up option to send to kitchen.", async () => {
       //  Check correct register  
      const btn = await $(pick_up)
      await btn.click();
    });

    it("TC0002: Select card for qa3 test.", async () => {
      // Select card qa3
      const card_clicked = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"])[1]')
      await card_clicked.click()

       // Show modal and confirm
      const confirm = await $('id:com.juvomos.pos:id/btnCustomName')
      await confirm.click()

    });


    it("TC0003: Set price per element.", async () => {
        // Select card qa3
        await $(accept_button).click()

        // check weigth modal
        await $('id:com.juvomos.pos:id/one_btn_pin').click()
        await $(accept_button).click()

    });
    
    it("TC0004: Pick up again qa3 option.", async () => {
      // Select card qa3
      const card_clicked = await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"])[1]')
      await card_clicked.click()

       // Show modal and confirm
      const confirm = await $('id:com.juvomos.pos:id/btnCustomName')
      await confirm.click()

    });


    it("TC0005: Set price per element second time.", async () => {
        // Select card qa3
        await $(accept_button).click()

        // check weigth modal
        await $('id:com.juvomos.pos:id/one_btn_pin').click()
        await $(accept_button).click()

    });

    it("TC0006: Open account and send to kitchen.", async () => {
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
