import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Titulo from '../Titulos'
import CartWidget from '../CartWidget'
import '../../App.css'
function Nav() {
  const [count, setCount] = useState(0)


  const [ contador, setearContador ] = useState(0)
  

  // const sumCount = () => {
  //   setearContador(contador + 1)
  // }
  // const resCount = () => {
  //   setearContador(contador - 1)
  // }


  return (

    <header className="d-flex align-items-center justify-content-center border-bottom bg-dark fixed-top ">

      <div className="container d-flex  align-items-center align-  bg-dark justify-content-center ">
          
          <div className="col-2 logo-header  ">
                  <Link to='/'><img className='img' src="../../../img/Fabrica_de_muebles_Maciel.png" width="150" height="120" alt="Carpinteria de muebles Maciel" /></Link> 
          </div>

          <div className="col-7 d-inline-block text-white ">
                  
                      <nav className="app bg-dark align-content-center"  >
                        
                        <ul className='menu'>
                          
                          <li className='lista'>
                              <NavLink className={ ( { isActive } )=> isActive ? 'btn btn-success' : 'btn btn-outline-success' } to='/Inicio'>
                              <span> <Titulo nombre={ 'Inicio' } /> </span>
                              </NavLink>
                          </li>
                          
                          
                          
                          <li className='lista'>

                            <NavLink className={ ( { isActive } )=> isActive ? 'btn btn-success' : 'btn btn-outline-success' } to='/Galeria'>
                            <span> <Titulo nombre={'Galeria'} /> </span>
                            </NavLink>
                          </li>

                          <li className='lista'>
                            <NavLink className={ ( { isActive } )=> isActive ? 'btn btn-success' : 'btn btn-outline-success' } to='/Destacado'>
                              <span> <Titulo nombre={'Destacado'} /> </span>
                            </NavLink>
                          </li>
                          <li className='lista'>
                            <NavLink className={ ( { isActive } )=> isActive ? 'btn btn-success' : 'btn btn-outline-success' } to='/Contacto'>  
                              <span> <Titulo nombre={'Contacto'} /> </span>
                            </NavLink>
                          </li>
                        
                          <li className='lista'>
                            <NavLink className={ ( { isActive } )=> isActive ? 'btn btn-success' : 'btn btn-outline-success' } to='/Nosotros'>
                              <span> <Titulo nombre={'Nosotros'} /> </span>
                            </NavLink>
                          </li>
                          
                        </ul>
                      </nav>

          </div>
             
          <div className="col-2 d-inline-block text-white ">
            <nav>
              {/* <Link to='/cart'> */}
                <ul>
                  <li className='lista text-white justify-content-center'>
                    <span>
                      <h2><CartWidget /></h2>
                      <span className="position-absolute 
                                      top-0 
                                      start-50 
                                      translate-middle 
                                      badge 
                                      rounded-pill 
                                      bg-danger"
                                      
                                      id="badgeCarrito" >{contador}</span>
                    </span>
                    
                  </li>
                </ul>
              {/* </Link> */}
              
            </nav>
          </div>
            
           

      </div>
          
{/*       
        <button 
        className="btn btn-outline-primary"
        onClick={resCount}> - </button>
        <button 
        className="btn btn-outline-primary"
        onClick={sumCount}> + </button> */}
    </header>

  )
}

export default Nav