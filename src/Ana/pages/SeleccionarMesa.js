class SeleccionarMesa {

    get SelectorMesa() {
        return $('id=com.juvomos.pos:id/ticketTable');
    }

    /*async clearMesaValue() {
        const tableValue = $('id=com.juvomos.pos:id/tableNumberValue');
            const btnClear = $('id=com.juvomos.pos:id/clear_back_arrow');

            // Limpiar valor anterior solo si existe
            if (await tableValue.isExisting()) {
                let value = await tableValue.getText();
                while (value && value.length > 0) {
                    await btnClear.waitForDisplayed({ timeout: 5000 });
                    await btnClear.click();
                    value = await tableValue.getText();
                }
            }
    }*/

   async MesaSelect(mesa, guest) {

    await this.SelectorMesa.waitForDisplayed();
    await this.SelectorMesa.click();

    const btnClear = $('id=com.juvomos.pos:id/clear_back_arrow');
    if (await btnClear.isDisplayed()) {
        await btnClear.click();
    }

    const mesaMap = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    const mesaKey = mesaMap[mesa];
    if (!mesaKey) {
        throw new Error(`Mesa no soportada: ${mesa}`);
    }

    const guestKey = mesaMap[guest];
    if (!guestKey) {
        throw new Error(`Guest no soportado: ${guest}`);
    }

    // Mesa
    const mesaBtn = $(`id=com.juvomos.pos:id/${mesaKey}_btn_pin`);
    await mesaBtn.waitForDisplayed({ timeout: 10000 });
    await mesaBtn.click();

    const btnAcceptMesa = $('id=com.juvomos.pos:id/checkBigImage');
    await btnAcceptMesa.waitForDisplayed({ timeout: 10000 });
    await btnAcceptMesa.click();

    // Guests
    const guestBtn = $(`id=com.juvomos.pos:id/${guestKey}_btn_pin`);
    await guestBtn.waitForDisplayed({ timeout: 10000 });
    await guestBtn.click();

    const btnAcceptGuest = $('id=com.juvomos.pos:id/checkBigImage');
    await btnAcceptGuest.waitForDisplayed({ timeout: 10000 });
    await btnAcceptGuest.click();
}
  
        

}

module.exports = new SeleccionarMesa();
