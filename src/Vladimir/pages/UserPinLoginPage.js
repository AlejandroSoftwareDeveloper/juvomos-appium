const BasePage = require('./BasePage');

class UserPinLoginPage {
    constructor(driver) {
        // Guardar referencia al driver
        this.driver = driver;

        // ===============================
        // ELEMENTO ANCLA DE LA PANTALLA
        // ===============================
        // Este elemento confirma que estamos en la pantalla de PIN
        this.pinTitle = {
            get: async () => {
                return await this.driver.$('id=com.juvomos.pos:id/tvPinTitle');
            }
        };

        // ===============================
        // BOTONES NUMÉRICOS DEL PIN
        // ===============================
        // Cada botón se obtiene por su resource-id real del Appium Inspector
        this.pinButtons = {
            '0': async () => await this.driver.$('id=com.juvomos.pos:id/btn0'),
            '1': async () => await this.driver.$('id=com.juvomos.pos:id/btn1'),
            '2': async () => await this.driver.$('id=com.juvomos.pos:id/btn2'),
            '3': async () => await this.driver.$('id=com.juvomos.pos:id/btn3'),
            '4': async () => await this.driver.$('id=com.juvomos.pos:id/btn4'),
            '5': async () => await this.driver.$('id=com.juvomos.pos:id/btn5'),
            '6': async () => await this.driver.$('id=com.juvomos.pos:id/btn6'),
            '7': async () => await this.driver.$('id=com.juvomos.pos:id/btn7'),
            '8': async () => await this.driver.$('id=com.juvomos.pos:id/btn8'),
            '9': async () => await this.driver.$('id=com.juvomos.pos:id/btn9')
        };

        // ===============================
        // BOTÓN CONFIRMAR (SI EXISTE)
        // ===============================
        this.confirmButton = {
            get: async () => {
                return await this.driver.$('id=com.juvomos.pos:id/btnConfirm');
            }
        };
    }

    /**
     * Verifica si la pantalla de PIN está visible
     * NUNCA lanza error
     */
    async isDisplayed() {
        try {
            const element = await this.pinTitle.get();
            return await element.isDisplayed();
        } catch (error) {
            return false;
        }
    }

    /**
     * Ingresa el PIN completo dígito por dígito
     * @param {string} pin - Ejemplo: "040404"
     */
    async enterPin(pin) {
        // Convertir el PIN en un arreglo de caracteres
        const digits = pin.split('');

        // Iterar cada dígito del PIN
        for (const digit of digits) {
            // Obtener el botón correspondiente al dígito
            const button = await this.pinButtons[digit]();

            // Presionar el botón
            await button.click();
        }
    }

    /**
     * Confirma el PIN si existe botón de confirmación
     * Si no existe, no falla
     */
    async confirmPin() {
        try {
            // Obtener botón confirmar
            const button = await this.confirmButton.get();

            // Verificar si está visible antes de hacer click
            if (await button.isDisplayed()) {
                await button.click();
            }
        } catch (error) {
            // No hacer nada si el botón no existe
        }
    }
}

module.exports = UserPinLoginPage;