import { PICK_UP_OPTION, BTN_SHOW_ORDER, BTN_SEND_TO_KITCHEN, BTN_ORDER_RECALL, LAYOUT_CHECK_ITEM, BTN_RECALL, BTN_TRANSFER, BTN_TRANSFER_EMPLOYEE } from '../../src/selectors/constants'

const fs = require('fs');

describe("Trasnfer product between acccounts", () => {

    const item = '(//androidx.cardview.widget.CardView[@resource-id="com.juvomos.pos:id/itemGeneralLayout"])'
    let total_items = 0

    async function detect_card(){
         for(let i = 1;i< 100;i++){
             if (!!(await $(item + `[${i}]/android.view.ViewGroup`)).error == 0){
                 total_items += 1 
                 continue
             }
                 break
         }
        // console.log('__filename:', __filename);
        // console.log('__dirname:', __dirname);
        // console.log( __dirname.replace('test/specs',''));


    }


    async function load_json(){
         let add = __dirname.replace('test/specs','')
            await fs.readFile(add +'books.json', function(err, data) { 

                if (err) throw err; 

                const books = JSON.parse(data); 
                console.log(books); 
          }); 
    }



    it('exist item',async()=>{
         // await detect_card()
         await load_json()
    })

});



// import { access, readFile, writeFile } from 'fs/promises';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
//
// /**
//  * Función asíncrona para detectar, leer, actualizar o crear un archivo JSON
//  * @param {string} filePath - Ruta del archivo JSON
//  * @param {Object} newData - Objeto con los datos a actualizar/agregar
//  * @param {boolean} merge - Si es true, fusiona con datos existentes; si false, reemplaza todo
//  * @returns {Promise<Object>} - Retorna los datos finales del archivo
//  */
// async function manageJsonFile(filePath, newData, merge = true) {
//   let existingData = {};
//
//   try {
//     // Intentar acceder al archivo para verificar si existe
//     await access(filePath);
//
//     // Si existe, leer su contenido
//     const data = await readFile(filePath, 'utf8');
//     existingData = JSON.parse(data);
//     console.log(`Archivo existente leído: ${filePath}`);
//
//   } catch (error) {
//     // Si el archivo no existe, error.code será 'ENOENT'
//     if (error.code === 'ENOENT') {
//       console.log(`Archivo no encontrado, se creará: ${filePath}`);
//     } else if (error instanceof SyntaxError) {
//       // Si hay error de síntaxis en el JSON
//       console.error(`Error: El archivo existe pero no es un JSON válido: ${error.message}`);
//       throw error;
//     } else {
//       // Otro tipo de error
//       throw error;
//     }
//   }
//
//   // Preparar los datos a guardar
//   let dataToSave;
//   if (merge && Object.keys(existingData).length > 0) {
//     // Fusionar datos existentes con nuevos
//     dataToSave = { ...existingData, ...newData };
//   } else {
//     // Reemplazar completamente
//     dataToSave = newData;
//   }
//
//   // Escribir el archivo con los datos actualizados
//   await writeFile(
//     filePath, 
//     JSON.stringify(dataToSave, null, 2), // Formatear con indentación de 2 espacios
//     'utf8'
//   );
//
//   console.log(`Archivo guardado/actualizado exitosamente: ${filePath}`);
//   return dataToSave;
// }
//
// // Ejemplo de uso:
// async function ejemplo() {
//   const ruta = './datos/config.json';
//   const datos = { 
//     usuario: 'admin', 
//     ultimaActualizacion: new Date().toISOString(),
//     configuracion: {
//       tema: 'oscuro',
//       notificaciones: true
//     }
//   };
//
//   try {
//     const resultado = await manageJsonFile(ruta, datos, true);
//     console.log('Datos guardados:', resultado);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }
//
// // Ejecutar ejemplo
// ejemplo();
