import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

export default function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Hola usuario, bienvenido a River e-Shop"/>
    </div>
  )
}
