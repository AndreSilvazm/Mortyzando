import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import '../Home/Home.css'
import '../../Components/Header/Header.css'
import axios from 'axios'
import {useState} from 'react'


function Home(props) {

    const[Randon, setRandon] = useState([])


    async function Randon_Character(){

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
          }
        
        

        try {
            

            await axios.get(`https://rickandmortyapi.com/api/character/${getRandomInt(0,826)}`)
            .then((r)=>{ setRandon(r.data); console.log(r.data)})
            


        } catch (error) {
            
        }

    }


    return (
        <div>


            <section className='Home-Section'>

                
           


            <div className='First-Text'>

                <h1>Rick n Mortyzando</h1>
                <p>Entre nesse mundo maluco</p>

            </div>

            </section>


            <section className='About-Page'>

                <div className='Second-Text'>

                    <h1 className='text-h1'>Sorteie o Personagem que mais se parece com você</h1>

                    {Randon.length != 0 ? 
                    
                    <div className='Especs'>

                        <Link to={`/Character/${Randon.id}`}>
                            <img src={Randon.image} className='Randon-Image' />
                        </Link>
                        <h1>{Randon.name} </h1>
                        

                    </div>

                    :

                    ''
                
                }


                </div>

                    <button onClick={Randon_Character} className='RandonBTN'>Sortear</button>
                    {Randon.length != 0? <Link to='/Personagens' className='VerTodos'>Ver todos os Personagens</Link>:''}

            </section>
            
        </div>
    );
}

export default Home;