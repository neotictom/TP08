function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    const edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    return edad;
}

const nombre = prompt("Ingresa tu nombre:");
const fechaNac = prompt("Ingresa tu fecha de nacimiento (YYYY-MM-DD):");
const edad = calcularEdad(fechaNac);

const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = "Hola ${nombre}, tienes ${edad} años!"

const frutas = ["manzana", "pera", "uva", "naranja", "frutilla", "banana"];

const frutaUsuario = prompt("Ingresa una fruta:");
if (frutas.includes(frutaUsuario.toLowerCase())) {
    console.log(`Sí, tenemos ${frutaUsuario}!`);
} else {
    console.log(`No, no tenemos ${frutaUsuario}!`);
}

console.log("el numero es:"+ 10 == '10');
console.log("el numero es:"+ 10 === '10'); //el triple = da un resultado mas exacto en comparacion con las otras
console.log("el numero 10.6 es de tipo"+ typeof 10.6); // 'number'
console.log(true == 1); 

const ciudad = {
    nombre: "Buenos Aires",
    fechaFundacion: "25 de mayo de 1580",
    poblacion: 2890151,
    extension: 203.3, 
};

for (const clave in ciudad) {
    const valor = ciudad[clave];
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}

function doblarNumeros(numeros) {
    return numeros.map(numero => numero * 2);
}

const numerosOriginales = [1, 2, 3, 4, 5];
const numerosDoblados = doblarNumeros(numerosOriginales);
console.log(numerosDoblados);

function dibujarTrianguloAltura(base) {
    for (let i = 1; i <= base; i++) {
        const espacios = ' '.repeat(base - i);
        const asteriscos = '*'.repeat(i * 2 - 1);
        console.log(espacios + asteriscos);
    }
}

dibujarTrianguloAltura(5);

const nombres = prompt("Ingresa una lista de nombres separados por coma:").split(',');
const nombresConA = nombres.filter(nombre => nombre.trim().toLowerCase().startsWith('a'));
console.log(nombresConA);

const texto = prompt("Ingresa una cadena de texto:");
const palabraBuscar = prompt("Ingresa la palabra que deseas reemplazar:");
const palabraReemplazo = prompt("Ingresa la palabra de reemplazo:");
const textoResultado = texto.replace(new RegExp(palabraBuscar, 'gi'), palabraReemplazo);
console.log(textoResultado);

const textoOriginal = prompt("Ingresa una cadena de texto:");
const numeroCaracteres = parseInt(prompt("Ingresa un número para cortar el texto:"));
const textoCortado = textoOriginal.slice(0, numeroCaracteres);
console.log(textoCortado);

const elementos = prompt("Ingresa una lista de elementos separados por coma:").split(',');
const resultadoString = elementos.join(' - ');
console.log(resultadoString);

const pedidos = prompt("Ingresa una lista de objetos pedidos junto con sus totales, separados por coma (nombre:total):");
const listaPedidos = pedidos.split(',');
let totalRecaudacion = 0;

for (const pedido of listaPedidos) {
    const [nombre, total] = pedido.split(':');
    totalRecaudacion += parseFloat(total);
}

console.log(`La recaudación total es: ${totalRecaudacion.toFixed(2)}`);

