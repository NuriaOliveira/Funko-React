import { Component } from 'react'
import './App.css'

//Components
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

class App extends Component {
  render(){
    return(
      <>
      <Navbar />
      <div>
        <ItemListContainer greeting="Hola"/>
      </div>
      </>
    )
  }
}

export default App
