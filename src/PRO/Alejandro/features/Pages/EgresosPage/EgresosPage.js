
// EgresosPage.js
const SEARCH_FIELD = '//android.widget.EditText[@resource-id="com.juvomos.pos:id/idEditSearchPaidOut"]';
const ADD_NEW_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/addNewPaidOut"]';
const LIST_RECYCLER = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/paidOutsRecycler"]';
const HEADER_SEARCH = '//android.widget.TextView[@text="Buscar Egresos"]';

class EgresosPage {
    async search_egreso(text){
        await this.search_field.setValue(text);
    }

    async click_add_new(){
        await this.add_new_button.click();
    }

    get search_field(){ return $(SEARCH_FIELD) }
    get add_new_button(){ return $(ADD_NEW_BUTTON) }
    get list_recycler(){ return $(LIST_RECYCLER) }
    get header_search(){ return $(HEADER_SEARCH) }
}

export default new EgresosPage();
