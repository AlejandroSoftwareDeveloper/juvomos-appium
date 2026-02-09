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

    async MesaSelect(numero) {

            await this.SelectorMesa.waitForDisplayed();
            await this.SelectorMesa.click();

             const btnClear = $('id=com.juvomos.pos:id/clear_back_arrow');

            if (await btnClear.isDisplayed()) {
                await btnClear.click();
            }

            const mesaMap = {
                1: 'one',
                2: 'two',
                3: 'three',
                4: 'four',
                5: 'five',
                6: 'six',
                7: 'seven',
                8: 'eight',
                9: 'nine',
                0: 'zero'
            };

            const key = mesaMap[numero];
            if (!key) {
                throw new Error(`Mesa no soportada: ${numero}`);
            }



            const mesa = $(`id=com.juvomos.pos:id/${key}_btn_pin`);
            await mesa.waitForDisplayed({ timeout: 10000 });
            await mesa.click();

            // Aceptar
            const btnAccept = $('id=com.juvomos.pos:id/checkBigImage');
            await btnAccept.waitForDisplayed({ timeout: 10000 });
            await btnAccept.click();

        // Selecciona la cant. personas
        const pers = $('id=com.juvomos.pos:id/four_btn_pin');
        await pers.waitForDisplayed({ timeout: 10000 });
        await pers.click();

        // Aceptar
        const btnOK = $('id=com.juvomos.pos:id/checkBigImage');
        await btnOK.waitForDisplayed({ timeout: 10000 });
        await btnOK.click();
}           
        

}

module.exports = new SeleccionarMesa();
