import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PruebaApp from "./Prueba";
import PruebaApp2 from "./prueba2";
import PruebaApp3 from "./prueba3";



export default function BasicExample() {
  return (
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
  );
}



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
    <PruebaApp3/>
  );
}