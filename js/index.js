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
        const diferencia = cine-servicios;
        const message = document.getElementById('auxiliar');
        message.innerText = `Gana los streaming! ahorras: $${diferencia}, bienvenido pagos domicialiados`;
    }
    else {
        const diferencia = servicios-cine;
        const message = document.getElementById('auxiliar');
        message.innerText = `Gana el cine!, ahorras: $${diferencia}, prepara tu traje de astronauta para salir`;
    }
}
