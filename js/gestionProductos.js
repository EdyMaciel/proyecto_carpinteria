class GestionarProductos {

    iniciar() {

        //Arreglo de productos
        productos = [

            {
                "id": 1,
                "nombre": "Bajo Mesada",
                "descripcion": "Mesada en madera finger, colores a eleccion.",
                "precio": 37000,
                "stock": 50,
                "img": "mesada.jpeg",
                "destacado": 1
            },
            {
                "id": 2,
                "nombre": "Bacha de baño",
                "descripcion": "Bacha de baño colgante",
                "precio": 10500,
                "stock": 5,
                "img": "bacha_de_banio.jpeg",
                "destacado": 1
            },

            {
                "id": 3,
                "nombre": "Placard grande",
                "descripcion": "Placard 8 puertas y 2 cajones, color a eleccion",
                "precio": 35000,
                "stock": 50,
                "img": "placard3.jpeg",
                "destacado": 1
            },

            {
                "id": 4,
                "nombre": "cocina",
                "descripcion": "Cocina a medida, color a eleccion, con tubo de luz bajo alacena",
                "precio": 50000,
                "stock": 50,
                "img": "cocina.jpeg",
                "destacado": 1
            }

        ]
        let productosDestacados = productos.filter( prod => prod.destacado == 1 );

        this.cargarProductos( productosDestacados );

    }

    cargarProductos( productos ) { 
        
        const divProductos    = document.querySelector('#productos');
        divProductos.innerHTML = '';

        if( productos.length === 0 ) {

            this.mostrarHeader('No se han encontrado productos para su búsqueda');
            return false;
        } 
        else {          

            productos.forEach( (producto) => {

                let prod = document.createElement('div');
                prod.classList.add('bg-gray', 'border', 'rounded', 'mt-3', 'd-flex', 'p-3',  );
                prod.setAttribute('id', 'row_'+producto.id);    
            
        
                prod.innerHTML = `      <div class="d-flex">
                                            <img src="../imagenes/${producto.img}" alt="" width="300" height="200" >
                                        </div>

                                        <div class=" d-flex flex-column ">
                                            <h4>${producto.nombre}</h4>                                            
                                            <p class"parraf_producto">${producto.descripcion.substring(0,120)}</p>
                                        </div>

                                        <div class="d-flex align-items-center justify-content-center flex-column ">
                                            <h4>Precio:</h4>    
                                            <p class="precio">$${producto.precio}</p>
                                            
                                        </div>`;


                                        
                divProductos.appendChild( prod );

            } )    
        }
    }


}