const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const GuestSelectionPage = require('../pages/GuestSelectionPage');
const OrderTypePage = require('../pages/OrderTypePage');
const OpenCheck = require('../pages/OpenCheck');
const checkGuest = require('../pages/checkGuest');
const PaymentPages = require('../pages/PaymentPages');
const BreakTest = require('../utils/BreakTest');

describe('Flujo completo - Pedido To Go (sin login)', () => {

  const guest=9;
  it('TC0001: Seleccionar productos', async () => {
   try {
   
    // To Go (solo condicional)
    await OrderSelectionPages.selectToGoIfPresent();

    // Productos
    await ProductSelectionPages.waitForPage();
    await ProductSelectionPages.selectThreeProducts();
    await ProductSelectionPages.goToAcc();

 } catch (error) {
          throw new Error(`TC0001 (Seleccionar productos) falló: ${error.message}`);
      }
  }); 

  it('TC0002: Adicionar guests desde order type', async () => {
     try {
      // Cuenta
      await ValidarProductosCheck.waitForPage();
      await ValidarProductosCheck.validateAllProducts();

      // Guests
      await GuestSelectionPage.setGuests(guest);
      const accountNumber = await OpenCheck.getAccountNumber();

      // Enviar orden
      await ValidarProductosCheck.sendOrder();
  } catch (error) {
          throw new Error(`TC0002 (guests) falló: ${error.message}`);
      }
  });     


  it('TC0003: Validar que existen guests.', async () => {
    try {
    // Volver a Order Type
    await OrderTypePage.waitForPage();
    await OpenCheck.open();
    await OpenCheck.selectLastCreatedAccount();

    // Validar guests
    await checkGuest.validateGuests(guest);

 } catch (error) {
          throw new Error(`TC0003 (Validar) falló: ${error.message}`);
      }
  });     


  it('TC0004: Los clientes pagaron las cuentas.', async () => {
     try {     
      // Pago
      await PaymentPages.goToPay();
      await PaymentPages.waitForPayScreen();
      await PaymentPages.selectCashPay();
     } catch (error) {
            throw new Error(`TC0004 (Pago) falló: ${error.message}`);
        }
        });


  it('TC0005: Se enviaron los correos correctamente.', async () => {
     try {     
      await PaymentPages.selectSendEmail();
      await PaymentPages.enterEmail('lara012690mail.com');
      await PaymentPages.clickSendEmail();

  } catch (error) {
            throw new Error(`TC0005 (Correo) falló: ${error.message}`);
        }
        });
    
      //Retornar a la pantalla de inicio
        it('TC0006: Retorno Inicio', async () => {
        try {                
           
                await BreakTest.closeTOrden();   
                await BreakTest.botonCancel();                
          
        } catch (error) {
            throw new Error(`TC0006 (Retorno Inicio) falló: ${error.message}`);
        }
        });


});
