// BankPage.js
const TURNOS_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/buttonBank"]';
const EGRESOS_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/buttonPaidOuts"]';
const REEMBOLSOS_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/buttonRefunds"]';
const ABRIR_CAJON_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/buttonNoSale"]';
const HEADER_BANCO = '//android.widget.TextView[@text="Banco"]';

class BankPage {
    async click_turnos(){
        await this.turnos_button.click();
    }

    async click_egresos(){
        await this.egresos_button.click();
    }

    async click_reembolsos(){
        await this.reembolsos_button.click();
    }

    async click_abrir_cajon(){
        await this.abrir_cajon_button.click();
    }

    get turnos_button(){ return $(TURNOS_BUTTON) }
    get egresos_button(){ return $(EGRESOS_BUTTON) }
    get reembolsos_button(){ return $(REEMBOLSOS_BUTTON) }
    get abrir_cajon_button(){ return $(ABRIR_CAJON_BUTTON) }
    get header_banco(){ return $(HEADER_BANCO) }
}

export default new BankPage();


