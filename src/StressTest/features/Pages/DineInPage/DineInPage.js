


// DineInPage.js
const AREAS_RECYCLER = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/rvNameAreas"]';
const TABLES_GRID = '//android.widget.GridView[@resource-id="com.juvomos.pos:id/rvTables"]';
const REFRESH_BUTTON = '//android.widget.ImageButton[@resource-id="com.juvomos.pos:id/btnRefreshFloor"]';

class DineInPage {
    async click_area_by_name(areaName){
        const areaSelector = `${AREAS_RECYCLER}//android.widget.TextView[@text="${areaName}"]`;
        await $(areaSelector).click();
    }

    async click_table_by_number(tableNumber){
        const tableSelector = `${TABLES_GRID}//android.widget.TextView[@resource-id="com.juvomos.pos:id/tableNumberValue" and contains(@text, "${tableNumber}")]`;
        await $(tableSelector).click();
    }

    async click_refresh(){
        await this.refresh_button.click();
    }

    get areas_recycler(){ return $(AREAS_RECYCLER) }
    get tables_grid(){ return $(TABLES_GRID) }
    get refresh_button(){ return $(REFRESH_BUTTON) }
}

export default new DineInPage();
