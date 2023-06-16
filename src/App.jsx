import { Component } from 'react'
import './App.css'

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Components
import Header from './components/Header/Header'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

//pages
import HomePage from './pages/HomePage/HomePage'
import CategoryPage from './pages/CategoryPage/CategoryPage'

class App extends Component {
  render(){
    return(
      <Router>
      <div >
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/category' element={<CategoryPage/>} />
      </Routes>
      </div>
      </Router>
    
    )
  }
}

export default App
