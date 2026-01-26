import FoodMenuPage                 from '../../features/Pages/FoodMenuPage.js'
import FoodPageMenuModal            from '../../features/Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import CheckMenuPage                from '../../features/Pages/CheckMenuPage/CheckMenuPage.js'
import OrderListPage                from '../../features/Pages/OrderListPage/OrderListPage.js'
import CheckMenuPageSecondView      from '../../features/Pages/CheckMenuPageSecondView/CheckMenuPageSecondView.js'
import DeleteMultipleOrders  from '../../features/RepeatedFlows/DeleteMultipleOrders.js'
import DiscountPage                from '../../features/Pages/DiscountPage/DiscountPage.js'


// **QAPOS179** - Repeat and delete item
// > Agregar nuevo item Agregar nuevo item con modificador 
// Aplicar descuento al modificador 
// Clic en Repeat 
// Eliminar el articulo repetido


describe("Repeat item and Delete",()=>{

    async function apply_discount_from_check(){
        // Options 
        await $('id:com.juvomos.pos:id/btnDiscount').click()
        await $('id:com.juvomos.pos:id/layoutDiscount').click()
        await FoodMenuPage.click_account_btn()
    }


    // it("TC0001: Create item corretly and duplicate",async()=>{
    //     await FoodPageMenuModal.click_pick_up_item();
    //     await FoodMenuPage.click_card()

    //     await FoodMenuPage.click_account_btn()
    //     await CheckMenuPage.click_first_item()
    //     await apply_discount_from_check()
    //    await FoodMenuPage.click_account_btn()
    //    await CheckMenuPage.click_first_item()
    //    //boton repetir
    //    await $('id:com.juvomos.pos:id/btnRepeat').click()

    //    //cerrar menu
    //    await $('id:com.juvomos.pos:id/imgCloseButtonSecondary').click()
    // })


    it("TC0002: Delete duplicate item",async()=>{
    //    await FoodMenuPage.click_account_btn()
    //    await CheckMenuPage.two_items()
    //    await CheckMenuPage.click_second_item()
    const elm = await driver.$('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]')

    await driver.touchAction([
          { action: 'press', element:elm},
          { action: 'release' }
   ]);



       //buscar botones
    //    await $('id:com.juvomos.pos:id/idCancelButton').click()
    //    await $('id:com.juvomos.pos:id/cancelDialog').click()
    })
})
