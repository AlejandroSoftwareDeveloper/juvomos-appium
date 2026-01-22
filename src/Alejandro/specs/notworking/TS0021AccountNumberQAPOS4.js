import CreateMultipleOrders  from '../../../src/RepeatedFlows/CreateMultipleOrders.js'
import DeleteMultipleOrders  from '../../../src/RepeatedFlows/DeleteMultipleOrders.js'
import GoToTransferAccout    from '../../../src/RepeatedFlows/GoToTransferAccout.js'


import FoodPageMenuModal from '../../../src/Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import OrderListPage from '../../../src/Pages/OrderListPage/OrderListPage.js'
import CheckMenuPageSecondView from '../../../src/Pages/CheckMenuPageSecondView/CheckMenuPageSecondView.js'
import CheckMenuPage from '../../../src/Pages/CheckMenuPage/CheckMenuPage.js'
import AccountOptionPage from '../../../src/Pages/AccountOptionPage/AccountOptionPage.js'
import AnularPage from '../../../src/Pages/AnularPage/AnularPage.js'
import AnularPageCloseAccountModal from '../../../src/Pages/AnularPageCloseAccountModal/AnularPageCloseAccountModal.js'



describe("Get correct account number", () => {

    it("TC0001: Create orders correctly",async()=>{
       await CreateMultipleOrders.create_order();
    })

    it("TC0002: Check correct account number",async()=>{
        await FoodPageMenuModal.click_open_button()
        await browser.pause(10000); 

        const number = await OrderListPage.get_account_number()


        await OrderListPage.click_layout_check_detail_item()
        await browser.pause(10000); 
        await CheckMenuPageSecondView.click_btn_recall()

        const number2 = await CheckMenuPage.get_ticket_number()

        console.log(number,number2.split(" "))

    })



        // await CheckMenuPage.click_ticket_number()
        // await AccountOptionPage.click_btn_void()
        // await AnularPage.click_void_reason_cold() 
        // await AnularPageCloseAccountModal.click_void_close_button()


    // it("TC0003: Delete orders correctly",async()=>{
    //    await DeleteMultipleOrders.delete_order();
    // })
})

