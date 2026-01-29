
// ConfigPage.js
const BASE = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/'
const url = (str) => `${BASE}${str}"]`
const CIERRE_DIA_BUTTON = url('btnCloseDay')
const DISPOSITIVOS_BUTTON = url('btnDevices')
const CONFIG_GENERAL_BUTTON = url('generalSettingsBtn')
const HEADER_CONFIG = '//android.widget.TextView[@text="Configuraciones"]';

class ConfigPage {
    async click_cierre_dia(){
        await this.cierre_dia_button.click();
    }

    async click_dispositivos(){
        await this.dispositivos_button.click();
    }

    async click_config_general(){
        await this.config_general_button.click();
    }

    get cierre_dia_button(){ return $(CIERRE_DIA_BUTTON) }
    get dispositivos_button(){ return $(DISPOSITIVOS_BUTTON) }
    get config_general_button(){ return $(CONFIG_GENERAL_BUTTON) }
    get header_config(){ return $(HEADER_CONFIG) }
}

export default new ConfigPage();
