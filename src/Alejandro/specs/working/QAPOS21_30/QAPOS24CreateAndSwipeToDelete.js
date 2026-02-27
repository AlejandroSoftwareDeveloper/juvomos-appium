import FoodMenuPage                 from '../../../features/Pages/FoodMenuPage.js'
import FoodPageMenuModal            from '../../../features/Pages/FoodPageMenuModal/FoodPageMenuModal.js'
import CheckMenuPage                from '../../../features/Pages/CheckMenuPage/CheckMenuPage.js'
import OrderListPage                from '../../../features/Pages/OrderListPage/OrderListPage.js'
import CheckMenuPageSecondView      from '../../../features/Pages/CheckMenuPageSecondView/CheckMenuPageSecondView.js'
import DeleteMultipleOrders         from '../../../features/RepeatedFlows/DeleteMultipleOrders.js'
import DiscountPage                 from '../../../features/Pages/DiscountPage/DiscountPage.js'


describe('QAPOS24 Create and swipe to delete', () => {
    it("TC0001: Create items corretly and hold send and swipe to delete",async()=>{
   await FoodPageMenuModal.click_pick_up_item();
   await FoodMenuPage.click_card()

   await FoodMenuPage.click_account_btn()
   await CheckMenuPage.click_first_item()


    // Options 
    await $("id:com.juvomos.pos:id/btnHolItem").click()
    await FoodMenuPage.click_account_btn()

    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()
    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]').click()
    await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').waitForDisplayed({timeout:30000})
    await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').click()

    // 
    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()

    await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/pointSale_container_left"]/android.widget.LinearLayout').waitForDisplayed({timeout:30000})
    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 85, y: 639 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 1000, x: 649, y: 649 },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);
    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/messageBtnDelete"]').waitForDisplayed()
    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/messageBtnDelete"]').click()
    await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
    await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]').click()

    })
})

