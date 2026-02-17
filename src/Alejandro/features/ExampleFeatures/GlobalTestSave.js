import LocalStorage from '../HelperClass/LocalStorage.js'

describe('Suite de Pruebas Appium', () => {
// === USO EN MOCHA ===
  
  before(() => {
    // Recuperar datos de ejecución anterior
    const lastRun = LocalStorage.storage('lastRun');
    console.log('Última ejecución:', lastRun || 'Primera vez');
  });

  it('test que guarda datos', async () => {
    // Tu código de Appium aquí...
    const userId = 'user_' + Date.now();
    
    // Guardar para siguiente ejecución
    LocalStorage.storage('ultimoUsuarioCreado', userId);
    LocalStorage.storage('totalTests', (LocalStorage.storage('totalTests') || 0) + 1);
  });

});
