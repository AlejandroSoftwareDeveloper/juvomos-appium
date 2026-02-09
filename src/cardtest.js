import PinRegistrationPage  from './Alejandro/features/Pages/PinRegistrationPage/PinRegistrationPage.js'

describe('cardtest', async() => {
    async function get_elm_text(index){
        let felm = await $(`//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"][${index}]`).waitForDisplayed({timeout:1000})
        felm     = await felm.$('//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name"]')
        return await felm.getText()

    }

    // async function apply_discount_from_check(){



    it('Probando las card', async () => {
    let total = 0
    let running = true
    let temp = null

    temp = await get_elm_text(0)
     console.log(temp)
    // while(running){
        // for(let index = 0; index < 9; index++) {
            // console.log(await .get_elm_text(index))

        // }

    })
})
