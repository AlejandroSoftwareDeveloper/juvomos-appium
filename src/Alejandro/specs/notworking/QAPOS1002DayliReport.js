import FoodMenuPage                 from '../features/Pages/FoodMenuPage.js'
import FoodPageMenuModal            from '../features/Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import NavbarPage                   from '../features/Pages/NavbarPage/NavBarPage.js'
import ReportPage                   from '../features/Pages/ReportPage/ReportPage.js'
import DailyReportPage              from '../features/Pages/DailyReportPage/DailyReportPage.js'
import CheckMenuPage                from '../features/Pages/CheckMenuPage/CheckMenuPage.js'
import PaymentViewPage              from '../features/Pages/PaymentViewPage/PaymentViewPage.js'
import PaymentOptionsPage           from '../features/Pages/PaymentOptionsPage/PaymentOptionsPage.js'
import CreateMultipleOrders         from '../features/RepeatedFlows/CreateMultipleOrders.js'

describe("Daily report", () => {

    let ivalue = 0
    let value_to_pay = 0
    let final_value = 0

    it("TC0001: Current account has value",async() => {
       await FoodPageMenuModal.click_pick_up_item();
       await FoodMenuPage.click_left_menu()
       await NavbarPage.click_reportes()
       await ReportPage.click_daily_report()

       await browser.pause(5000)

       ivalue = await DailyReportPage.get_total()
       await DailyReportPage.click_close()

       await FoodMenuPage.click_left_menu()
       await NavbarPage.click_pos()

    })

    it("TC0002: Create an order and pay",async() => {
        await FoodPageMenuModal.click_pick_up_item();
        value_to_pay = await FoodMenuPage.get_card_text_price()
        await FoodMenuPage.click_card()
        
        await FoodMenuPage.click_account_btn();
        await CheckMenuPage.click_pay_button()
        await PaymentViewPage.click_payment_relative()
        await PaymentOptionsPage.click_no_print_button()
    })

    it("TC0003: Check final value is correct",async() => {
       await FoodPageMenuModal.click_pick_up_item();
       await FoodMenuPage.click_left_menu()
       await NavbarPage.click_reportes()
       await ReportPage.click_daily_report()

       await browser.pause(10000)

       final_value = await DailyReportPage.get_total()
        await DailyReportPage.click_close()

        await FoodMenuPage.click_left_menu()
        await NavbarPage.click_pos()
        await chai.expect(ivalue + value_to_pay).to.equal(final_value)
     })





    //  it("TC0003: Create an order and pay",async() => {
    //      // await CreateMultipleOrders.create_an_order()
    //      await FoodPageMenuModal.click_pick_up_item();
    //      await FoodMenuPage.click_account_btn();
    //      // await CheckMenuPage.
    //  })
});
