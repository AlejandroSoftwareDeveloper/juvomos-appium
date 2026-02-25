import LocalStorage from '../HelperClass/LocalStorage.js'

describe('Carga de datos guardados', () => {


  it('test que usa datos guardados', async () => {
    const usuarioPrevio = LocalStorage.storage('ultimoUsuarioCreado');
    console.log('Reutilizando:', usuarioPrevio);
  });

  after(() => {
    LocalStorage.storage('lastRun', new Date().toISOString());
    LocalStorage.storage('execCount', (LocalStorage.storage('execCount') || 0) + 1);
    LocalStorage.dirName();

  });


})
