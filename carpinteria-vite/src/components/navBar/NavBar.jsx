import { useState } from 'react'
import '../../App.css'
import Titulo from './Titulos'

function Nav() {
  const [count, setCount] = useState(0)


  return (
    <nav className="app bg-dark align-content-center" >
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
  )
}

export default Nav