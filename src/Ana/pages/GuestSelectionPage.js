class GuestSelectionPage {
    
    async setGuestsToFour() {
        // Abre pantalla Guests
        const btnGuests = $('id=com.juvomos.pos:id/guestsNumber');
        await btnGuests.waitForDisplayed({ timeout: 15000 });
        await btnGuests.click();

        // Selecciona 4
        const btnFour = $('id=com.juvomos.pos:id/four_btn_pin');
        await btnFour.waitForDisplayed({ timeout: 10000 });
        await btnFour.click();

        // Aceptar
        const btnAccept = $('id=com.juvomos.pos:id/checkBigImage');
        await btnAccept.waitForDisplayed({ timeout: 10000 });
        await btnAccept.click();
    }
       
}

module.exports = new GuestSelectionPage();
