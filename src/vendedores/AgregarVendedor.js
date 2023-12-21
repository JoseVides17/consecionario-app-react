import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AgregarVendedor() {

    let navegacion = useNavigate();

    const urlBase = "http://localhost:8080/consecionario-app/vendedores";

    const [vendedor, setVendedor] = useState({
        identificacion: 0,
        nombres: "",
        apellidos: "",
        telefono: 0,
        direccion: ""
    });

    const {identificacion, nombres, apellidos, telefono, direccion} = vendedor;

    const onInputChange = (e) =>{
        setVendedor({...vendedor, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        console.log("Vendedor a guardar: ", vendedor);
        await axios.post(urlBase, vendedor);
        navegacion('/');
    }

  return (
    <div className='container'>
        <div className='container text-center'>
            <h1>
                Agregar vendedor
            </h1>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="identificacion" className="form-label">Identificacion</label>
            <input type="number" step="any" className="form-control" id="identificacion" name='identificacion'
            value={identificacion} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="nombres" className="form-label">Nombres</label>
            <input type="text" className="form-control" id="nombres" name='nombres'
            value={nombres} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="apellidos" className="form-label">Apellidos</label>
            <input type="text" className="form-control" id="apellidos" name='apellidos'
            value={apellidos} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Telefono</label>
            <input type="number" step="any" className="form-control" id="telefono" name='telefono'
            value={telefono} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="direccion" className="form-label">Direccion</label>
            <input type="text" step="any" className="form-control" id="direccion" name='direccion'
            value={direccion} onChange={(e) => onInputChange(e)}/>
        </div>
        <div style={{marginTop: "90px"}}>
        <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
        <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
        </div>
        </form>

    </div>
  )
}
