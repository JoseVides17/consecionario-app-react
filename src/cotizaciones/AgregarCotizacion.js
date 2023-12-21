import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AgregarCotizacion() {

    let navegacion = useNavigate();

  const urlBaseClientes = "http://localhost:8080/consecionario-app/clientes";
  const urlBaseVendedores = "http://localhost:8080/consecionario-app/vendedores";
 

  const [clientes, setClientes] = useState([]);
  const [vendedores, setVendedores] = useState([]);
  
  const [selectedCliente, setSelectedCliente] = useState('');
  const [selectedVendedor, setSelectedVendedor] = useState('');
  

  const [cotizacion, setCotizacion] = useState({
    detalles: "",
    fecha: "",
    valor: 0,
    cliente: { numeroCliente: 0 },
    vendedor: { numeroVendedor: 0 },
  })

  const { detalles, fecha, valor } = cotizacion;

  const onInputChange = (e) => {
    setCotizacion({ ...cotizacion, [e.target.name]: e.target.value })
  }

  const onClienteChange = (e) => {
    const selectedClienteId = e.target.value;
    const selectedCliente = clientes.find(cliente => cliente.numeroCliente === selectedClienteId);
    setSelectedCliente(selectedCliente);
    setCotizacion({ ...cotizacion, cliente: { numeroCliente: selectedClienteId } });
  }

  const onVendedorChange = (e) => {
    const selectedVendedorId = e.target.value;
    const selectedVendedor = vendedores.find(vendedor => vendedor.numeroVendedor === selectedVendedorId);
    setSelectedVendedor(selectedVendedor);
    setCotizacion({ ...cotizacion, vendedor: { numeroVendedor: selectedVendedorId } });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/consecionario-app/cotizaciones";
    console.log("Datos de la cotizacion a enviar:", cotizacion);
    try {
      await axios.post(urlBase, cotizacion);
      navegacion('/');
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }

  useEffect(() => {
    cargarClientes();
  }, []);
  useEffect(() => {
    cargarVendedores();
  }, []);

  const cargarClientes = async () => {
    const resultado = await axios.get(urlBaseClientes);
    console.log("Resultado Cargar Clientes");
    console.log(resultado.data);
    setClientes(resultado.data);
  }
  const cargarVendedores = async () => {
    const resultado = await axios.get(urlBaseVendedores);
    console.log("Resultado Cargar Vendedores");
    console.log(resultado.data);
    setVendedores(resultado.data);
  }
  return (
    <div className='container bg-info'>
      <div className='container text-center' style={{ margin: "30px" }}>
        <h1>Hacer cotizacion</h1>
      </div>
      <div>
        <form onSubmit={(e) => onSubmit(e)} >
        <div className="row g-3">
        <div className="col">
            <label htmlFor="detalles" className="form-label">Detalles</label>
            <textarea type="text" className="form-control" id="detalles" name='detalles' required={true}
              value={detalles} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="col">
            <label htmlFor="fecha" className="form-label">Fecha</label>
            <input type="date" className="form-control" id="fecha" name="fecha"
              value={fecha} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="col">
            <label htmlFor="valor" className="form-label">Valor</label>
            <input type="number" step="any" className="form-control" id="valor" name="valor"
              value={valor} onChange={(e) => onInputChange(e)} />
          </div>
        </div>
          <div>
            <select className="form-select" style={{ marginTop: "10px" }} aria-label="Escoja el cliente" onChange={onClienteChange} value={selectedCliente}>
              <option enabled selected>Seleccione el cliente</option>
              {
                clientes.map((cliente, indice) => (
                  <option key={indice} value={cliente.numeroCliente}>{cliente.numeroCliente} - {cliente.nombres}</option>
                ))
              }
            </select>
          </div>
          <div>
            <select className="form-select" style={{ marginTop: "10px" }} aria-label="Escoja el vendedor" onChange={onVendedorChange} value={selectedVendedor}>
              <option enabled selected>Seleccione el vendedor</option>
              {
                vendedores.map((vendedor, indice) => (
                  <option key={indice} value={vendedor.numeroVendedor}>{vendedor.numeroVendedor} - {vendedor.nombres}</option>
                ))
              }
            </select>
          </div>
          <div className='text-center' style={{ margin: "20px" }}>
            <button type="submit" className="btn btn-warning btn-sm me-3 mb-4">Agregar</button>
            <a href='/' className='btn btn-danger btn-sm mb-4'>Regresar</a>
          </div>

        </form>
      </div>
    </div>
  )
}
