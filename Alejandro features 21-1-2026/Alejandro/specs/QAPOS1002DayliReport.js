import FoodMenuPage                 from '../features/Pages/FoodMenuPage.js'
import FoodPageMenuModal            from '../features/Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import NavbarPage                   from '../features/Pages/NavbarPage/NavBarPage.js'
import ReportPage                   from '../features/Pages/ReportPage/ReportPage.js'
import DailyReportPage              from '../features/Pages/DailyReportPage/DailyReportPage.js'
import CheckMenuPage              from '../features/Pages/CheckMenuPage/CheckMenuPage.js'
import CreateMultipleOrders  from '../features/RepeatedFlows/CreateMultipleOrders.js'

describe("Daily report", () => {

    // let ivalue = ""
    // let account = 0
    // let value_to_pay = 0
    // it("TC0001: Get account value",async() => {
    //    await FoodPageMenuModal.click_pick_up_item();
    //    await FoodMenuPage.click_left_menu()
    //    await NavbarPage.click_reportes()
    //    await ReportPage.click_daily_report()

    //    await browser.pause(5000)

    //    ivalue = await DailyReportPage.get_total()
    //    await DailyReportPage.click_close()

    //    await FoodMenuPage.click_left_menu()
    //    await NavbarPage.click_pos()

    // })

    it("TC0001: Create an order and pay",async() => {
        // await CreateMultipleOrders.create_an_order()
        await FoodPageMenuModal.click_pick_up_item();
        await FoodMenuPage.click_account_btn();
        await CheckMenuPage.

    })
});

