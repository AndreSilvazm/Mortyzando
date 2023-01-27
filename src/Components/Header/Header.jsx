import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'


function Header() {
    return (
        <div className='Header-Section'>
            <div class="">
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">

                    <Link to='/' className='nav-link'>
                        <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Home</a></li>
                    </Link>
                    

                    <Link to='/About' className='nav-link'>
                    
                        <li class="nav-item"><a href="#" class="nav-link">Sobre o site</a></li>
                    </Link>


                </ul>
                </header>
            </div>          
        </div>
    );
}

export default Header;