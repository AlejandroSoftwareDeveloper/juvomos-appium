// import FOUR_TICKET_LIST from '../../../features/selectors/constants.js'

describe("Check item ha no duplicate status",()=>{

    it("TC0001: Select item for check. ",async()=>{
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
       await $('(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"])[4]').click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
    })

    it("TC0002: Duplicate item with hold .",async()=>{
       await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup').click()
       await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnHolItem"]').click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

       await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup').click()
       await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnRepeat"]').click()
       await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]').click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()
    })

    it(' TC0002: Verify diplucate with no hold', async () => {
      const txt = await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[1]')
      const txt2 = await $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]/android.view.ViewGroup[2]')
        //Verify duplicate item no hold
        // Debo capturar los items y comparar el hold

      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/idCancelButton"]').click()
      await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/cancelDialog"]').click()
    })


})

