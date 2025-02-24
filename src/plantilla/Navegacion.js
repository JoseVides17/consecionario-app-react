import React from 'react'
import { Link } from 'react-router-dom'

export default function Navegacion() {
  return (
    <div className='container bg-info'>
        <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Consecionario</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contactos">Contactos</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Administracion
                </a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/cotizacion">Cotizar</Link></li>
                    <li><Link className="dropdown-item" to="/ventas">Vender</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/administracion">Administrar</Link></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>            
    </div>
  )
}
