import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  
  const ItemListContainer = () => {
    console.log("hola esto es container")
    return (
      <div >
        Greeting
      </div>
    )
  }
  
 
  return (
   <div class="container d-flex  align-items-center justify-content-center">
    <ItemListContainer />
   </div>
  )
}

export default App
