class Card {

    constructor(id){
       this.id          = id
       this.category    = '' // '//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name"]'
       this.subcategory = '' 
       this.description = ''
       this.outstock    = false
       this.cost        = 0.00
       this.total       = 0
    }
       
    async update_data(){
       const element    = await $(this.id)
       this.description = await element.$(this.category).getText()
       this.outstock    = await element.$()
       this.cost        = null
       this.total       = 0
    }
}

export default Card;
