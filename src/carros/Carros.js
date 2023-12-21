import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
export default function Carros() {
  let navegacion = useNavigate();

  const urlBaseMarcas = "http://localhost:8080/consecionario-app/marcas";
  const urlBaseLineas = "http://localhost:8080/consecionario-app/lineas";
  const urlBaseMotores = "http://localhost:8080/consecionario-app/motores";
  const urlBase = "http://localhost:8080/consecionario-app/carros";

  const {id} = useParams();

  const [marcas, setMarcas] = useState([]);
  const [lineas, setLineas] = useState([]);
  const [motores, setMotores] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState('');
  const [selectedLinea, setSelectedLinea] = useState('');
  const [selectedMotor, setSelectedMotor] = useState('');

  const [carro, setCarro] = useState({
    modeloCarroceria: "",
    tecnologia: "",
    precio: 0,
    frenoDelantero: "",
    frenoTrasero: "",
    tipoDireccion: "",
    tipoSuspencion: "",
    tipoVelocidad: "",
    traccion: "",
    marca:{idMarca: 0},
    linea:{idLinea: 0},
    motor:{idMotor: 0}
  })

  const { modeloCarroceria, tecnologia, precio, frenoDelantero, frenoTrasero,tipoDireccion,
    tipoSuspencion, tipoVelocidad, traccion} = carro;

    useEffect(()=>{
        cargarCarros();
    }, [])

    const cargarCarros = async ()=>{
        const resultado = await axios.get(`${urlBase}/${id}`);
        setCarro(resultado.data);
    }

  const onInputChange = (e) => {
    setCarro({ ...carro, [e.target.name]: e.target.value })
  }

  const onMarcaChange = (e) => {
    const selectedMarcaId = e.target.value;
    const selectedMarca = marcas.find(marca => marca.idMarca === selectedMarcaId);
    setSelectedMarca(selectedMarca);
    setCarro({ ...carro, marca: { idMarca: selectedMarcaId } });
  }
  
  const onLineaChange = (e) => {
    const selectedLineaId = e.target.value;
    const selectedLinea = lineas.find(linea => linea.idLinea === selectedLineaId);
    setSelectedLinea(selectedLinea);
    setCarro({ ...carro, linea: { idLinea: selectedLineaId } });
  }
  
  const onMotorChange = (e) => {
    const selectedMotorId = e.target.value;
    const selectedMotor = motores.find(motor => motor.idMotor === selectedMotorId);
    setSelectedMotor(selectedMotor);
    setCarro({ ...carro, motor: { idMotor: selectedMotorId } });
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos del carro a enviar:", carro);
    try {
      await axios.post(urlBase, carro);
      navegacion('/');
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
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
        <h1>Editar Carro</h1>
      </div>
      <form onSubmit={(e) => onSubmit(e)} >
      <div className="mb-3">
          <label htmlFor="modeloCarroceria" className="form-label">Modelo Carroceria</label>
          <input type="text" className="form-control" id="modeloCarroceria" name='modeloCarroceria' required={true}
            value={modeloCarroceria} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="tecnologia" className="form-label">Tecnologia</label>
          <input type="text" className="form-control" id="tecnologia" name="tecnologia"
            value={tecnologia} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="precio" className="form-label">Precio</label>
          <input type="number" step="any" className="form-control" id="precio" name="precio"
            value={precio} onChange={(e) => onInputChange(e)} />
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
          <label htmlFor="tipoVelocidad" className="form-label">Tipo Velocidad</label>
          <input type="text" className="form-control" id="tipoVelocidad" name='tipoVelocidad'
            value={tipoVelocidad} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="traccion" className="form-label">Traccion</label>
          <input type="text" className="form-control" id="traccion" name="traccion"
            value={traccion} onChange={(e) => onInputChange(e)} />
        </div>
        <div>
        <label className="form-label">Marca</label>
          <select className="form-select" aria-label="Escoja la marca del carro">
            <option disabled selected>Seleccione la marca</option>
            
                <option enabled selected value={carro.marca.idMarca}>{carro.marca.idMarca} - {carro.marca.nombre}</option>
            
          </select>
        </div>
        <div>
        <label className="form-label">Linea</label>
          <select className="form-select" aria-label="Escoja la linea del carro">
            <option disabled selected>Seleccione la Linea</option>
           
                <option enabled selected value={carro.linea.idLinea}>{carro.linea.idLinea} - {carro.linea.nombre}</option>
            
          </select>
        </div>
        <div>
        <label className="form-label">Motor</label>
          <select className="form-select" aria-label="Escoja el motor del carro">
            <option disabled selected>Seleccione el motor</option>
            
                <option enabled selected value={carro.motor.idMotor}>{carro.motor.idMotor} - {carro.motor.marcaMotor}</option>
             
          </select>
        </div>
        <div className='text-center' style={{margin: "20px"}}>
          <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
        </div>

      </form>
    </div>
  )
}
