import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import API from '../API/API';
import Home from '../Pages/Home/Home';
import Espec from '../Pages/Espec_Character/Espec';
import About from '../Pages/About/About';


function Rotas(props) {
    return (

        <Router>

            <Routes>

                <Route path='/' element={<Home/>}/>

                <Route path='/Personagens' element={<API/>}/>

                <Route path='/Character/:id' element={<Espec/>}/>

                <Route path='/About' element={<About/>}/>
            </Routes>
        </Router>
        

    );
}

export default Rotas;