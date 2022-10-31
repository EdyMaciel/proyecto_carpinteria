
let productos     = [];

let gestor;

// Evento que se dispara cuadno se carga la pagina
document.addEventListener('DOMContentLoaded', () => {

    // Cargar el carrito con el localstorage, si no hay nada asignarle un array vacio
    carrito = JSON.parse( localStorage.getItem('carrito') ) || [];

    gestor = new GestionarProductos();
    gestor.iniciar();
})

