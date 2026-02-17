class GuestSelectionPage {
    
    /*async setGuestsToFour() {
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
    }*/
    guestSelectors = {
        0: 'id=com.juvomos.pos:id/zero_btn_pin',
        1: 'id=com.juvomos.pos:id/one_btn_pin',
        2: 'id=com.juvomos.pos:id/two_btn_pin',
        3: 'id=com.juvomos.pos:id/three_btn_pin',
        4: 'id=com.juvomos.pos:id/four_btn_pin',
        5: 'id=com.juvomos.pos:id/five_btn_pin',
        6: 'id=com.juvomos.pos:id/six_btn_pin',
        7: 'id=com.juvomos.pos:id/seven_btn_pin',
        8: 'id=com.juvomos.pos:id/eight_btn_pin',
        9: 'id=com.juvomos.pos:id/nine_btn_pin'
    };


    async setGuests(number) {
        const selector = this.guestSelectors[number];
        if (!selector) {
            throw new Error(`Número de guests inválido: ${number}`);
        }

        const btnGuests = $('id=com.juvomos.pos:id/guestsNumber');
        await btnGuests.waitForDisplayed({ timeout: 15000 });
        await btnGuests.click();

        const btnNumber = $(selector);
        await btnNumber.waitForDisplayed({ timeout: 10000 });
        await btnNumber.click();

        const btnAccept = $('id=com.juvomos.pos:id/checkBigImage');
        await btnAccept.waitForDisplayed({ timeout: 10000 });
        await btnAccept.click();
    }
}
       

module.exports = new GuestSelectionPage();
