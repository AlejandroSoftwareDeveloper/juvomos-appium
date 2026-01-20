import CreateMultipleOrders         from '../../features/RepeatedFlows/CreateMultipleOrders.js'
import DeleteMultipleOrders         from '../../features/RepeatedFlows/DeleteMultipleOrders.js'
import GoToTransferAccout           from '../../features/RepeatedFlows/GoToTransferAccout.js'
import FoodMenuPage                 from '../../features/Pages/FoodMenuPage.js'
import CheckMenuPage                from '../../features/Pages/CheckMenuPage/CheckMenuPage.js'
import FoodPageMenuModal            from '../../features/Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import AccountOptionPage            from '../../features/Pages/AccountOptionPage/AccountOptionPage.js'
import CreateOrder                  from '../../features/RepeatedFlows/CreateOrder.js'
import AnularPage                   from '../../features/Pages/AnularPage/AnularPage.js'
import AnularPageCloseAccountModal  from '../../features/Pages/AnularPageCloseAccountModal/AnularPageCloseAccountModal.js'

describe("Cancel product ", () => {

     it("TC0001: Select product",async()=>{
        await FoodPageMenuModal.click_pick_up_item();
        await FoodMenuPage.click_card(7);
        await FoodMenuPage.click_account_btn()
     })
     
    it("TC0002: Select account options", async () => {
        await CheckMenuPage.click_ticket_number()
        await AccountOptionPage.click_btn_void()
    })

    it("TC0003: Close account order", async () => {
        await AnularPage.click_void_reason_cold()
        await AnularPageCloseAccountModal.click_void_close_button()
    })

});
