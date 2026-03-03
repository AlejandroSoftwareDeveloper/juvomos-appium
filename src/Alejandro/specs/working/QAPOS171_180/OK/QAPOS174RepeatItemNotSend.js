import FoodMenuPage                 from '../../../features/Pages/FoodMenuPage.js'
import FoodPageMenuModal            from '../../../features/Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import CheckMenuPage                from '../../../features/Pages/CheckMenuPage/CheckMenuPage.js'
import OrderListPage                from '../../../features/Pages/OrderListPage/OrderListPage.js'
import CheckMenuPageSecondView      from '../../../features/Pages/CheckMenuPageSecondView/CheckMenuPageSecondView.js'
import DeleteMultipleOrders         from '../../../features/RepeatedFlows/DeleteMultipleOrders.js'

describe("Repeat item not send",()=>{
    it("TC0001: Create orders corretly and duplicatee",async()=>{
       await FoodPageMenuModal.click_pick_up_item();
       await FoodMenuPage.click_card()

       await FoodMenuPage.click_account_btn()
       await CheckMenuPage.click_first_item()

       //boton repetir
       await $('id:com.juvomos.pos:id/btnRepeat').click()

       //cerrar menu
       await $('id:com.juvomos.pos:id/imgCloseButtonSecondary').click()
    })


    it("TC0001: Check duplicate item",async()=>{
       await FoodMenuPage.click_account_btn()
       await CheckMenuPage.two_items()
       //buscar botones
       await $('id:com.juvomos.pos:id/idCancelButton').click()
       await $('id:com.juvomos.pos:id/cancelDialog').click()
    })

})

