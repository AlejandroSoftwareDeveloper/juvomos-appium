// DailyReportPage.js
const PRINT_BUTTON        = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnPrintDailyReport"]';
const CLOSE_BUTTON        = '//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/btnCloseDailyReport"]';
const HEADER_DAILY_REPORT = '//android.widget.TextView[@text="Reporte diario"]';
const DATE_LABEL          = '//android.widget.TextView[@resource-id="com.juvomos.pos:id/dateDailyReport"]';
const base                =  "id:com.juvomos.pos:id/"
const DETAILS             = base + "resultCategoryDetailsDaily"



class DailyReportPage {
    async click_print(){
        await this.print_button.click();
    }

    async click_close(){
        await this.close_button.click();
    }

    async get_header_daily_report(){  
        const tx = await this.header_daily_report 
        return tx
    }
    async get_details(){ 
       const data = await this.details.getText()
       return data
    } 

    async get_total(){
        const total = await this.get_details()
        return parseFloat(total.split("$")[1])
    }


    get details(){ return $(DETAILS) }
    get print_button(){ return $(PRINT_BUTTON) }
    get close_button(){ return $(CLOSE_BUTTON) }
    get header_daily_report(){ return $(HEADER_DAILY_REPORT) }
    get date_label(){ return $(DATE_LABEL) }
}

export default new DailyReportPage();

