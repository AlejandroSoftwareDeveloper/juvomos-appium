import CreateMultipleOrders  from '../../../src/RepeatedFlows/CreateMultipleOrders.js'
import DeleteMultipleOrders  from '../../../src/RepeatedFlows/DeleteMultipleOrders.js'
import GotoTransferAccountToEmployee  from '../../../src/RepeatedFlows/GotoTransferAccountToEmployee.js'

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




    //     // Select transfer and employee
    //     await $(BTN_TRANSFER).click()
    //     await $(BTN_TRANSFER_EMPLOYEE).click()
    //
    //     // wait till list load
    //     await browser.pause(5000)
    //
    //     // Get employee name 
    //     await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/employeeName" and @text="QA 3"]').click()
    //     await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnTransfer"]').click()
    //
    // });
   
  

});
