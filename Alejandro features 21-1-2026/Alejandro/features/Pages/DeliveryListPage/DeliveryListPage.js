





// DeliveryListPage.js
const SIN_ASIGNAR_TAB = '//android.widget.RelativeLayout[@resource-id="com.juvomos.pos:id/btnUnassigned"]';
const EN_RUTA_TAB = '//android.widget.RelativeLayout[@resource-id="com.juvomos.pos:id/btnInRoute"]';
const ENTREGADO_TAB = '//android.widget.RelativeLayout[@resource-id="com.juvomos.pos:id/btnInDelivery"]';
const SEARCH_FIELD = '//android.widget.EditText[@resource-id="com.juvomos.pos:id/editEmployeeSearch"]';
const ORDERS_GRID = '//android.widget.GridView[@resource-id="com.juvomos.pos:id/dispatchInvoicesRecycler"]';

class DeliveryListPage {
    async click_sin_asignar(){
        await this.sin_asignar_tab.click();
    }

    async click_en_ruta(){
        await this.en_ruta_tab.click();
    }

    async click_entregado(){
        await this.entregado_tab.click();
    }

    async search_employee(text){
        await this.search_field.setValue(text);
    }

    get sin_asignar_tab(){ return $(SIN_ASIGNAR_TAB) }
    get en_ruta_tab(){ return $(EN_RUTA_TAB) }
    get entregado_tab(){ return $(ENTREGADO_TAB) }
    get search_field(){ return $(SEARCH_FIELD) }
    get orders_grid(){ return $(ORDERS_GRID) }
}

export default new DeliveryListPage();

