class SelectMesaDineIn {

  async selectmesaDisponible() {
    const mesaDisponible = $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/tableItemGeneralLayout"])[1]');
    await mesaDisponible.waitForDisplayed({ timeout: 15000 });
    await mesaDisponible.click();
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
