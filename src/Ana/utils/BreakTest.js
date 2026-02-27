class BreakTest {
   async botonCuenta() {
        await this.accountButton.waitForDisplayed({ timeout: 10000 });
        await this.accountButton.click();
        await this.cancelButton.waitForDisplayed({ timeout: 10000 });
        await this.cancelButton.click();
        await this.cancelButtonMsG.waitForDisplayed({ timeout: 10000 });
        await this.cancelButtonMsG.click();


    }
    get accountButton() {
        return $('id=com.juvomos.pos:id/btnShowOrder');
    }

     get cancelButtonMsG() {
        return $('id=com.juvomos.pos:id/cancelDialog');
    }

    get cancelButton() {
        return $('id=com.juvomos.pos:id/idCancelButton');
    }

    get CloseOrden() {
        return $('id=com.juvomos.pos:id/imgCloseButton');
    }
    get BtnAtras() {
        return $('//android.widget.ImageButton[@content-desc="Navegar hacia arriba"]');
    }
    get btnCloseDiscount() {
        return $('id=com.juvomos.pos:id/closeDiscount');
    }
     get btnCloseItemOptions() {
        return $('id=com.juvomos.pos:id/closeItemOptions');
    }
    get BtnCloseCheck() {
    return $('id=com.juvomos.pos:id/imgCloseButtonSecondary');
}
  get CloseCheck() {
    return $('id=com.juvomos.pos:id/closeCheckOptions');
}
     async CerrarCheque() {

        await this.CloseCheck.waitForDisplayed({ timeout: 10000 });
        await this.CloseCheck.click();
    }

    async ClosedCheck() {

        await this.BtnCloseCheck.waitForDisplayed({ timeout: 10000 });
        await this.BtnCloseCheck.click();
    }
    async botonCancel() {

        await this.cancelButton.waitForDisplayed({ timeout: 10000 });
        await this.cancelButton.click();
    }

    async closeTOrden() {
        await this.CloseOrden.waitForDisplayed({ timeout: 10000 });
        await this.CloseOrden.click();
        }

    async Atras() {
    await this.BtnAtras.waitForDisplayed({ timeout: 10000 });
    await this.BtnAtras.click();
    }
 /* async Cerrar() {
    const btnCloseDiscount = await $('id=com.juvomos.pos:id/closeDiscount');
    await btnCloseDiscount.waitForDisplayed({ timeout: 10000 });
    await btnCloseDiscount.click();
}  */
   async Cerrar() {
    try {
        const btnCloseDiscount = await $('id=com.juvomos.pos:id/closeDiscount');
        
        // Espera hasta que aparezca (máx 3s)
        await btnCloseDiscount.waitForDisplayed({ timeout: 3000 });
        
        await btnCloseDiscount.click();
        
        // Espera a que desaparezca
        await btnCloseDiscount.waitForDisplayed({ reverse: true, timeout: 5000 });
    } catch (err) {
        // Si no aparece, seguimos sin romper el flujo
        console.log("Ventana de descuento no apareció, continuamos...");
    }
}

    async Cerrar2() {     
        const btnCloseItemOptions = await $('id=com.juvomos.pos:id/closeItemOptions');
        await btnCloseItemOptions.waitForDisplayed({ timeout: 10000 });
        await btnCloseItemOptions.click();        

    }

     get btnCloseItemOptions() {
        return $('id=com.juvomos.pos:id/closeItemOptions');
    }
     get closeDiscountButton() {
    return driver.$('android=new UiSelector().resourceId("com.juvomos.pos:id/closeDiscount")');
  }

  /*async clickCloseDiscount() {
    await this.closeDiscountButton.waitForDisplayed({ timeout: 5000 });
    await this.closeDiscountButton.click();
  }*/
  async clickCloseDiscount() {
  const closeDiscount = await $('id=com.juvomos.pos:id/closeDiscount');

if (await closeDiscount.isDisplayed().catch(() => false)) {
    const rect = await closeDiscount.getRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;

    // Tap sobre el centro del ViewGroup
    await driver.touchPerform([
        { action: 'tap', options: { x: centerX, y: centerY } }
    ]);

    // Esperamos un momento para que la pantalla cambie
    await driver.pause(500);
}
        }

}

module.exports = new BreakTest();
