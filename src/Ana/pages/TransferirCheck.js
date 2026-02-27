
class TransferirCheck {

      get btnTransfer() {
        return $('id=com.juvomos.pos:id/btnTransfer');
    }
     get btnTransferCheck() {
        return $('id=com.juvomos.pos:id/btnTransferChec');
    }
     get employeesRecycler() {
        return $('id=com.juvomos.pos:id/employeesRecycler');
    }
    get checks() {
    return $$('id=com.juvomos.pos:id/layoutItemCheckTransfer');
}



    async transferToRandomCheck() {

    await this.openTransferMenu();
    await this.selectTransferCheck();
    await this.waitForCheck();
    await this.selectRandomCheck();
    await this.btnTransferencia();   
    
  }

   async openTransferMenu() {
    await this.btnTransfer.waitForDisplayed({ timeout: 15000 });
    await this.btnTransfer.click();
  }
  async selectTransferCheck() {
    await this.btnTransferCheck.waitForDisplayed({ timeout: 15000 });
    await this.btnTransferCheck.click();
  }

  async selectRandomCheck() {
     const checks = await this.checks;
    if (checks.length > 0) {
        await checks[0].click();  // selecciona la primera cuenta
    } else {
        throw new Error('No hay cuentas disponibles para transferir');
    }
  }

   async waitForCheck() {
    await this.employeesRecycler.waitForDisplayed({ timeout: 20000 });

    await browser.waitUntil(async () => {
      return (await this.checks).length > 0;
    }, {
      timeout: 20000,
      timeoutMsg: 'No hay empleados disponibles para transferir'
    });
  }

   async btnTransferencia() {
        const btnTransfer = $('id=com.juvomos.pos:id/btnTransfer');
        await btnTransfer.waitForDisplayed({ timeout: 5000 });
        await btnTransfer.click();
        }
   

     async close() {
        const closeBtn = $('id=com.juvomos.pos:id/imgCloseButtonSecondary');
        if (await closeBtn.isDisplayed()) {
            await closeBtn.click();
        }
    }
    }

module.exports = new TransferirCheck();