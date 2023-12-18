import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function AgregarCarros() {
  let navegacion = useNavigate();

  const urlBaseMarcas = "http://localhost:8080/consecionario-app/marcas";
  const urlBaseLineas = "http://localhost:8080/consecionario-app/lineas";
  const urlBaseMotores = "http://localhost:8080/consecionario-app/motores";

  const [marcas, setMarcas] = useState([]);
  const [lineas, setLineas] = useState([]);
  const [motores, setMotores] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState('');
  const [selectedLinea, setSelectedLinea] = useState('');
  const [selectedMotor, setSelectedMotor] = useState('');
  const [carro, setCarro] = useState({
    modeloCarroceria: "",
    tipoVelocidad: "",
    precio: "",
    traccion: "",
    tecnologia: "",
    tipoDireccion: "",
    tipoSuspencion: "",
    frenoDelantero: "",
    frenoTrasero: "",
    marca: "",
    linea: "",
    motor: ""
  })

  const { modeloCarroceria, tipoVelocidad, precio, traccion, tecnologia, tipoDireccion,
    tipoSuspencion, frenoDelantero, frenoTrasero, marca, linea, motor } = carro;

  const onInputChange = (e) => {
    setCarro({ ...carro, [e.target.name]: e.target.value })
  }

  const onMarcaChange = (e) => {
    const selectedMarcaId = e.target.value;
    setSelectedMarca(selectedMarcaId);
    setCarro({ ...carro, marca: selectedMarcaId });
  }

  const onLineaChange = (e) => {
    const selectedLineaId = e.target.value;
    setSelectedLinea(selectedLineaId);
    setCarro({ ...carro, linea: selectedLineaId });
  }

  const onMotorChange = (e) => {
    const selectedMotorId = e.target.value;
    setSelectedMotor(selectedMotorId);
    setCarro({ ...carro, motor: selectedMotorId });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/consecionario-app/carros";
    await axios.post(urlBase, carro);
    navegacion('/');
  }

  useEffect(() => {
    cargarMarcas();
  }, []);
  useEffect(() => {
    cargarLineas();
  }, []);
  useEffect(() => {
    cargarMotores();
  }, []);

  const cargarMarcas = async () => {
    const resultado = await axios.get(urlBaseMarcas);
    console.log("Resultado Cargar Marcas");
    console.log(resultado.data);
    setMarcas(resultado.data);
  }
  const cargarLineas = async () => {
    const resultado = await axios.get(urlBaseLineas);
    console.log("Resultado Cargar Lineas");
    console.log(resultado.data);
    setLineas(resultado.data);
  }
  const cargarMotores = async () => {
    const resultado = await axios.get(urlBaseMotores);
    console.log("Resultado Cargar Motores");
    console.log(resultado.data);
    setMotores(resultado.data);
  }

  return (
    <div className='container' style={{ width: '30%', height: '30%'}}>
      <div className='container text-center' style={{ margin: "30px" }}>
        <h1>Agregar Carro</h1>
      </div>
      <form onSubmit={(e) => onSubmit(e)} >
        <div className="mb-3">
          <label htmlFor="carroceria" className="form-label">Carroceria</label>
          <input type="text" className="form-control" id="carroceria" name='carroceria' required={true}
            value={modeloCarroceria} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoVelocidad" className="form-label">Tipo Velocidad</label>
          <input type="text" className="form-control" id="tipoVelocidad" name='tipoVelocidad'
            value={tipoVelocidad} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="precio" className="form-label">Precio</label>
          <input type="number" step="any" className="form-control" id="precio" name="precio"
            value={precio} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="traccion" className="form-label">Traccion</label>
          <input type="text" className="form-control" id="traccion" name="traccion"
            value={traccion} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="tecnologia" className="form-label">Tecnologia</label>
          <input type="text" className="form-control" id="tecnologia" name="tecnologia"
            value={tecnologia} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoDireccion" className="form-label">Tipo Direccion</label>
          <input type="text" className="form-control" id="tipoDireccion" name="tipoDireccion"
            value={tipoDireccion} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoSuspencion" className="form-label">Tipo Suspencion</label>
          <input type="text" className="form-control" id="tipoSuspencion" name="tipoSuspencion"
            value={tipoSuspencion} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="frenoDelantero" className="form-label">Freno Delantero</label>
          <input type="text" className="form-control" id="frenoDelantero" name="frenoDelantero"
            value={frenoDelantero} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="frenoTrasero" className="form-label">Freno Trasero</label>
          <input type="text" className="form-control" id="frenoTrasero" name="frenoTrasero"
            value={frenoTrasero} onChange={(e) => onInputChange(e)} />
        </div>
        <div>
          <select className="form-select" style={{marginTop: "10px"}} aria-label="Escoja la marca del carro" onChange={onMarcaChange} value={selectedMarca}>
            <option enableb selected>Seleccione la marca</option>
            {
              marcas.map((marca) => (
                <option key={marca.idMarca} value={marca.idMarca}>{marca.idMarca} - {marca.nombre}</option>
              ))
            }
          </select>
        </div>
        <div>
          <select className="form-select" style={{marginTop: "10px"}} aria-label="Escoja la linea del carro" onChange={onLineaChange} value={selectedLinea}>
            <option enabled selected>Seleccione la Linea</option>
            {
              lineas.map((linea) => (
                <option key={linea.idLinea} value={linea.idLinea}>{linea.idLinea} - {linea.nombre}</option>
              ))
            }
          </select>
        </div>
        <div>
          <select className="form-select" style={{marginTop: "10px"}} aria-label="Escoja el motor del carro" onChange={onMotorChange} value={selectedMotor}>
            <option enableb selected>Seleccione el motor</option>
            {
              motores.map((motor) => (
                <option key={motor.idMotor} value={motor.idMotor}>{motor.idMotor} - {motor.marcaMotor}</option>
              ))
            }
          </select>
        </div>
        <div className='text-center' style={{margin: "20px"}}>
          <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
          <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
        </div>

      </form>
    </div>
  )
}
