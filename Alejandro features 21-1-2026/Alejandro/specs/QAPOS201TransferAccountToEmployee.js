import CreateMultipleOrders  from '../features/RepeatedFlows/CreateMultipleOrders.js'
import DeleteMultipleOrders  from '../features/RepeatedFlows/DeleteMultipleOrders.js'
import GotoTransferAccountToEmployee  from '../features/RepeatedFlows/GotoTransferAccountToEmployee.js'

describe("Transfer account to employee", () => {

    it("TC0001: Create orders corretly",async()=>{
       await CreateMultipleOrders.create_order();
    })

    it("TC0002: Transfer account one to account two",async()=>{
        await GotoTransferAccountToEmployee.transfer_account()
    })

    it("TC0003: Delete orders corretly",async()=>{
       await DeleteMultipleOrders.delete_order();
    })
});
