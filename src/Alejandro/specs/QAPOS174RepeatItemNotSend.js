import CreateMultipleOrders  from '../features/RepeatedFlows/CreateMultipleOrders.js'

describe("Repeat item not send",()=>{
    it("TC0001: Create orders corretly",async()=>{
       await FoodPageMenuModal.click_pick_up_item();
       await FoodMenuPage.click_card()
       // await CreateMultipleOrders.create_order();
    })

})

