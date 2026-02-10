class SeleccionarClienteCheck {

   get selectorClient() {
     return $('id=com.juvomos.pos:id/ticketCustomerName');
    }

    get inputClient() {
        return $('id=com.juvomos.pos:id/nameTagEdit');
    }

    get btnAddTag() {
        return $('id=com.juvomos.pos:id/btnAddTag');
    }

    async selectClient() {
        await this.selectorClient.waitForDisplayed();
        await this.selectorClient.click();
      
    }

    get btnQuitarCliente() {
    return $('id=com.juvomos.pos:id/btnAddCustomer');
}
     async eliminarcliente() {
        await this.btnQuitarCliente.waitForDisplayed();
        await this.btnQuitarCliente.click();
    }  
        

}

module.exports = new SeleccionarClienteCheck();
