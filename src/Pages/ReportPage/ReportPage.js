





// ReportPage.js
const DAILY_REPORT_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnDailyReport"]';
const SERVER_REPORT_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnServerReport"]';
const DRAWER_REPORT_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnDrawerReport"]';
const TIPS_EMPLOYEE_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnTipsForEmployees"]';
const DRIVER_REPORT_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/btnDriverReport"]';
const HEADER_REPORTES = '//android.widget.TextView[@text="Reportes"]';

class ReportPage {
    async click_daily_report(){
        await this.daily_report_button.click();
    }

    async click_server_report(){
        await this.server_report_button.click();
    }

    async click_drawer_report(){
        await this.drawer_report_button.click();
    }

    async click_tips_employee(){
        await this.tips_employee_button.click();
    }

    async click_driver_report(){
        await this.driver_report_button.click();
    }

    get daily_report_button(){ return $(DAILY_REPORT_BUTTON) }
    get server_report_button(){ return $(SERVER_REPORT_BUTTON) }
    get drawer_report_button(){ return $(DRAWER_REPORT_BUTTON) }
    get tips_employee_button(){ return $(TIPS_EMPLOYEE_BUTTON) }
    get driver_report_button(){ return $(DRIVER_REPORT_BUTTON) }
    get header_reportes(){ return $(HEADER_REPORTES) }
}

export default new ReportPage();


