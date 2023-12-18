import React from 'react'

export default function Administracion() {
  return (
    <div className='container' style={{ width: '30%', height: '30%'}}>
      <div className='container text-center' style={{marginTop: '70px'}}>
        <h3>
          Adiministracion
        </h3>
      </div>
      <div className='container'>
        <div className='row'>
          <a href='/agregar-carro' className='btn btn-primary' style={{marginTop: "10px"}}>
              Registrar Carro
          </a>
          <a href='/agregar-cliente' className='btn btn-primary' style={{marginTop: "10px"}}>
              Registrar Cliente
          </a>
          <a href='/agregar-vendedor' className='btn btn-primary' style={{marginTop: "10px"}}>
              Registrar Vendedor
          </a>
        </div>
      </div>

      {/* <form>
        <div className="mb-3" style={{marginTop: '80px'}}>
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" name='username'/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password'/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form> */}
    </div>
  )
}
