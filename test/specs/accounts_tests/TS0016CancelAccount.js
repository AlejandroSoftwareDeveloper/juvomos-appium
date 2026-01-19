import CreateMultipleOrders  from '../../../src/RepeatedFlows/CreateMultipleOrders.js'
import DeleteMultipleOrders  from '../../../src/RepeatedFlows/DeleteMultipleOrders.js'
import GoToTransferAccout    from '../../../src/RepeatedFlows/GoToTransferAccout.js'

describe("Cancel Account", () => {

    it("TC0001: Create orders corretly",async()=>{
       await CreateMultipleOrders.create_order();
    })

    it("TC0002: Delete orders corretly",async()=>{
       await DeleteMultipleOrders.delete_order();
    })
})

