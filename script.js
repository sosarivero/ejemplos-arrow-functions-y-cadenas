// RECORDATORIO DE QUÉ SON CALLBACK FUNCTIONS Y ANONYMOUS FUNCTIONS:
// Las funciones que usamos como argumento dentro de otra función se llaman 'callback function'.
// Las funciones que creamos pero no asociamos a un nombre de variable son anónimas (anonymous function).
// Map, filter y sort usan funciones como argumentos (es decir, usan callback functions).
// Es común usar funciones anónimas como callback functions cuando solo vamos a usarlas dentro de ese map, filter o sort específicos.

// A continuación se muestra tres funciones. Todas hacen EXACTAMENTE lo mismo, usando filter y sort.
// En los dos primeros ejemplos la única diferencia es la forma en la que las funciones anónimas están escritas dentro de los filters y sorts. 
// El tercer ejemplo es para demostrar el cómo se encadenan funciones.

// EJEMPLO 1) Forma 'básica' de escribir funciones anónimas. Es igual a cuando escribimos una función no-anónima. El formato es:
// function (<argumento>) { <código a ejecutar> }

function ropaAccesoriosComprables(articulos, presupuesto) {
  // Primero filtra todos los artículos en función de si sus precios son menores al presupuesto.
  const comprables = articulos.filter(function (articulo) {
    return articulo.precio < presupuesto;
  });
  
  // Filtra el resultado anterior. Esta vez filtra según artículos que tengan el valor "Ropa" o "Accesorios" en su clave accesorios.
  const ropaAccesorios = comprables.filter(function (articulo) {
    return articulo.categoria === "Ropa" || articulo.categoria === "Accesorios";
  });

  // Ordena el resultado anterior según sus fechas.
  const ordenadosPorFecha = ropaAccesorios.sort(function (a, b) {
    return a.fecha - b.fecha;
  });

  return ordenadosPorFecha;
}

// EJEMPLO 2) Misma función, pero usando arrow functions para escribir funciones anónimas.
// Una arrow function no es más que una manera un poco más corta y concisa de escribirlas. Funciona exactamente igual.
// Fíjate que no hace falta ni escribir 'function' ni usar llaves "{}". Así hace que sea más fácil de leer. El formato es:
// (<argumento>) => <código a ejecutar>

function conFlechas(articulos, presupuesto) {
  // Primero filtra todos los artículos en función de si sus precios son menores al presupuesto.
  const comprables = articulos.filter((articulo) => articulo.precio < presupuesto);

  // Filtra el resultado anterior. Esta vez filtra según artículos que tengan el valor "Ropa" o "Accesorios" en su clave accesorios.
  const ropaAccesorios = comprables.filter((articulo) => articulo.categoria === "Ropa" || articulo.categoria === "Accesorios");

  // Ordena el resultado anterior según sus fechas.
  const ordenadosPorFecha = ropaAccesorios.sort((a, b) => a.fecha - b.fecha);

  return ordenadosPorFecha;
}

// EJEMPLO 3) También usa arrows, pero todo es en una sola línea, encadenando funciones así: array.filter().filter().sort()
// Si no lo entiendes no pasa nada, solo es un ejemplo demostrativo de lo que es encadenar funciones.
// Normalmente se usa con cosas más cortas para que sea fácil de leer.
// El resumen de lo que está pasando, no es más que esto: array.filter().filter().sort()

function unaSolaCadenaConFlechas(articulos, presupuesto) {
  return articulos.filter((articulo) => articulo.precio < presupuesto).filter((articulo) => articulo.categoria === "Ropa" || articulo.categoria === "Accesorios").sort((a, b) => a.fecha - b.fecha);
}


// Array de objetos. Cada objeto es un artículo con nombre, precio, fecha y categoría.
const articulos = [
  {
    nombre: "Camiseta",
    precio: 15,
    fecha: "2024",
    categoria: "Ropa"
  },
  {
    nombre: "Zapatos deportivos",
    precio: 59,
    fecha: "2022",
    categoria: "Ropa"
  },

  {
    nombre: "Bolso de cuero",
    precio: 139,
    fecha: "2023",
    categoria: "Accesorios"
  },
  {
    nombre: "Las meninas",
    precio: 229,
    fecha: "2024",
    categoria: "Cuadro"
  },
   {
    nombre: "Movil",
    precio: 299,
    fecha: "2022",
    categoria: "Tecnologia"
  }
];

// Console.logs. El resultado de todas las funciones es el mismo.
console.log(ropaAccesoriosComprables(articulos, 250));
console.log(conFlechas(articulos, 250));
console.log(unaSolaCadenaConFlechas(articulos, 250));