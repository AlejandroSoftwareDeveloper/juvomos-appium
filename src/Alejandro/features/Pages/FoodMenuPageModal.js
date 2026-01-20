const TITLE                      = 'id:com.juvomos.pos:id/messageTitle'
const OPEN                       = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]'
const PICK_UP                    = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]'

class FoodMenuPageModal {

    async select_title(){
      return await this.title
    }

    async click_open_menu(){
       await this.open.click()
    }

    async click_pick_up(){
       await this.pick_up.click()
    }

    get title(){ return $(TITLE) }
    get pick_up(){ return $(PICK_UP) }
    get open(){ return $(OPEN)  }  
}

export default new FoodMenuPageModal()
