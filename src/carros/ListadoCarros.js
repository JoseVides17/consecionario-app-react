import axios from "axios";
import { useEffect, useState } from "react";
import audi from "../img/audi.png";

export default function ListadoCarros() {

    const urlBase = "http://localhost:8080/consecionario-app/carros";

    const[carros, setCarros] = useState([]);

    useEffect(() =>{
        cargarCarros();
    }, []);

    const cargarCarros = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado Cargar Carros");
        console.log(resultado.data);
        setCarros(resultado.data);
    }

  return (
    <div className="container">
        <div className="container text-center" style={{margin: "40px"}}>
            <h1>CONSECIONARIO APP</h1>
        </div>
        <div className="row">
        {
            carros.map((carro, indice) => (
                <div key={indice} className="col-md-3">
                    <div className="card" style={{width: '18rem'}}>
                    <img src={audi} className="card-img-top" alt={carro.idCarro}/>
                    <div className="card-body">
                        <h5 className="card-title">{carro.marca.nombre}</h5>
                        <p className="card-text">{carro.modeloCarroceria}</p>
                        <a href="/carros" className="btn btn-primary">Ver mas...</a>
                    </div>
                </div>
                </div>
            ))
        }
        </div>
        {/* <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
            <tr>
            <th scope="col">id</th>
            <th scope="col">Carroceria</th>
            <th scope="col">Tecnologia</th>
            <th scope="col">Precio</th>
            <th scope="col">Freno delantero</th>
            <th scope="col">Freno trasero</th>
            <th scope="col">Tipo direccion</th>
            <th scope="col">Tipo suspension</th>
            <th scope="col">Tipo Velocidad</th>
            <th scope="col">Traccion</th>
            <th scope="col">Linea</th>
            <th scope="col">Marca</th>
            <th scope="col">Motor</th>
            </tr>
        </thead>
        <tbody>
            {
                carros.map((carro, indice) => (
                    <tr key={indice}>
                    <th scope="row">{carro.idCarro}</th>
                    <td>{carro.modeloCarroceria}</td>
                    <td>{carro.tecnologia}</td>

                    <td><NumericFormat value={carro.precio}
                    displayType={"text"}
                    thousandSeparator=',' prefix={"$"}
                    decimalScale={2} fixedDecimalScale/>
                    </td>

                    <td>{carro.frenoDelantero}</td>
                    <td>{carro.frenoTrasero}</td>
                    <td>{carro.tipoDireccion}</td>
                    <td>{carro.tipoSuspencion}</td>
                    <td>{carro.tipoVelocidad}</td>
                    <td>{carro.traccion}</td>
                    <td>{carro.linea.nombre}</td>
                    <td>{carro.marca.nombre}</td>
                    <td>{carro.motor.marcaMotor}</td>
                    </tr>  
                ))  
            }
        </tbody>
        </table> */}
    </div>    
  )
}
