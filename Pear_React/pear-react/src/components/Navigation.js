import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import pear from '../assets/pear-icon.png';
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                     PearApp
                    <img className='Logo' src={pear} alt={pear}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link className="nav-link" to="/">Notes</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/create">Create Note</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/user">Lista de productos</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
