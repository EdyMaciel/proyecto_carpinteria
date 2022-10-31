class GestionarProductos {

    iniciar() {

        //Arreglo de productos
        productos = [

            {
                "id": 1,
                "nombre": "Mesada",
                "descripcion": "cosas de mesada",
                "precio": 8858,
                "stock": 50,
                "img": "mesada.jpeg",
                "destacado": 1
            },
            {
                "id": 2,
                "nombre": "Bacha de baño",
                "descripcion": "cosas de la bacha",
                "precio": 10907,
                "stock": 5,
                "img": "bacha_de_banio.jpeg",
                "destacado": 1
            },

            {
                "id": 3,
                "nombre": "Placard grande",
                "descripcion": "cosas de placard grande",
                "precio": 8858,
                "stock": 50,
                "img": "placard3.jpeg",
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