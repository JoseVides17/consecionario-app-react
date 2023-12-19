import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AgregarClientes() {

    let navegacion = useNavigate();

    const urlBase = "http://localhost:8080/consecionario-app/clientes";

    const [cliente, setCliente] = useState({
        cedula: 0,
        nombre: "",
        apellido: "",
        correo: "",
        telefono: 0,
        preferenciaContacto: ""
    });

    const {cedula, nombre, apellido, correo, telefono} = cliente;

    const [selectedPreferencia, setSelectedPreferencia] = useState('');

    const onInputChange = (e) =>{
        setCliente({...cliente, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        console.log("Cliente a guardar: ", cliente);
        await axios.post(urlBase, cliente);
        navegacion('/');
    }

    const onPreferenciaChange = (e) => {
        const selectedPreferencia = e.target.value;
        setSelectedPreferencia(selectedPreferencia);
        setCliente({ ...cliente, preferenciaContacto: selectedPreferencia });
      }

  return (
    <div className='container'>
        <div className='container text-center'>
            <h1>
                Agregar Cliente
            </h1>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="cedula" className="form-label">Cedula</label>
            <input type="number" step="any" className="form-control" id="cedula" name='cedula'
            value={cedula} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombres</label>
            <input type="text" className="form-control" id="nombre" name='nombre'
            value={nombre} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellidos</label>
            <input type="text" className="form-control" id="apellido" name='apellido'
            value={apellido} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="correo" className="form-label">Email</label>
            <input type="email" className="form-control" id="correo" name='correo'
            value={correo} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Telefono</label>
            <input type="number" step="any" className="form-control" id="telefono" name='telefono'
            value={telefono} onChange={(e) => onInputChange(e)}/>
        </div>
        <select className="form-select" aria-label="Seleccione una preferencia" onChange={onPreferenciaChange} value={selectedPreferencia}>
            <option selected>Preferencia de contacto</option>
            <option value="Llamada">Llamada</option>
            <option value="Correo">Correo</option>
            <option value="WathsApp">WathsApp</option>
        </select>
        <div style={{marginTop: "90px"}}>
        <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
        <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
        </div>
        </form>

    </div>
  )
}
