import { useParams } from "react-router-dom"
import { gFetch } from "../helpers/gFetch"
import ItemDetail from "../items/itemDetail/itemDetail"

const ItemDetailContainer = () => {

  const {productoId} = useParams()
  console.log(productoId)

  //useEffect -> gFetch(productoId) -> un objeto



    return (
    <ItemDetail 
        // product={product}
    />
  )
}

export default ItemDetailContainer