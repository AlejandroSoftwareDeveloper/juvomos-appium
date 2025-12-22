describe("Validar que datos insertados son correctos en campos de contrasenia donde: \n",() => {
    const PASSWORD_TEST = '1234567890'
   it("Se limpia el input al empezar",async () => {
        const selector = 'id:com.juvomos.pos:id/txt_pin_user'
        const input = await $(selector);
        await input.clearValue();
   });

  it('Validar el campo es de tipo password', async ()=> {
    // Seleccionar el campo password por ID
    const campoPassword = await $('id:com.juvomos.pos:id/txt_pin_user');
    await campoPassword.waitForDisplayed({ timeout: 5000 });
    
    // Validar que el inputType sea numérico (18 = numberPassword, 2 = number)
    let tipoInput = await campoPassword.getAttribute('input-type'); // WebdriverIO usa kebab-case
    if (!tipoInput) {
      tipoInput = await campoPassword.getAttribute('inputType'); // Fallback
    }
    console.log('  InputType detectado:', tipoInput);
    // Validar que sea un tipo numérico
    const esTipoNumerico = tipoInput === '18' || tipoInput === '2';
    if (!esTipoNumerico) {
      throw new Error(`El campo no es numérico. InputType encontrado: ${tipoInput}`);
    }
  });

    // it('Valido que password que se inserta coincide con el esperado', async () => {
    //   const passwordInput = await $('id:com.juvomos.pos:id/txt_pin_user');
    //   await passwordInput.setValue(PASSWORD_TEST);
    //   expect(PASSWORD_TEST).toBe('1234567890'); 
    // });
    //
    // it('Valido que los valores que acepta el pin son numeros y password', async () => {
    //   const passwordInput = await $('id:com.juvomos.pos:id/txt_pin_user');
    //   const inputType = await passwordInput.getAttribute('inputType');
    //   expect(['2','18']).toBe(inputType); 
    //   // console.log(inputType)
    // });
  // it('debería validar que el campo password solo acepta números', async function() {
  //
  //   // Seleccionar el campo password por ID
  //   const campoPassword = await $('id:com.juvomos.pos:id/txt_pin_user');
  //   await campoPassword.waitForDisplayed({ timeout: 5000 });
  //
  //   // Validar que el inputType sea numérico (18 = numberPassword, 2 = number)
  //   let tipoInput = await campoPassword.getAttribute('input-type'); // WebdriverIO usa kebab-case
  //   if (!tipoInput) {
  //     tipoInput = await campoPassword.getAttribute('inputType'); // Fallback
  //   }
  //
  //   console.log('  InputType detectado:', tipoInput);
  //
  //   // Validar que sea un tipo numérico
  //   const esTipoNumerico = tipoInput === '18' || tipoInput === '2';
  //   if (!esTipoNumerico) {
  //     throw new Error(`El campo no es numérico. InputType encontrado: ${tipoInput}`);
  //   }
  //
  //   //Limpiar campo antes de probar
  //   await campoPassword.clearValue();
  //   const valorInicial = await campoPassword.getValue();
  //   expect(valorInicial).toBe(''); // Asegurar que está vacío
  //
  //   // Probar entrada de solo números
  //   await campoPassword.setValue('123456789');
  //   const valorNumerico = await campoPassword.getValue();
  //   expect(/^\d+$/).toMatch(valorNumerico); // Solo contiene dígitos
  //
  //   //Probar filtrado de caracteres no numéricos
  //   await campoPassword.clearValue();
  //   await campoPassword.setValue('abc789xyz12'); // Intentar ingresar texto mixto
  //
  //   // Si el campo es numérico, debería quedar "78912"
  //   const valorFiltrado = await campoPassword.getValue();
  //   const soloNumeros = /^\d+$/.test(valorFiltrado);
  //
  //   if (soloNumeros) {
  //     console.log('  ✅ Filtrado correcto. Valor final:', valorFiltrado);
  //     expect(valorFiltrado).toBe('78912'); // Valor esperado después de filtrar
  //   } else {
  //     // Si no se pudo obtener valor (null en campos password), validar por longitud
  //     const longitud = await driver.execute('mobile: getLength', {
  //       elementId: await campoPassword.elementId
  //     });
  //     expect(longitud).toBeGreaterThan(0); // Algo se ingresó
  //   }
  //
  //   //Verificar teclado numérico aparece al hacer focus
  //   await campoPassword.click();
  //   const tecladoVisible = await driver.isKeyboardShown();
  //   expect(tecladoVisible).toBe(true);
  //
  //   console.log('  ✅ Test completado exitosamente');
  // });




    // it('Valido que los valores que acepta el pin son tipo password', async () => {
    //   const passwordInput = await $('id:com.juvomos.pos:id/txt_pin_user');
    //   const inputType = await passwordInput.getAttribute('inputType');
    //   // expect(['18']).toBe(inputType); 
    //
    // });

});
