import { useState } from 'react'
import '../../App.css'
import Titulo from '../Titulos'
import CartWidget from '../CartWidget'

function Nav() {
  const [count, setCount] = useState(0)


  return (


    <header class="d-flex align-items-center justify-content-center border-bottom bg-dark fixed-top inline">

      <div class="container d-flex  align-items-center align-  bg-dark justify-content-center ">
          
          <div className="col-2 logo-header bg-dark ">
                  <img className='img' src="../../../img/Fabrica_de_muebles_Maciel.png" width="150" height="120" alt="Carpinteria de muebles Maciel" />
          </div>

          <div className="col-7 d-inline-block text-white ">
                  
                      <nav className="app bg-dark align-content-center"  >
                        <ul className='menu'>
                          <li className='lista'>
                              
                              <span> <Titulo nombre={ 'Inicio' } /> </span>
                            
                          </li>
                          
                          <li className='lista'>
                              <span> <Titulo nombre={'Galeria'} /> </span>
                            
                          </li>
                          <li className='lista'>
                              <span> <Titulo nombre={'Destacado'} /> </span>
                            
                          </li>
                          <li className='lista'>
                              <span> <Titulo nombre={'Contacto'} /> </span>
                            
                          </li>
                        
                          <li className='lista'>
                              <span> <Titulo nombre={'Nosotros'} /> </span>
                              
                          </li>
                          
                        </ul>
                      </nav>

          </div>
             
          <div className="col-3 d-inline-block text-white ">
            <nav>
              <ul>
                <li className='lista text-white justify-content-center'>
                  <span>
                    <h2><CartWidget /></h2>
                    <span class="position-absolute 
                                     top-0 
                                     start-50 
                                     translate-middle 
                                     badge 
                                     rounded-pill 
                                     bg-danger"
                                     
                                     id="badgeCarrito" >0</span>
                  </span>
                  
                </li>
              </ul>
            </nav>
          </div>
            
           

      </div>
          
      

    </header>

  )
}

export default Nav