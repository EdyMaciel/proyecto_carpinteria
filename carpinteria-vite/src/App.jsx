import { useState } from 'react'
import './App.css'
import Nav from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <>
  <Nav />
  <ItemListContainer texto="Hola Mundo" />
  </>
  )
}

export default App
