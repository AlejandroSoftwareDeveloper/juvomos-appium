class checkGuest {

    get guestsNumber() {
    return $('id=com.juvomos.pos:id/guestsNumber');
    }

    async validateGuests(expected) {
    await this.guestsNumber.waitForDisplayed({ timeout: 15000 });
    const text = await this.guestsNumber.getText(); // "4 Personas"

    if (!text.startsWith(`${expected} `)) {
        throw new Error(`Guests incorrectos. Esperado: ${expected}, Actual: ${text}`);
    }
    }
}

module.exports = new checkGuest();