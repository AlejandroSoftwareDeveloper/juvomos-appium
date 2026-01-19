


// ReturnMoneyPage.js
const SEARCH_VIEW = '//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.juvomos.pos:id/searchViewRefunds"]';
const CASH_FILTER = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnFilterCashRefuns" and @text="Cash"]';
const CREDIT_FILTER = '//android.widget.Button[@resource-id="com.juvomos.pos:id/btnFilterCashRefuns" and @text="Credit"]';
const ADD_NEW_BUTTON = '//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/addNewRefund"]';
const LIST_RECYCLER = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/refundsRecycler"]';

class ReturnMoneyPage {
    async click_search(){
        await this.search_view.click();
    }

    async click_cash_filter(){
        await this.cash_filter.click();
    }

    async click_credit_filter(){
        await this.credit_filter.click();
    }

    async click_add_new(){
        await this.add_new_button.click();
    }

    get search_view(){ return $(SEARCH_VIEW) }
    get cash_filter(){ return $(CASH_FILTER) }
    get credit_filter(){ return $(CREDIT_FILTER) }
    get add_new_button(){ return $(ADD_NEW_BUTTON) }
    get list_recycler(){ return $(LIST_RECYCLER) }
}

export default new ReturnMoneyPage();



