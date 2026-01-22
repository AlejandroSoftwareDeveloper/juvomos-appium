import AnularPage from '../Pages/AnularPage/AnularPage.js'
import OrderListPage from '../Pages/OrderListPage/OrderListPage.js'
import CheckMenuPage from '../Pages/CheckMenuPage/CheckMenuPage.js'
import FoodPageMenuModal from '../Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import AccountOptionPage from '../Pages/AccountOptionPage/AccountOptionPage.js'
import CheckMenuPageSecondView from '../Pages/CheckMenuPageSecondView/CheckMenuPageSecondView.js'
import AnularPageCloseAccountModal from '../Pages/AnularPageCloseAccountModal/AnularPageCloseAccountModal.js'

class DeleteMultipleOrders {
 
    async delete_two_orders(){
      //delete order1
      await this.delete_order()

      //delete order2
      await this.delete_order()

    }

    async delete_order(){
        await FoodPageMenuModal.click_open_button()
        await browser.pause(10000); 
        await OrderListPage.click_layout_check_detail_item()
        await browser.pause(10000); 
        await CheckMenuPageSecondView.click_btn_recall()
        await CheckMenuPage.click_ticket_number()
        await AccountOptionPage.click_btn_void()
        await AnularPage.click_void_reason_cold() 
        await AnularPageCloseAccountModal.click_void_close_button()
    
    }
}

export default new DeleteMultipleOrders()

