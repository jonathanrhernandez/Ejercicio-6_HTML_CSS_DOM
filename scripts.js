//Obtengo el vendedor

let vendedor = document.getElementById("vendedor");

//Obtengo los checkbox para saber si están o no seleccionados
let aqua = document.getElementById("Aqua");
let emocion = document.getElementById("Emoción");
let alegria = document.getElementById("Alegria");
let frescura = document.getElementById("Frescura");

//Obtengo la cantidad vendida de cada producto
let cantidadAqua = document.getElementById("cantidadAqua");
let cantidadEmocion = document.getElementById("cantidadEmocion");
let cantidadAlegria = document.getElementById("cantidadAlegria");
let cantidadFrescura = document.getElementById("cantidadFrescura");

//accedo al boton para guardar los valores capturados de las ventas

let guardar = document.getElementById("guardar");

let montoAqua = 0;
let montoEmocion = 0;
let montoAlegria = 0;
let montoFrecura = 0;

let baseDeDatos = {};
let registro = {};
let x = 1;

let contenedor = document.getElementById("contenedor");

//Función para guardar los datos de las ventas
function save() {    
  if(vendedor.value != "Vendedor"){
  if (aqua.checked && Number(cantidadAqua.value) > 0) {
    montoAqua = Number(cantidadAqua.value) * 200;
    registro["Aqua"] = {
      cantidad: Number(cantidadAqua.value),
      montoVendido: montoAqua,
    };
  }
  if (emocion.checked && Number(cantidadEmocion.value) > 0) {
    montoEmocion = 180 * Number(cantidadEmocion.value);
    registro["Emocion"] = {
      cantidad: Number(cantidadEmocion.value),
      montoVendido: montoEmocion,
    };
  }
  if (alegria.checked && Number(cantidadAlegria.value) > 0) {
    montoAlegria = 160 * Number(cantidadAlegria.value);
    registro["Alegria"] = {
      cantidad: Number(cantidadAlegria.value),
      montoVendido: montoAlegria,
    };
  }
  if (frescura.checked && Number(cantidadFrescura.value) > 0) {
    montoFrecura = 150 * Number(cantidadFrescura.value);
    registro["Frescura"] = {
      cantidad: Number(cantidadFrescura.value),
      montoVendido: montoFrecura,
    };
  }
  baseDeDatos[vendedor.value] = registro;
  registro = {};
  console.log(baseDeDatos);
  alert("Datos guardados correctamente, si deseas guardar o modificar algún dato puedes hacerlo, en caso contrario, da click en ver empleado del mes para ver resultados");
}
else{
  alert("Debes seleccionar un vendedor");
}
}

guardar.addEventListener("click", function () {
  save();
});

function resultados(){
  // debugger;
  contenedor.innerText = "";
let listaVendedores = document.createElement('ul');

for (let vendedor in baseDeDatos) {

  let totalVendido = 0;
  // Crear un elemento li (elemento de lista) para el vendedor
  let itemVendedor = document.createElement('li');
  
  // Crear un nodo de texto con el nombre del vendedor
  let textoVendedor = document.createTextNode(vendedor);
  
  // Añadir el nodo de texto al elemento li
  itemVendedor.appendChild(textoVendedor);
  
  // Crear un elemento ul (lista desordenada) para los productos vendidos por el vendedor
  let listaProductos = document.createElement('ul');
  
  // Iterar sobre las propiedades del objeto interno del vendedor (los productos)
  for (let producto in baseDeDatos[vendedor]) {

    totalVendido += baseDeDatos[vendedor][producto].montoVendido;

    // Crear un elemento li (elemento de lista) para el producto
    let itemProducto = document.createElement('li');
    
    // Crear un nodo de texto con el nombre del producto y sus detalles
    let textoProducto = document.createTextNode(producto + ': cantidad - ' + baseDeDatos[vendedor][producto].cantidad + ', montoVendido - ' + baseDeDatos[vendedor][producto].montoVendido);
    
    // Añadir el nodo de texto al elemento li
    itemProducto.appendChild(textoProducto);
    
    // Añadir el elemento li a la lista de productos
    listaProductos.appendChild(itemProducto);
  }
  montosTotales[vendedor] = totalVendido;
  // Añadir la lista de productos al elemento del vendedor
  itemVendedor.appendChild(listaProductos);
  
  // Añadir el elemento del vendedor a la lista de vendedores
  listaVendedores.appendChild(itemVendedor);
}

// Añadir la lista de vendedores al contenedor en el documento HTML
contenedor.appendChild(listaVendedores);

let vendedorMasVendio = '';
let montoMasAlto = 0;

for (let vendedor in montosTotales) {
  if (montosTotales[vendedor] > montoMasAlto) {
    montoMasAlto = montosTotales[vendedor];
    vendedorMasVendio = vendedor;
  }
}

contenedor.innerHTML += "<p>El vendedor que ha vendido más es: " + vendedorMasVendio + "</p>";
contenedor.innerHTML += "<p>Monto total vendido por " + vendedorMasVendio + ": " + montoMasAlto + "</p>";
}

let ver = document.getElementById("ver");

let montosTotales = {};

ver.addEventListener("click", function(){
  resultados();
})







