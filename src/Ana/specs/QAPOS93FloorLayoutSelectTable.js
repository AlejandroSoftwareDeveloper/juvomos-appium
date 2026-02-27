//QAPOS93FloorLayoutSelectTable.js


const ProductSelectionPages = require('../pages/ProductSelectionPages');
const OrderSelectionDineIn = require('../pages/OrderSelectionDineIn');
const SelectMesaDineIn = require('../pages/SelectMesaDineIn');
const ValidarProductosCheck = require('../pages/ValidarProductosCheck');
const BreakTest = require('../utils/BreakTest');

describe('Floor layout select table', () => {

  // Seleccionar Dine In desde Order Type 
  it('TC0001: Seleccionar Dine In', async () => {
     try {
      
    await OrderSelectionDineIn.selectDineInPresent();
    await SelectMesaDineIn.selectMesaDisponible();
    await SelectMesaDineIn.seleccionarNumeroClientesValido(); 
      } catch (error) {
        throw new Error(`TC0001 (Dine In) falló: ${error.message}`);
      }
    });

 //Seleccionar 2 productos Dine In
  it('TC0002: Marcar 2 productos Dine In', async () => {
     try {

     // Productos
    await ProductSelectionPages.waitForPage();
    await ProductSelectionPages.selectProducts(2);
    await ProductSelectionPages.goToAccount();

    // Enviar orden
    await ValidarProductosCheck.sendOrder();

       } catch (error) {
      throw new Error(`TC0002 (productos) falló: ${error.message}`);
    }
  
   });
 // Seleccionar Dine In desde Order Type 
  it('TC0003: Comprobar mesa ocupada', async () => {
     try {
      
    await OrderSelectionDineIn.selectDineInPresent();    

    } catch (error) {
      throw new Error(`TC0003 (productos) falló: ${error.message}`);
    }
 
    });

  //Retornar a la pantalla de inicio
    it('TC0004: Retorno Inicio', async () => {
    try {                
      await BreakTest.Atras();   

    } catch (error) {
        throw new Error(`TC0004 (Retorno Inicio) falló: ${error.message}`);
    }
    });


});
