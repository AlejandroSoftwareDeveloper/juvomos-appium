class SelectMesaDineIn {

  async selectMesaDisponible() {
    const grid = await $('id=com.juvomos.pos:id/rvTables');
    await grid.waitForDisplayed({ timeout: 10000 }); // esperar hasta 10s

    const tables = await grid.$$('id=com.juvomos.pos:id/tableItemGeneralLayout');
    console.log('Mesas totales en GridView:', tables.length);

    const freeTables = [];

    for (const [i, table] of tables.entries()) {
        const label = await table.$('id=com.juvomos.pos:id/tableEmployeeName');
        let text = '';
        if (await label.isExisting()) {
            text = await label.getText();
        }

        console.log(`Mesa ${i}: label="${text}"`);
        // Considerar "N/A" como mesa libre
        if (text.trim() === 'N/A') {
            freeTables.push(table);
        }
    }

    if (freeTables.length === 0) {
        throw new Error('No hay mesas disponibles');
    }

    // Seleccionar una mesa libre aleatoriamente
    const selectedTable = freeTables[Math.floor(Math.random() * freeTables.length)];

    const tableNumberEl = await selectedTable.$('id=com.juvomos.pos:id/tableNumberValue');
    const tableNumberText = await tableNumberEl.getText();

    console.log('Mesa seleccionada:', tableNumberText);
    await selectedTable.click();

    return tableNumberText;
}

  async seleccionarNumeroClientesValido() {
  const guestsText = $('//android.widget.TextView[@resource-id="com.juvomos.pos:id/guestsText"]');
  await guestsText.waitForDisplayed({ timeout: 10000 });

  const text = await guestsText.getText(); // "# Clientes 4"
  const maxGuests = parseInt(text.match(/\d+/)[0], 10);
  const guestsToSelect = maxGuests - 1;

  if (guestsToSelect <= 0) {
    throw new Error('Número de clientes inválido');
  }

  const keyboard = $('//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/guestKeyboardNumeric"]');
  await keyboard.waitForDisplayed({ timeout: 10000 });

  for (const digit of guestsToSelect.toString()) {
    const key = await keyboard.$(`.//android.widget.Button[@text="${digit}"]`);
    await key.waitForDisplayed({ timeout: 5000 });
    await key.click();
  }

  const btnConfirmar = $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/checkBigImage"]');
  await btnConfirmar.waitForDisplayed({ timeout: 10000 });
  await btnConfirmar.click();
}
}

module.exports = new SelectMesaDineIn();
