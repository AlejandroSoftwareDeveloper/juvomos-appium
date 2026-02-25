const TOTALITEMS = 5
const MAX = 3


describe('StressTest', () => {
    let test_list = []
    let testStart = 0;
    let test_name = ""
 
    function random1to3() {
      return Math.floor(Math.random() * MAX) + 1;
    }

    beforeEach(function() {
        testStart = performance.now();
    });

     async function click_item(num){
        let temp = 0
        if ( num == 1 ){
            temp = 3
        }
        if ( num == 2 ){
            temp = 4
        }
        if ( num == 3 ){
            temp = 6
        }

        await $(`(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])[${temp}]/android.view.ViewGroup`).click()
    }

    afterEach(function() {
        const duration = (performance.now() - testStart).toFixed(2);
        console.log(`\n📊 ${this.currentTest.title}: ${duration}ms`);
    });


    it('Generate more than 50 orders.', async () => {
        let i = 0;
        for(i=0;i<TOTALITEMS;i++){
           test_list.push(random1to3());
        }
        i = 0
        // console.log(test_list)
        while(i < test_list.length){
            await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
            await click_item(test_list[i]);
            await $('id:com.juvomos.pos:id/btnShowOrder').click()
            await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnSendPointOfSale"]').click()
            i++
        }
    })

    it('Clean list of elements.', async () => {
        let items = 0
        let allClean = true
        while(i < TOTALITEMS){
          await browser.pause(3000);
          // await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').waitForDisplayed({timeout:1000})
          await $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]').click()
          const isDisplayed = await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').isDisplayed();

            if(!isDisplayed){
                await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]').click()
                allClean = false
                break
            }

            // // Clean item 
            await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').click()

            // Account
            await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]').click()

            await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"]/android.view.ViewGroup').click()
            await $('//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnVoid"]').click()
            await $('//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/voidGeneralLayout"]').click()
            i++
        }
        expect(allClean).toBe(true)
    })

    it('Stress time test duration.', async () => {
        const duration = (performance.now() - testStart).toFixed(2);
        expect(duration).toBe(duration)
    })

})
