import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgregarCarros from "./carros/AgregarCarros";
import Carros from "./carros/Carros";
import ListadoCarros from "./carros/ListadoCarros";
import AgregarClientes from "./clientes/AgregarClientes";
import AgregarCotizacion from "./cotizaciones/AgregarCotizacion";
import Administracion from "./plantilla/Administracion";
import Contactos from "./plantilla/Contactos";
import Navegacion from "./plantilla/Navegacion";
import AgregarVendedor from "./vendedores/AgregarVendedor";
import AgregarVenta from "./ventas/AgregarVenta";

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
          <Route exact path="/agregar-cliente" element={<AgregarClientes/>}/>
          <Route exact path="/carros/:id" element={<Carros/>}/>
          <Route exact path="/agregar-vendedor" element={<AgregarVendedor/>}/>
          <Route exact path="/cotizacion" element={<AgregarCotizacion/>} />
          <Route exact path="/ventas" element={<AgregarVenta/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
