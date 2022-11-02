import React from 'react';
import { Fragment } from 'react';
import '../styles/objetos.css';
import pear from '../assets/pear-icon.png';



export default function PruebaApp() {

    function Home() {
        return (
          <PruebaApp2/>
        );
      }
      
      function About() {
        return (
          <PruebaApp/>
        );
      }
      
      function Dashboard() {
        return (
          <div>
            <h2>Dashboard</h2>
          </div>
        );
      }

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
            <div className='LateralIzquierdo'>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Lista de productos</Link>
                        </li>
                        <li>
                            <Link to='/Prueba'>Modificar productos</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Lista de ventas</Link>
                        </li>
                    </ul>

                <hr />

                
                <div className='HeadMain'>
                <div className='objTitulos2'>
                    <span>Vista Administrador</span>
                    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/Prueba'>
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
                </div>
                </div>

        </section>
        <section className='Fondo3'>
            <div className='Footer'>
            <span className='objTitulo'>Titulo</span>
            </div>
        </section>
        </Fragment>
    )
}