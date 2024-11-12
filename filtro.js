// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

const listaDeProductos = document.getElementById('lista-de-productos'); //Se cambia  el metodo getElementByName -> getElementById
const input = document.querySelector('.input'); // Se elimina el punto porque no es una clase, también modificamos en nombre de las constantes para que sean más descriptivos.

// Crear y agregar productos al div

function displayProductos(productos) {

  listaDeProductos.innerHTML = ""; //Se limpia el contenedor antes de realizar uns busqueda por filtrado

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];  //Completamos el bucle for para acceder al producto de forma individual


    const d = document.createElement("div")
    d.classList.add("producto")

    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);
    listaDeProductos.appendChild(d);
  }
}

displayProductos(productos);




const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  const texto = input.value.trim();
  const productosFiltrados = filtrado(productos, texto);

  displayProductos(productosFiltrados);

}

/*botonDeFiltro.onclick = function() {
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(li.firstChild); //Se eliminó el while del button
    
    displayProductos(productosFiltrados);
    
  }*/


const filtrado = (productos = [], texto) => {
  return productos.filter(item =>
    item.tipo.includes(texto) || item.color.includes(texto)
  )
};
