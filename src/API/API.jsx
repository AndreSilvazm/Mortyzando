import axios, {Axios} from 'axios'
import {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Components/Header/Header'


function API(){

    const[characters, setCharacters] = useState([])
    const[counter, setCounter] = useState(1)
    const[Load, setLoad] = useState(true)
    const[seeMore, setSeeMore] = useState(false)
    const[Regredir, setRegredir] = useState(1)
   


    async function LoadAPI(){



            function VerMais(){

                if(seeMore){

                    return 90

                }
                else{

                    return 8
                }

            }






            console.log(VerMais())

            try {
                
                const b = counter
                const Url = `https://rickandmortyapi.com/api/character/?page=${b}`
                await axios.get(Url)


                .then((r)=>{

                    setCharacters(r.data.results.slice(0,VerMais()))
                    setLoad(false)
                    console.log(r.data.results.slice(0,90))

                }
                
                )
                

                .catch(r=>console.log('falha na API'))

            } catch (error) {

                alert(error)
                
            }
            

        }

    LoadAPI();

    function Limit(){

        const d = window.confirm('Você atingiu o limite de páginas. Precione "Ok" para voltar ao início, ou "Cancelar" para continuar nessa.')

        if(d){

            setCounter(1)
        }

        else{

            setCounter(42)
        }
    }



    return(

        <div className='Personagem-Section'>

            <Header/>

            <div className='All-Content'>

                { Load?<h1>Carregando...</h1> :characters.map((e)=>{

                    return(
                        
                        <div key={e.id} className='Container-content'>
                            <div className='Name'>
                                <Link to={`/Character/${e.id}`}>
                                
                                    <img src={e.image}/>
                                </Link>
                                <h1>{e.name}</h1>
                            </div>


                        </div>
                    )

                })}

            </div>

            <div className='Button-Section'>

            <button className='AvançarBTN' onClick={()=>{setCounter( counter - 1); counter < 2? setCounter(1):''; setSeeMore(false); Regredir % 2 == 0? setRegredir(Regredir + 1): setRegredir(Regredir + 0); window.scrollTo(0,0)}}>voltar</button>
                <div className='SeeMore'>


                    <button className='SeeMoreBTN' onClick={()=>{setSeeMore(()=>{

                        if(Regredir % 2 == 0){

                            return false
                        }

                        else{

                            return true
                        }

                    }); setRegredir( Regredir + 1)}}>{seeMore? 'Ver Menos':'Ver Mais'}</button>

                </div>

                <button className='VoltarBTN' onClick={()=>{setCounter( counter + 1); counter == 42?Limit():''; setSeeMore(false); Regredir % 2 == 0? setRegredir(Regredir + 1): setRegredir(Regredir + 0); window.scrollTo(0,0)}}>avançar</button>


            </div>


        </div>
    )

}

export default API;