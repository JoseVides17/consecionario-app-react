import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgregarCarros from "./carros/AgregarCarros";
import ListadoCarros from "./carros/ListadoCarros";
import Administracion from "./plantilla/Administracion";
import Contactos from "./plantilla/Contactos";
import Navegacion from "./plantilla/Navegacion";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListadoCarros />} />
          <Route exact path="/contactos" element={<Contactos/>}/>
          <Route exact path="/administracion" element={<Administracion/>}/>
          <Route exact path="/agregar-carro" element={<AgregarCarros/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
