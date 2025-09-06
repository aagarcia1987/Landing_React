import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

export default function App() {

  return (
    <div>
      <NavBar/>
      <h1>Holaaaassssa</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ItemListContainer/>
    </div>
  )
}
