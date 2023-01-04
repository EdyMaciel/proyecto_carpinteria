import { useState } from "react"

const ItemCount = ( { stock=5, inicial=1, onAdd } ) => {
    const [contador, setContador] = useState(1)
  
  
    const resCount = () => {if(contador > inicial) setContador(contador - 1)}

    const sumCount = () => {if (contador < stock) setContador(contador + 1)}
  
    const handleOnAdd = () => onAdd(contador)

    return(
     <div >
      <center>
        
              
        <button 
          className="btn btn-outline-success"
          onClick={resCount}> - </button>
          <p className="d-inline" id="contadorId">{contador}</p>
        <button 
          className="btn btn-outline-success btn-lock"
          onClick={sumCount}> + </button>
          <br />
        <button 
          className="btn btn-outline-success"
          onClick={ handleOnAdd }> Agregar al carrito </button>
        
      </center>
     
        

     </div>
        
  
      
      )
  }

export default ItemCount