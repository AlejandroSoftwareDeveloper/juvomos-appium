//QAPOS82CheckToGo-DineIn.js
const OrderSelectionPages = require('../pages/OrderSelectionPages');
const ProductSelectionPages = require('../pages/ProductSelectionPages');
const DineInProducts = require('../pages/DineInProducts');
const OrderSelectionDineIn = require('../pages/OrderSelectionDineIn');
const SelectMesaDineIn = require('../pages/SelectMesaDineIn');
const MarcarProductToGo = require('../pages/MarcarProductToGo');
const PaymentPages = require('../pages/PaymentPages');

describe('Flujo Check Dine In (sin login)', () => {

  // Seleccionar Dine In desde Order Type 
  it('TC0001: Seleccionar Dine In', async () => {
      
    await OrderSelectionDineIn.selectDineInPresent();
    await SelectMesaDineIn.selectMesaDisponible();
    await SelectMesaDineIn.seleccionarNumeroClientesValido(); 
 
 })

 //Seleccionar 6 productos Dine In y luego cambiar 3 de ellos a ToGo
  it('TC0002: Marcar 6 productos, 3 Dine In y 3 To Go', async () => {

     // Productos
    await ProductSelectionPages.waitForPage();
    await ProductSelectionPages.selectProducts(7);
    await ProductSelectionPages.goToAccount();

    await MarcarProductToGo.seleccionarProductoDisponible(3);   
 })
// Efectuo Pago
  it('TC0003: Efectuar Pago en Efectivo.', async () => {
    
    await PaymentPages.goToPayment();

    await PaymentPages.waitForPaymentScreen();
    await PaymentPages.selectCashPayment();
  })

// Envio correo
  it('TC0004: Enviar correo del pago correctamente.', async () => {
    await PaymentPages.selectSendEmail();
    await PaymentPages.enterEmail('lara012690mail.com');
    await PaymentPages.clickSendEmail();
 })



});
