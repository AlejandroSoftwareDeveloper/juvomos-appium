import FoodMenuPage                 from '../features/Pages/FoodMenuPage.js'
import FoodPageMenuModal            from '../features/Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import CheckMenuPage                from '../features/Pages/CheckMenuPage/CheckMenuPage.js'
import OrderListPage                from '../features/Pages/OrderListPage/OrderListPage.js'
import CheckMenuPageSecondView      from '../features/Pages/CheckMenuPageSecondView/CheckMenuPageSecondView.js'
import DeleteMultipleOrders  from '../features/RepeatedFlows/DeleteMultipleOrders.js'

describe("Check if items change correctly status",()=>{

    it("TC0001: Create check corretly",async()=>{
       await FoodPageMenuModal.click_pick_up_item()
       await FoodMenuPage.click_card()
       await FoodMenuPage.click_account_btn()

       await CheckMenuPage.click_first_item()
       await $('id:com.juvomos.pos:id/btnHolItem').click()
       await FoodMenuPage.click_account_btn()
       await CheckMenuPage.click_send_button()
    })

    it("TC0002: Send item to kitchen",async()=>{

        await FoodPageMenuModal.click_open_button()
        await browser.pause(10000); 
        await OrderListPage.click_layout_check_detail_item()
        await browser.pause(10000); 
        await CheckMenuPageSecondView.click_btn_recall()
        await CheckMenuPage.click_ticket_number()

// Buscra las clases de cada boton  // Veificar el cambio de boton
        await $('id:com.juvomos.pos:id/btnFireCheck').click()
        await $('id:com.juvomos.pos:id/btnFireNow').click()
        await $('id:com.juvomos.pos:id/btnSendPointOfSale').click()

    })

    it("TC0002: Delete orders corretly",async()=>{
       await DeleteMultipleOrders.delete_order();
    })

})
