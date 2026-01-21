
// DineInCheckPage.js
const CAMBIAR_MESA_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnChangedTable"]';
const TRANSFERIR_CUENTA_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnTransfer"]';
const CUENTA_NUMBER_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/txtTicketNumber"]';
const EMPLEADO_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/ticketEmployeeName"]';
const CLIENTE_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/ticketCustomerName"]';
const MESA_INFO_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/ticketTable"]';
const PERSONAS_INFO_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/guestsNumber"]';
const ABRIR_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnRecall"]';
const IMPRIMIR_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPrintCheckRecall"]';
const PAGAR_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPayRecall"]';
const ITEMS_RECYCLER = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/invoiceItemsRecycler"]';
const TOTALES_RECYCLER = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/invoiceTotalRecycler"]';
const SALDO_PENDIENTE_LABEL = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/idValueBalanceText"]';
const SHOW_ITEMS_BUTTON = '//android.widget.ImageView[@resource-id="com.juvomos.pos:id/btnShowItem"]';

class DineInCheckPage {
    async click_cambiar_mesa(){
        await this.cambiar_mesa_button.click();
    }

    async click_transferir_cuenta(){
        await this.transferir_cuenta_button.click();
    }

    async click_cuenta_number(){
        await this.cuenta_number_button.click();
    }

    async click_empleado(){
        await this.empleado_button.click();
    }

    async click_cliente(){
        await this.cliente_button.click();
    }

    async click_mesa_info(){
        await this.mesa_info_button.click();
    }

    async click_personas_info(){
        await this.personas_info_button.click();
    }

    async click_abrir(){
        await this.abrir_button.click();
    }

    async click_imprimir(){
        await this.imprimir_button.click();
    }

    async click_pagar(){
        await this.pagar_button.click();
    }

    async click_show_items(){
        await this.show_items_button.click();
    }

    async get_saldo_pendiente(){
        return await this.saldo_pendiente_label.getText();
    }

    get cambiar_mesa_button(){ return $(CAMBIAR_MESA_BUTTON) }
    get transferir_cuenta_button(){ return $(TRANSFERIR_CUENTA_BUTTON) }
    get cuenta_number_button(){ return $(CUENTA_NUMBER_BUTTON) }
    get empleado_button(){ return $(EMPLEADO_BUTTON) }
    get cliente_button(){ return $(CLIENTE_BUTTON) }
    get mesa_info_button(){ return $(MESA_INFO_BUTTON) }
    get personas_info_button(){ return $(PERSONAS_INFO_BUTTON) }
    get abrir_button(){ return $(ABRIR_BUTTON) }
    get imprimir_button(){ return $(IMPRIMIR_BUTTON) }
    get pagar_button(){ return $(PAGAR_BUTTON) }
    get items_recycler(){ return $(ITEMS_RECYCLER) }
    get totales_recycler(){ return $(TOTALES_RECYCLER) }
    get saldo_pendiente_label(){ return $(SALDO_PENDIENTE_LABEL) }
    get show_items_button(){ return $(SHOW_ITEMS_BUTTON) }
}

export default new DineInCheckPage();
