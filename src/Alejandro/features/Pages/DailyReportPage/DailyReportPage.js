// DailyReportPage.js
const PRINT_BUTTON = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPrintDailyReport"]';
const CLOSE_BUTTON = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/btnCloseDailyReport"]';
const HEADER_DAILY_REPORT = '//android.widget.TextView[@text="Reporte diario"]';
const DATE_LABEL = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/dateDailyReport"]';

class DailyReportPage {
    async click_print(){
        await this.print_button.click();
    }

    async click_close(){
        await this.close_button.click();
    }

    get print_button(){ return $(PRINT_BUTTON) }
    get close_button(){ return $(CLOSE_BUTTON) }
    get header_daily_report(){ return $(HEADER_DAILY_REPORT) }
    get date_label(){ return $(DATE_LABEL) }
}

export default new DailyReportPage();

