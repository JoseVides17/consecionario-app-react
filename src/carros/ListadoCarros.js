import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                        <Link to={`/carros/${carro.idCarro}`} className="btn btn-primary">Ver mas...</Link>
                    </div>
                </div>
                </div>
            ))
        }
        </div>
    </div>    
  )
}
