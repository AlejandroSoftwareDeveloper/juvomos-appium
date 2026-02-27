//QAPOS94FloorLayoutSelectTable.js

const OrderSelectionDineIn = require('../pages/OrderSelectionDineIn');
const SelectMesaDineIn = require('../pages/SelectMesaDineIn');
const BreakTest = require('../utils/BreakTest');

describe('Floor layout select table', () => {

 // Seleccionar Dine In desde Order Type 
  it('TC0001: Seleccionar Dine In', async () => {
     try {
      
    await OrderSelectionDineIn.selectDineInPresent();
    await SelectMesaDineIn.selectMesaOcupada();
    await SelectMesaDineIn.selectConfirmar();
   
      } catch (error) {
        throw new Error(`TC0001 (Dine In) falló: ${error.message}`);
      }
    }); 

  //Retornar a la pantalla de inicio
    it('TC0002: Retorno Inicio', async () => {
    try {                
      await BreakTest.Atras();   

    } catch (error) {
        throw new Error(`TC0002 (Retorno Inicio) falló: ${error.message}`);
    }
    });


});
