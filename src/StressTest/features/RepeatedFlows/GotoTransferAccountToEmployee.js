import OrderListPage from '../Pages/OrderListPage/OrderListPage.js'
import CheckMenuPage from '../Pages/CheckMenuPage/CheckMenuPage.js'
import AccountOptionPage from '../Pages/AccountOptionPage/AccountOptionPage.js'
import FoodPageMenuModal from '../Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import CheckMenuPageSecondView from '../Pages/CheckMenuPageSecondView/CheckMenuPageSecondView.js'
import AccountOptionPageTransferSelectionModal from '../Pages/AccountOptionPageTransferSelectionModal/AccountOptionPageTransferSelectionModal.js'
import AccountOptionPageTransferAccountToEmployeeModal from '../Pages/AccountOptionPageTransferAccountToEmployeeModal/AccountOptionPageTransferAccountToEmployeeModal.js'

class GotoTransferAccountToEmployee {

     async transfer_account(){
        await FoodPageMenuModal.click_open_button()
        await browser.pause(10000); 
        await OrderListPage.click_layout_check_detail_item()
        await browser.pause(10000); 
        await CheckMenuPageSecondView.click_btn_recall()
        await CheckMenuPage.click_ticket_number()
        await AccountOptionPage.click_btn_transfer()
         
        await AccountOptionPageTransferSelectionModal.click_btn_transfer_employee()
        await browser.pause(5000)
         
        // get employee name
        const employee_name = await AccountOptionPageTransferAccountToEmployeeModal.get_first_employee_name();
        await AccountOptionPageTransferAccountToEmployeeModal.click_first_employee_name();
        await AccountOptionPageTransferAccountToEmployeeModal.click_btn_transfer()
        await browser.pause(5000)

        await FoodPageMenuModal.click_open_button()
        await browser.pause(10000); 

        const acc_name = await OrderListPage.get_txt_value_employee_check()

        await chai.expect(employee_name  === acc_name).to.equal(true)
        await OrderListPage.click_img_close_button_secondary()

      }

}

export default new GotoTransferAccountToEmployee()
