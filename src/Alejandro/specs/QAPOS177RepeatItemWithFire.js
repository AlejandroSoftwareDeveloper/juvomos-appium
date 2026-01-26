
import FoodMenuPage                 from '../features/Pages/FoodMenuPage.js'
import FoodPageMenuModal            from '../features/Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import CheckMenuPage                from '../features/Pages/CheckMenuPage/CheckMenuPage.js'
import OrderListPage                from '../features/Pages/OrderListPage/OrderListPage.js'
import CheckMenuPageSecondView      from '../features/Pages/CheckMenuPageSecondView/CheckMenuPageSecondView.js'
import DeleteMultipleOrders  from '../features/RepeatedFlows/DeleteMultipleOrders.js'
import DiscountPage                from '../features/Pages/DiscountPage/DiscountPage.js'

describe("Repeat item with Fire",()=>{


    async function apply_discount_from_check(){
        // Options 
        await $('id:com.juvomos.pos:id/btnDiscount').click()
        await $('id:com.juvomos.pos:id/layoutDiscount').click()
        await FoodMenuPage.click_account_btn()
    }

    it("TC0001: Create item corretly and duplicate",async()=>{
       await FoodPageMenuModal.click_pick_up_item();
       await FoodMenuPage.click_card()

       await FoodMenuPage.click_account_btn()
       await CheckMenuPage.click_first_item()


    // Options 
    await $('id:com.juvomos.pos:id/btnFireItem').click()
    await $('id:com.juvomos.pos:id/btnFireNow').click()
    // await $('id:com.juvomos.pos:id/layoutDiscount').click()
    
    // // Modal aplicar descuento
    // await $("id:com.juvomos.pos:id/voidCloseButton").click()
     await FoodMenuPage.click_account_btn()
     await CheckMenuPage.click_first_item()
     await apply_discount_from_check()

     await CheckMenuPage.click_first_item()

       //boton repetir
     await $('id:com.juvomos.pos:id/btnRepeat').click()

       //cerrar menu
      await $('id:com.juvomos.pos:id/imgCloseButtonSecondary').click()
    })


    it("TC0002: Check duplicate item with Fire",async()=>{
       await FoodMenuPage.click_account_btn()
       await CheckMenuPage.two_items()
       //buscar botones
       await $('id:com.juvomos.pos:id/idCancelButton').click()
       await $('id:com.juvomos.pos:id/cancelDialog').click()
    })
})