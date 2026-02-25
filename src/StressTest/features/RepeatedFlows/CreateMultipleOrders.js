import CreateOrder from './CreateOrder.js'

//TODO: Implemetar una funcion que genere una cuanta solamente
class CreateMultipleOrders {
 
    async create_two_orders(){
        // create account 1
        await this.create_order()
        
        // create_account 2
        await this.create_order()
    }

    async create_order(){
        // Create account
        await CreateOrder.select_card();
        await CreateOrder.send_to_kitchen_item_number(1);
        await CreateOrder.send_to_kitchen_item_number(2);

        // Finish account creation.
        await CreateOrder.open_and_store_account()
    }
    async create_an_order(){
        // Create account
        await CreateOrder.select_card();
        await CreateOrder.send_to_kitchen_item_number(1);

        // Finish account creation.
        await CreateOrder.open_and_store_account()
    }

}

export default new CreateMultipleOrders()

