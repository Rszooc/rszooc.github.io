// Captura de número de peliculas
function peliculas (cine = 45) {
    const auxiliar = document.getElementById('pelicula');
    const value = Number(auxiliar.value) * cine;
    return value;
}
// Suma de servicios de Streaming
function sumaStreaming() {
    let seleccionados = document.getElementById("miform").streaming;
    let valores = [];
    for (let i=0; i < seleccionados.length; i++) {
        if (seleccionados[i].checked) {
            valores.push(Number(seleccionados[i].value));
            }
        }
    const acumular = (acumulador,numero) => acumulador + numero;
    const acumulado = valores.reduce(acumular,0);
    return acumulado;
}
// Función principal
function testeoJava() {
    const cine = peliculas();
    const servicios = sumaStreaming();
    document.getElementById('moviesText').style.display = 'none';
    if (cine > servicios) {
        const message = document.getElementById('auxiliar');
        message.innerText = 'Gana los streaming!, bienvenido pagos domicialiados';
        // console.log('Gana los streaming!, bienvenido pagos domicialiados');
    }
    else {
        const message = document.getElementById('auxiliar');
        message.innerText = 'Gana el cine!, prepara tu traje de astronauta para salir';
        // console.log('Gana el cine!, prepara tu traje de astronauta para salir');
    }
    // return servicios + cine;
}



// Experimentos 
/*
* Valores boletos de cine
    const costos = [56,48,50];
    function mediana(costos) {
    const suma = (total,numero) => total + numero;
    const acumulado = costos.reduce(suma,0);
    resultado = acumulado/costos.length;
    return resultado;
}
 */