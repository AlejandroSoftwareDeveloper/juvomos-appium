const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const GuestSelectionPage = require('../pages/GuestSelectionPage');
const OrderTypePage = require('../pages/OrderTypePage');
const OpenCheck = require('../pages/OpenCheck');
const checkGuest = require('../pages/checkGuest');
const PaymentPages = require('../pages/PaymentPages');

describe('Flujo completo - Pedido To Go (sin login)', () => {

  it('TC0001: Seleccionar productos', async () => {
  // it('Seleccionar productos y agregar guests desde Order Type', async () => {
   
    // To Go (solo condicional)
    await OrderSelectionPages.selectToGoIfPresent();

    // Productos
    await ProductSelectionPages.waitForPage();
    await ProductSelectionPages.selectThreeProducts();
    await ProductSelectionPages.goToAcc();

 })


  it('TC0002: Adicionar guests desde order type', async () => {

    // Cuenta
    await ValidarProductosCheck.waitForPage();
    await ValidarProductosCheck.validateAllProducts();

    // Guests
    await GuestSelectionPage.setGuestsToFour();
    const accountNumber = await OpenCheck.getAccountNumber();

    // Enviar orden
    await ValidarProductosCheck.sendOrder();
 })


  it('TC0003: Validar que existen guests.', async () => {
    // Volver a Order Type
    await OrderTypePage.waitForPage();
    await OpenCheck.open();
    await OpenCheck.selectLastCreatedAccount();

    // Validar guests
    await checkGuest.validateGuests(4);
 })


  it('TC0004: Los clientes pagaron las cuentas.', async () => {
    // Pago
    await PaymentPages.goToPay();

    await PaymentPages.waitForPayScreen();
    await PaymentPages.selectCashPay();
  })


  it('TC0005: Se enviaron los correos correctamente.', async () => {
    await PaymentPages.selectSendEmail();
    await PaymentPages.enterEmail('lara012690mail.com');
    await PaymentPages.clickSendEmail();

    
 })


});
