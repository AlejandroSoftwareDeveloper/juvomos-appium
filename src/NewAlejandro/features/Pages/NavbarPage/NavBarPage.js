
// NavbarPage.js
const POS_OPTION = '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.juvomos.pos:id/pointOfSaleFragment"]';
const BANCA_OPTION = '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.juvomos.pos:id/bankFragment"]';
const CUENTAS_OPTION = '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.juvomos.pos:id/checksFragment"]';
const PROPINAS_OPTION = '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.juvomos.pos:id/tipsFragment"]';
const ENTREGAS_OPTION = '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.juvomos.pos:id/dispatchFragment"]';
const REPORTES_OPTION = '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.juvomos.pos:id/containerReportFragment"]';
const CONFIG_OPTION = '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.juvomos.pos:id/settingFragment"]';
const REEMBOLSOS_OPTION = '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.juvomos.pos:id/refundsFragment"]';
const EGRESOS_OPTION = '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.juvomos.pos:id/paidOutsFragment"]';
const EMPLOYEE_NAME = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/nameEmployeeDrawerHeader"]';
const LOGOUT_BUTTON = '//android.widget.ImageView[@resource-id="com.juvomos.pos:id/btnLogout"]';

class NavbarPage {
    async click_pos(){
        await this.pos_option.click();
    }

    async click_banca(){
        await this.banca_option.click();
    }

    async click_cuentas(){
        await this.cuentas_option.click();
    }

    async click_propinas(){
        await this.propinas_option.click();
    }

    async click_entregas(){
        await this.entregas_option.click();
    }

    async click_reportes(){
        await this.reportes_option.click();
    }

    async click_config(){
        await this.config_option.click();
    }

    async click_reembolsos(){
        await this.reembolsos_option.click();
    }

    async click_egresos(){
        await this.egresos_option.click();
    }

    async click_logout(){
        await this.logout_button.click();
    }

    get pos_option(){ return $(POS_OPTION) }
    get banca_option(){ return $(BANCA_OPTION) }
    get cuentas_option(){ return $(CUENTAS_OPTION) }
    get propinas_option(){ return $(PROPINAS_OPTION) }
    get entregas_option(){ return $(ENTREGAS_OPTION) }
    get reportes_option(){ return $(REPORTES_OPTION) }
    get config_option(){ return $(CONFIG_OPTION) }
    get reembolsos_option(){ return $(REEMBOLSOS_OPTION) }
    get egresos_option(){ return $(EGRESOS_OPTION) }
    get employee_name(){ return $(EMPLOYEE_NAME) }
    get logout_button(){ return $(LOGOUT_BUTTON) }
}

export default new NavbarPage();

