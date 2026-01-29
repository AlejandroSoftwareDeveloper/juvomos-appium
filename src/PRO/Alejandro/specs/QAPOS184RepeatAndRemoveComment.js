import FoodMenuPage                 from '../features/Pages/FoodMenuPage.js'
import FoodPageMenuModal            from '../features/Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import CheckMenuPage                from '../features/Pages/CheckMenuPage/CheckMenuPage.js'
import OrderListPage                from '../features/Pages/OrderListPage/OrderListPage.js'
import CheckMenuPageSecondView      from '../features/Pages/CheckMenuPageSecondView/CheckMenuPageSecondView.js'
import DeleteMultipleOrders  from '../features/RepeatedFlows/DeleteMultipleOrders.js'
import DiscountPage                from '../features/Pages/DiscountPage/DiscountPage.js'

// > Agregar nuevo item Agregar nuevo item con modificador 
// Aplicar descuento
// al modificador Clic en kitchen 
// Comment Clic en Repeat Eliminar el comentario
// Debo chequear lo para metros de las cuantas (OJO)
describe("Add item with discount, add and remove discount",()=>{

    async function apply_discount_from_check(){
        // Options 
        await $('id:com.juvomos.pos:id/btnDiscount').click()
        await $('id:com.juvomos.pos:id/layoutDiscount').click()
        await FoodMenuPage.click_account_btn()
    }

    it("TC0001: Create item correctly",async()=>{
        await FoodPageMenuModal.click_pick_up_item();
        await FoodMenuPage.click_card()

        await FoodMenuPage.click_account_btn()
        await CheckMenuPage.click_first_item()
        
    })
 
    it("TC0002: Add discount",async() => {
       await this.apply_discount_from_check()
    })

    it("TC0003: Add comment to item",async()=>{
        // Options Page comment
        await CheckMenuPage.click_first_item()
        await $("id:com.juvomos.pos:id/btnKitchenComment").click()
        let comment = await $("id:com.juvomos.pos:id/commentKitchen")
        await comment.setValue("Comentarios")
        await $("id:com.juvomos.pos:id/messageBtnAddComment").click()

        // Boton repeat
       await $('id:com.juvomos.pos:id/btnRepeat').click()

       //cerrar menu
       await $('id:com.juvomos.pos:id/imgCloseButtonSecondary').click()
    })

    //cehequear que los comentarios se eliminaron
    it("TC0004: Remove comment to second item",async()=>{
        await FoodMenuPage.click_account_btn()
        await CheckMenuPage.click_second_item()
        
        //Click eliminar comentarios
        await $("id:com.juvomos.pos:id/btnKitchenComment").click()
        await $("id:com.juvomos.pos:id/deleteCommentBtn").click()
       await $('id:com.juvomos.pos:id/imgCloseButtonSecondary').click()
  })

    // // Debo chequear las variaciones de los datos
    it("TC0005: Clean entrance",async()=>{
        await FoodMenuPage.click_account_btn()
        // Options Page comment

       //buscar botones
       await $('id:com.juvomos.pos:id/idCancelButton').click()
       await $('id:com.juvomos.pos:id/cancelDialog').click()
    })


})
