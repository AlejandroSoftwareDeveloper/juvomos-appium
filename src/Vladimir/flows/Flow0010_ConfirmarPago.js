class Flow0010_ConfirmarPago {
    constructor(paymentcompletePage) {
        this.paymentcompletePage = paymentcompletePage;
    }

    async executeflow() {
        // 1. Esperar hasta que la pantalla esté visible (máx 5 intentos)
        let visible = false;
        const maxRetries = 5;
        for (let i = 0; i < maxRetries; i++) {
            visible = await this.paymentcompletePage.isDisplayed();
            if (visible) break;
            await new Promise(r => setTimeout(r, 1000)); // esperar 1s
        }

        if (!visible) {
            console.warn('Pantalla PaymentComplete no visible. No se puede imprimir.');
            return false; // flujo seguro
        }

        // 2. Tap seguro en botón imprimir
        try {
            await this.paymentcompletePage.tapPrint();
            console.log('Acción imprimir ejecutada correctamente');
            return true;
        } catch (error) {
            console.warn('Error al intentar imprimir:', error.message);
            return false;
        }
    }
}

module.exports = Flow0010_ConfirmarPago;