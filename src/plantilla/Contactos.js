import React from 'react'
import consecionario from '../img/consecionario.jpg'
import facebook from '../img/facebook.png'
import github from '../img/github.png'
import instagram from '../img/instagram.png'
import telefono from '../img/llamada-telefonica.png'

export default function Contactos() {
  return (
    <div className='container bg-info text-center' style={{marginTop: "30px"}}>
        <div className="card" style={{width: "36rem", marginLeft: "340px", marginTop: "10px"}}>
          <img src={consecionario} className="card-img-top" alt="..." style={{width: "35.9rem"}}/>
          <div className="card-body">
            <h1 className="card-title">Consecionario</h1>
            <img src={telefono} className="card-img-top" alt="..." style={{width: "30px"}}/>
            <h3 className="card-text">3008861227</h3>
            <img src={instagram} className="card-img-top" alt="..." style={{width: "30px"}}/>
            <h3 className="card-text">@el_vides17</h3>
            <img src={facebook} className="card-img-top" alt="..." style={{width: "35px"}}/>
            <h3 className="card-text">@jose.videsbaron</h3>
            <img src={github} className="card-img-top" alt="..." style={{width: "30px"}}/>
            <h3 className="card-text">JoseVides17</h3>
          </div>
        </div>
    </div>
  )
}
