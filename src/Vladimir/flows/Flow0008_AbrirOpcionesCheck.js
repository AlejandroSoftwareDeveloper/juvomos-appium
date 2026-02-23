class Flow0008_AbrirOpcionesCheck {
    constructor(paymentPage) {
        this.paymentPage = paymentPage;
    }

    async executeflow() {
        const visible = await this.paymentPage.isDisplayed();
        if (!visible) {
            throw new Error('Pantalla de pago no visible. El ticket no está activo.');
        }

        // 2. Abrir opciones de la cuenta del ticket EXISTENTE
        await this.paymentPage.tapOpcionesCuenta();
    }
}

module.exports = Flow0008_AbrirOpcionesCheck;