import { useState } from 'react'
import API from './API/API'
import Header from './Components/Header/Header'
import Rotas from './Rotas/Rotas'
import './API/Api.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="App">
    
      <Rotas/>      
    </div>
  )
}

export default App
