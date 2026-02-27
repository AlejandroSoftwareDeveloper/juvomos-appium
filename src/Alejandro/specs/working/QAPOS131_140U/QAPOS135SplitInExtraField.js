import { FOUR_TICKET_LIST } from '../../../features/selectors/constants.js'

describe("Split in Extra field.",()=>{

    it("TC0001: Create check correctly",async()=>{
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
       await $(FOUR_TICKET_LIST).click()
       await $(FOUR_TICKET_LIST).click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
    })

    it("TC0002: Split check",async()=>{
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idSplitButton"]').click()
       await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnAddTicket"]').click()
       const nacc = await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/cardSplit"])[2]')
       if(!nacc.error){
            const card1 = await $('(//android.widget.TextView[@resource-id="com.juvomos.pos:id/txtProductNameSplit"])[1]').getText()
            const card2 = await $('(//android.widget.TextView[@resource-id="com.juvomos.pos:id/txtProductNameSplit"])[2]').getText()
            expect(card1).toBe(card2)
            await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnCancel"]').click()
            return true
       }
        return false
    })

    it("TC0002: Delete orders corretly",async()=>{
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]').click()
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/cancelDialog"]').click()
    })

})
