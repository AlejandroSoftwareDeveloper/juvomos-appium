describe("Send food to coock with discount", () => {
    const juv = 'id:com.juvomos.pos:id/'
    // id de menus
    const pick_up = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]'
    const accept_button     = juv + 'checkBigImage'
    const show_account = juv + 'btnShowOrder'
    const discount_block =  juv + 'layoutDiscount'
    const discount_value =  juv + 'discountValue'
    const discount_button =  juv + 'idBtnDiscount'
    let discount_percent = 0.0

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
        await browser.pause(1000)
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

    it("TC0006: Open account and send to apply discount.", async () => {
        // Click in account button
        await $(show_account).click()
    });


    it("TC0007: Select discount option.", async () => {
        // Select dicount option
        await $(discount_button).click()

        // get discount value
        discount_percent = await $(discount_value).getText()

        // Apply discount 
        await $(discount_block).click()

    });

    it("TC0008: Send to kitchen.", async () => {
        // Click in account button
        await $(show_account).click()

        // Send to kitchen
        await $('id:com.juvomos.pos:id/btnSendPointOfSale').click()

    });

});
