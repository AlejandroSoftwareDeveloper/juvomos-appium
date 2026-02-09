class Card{

    constructor(id){
       this.id = id
       this.category = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/category_product_name"]'
       this.description = ''
       this.outstock = false
       this.cost = 0.00
       this.total = 0
    }
       
    get_id(){
        return this.id 
    }

    get_descripton(){
        return this.description 
    }

    get_outstock(){
        return this.outstock
    }

    get_cost(){
        return this.outstock
    }

    get_total(){
        return this.total
    }

    async update_data(){
       const temp       = await $(this.id)
       this.description = await temp.$(this.category).getText()
       this.outstock    = await temp.$()
       this.cost        = null
       this.total       = 0
    }

}

export default Card;
