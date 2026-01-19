
const BASE_ITEM             = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]';

class BasePage {

    async click_base_item(){
      await this.base_item.click()
    }

    get base_item(){ return $( BASE_ITEM ) }

}

export default new BasePage()
