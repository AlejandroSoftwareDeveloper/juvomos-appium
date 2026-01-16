import {
  PICK_UP_OPTION,
  BTN_ORDER_RECALL,
  LAYOUT_CHECK_ITEM,
  BTN_RECALL,
  BTN_TRANSFER,
  BTN_TRANSFER_CHECK
} from '../../src/selectors/constants'

describe("Trasnfer product between acccounts", () => {
    // const juv = 'id:com.juvomos.pos:id/'
    // id de menus
    // const pick_up = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]'
    // const button_menu_account =  juv + 'btnOrderRecall'
    // const first_account = '(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]'
    // const second_account = '(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[2]'
    // const account_menu =  juv + 'btnRecall'
    // const first_element_in_account = juv + '(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]'
    // const transfer_button = juv + 'btnTransferItem'


    // const item_to_transfer = '(//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName"])[1]'
    // let item_to_transfer_description = ''
    // const account_card_from_trasnfer_account = '(//android.widget.TextView[@resource-id="com.juvomos.pos:id/itemInvoiceName"])[1]'

    // const btn_accept_transfer = juv + 'btnTransfer'
    // const cancel_button = juv + 'idCancelButton'
    // const save_changes_button = juv + 'voidCloseButton'


    it("TC0001: Open account list and select first account", async () => {
       //Open account list
       await $(BTN_ORDER_RECALL).click()

       // Select account in list
       await $(LAYOUT_CHECK_ITEM + '[1]').click()

       // Select account in list
       await $(BTN_RECALL).click()
    });


    it("TC0002: Select account number", async () => {
       //Click in account to transfer
       await $('id:com.juvomos.pos:id/txtTicketNumber').click()
        
       // check account option existence
       await expect(await $('id:com.juvomos.pos:id/itemOptionText')).toHaveText('Opciones de la cuenta')

    });


    it("TC0003: Select transfer option", async () => {
        //Select transfer option
        await $(BTN_TRANSFER).click()

        // Click Transfer button 
        await $('id:com.juvomos.pos:id/btnTransferChec').click()

        // Check option menu
       await expect(await $('id:com.juvomos.pos:id/transferText')).toHaveText('Transferir Cuenta')

    });


    it("TC0004: Trasnsfer account to another account", async () => {
        //Select transfer option
        await $(BTN_TRANSFER).click()

        // wait till load 
        await browser.pause(10000)

        // Close menu
        await $( 'id:com.juvomos.pos:id/imgCloseButton').click()

        // retornar menu principal
        await $('//android.widget.ImageButton[@content-desc="Navegar hacia arriba"]')

        // Check menu exist
        await expect(await $('id:com.juvomos.pos:id/messageTitle')).toHaveText('Tipo de orden')
    });

});