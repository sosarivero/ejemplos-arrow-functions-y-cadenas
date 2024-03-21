// Las tres funciones son exactamente iguales, pero con sintaxis distinta. Para ejemplificar lo que son las arrow functions, y el encadenar funciones.

function ropaAccesoriosComprables(articulos, presupuesto) {
  // Primero filtra todos los artículos en función de si sus precios son menores al presupuesto
  const comprables = articulos.filter(function (articulo) {
    return articulo.precio < presupuesto;
  });
  
  // Filtra el resultado anterior, esta vez según si su categoría es 'Ropa' o 'Accesorios'
  const ropaAccesorios = comprables.filter(function (articulo) {
    return articulo.categoria === "Ropa" || articulo.categoria === "Accesorios";
  });

  // Ahora el resultado anterior según sus fechas
  const ordenadosPorFecha = ropaAccesorios.sort(function (a, b) {
    return a.fecha - b.fecha;
  });

  return ordenadosPorFecha;
}

// Misma función, pero usando arrow functions dentro de los filters y el sort. (=>)

function conFlechas(articulos, presupuesto) {
  // Primero filtra todos los artículos en función de si sus precios son menores al presupuesto
  const comprables = articulos.filter((articulo) => articulo.precio < presupuesto);

  // Filtra el resultado anterior, esta vez según si su categoría es 'Ropa' o 'Accesorios'
  const ropaAccesorios = comprables.filter((articulo) => articulo.categoria === "Ropa" || articulo.categoria === "Accesorios");

  // Ahora el resultado anterior según sus fechas
  const ordenadosPorFecha = ropaAccesorios.sort((a, b) => a.fecha - b.fecha);

  return ordenadosPorFecha;
}

// Misma función, pero todo es en una sola línea, encadenando funciones así: array.filter().filter().sort()
// Hay formas de ponerlo en varios líneas para que sea más legible, pero lo dejo en una sola para que el ejemplo sea más visual.
function unaSolaCadenaConFlechas(articulos, presupuesto) {
  return articulos.filter((articulo) => articulo.precio < presupuesto).filter((articulo) => articulo.categoria === "Ropa" || articulo.categoria === "Accesorios").sort((a, b) => a.fecha - b.fecha);
}


// El array de artículos
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