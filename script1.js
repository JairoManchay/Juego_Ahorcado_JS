// Declarando la funcion replaceAt
String.prototype.replaceAt = function (index, character) {
    return this.substring(0, index) + character + this.substring(index + character.length);
}

// Arreglo de datos
const arregloDatos = [
    "hacha",
    "lanza",
    "latigo",
    "arco",
    "escudo",
    "armadura",
    "caballo",
    "flecha",
    "espada",
    "mazo"
];
// Arreglos de datos al azar
let datosAzar = arregloDatos[Math.floor(Math.random() * arregloDatos.length)];
let reemplazarDatos = datosAzar.replace(/./g, "_ ");


// booleanos para seguir la img
let hasFallado = true;

// contador para el numero de intentos
let contador = 0;

// Obteniendo la palabra al azar, al hacer click en Obtener otra palabra
document.getElementById("refrescar").addEventListener('click', () => {
    // obteniendo datos
    datosAzar = arregloDatos[Math.floor(Math.random() * arregloDatos.length)];
    // const reemplazar cadena por underscore
    reemplazarDatos = datosAzar.replace(/./g, "_ ");
    document.getElementById("palabra_a_adivinar").innerHTML = reemplazarDatos;
})


// te muestra la letra con guiones bajo en la pantalla, más un alert que demuestra la palabra
document.getElementById("jugar").addEventListener('click', () => {

    reemplazarDatos = datosAzar.replace(/./g, "_ ");
    document.getElementById("palabra_a_adivinar").innerHTML = reemplazarDatos;
    alert("para fines de ver funcionamiento, la palabra es: " + datosAzar);
    document.getElementById('contenedor2').style.display = 'flex';
})


// dandole la funcion al boton ingresar
document.querySelector("#ingresar").addEventListener('click', () => {
    const letra = document.getElementById('letra').value;
    let hasFallado = true;

    for (const i in datosAzar) {
        if (letra == datosAzar[i]) {
            reemplazarDatos = reemplazarDatos.replaceAt(i * 2, letra);
            hasFallado = false;
        }
    }

    if (hasFallado) {
        contador++;
        document.getElementById('ahorcado').src = 'imgs/' + contador + '.jpg';
        if (contador == 4) {
            document.getElementById('perdedor').style.display = 'flex';
        }
        if (contador == 1) {
            document.getElementById('refrescar').style.display = 'flex';
        }
    } else {
        if (reemplazarDatos.indexOf('_') < 0) {
            document.getElementById('ganador').style.display = 'flex';
        }
    }


    document.getElementById("palabra_a_adivinar").innerHTML = reemplazarDatos;
    document.getElementById('letra').value = '';
    document.getElementById('letra').focus();
})

// dadonle funcion para el botón reiniciar si pierdes
let refresh = document.getElementById('reset');
refresh.addEventListener('click', _ => {
    location.reload();
})

// dadonle funcion para el botón reiniciar si ganas
let refresh2 = document.getElementById('reset2');
refresh2.addEventListener('click', _ => {
    location.reload();
})
