import CreateMultipleOrders  from '../../features/RepeatedFlows/CreateMultipleOrders.js'
import DeleteMultipleOrders  from '../../features/RepeatedFlows/DeleteMultipleOrders.js'
import GoToTransferAccout    from '../../features/RepeatedFlows/GoToTransferAccout.js'

describe("Transfer multiples product between acccounts", () => {

    it("TC0001: Create orders corretly",async()=>{
       await CreateMultipleOrders.create_two_orders();
       await CreateMultipleOrders.create_two_orders();
    })

    it("TC0002: Transfer account one to account two",async()=>{
        await GoToTransferAccout.transfer_account()
    })

    it("TC0003: Delete orders corretly",async()=>{
       await DeleteMultipleOrders.delete_two_orders();
       await DeleteMultipleOrders.delete_two_orders();
    })

});
