📊 INFORME CONSOLIDADO DE PRUEBAS AUTOMATIZADAS QA POS
Período de ejecución: 04-02-2026 al 10-02-2026
Total de pruebas ejecutadas: 12
Estado general: TODAS PASSED ✅
📋 PRUEBAS EJECUTADAS (ordenadas por fecha)
1. QAPOS87 — 04-02-2026 ✅ PASSED

    Nombre del Flujo: Check con recall y nueva asignación de mesa
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Crear un check con 6 productos
        Asignar una mesa
        Hacer 'Recall' y cambiar la mesa asignada
        Proceder con el pago en efectivo
    Resultados: Se ejecutó sin dificultad
    Observaciones: Persiste problema del correo reportado en QAPOS63
    Hallazgo adicional: Al agregar más de un mismo producto, estos no se agrupan en la cuenta
    Recomendación: Agrupar productos idénticos en el check

2. QAPOS53 — 05-02-2026 ✅ PASSED

    Nombre del Flujo: Check con Tax Exempt
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Crear un check
        Agregar un producto
        Marcar 'Tax Exempt'
        Finalizar el check
        Proceder con el pago en efectivo
    Resultados: Se ejecutó sin dificultad. Se comprobó que no se aplica impuesto y el pago se registra correctamente

3. QAPOS74 — 05-02-2026 ✅ PASSED

    Nombre del Flujo: Check con múltiples comentarios a cocina
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Crear un check
        Agregar 6 productos
        Agregar comentarios de cocina en 4 productos
        Enviar a cocina
        Proceder con el pago en efectivo
    Resultados: Se ejecutó sin dificultad. Se comprobó que los comentarios son visibles en cocina y el pago se registra

4. QAPOS80 — 05-02-2026 ✅ PASSED

    Nombre del Flujo: Check con Tab y comentarios en cuenta
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Crear un check
        Agregar 4 productos
        Escribir un comentario en 'Tab'
        Proceder con el pago en efectivo
    Resultados: Se ejecutó sin dificultad

5. QAPOS84 — 05-02-2026 ✅ PASSED

    Nombre del Flujo: Check con Fire y Tax Exempt en productos distintos
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Crear un check con 6 productos
        Aplicar 'Fire' a los 3 primeros productos
        Aplicar 'Tax Exempt' a los otros 3
        Proceder con el pago en efectivo
    Verificación adicional: Se comprobó que el impuesto no se aplica a productos exentos y los Fire se envían correctamente
    Resultados: Se ejecutó sin dificultad, aunque persiste problema del correo reportado en QAPOS63
    Recomendación (Crítica UX/UI): Se detectó problema de navegabilidad al acceder a listado de cuentas cerradas (ya pagadas). Una vez que se accede a ajustar datos del pago, no hay opción de cancelar la acción o regresar al check. Esto constituye defecto crítico de usabilidad

6. QAPOS75 — 06-02-2026 ✅ PASSED

    Nombre del Flujo: Check con Tax Exempt y productos combinados
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Crear un check
        Agregar 5 productos con precios variables
        Aplicar 'Tax Exempt'
        Proceder con el pago en efectivo
    Resultados: Se ejecutó sin dificultad. El impuesto no se aplica y el pago se completa correctamente

7. QAPOS78 — 06-02-2026 ✅ PASSED

    Nombre del Flujo: Check con múltiples Guess y transferencias de mesas
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Crear un check
        Asignar una mesa con 6 Guess
        Transferir el check a otra mesa
        Modificar un producto
        Proceder con el pago en efectivo
    Resultados: Se ejecutó sin dificultad. La transferencia de mesa y el pago se registran correctamente

8. QAPOS07 — 09-02-2026 ✅ PASSED

    Nombre del Flujo: Nombre Cliente | Split
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Crear una cuenta y asignar un cliente
        Con el cliente asignado ir a la pantalla de Split
        Dividir en 3 cuentas y aceptar
        En el POS presionar botón opciones de cheques y verificar cada cheque
    Resultados: Se ejecutó sin dificultad. Cada cheque tiene la opción de poder seleccionar un cliente diferente

9. QAPOS17 — 09-02-2026 ✅ PASSED

    Nombre del Flujo: Crear nuevo check split de orden enviada
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Agregar 3 items al check
        Crear 2 checks split
        Agregar 2 items a un check y el otro en un solo check
        Click send
        Recall y pagar el check con un solo item
        Crear nuevo split de 2 checks con el check restante
        Pagar uno de los checks
    Resultados: Se ejecutó sin dificultad. Se espera a que el usuario ejecute una acción con el check restante

10. QAPOS76 — 09-02-2026 ✅ PASSED

    Nombre del Flujo: Check con múltiples Split y Recall
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Crear un check con 8 productos
        Aplicar 'Split' en 3 cuentas distintas
        Enviar productos a cocina
        Hacer 'Recall' y modificar el check
        Proceder con el pago en efectivo
    Resultados: Se ejecutó sin dificultad. Se permite modificar el check después del Recall y el pago se procesa correctamente

11. QAPOS56 — 10-02-2026 ✅ PASSED

    Nombre del Flujo: Check con Split en productos diferentes
    Tipo: Prueba funcional / Usabilidad
    Flujo probado:
        Crear un check
        Agregar 4 productos
        Dividir la cuenta por productos específicos
        Pagar cada parte con efectivo
    Resultados: Se ejecutó sin dificultad. El Split se realiza correctamente y se registra el pago

📈 RESUMEN EJECUTIVO
Estadísticas generales:

    Total de pruebas: 12
    Aprobadas (PASSED): 12 (100%)
    Fallidas (FAILED): 0
    Pruebas con observaciones: 3

Funcionalidades probadas:

    Gestión de checks (creación, modificación, pago)
    Split de cuentas (división en múltiples cuentas)
    Tax Exempt (exención de impuestos)
    Fire (envío prioritario a cocina)
    Recall (recuperación de órdenes enviadas)
    Asignación y transferencia de mesas
    Comentarios a cocina
    Manejo de Tabs
    Asignación de clientes

⚠️ PROBLEMAS IDENTIFICADOS Y RECOMENDACIONES
Problemas recurrentes:

    Problema de correo (QAPOS63): Persiste en múltiples pruebas (QAPOS84, QAPOS87)
        Requiere atención y seguimiento
    Agrupación de productos: Productos idénticos no se agrupan automáticamente al agregarlos múltiples veces al check
    Defecto crítico UX/UI (QAPOS84):
        En listado de cuentas cerradas, al acceder a ajustar datos de pago no existe opción para cancelar o regresar
        Impacto: Alta fricción en usabilidad
        Se recomienda agregar botón de cancelar/volver

✅ CONCLUSIÓN
El sistema POS demostró estabilidad en las funcionalidades principales durante el período de pruebas. Todas las pruebas automatizadas fueron exitosas. Se recomienda priorizar la corrección del defecto de navegabilidad identificado en QAPOS84 y el problema persistente de correo reportado en QAPOS63.
