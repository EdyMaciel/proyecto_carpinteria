import React from "react"
import TituloContainer from "../TextoCointainer"
import { gFetch } from "../helpers/gFetch"
import { useState } from "react"
import { useEffect } from "react"
import { Link, NavLink, useParams } from 'react-router-dom'
import ItemCount from "../items/itemCount"
// import ItemCount from "../items/itemCount"








const ItemListContainer = (props) => {
    
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoriaId } = useParams()
  const { menuId } = useParams
  
  useEffect(()=>{

    if(categoriaId){

      gFetch()
      .then( resp => setProducts(resp.filter(product => product.categoria === categoriaId)) )
      .catch(err => console.log(err) )
      .finally(()=> setLoading(false))

    }else{
    
      gFetch()
      .then( resp => setProducts(resp) )
      .catch(err => console.log(err) )
      .finally(()=> setLoading(false))
    }

   

  }, [categoriaId])

  console.log(categoriaId)
  console.log(menuId)
  
 

    return (

      <>
      <div className="center-block"  
          style={{paddingTop: 150,
                  paddingLeft: 50
                  }} >

        <TituloContainer greeting={props.texto}/>
          <div className="d-flex" style={{justifyContent: "center"}}>
            <NavLink className={ ( { isActive } )=> isActive ? ' btn btn-info btn-block' : 'btn  ' } to='/Destacado/BAÑO'>
            <button className="btn btn-info ">
              BAÑO
            </button>
            </NavLink>
          
            <NavLink className={ ( { isActive } )=> isActive ? ' btn btn-info btn-block' : 'btn ' } to='/Destacado/COCINA'>
            <button className="btn btn-info ">
              COCINA
            </button>
            </NavLink>

            <NavLink className={ ( { isActive } )=> isActive ? ' btn btn-info btn-block' : 'btn ' } to='/Destacado/HABITACION'>
            <button className="btn btn-info ">
              HABITACION
            </button>
            </NavLink>
          </div>

      { loading ? <h2 style={{color: "white",
                              margin: "0 0 auto"}}>Cargando productos ...</h2> : 


        
      products.map(product => 
                              <div 
                                  style={{margin: "auto"}}
                                  className='col-md-5'
                                  key={product.id}
                              
                              >
                                  <div className="card w-100 mt-5"
                                      >
                                    <div className="card-header d-flex"
                                          style={{justifyContent:"center"}}>
                                        {`${product.name} - ${product.categoria}`}
                                    </div>
                                    <div className="card-body d-flex"
                                          style={{justifyContent:"space-between", alignItems:"center"}}>
                                        <img src={product.foto} alt="" className="w-50" />
                                        {product.price}
                                    </div>
                                    <div className="card-footer d-flex"
                                          style={{justifyContent:"space-between", alignItems:"center"}}>
                                      <Link to={`/detail/${product.id}`}>
                                        <button className="btn btn-outline-success btn-block">
                                          Detalle del producto
                                        </button>
                                      </Link>
                                        

                                        <ItemCount />
                                    </div>


                                  </div>



                              </div>
      
      
      
      
      
      
      )}
    
      <br />  
      
        
    
      </div>

      
      </>
    )
      
  }

export default ItemListContainer