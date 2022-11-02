import React, { Component, useEffect } from 'react';
import { useState } from "react";
import Objetos from "./objetos";
import { Fragment } from 'react';
import '../styles/objetos.css';
import pear from '../assets/pear-icon.png';




export default function PruebaApp3() {


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
        
            <table>
            
                <tr>
                    <th>Fecha</th>
                    <th>idVenta</th>
                    <th>Valor</th>
                </tr>
              
                <tr>
                    <td>aaaaaaaa</td>
                    <td>20000</td>
                    <td>aaaaaaaa</td>
                </tr>
                <tr>
                    <td>aaaaaaaa</td>
                    <td>20000</td>
                    <td>aaaaaaaa</td>
                </tr>
                <tr>
                    <td>aaaaaaaa</td>
                    <td>20000</td>
                    <td>aaaaaaaa</td>
                </tr>
                <tr>
                    <td>aaaaaaaa</td>
                    <td>20000</td>
                    <td>aaaaaaaa</td>
                </tr>                     
            </table>    
            
        <br></br>
            <div className='cuerpoContenedor'>
                
            </div>
               
        </div>
        </div>
        </section>
        <section className='Fondo3'>
            <div className='Footer'>
            <span className='objTitulo'>Titulo</span><br/>
            <span className='objTitulo'>PearTeam</span>
            </div>
        </section>
        </Fragment>
    )
}