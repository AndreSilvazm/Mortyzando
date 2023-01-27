import React from 'react';
import './About.css'
import Header from '../../Components/Header/Header'
function About(props) {
    return (
        
        <div className='About-Container'>
            <Header/>

            <div className='Main-Container'>

                <div className='About-content'>

                    <h1>Site desenvolvido por <strong>André Simão</strong></h1>
                    <p>Site foi desenvolvido no intuito de trazer algumas informações sobre cada personagem do mundo do Rick and Morty</p>

                    <div className='Social-Medias'>

                        <a href='https://github.com/AndreSilvazm'>GitHub</a>

                    </div>
                </div>





            </div>
            
            
        </div>
    );
}

export default About;