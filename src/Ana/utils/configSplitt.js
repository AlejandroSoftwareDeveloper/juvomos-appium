// Configuración de reparto de productos en DividirCheck

module.exports = {
    // Número mínimo de productos que debe conservar la cuenta original
    MIN_PRODUCTOS_ORIGINAL: 2,

    // Estrategia de reparto:
    // "roundRobin" → asigna productos uno por uno en orden
    // "balancear"  → asigna siempre al que tenga menos productos
    // "prioridad"  → asigna a una cuenta específica hasta llenarla
    MODO_REPARTO: "roundRobin",

    // Índice de la primera cuenta destino (normalmente 1 para saltar la original)
    CUENTA_INICIAL: 1,

    // Límite de movimientos para evitar ciclos infinitos
    MAX_ITERACIONES: 20,

    // Condición de parada:
    // "todasIguales"   → parar cuando todas las cuentas destino tengan la misma cantidad
    // "llenarPrimera"  → parar cuando la primera cuenta destino iguale a la original
    // "minimoOriginal" → parar cuando la original llegue al mínimo definido
    CONDICION_PARADA: "todasIguales"
};
