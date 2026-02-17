const config = require('../utils/configSplitt');

class DividirCheck {
    get check() { return $('id=com.juvomos.pos:id/idSplitButton'); }
    get btnAddTicket() { return $('id=com.juvomos.pos:id/btnAddTicket'); }
    get btnConfirmar() { return $('id=com.juvomos.pos:id/btnDone'); }
    get splitScreen() { return $('id=com.juvomos.pos:id/layout_split_fragment'); }
    get cuentas() { return $$('id=com.juvomos.pos:id/cardSplit'); }
    get products() { return $$('id=com.juvomos.pos:id/layoutItemCheckDetails'); }
   
    async BTerminado() {
       await this.btnConfirmar.waitForDisplayed({ timeout: 5000 });
        await this.btnConfirmar.click();
    }
    async BotonCheck(){
        await this.check.waitForDisplayed({ timeout: 10000 });
        await this.check.click();
        }

    async dividirCheck(totalCuentas) {
        await this.check.waitForDisplayed({ timeout: 10000 });
        await this.check.click();
        await this.splitScreen.waitForDisplayed({ timeout: 10000 });

        for (let i = 1; i < totalCuentas; i++) {
            await this.btnAddTicket.waitForDisplayed({ timeout: 5000 });
            await this.btnAddTicket.click();
        }

        const cuentas = await this.cuentas;
        /*if (cuentas.length !== totalCuentas) {
            throw new Error(`Se esperaban ${totalCuentas} cuentas y hay ${cuentas.length}`);
        }*/

        let cuentaIndex = config.CUENTA_INICIAL;
        let movimientos = 0;

      while (movimientos < config.MAX_ITERACIONES) {
    let productos = await this.products;
   
    if (productos.length <= config.MIN_PRODUCTOS_ORIGINAL) {        
        break;
    }

    // contar productos en cada cuenta
    let counts = [];
    for (const cuenta of cuentas) {
        const items = await cuenta.$$('id=com.juvomos.pos:id/layoutItemCheckDetails');
        counts.push(items.length);
    }
   
    // condición de parada configurable (evitar cortar si todas son 0)
    if (config.CONDICION_PARADA === "todasIguales" && counts.slice(1).every(c => c > 0 && c === counts[1])) {
        
        break;
    }
    if (config.CONDICION_PARADA === "llenarPrimera" && counts[1] >= counts[0]) {
    
        break;
    }

    // mover producto
    const producto = productos[0];
    await producto.waitForDisplayed();
    await producto.click();
    await cuentas[cuentaIndex].click();
    console.log(`➡️ Producto asignado a cuenta ${cuentaIndex}`);

    cuentaIndex = (cuentaIndex + 1) % cuentas.length;
    if (cuentaIndex === 0) cuentaIndex = config.CUENTA_INICIAL;

    movimientos++;
}
       this.BTerminado();
    }
}

module.exports = new DividirCheck();
