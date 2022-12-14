import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(0)
  
  
    const resCount = () => {
      setContador(contador - 1)
    }
    const sumCount = () => {
      setContador(contador + 1)
    }
  
    return(
     <div>
      <center>
        
              
        <button 
          className="btn btn-outline-success"
          onClick={resCount}> - </button>
          {contador}
        <button 
          className="btn btn-outline-success btn-lock"
          onClick={sumCount}> + </button>
          <br />
        <button 
          className="btn btn-outline-success"
          onClick={sumCount}> Agregar al carrito </button>
        
      </center>
     
        

     </div>
        
  
      
      )
  }

export default ItemCount