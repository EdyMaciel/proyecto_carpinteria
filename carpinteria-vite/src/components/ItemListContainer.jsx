import React from "react"
import TituloContainer from "./TextoCointainer"

const ItemListContainer = (props) => {
    
    return (
      <TituloContainer greeting={props.texto}/>
    )
  }

export default ItemListContainer