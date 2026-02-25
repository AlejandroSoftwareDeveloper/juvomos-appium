// TipsWorkSpacePage.js
const SEARCH_FIELD = '//android.widget.EditText[@resource-id="com.juvomos.pos:id/editTicketTipsSearch2"]';
const NO_AGREGADO_FILTER = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/btnNoTipsAdded"]';
const AGREGADO_FILTER = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/btnTipsAdded"]';
const EMPLOYEE_SPINNER = '//android.widget.Spinner[@resource-id="com.juvomos.pos:id/autocompleteEmployee"]';
const CARD_TYPE_SPINNER = '//android.widget.Spinner[@resource-id="com.juvomos.pos:id/autocompleteCards"]';
const LIST_RECYCLER = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/ticketTipsRecycler"]';
const HEADER_TIPS = '//android.widget.TextView[@text="Buscar en Propinas"]';

class TipsWorkSpacePage {
    async search_tips(text){
        await this.search_field.setValue(text);
    }

    async click_no_agregado(){
        await this.no_agregado_filter.click();
    }

    async click_agregado(){
        await this.agregado_filter.click();
    }

    async select_employee(){
        await this.employee_spinner.click();
    }

    async select_card_type(){
        await this.card_type_spinner.click();
    }

    get search_field(){ return $(SEARCH_FIELD) }
    get no_agregado_filter(){ return $(NO_AGREGADO_FILTER) }
    get agregado_filter(){ return $(AGREGADO_FILTER) }
    get employee_spinner(){ return $(EMPLOYEE_SPINNER) }
    get card_type_spinner(){ return $(CARD_TYPE_SPINNER) }
    get list_recycler(){ return $(LIST_RECYCLER) }
    get header_tips(){ return $(HEADER_TIPS) }
}

export default new TipsWorkSpacePage();



