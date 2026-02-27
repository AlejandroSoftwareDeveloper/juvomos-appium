
import FOUR_TICKET_LIST from '../../../features/selectors/constants.js'

describe("Clean Order of checks Pay",()=>{


    //Revisar ASAP NO FUNCIONA LA TEST
    it("TC0001: Create item correctly and send order. ",async()=>{
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
       await $(FOUR_TICKET_LIST).click()
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnShowOrder"]').click()

        // Enviar check
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()

    })

    it("TC0002: Verify check is no longer.",async()=>{
        //Lista checks
       await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
       await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').click()

        //pagar check
        //Auiq debo capturar el check actual para verificar despues que se elimino
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()
       await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/paymentRelative"])[1]/android.widget.LinearLayout').click()
       await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnNoPrint"]').click()
        
       Listar los elementos para ver si se pago
       Comprobar que la orden ya no existe
       await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]').click()
    })

})

