import FoodPageMenuModal from '../Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import OrderListPage from '../Pages/OrderListPage/OrderListPage.js'
import CheckMenuPageSecondView from '../Pages/CheckMenuPageSecondView/CheckMenuPageSecondView.js'
import CheckMenuPage from '../Pages/CheckMenuPage/CheckMenuPage.js'
import AccountOptionPage from '../Pages/AccountOptionPage/AccountOptionPage.js'
import AnularPage from '../Pages/AnularPage/AnularPage.js'
import AnularPageCloseAccountModal from '../Pages/AnularPageCloseAccountModal/AnularPageCloseAccountModal.js'
import AccountOptionPageTransferSelectionModal from '../Pages/AccountOptionPageTransferSelectionModal/AccountOptionPageTransferSelectionModal.js'
import AccountOptionPageTransferAccountModal from '../Pages/AccountOptionPageTransferAccountModal/AccountOptionPageTransferAccountModal.js'

class GoToTransferAccout{
     async transfer_account(){
        await FoodPageMenuModal.click_open_button()
        await browser.pause(10000); 
        await OrderListPage.click_layout_check_detail_item()
        await browser.pause(10000); 
        await CheckMenuPageSecondView.click_btn_recall()
        await CheckMenuPage.click_ticket_number()
        await AccountOptionPage.click_btn_transfer()
        await AccountOptionPageTransferSelectionModal.click_btn_transfer_check()
        await AccountOptionPageTransferAccountModal.click_first_layout_item_check_transfer()
        await AccountOptionPageTransferAccountModal.click_btn_transfer()
        await browser.pause(10000)
        await FoodPageMenuModal.click_pick_up_item()
        await CheckMenuPage.click_ticket_number()
        await CheckMenuPage.click_cancel_button()
      }

}

export default new GoToTransferAccout()
