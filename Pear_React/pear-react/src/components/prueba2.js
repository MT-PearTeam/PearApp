import React, { Component, useEffect } from 'react';
import { useState } from "react";
import Objetos from "./objetos";
import { Fragment } from 'react';
import '../styles/objetos.css';
import pear from '../assets/pear-icon.png';




export default function PruebaApp2() {

    const [cuerpo, setCuerpo] = useState([]);



    return(
        <Fragment>
        <section className='Fondo1'>
            <div className='LateralIzquierdo2'>
            <span className='objTitulo'><img className='Logo' src={pear} alt={pear}/>PearTeam</span>
            </div>
            <div className='Head'>
            <span className='objTitulo'>Titulo</span>
            </div>
        </section>
        <section className='Fondo2'>
            <div className='HeadMain'>
            <div className='objContenedor'>
        <div className='objTitulos2'>
            <span>Vista Administrador</span>
        </div>
        <br></br>
        <div className='objVistas'>
            
            <span>Nombre del producto</span>
            <span>Precio</span>
            <span>Descripción</span>
        </div>
        <br></br>
            <div className='cuerpoContenedor'>
            
                {
                    //map es similar a un ciclo for, que se itera automáticamente con los items que tiene
                    cuerpo.map(item =>(
                        //<div>{item.id}</div>
                        
                        <Objetos
                        //el key controla el identificador, por si algún dato se repite
                        key={item.id}
                        item={item}
                        />
                                              
                    ))
                }
                
            </div>
               
        </div>
        </div>
        </section>
        <section className='Fondo3'>
            <div className='Footer'>
            <span className='objTitulo'>MinTic 2022 UdeA</span><br/>
            <span className='objTitulo'>PearTeam</span>
            </div>
        </section>
        </Fragment>
    )
}