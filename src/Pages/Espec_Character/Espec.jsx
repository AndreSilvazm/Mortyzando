import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import '../../Pages/Espec_Character/Espec.css'


function Espec(props) {

    const{id} = useParams()



    const[Especs, setEspecs] = useState([])
    const[Ep, setEP] = useState([])



    useEffect(()=>{






        async function LoadEspecs(){
    
    
             await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((r)=>{setEspecs(r.data); console.log(Especs.episode) })
    
        }
    

    
        LoadEspecs();
       

    }
    
    
    
    
    ,[])








    return (
        <div className='all-content'>



            <div className='Transparency'>

                    {Especs.length !=0? 

                    
                    
                
                    <div className='Especs-config'>

                        <div className='Img-Container'>

                            <img src={Especs.image} className='CharacterIMG'/>

                        </div>

                    <h1 className='Especs-name'>{Especs.name}</h1>

                    <div className='Sub-Content'>


                        <div className='Espc'>

                            <h3 className='Especs-title'>Status</h3>
                            <p className='Especs-p'>{Especs.status == 'Dead'? 'Morto' : Especs.status == 'Alive'? 'Vivo': Especs.status == 'unknown'? 'Desconhecido':''}</p>
                        </div>

                        
                        <div className='Espc'>

                            <h3 className='Especs-title'>Espécie</h3>
                            <p className='Especs-p'>{Especs.species}</p>
                        </div>

                        
                        <div className='Espc'>

                            <h3 className='Especs-title'>Genero</h3>
                            <p className='Especs-p'>{Especs.gender == 'Male' ? 'Masculino' : Especs.gender == 'Female'? 'Feminino': Especs.gender == 'unknown'? 'Desconhecido':''}</p>
                        </div>

                        
                        <div className='Espc'>
                            <h3 className='Especs-title'>Localização</h3>
                            <p className='Especs-p'>{Especs.location.name}</p>

                        </div>

                        
                        <div className='Espc'>

                            <h3 className='Especs-title'>Tipo</h3>
                            <p className='Especs-p'>{Especs.type == ''? 'Sem': Especs.type}</p>
                        </div>

                        <div className='Espc'>
                            <h3 className='Especs-title'>Origem</h3>
                            <p className='Especs-p'>{Especs.origin.name == 'unknown'? 'Desconhecido': Especs.origin.name}</p>

                        </div>

                        



                    </div>



                    

                </div>
                
                :

                'Carregando'
                
                }            
                    <div className='Footer-nav'>

                        <Link to='/'>Voltar ao Início</Link>
                        <Link to='/Personagens'>Ver todos os personagens</Link>

                    </div>
                </div>



            </div>
    );
}

export default Espec