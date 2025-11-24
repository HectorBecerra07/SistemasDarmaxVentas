import { BrowserRouter, Routes, Route } from "react-router-dom";

import AguaPuraPaso2AsignarGarrafones from "./SistemaDeVentas/compraDeGarrafones/AguaPuraPaso2AsignarGarrafones.jsx";
import AguaPuraSeleccionTamano from "./SistemaDeVentas/compraDeGarrafones/AguaPuraSeleccionTamano.jsx";
import AguaPuraPaso2AsignarGarrafonesInicial from "./SistemaDeVentas/AguaPuraPaso2AsignarGarrafonesInicial.jsx";
import AguaPuraPaso3MetodoEntrega from "./SistemaDeVentas/AguaPuraPaso3MetodoEntrega.jsx";
import AguaPuraResumenPago from "./SistemaDeVentas/AguaPuraResumenPago.jsx";
import SeleccionDeGarrafon from "./SistemaDeVentas/SeleccionDeGarrafon.jsx";
import Seleccion from "./SistemaDeVentas/Seleccion.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Bienvenido a AguaPura</h1>} />
        <Route path="/comprar" element={<Seleccion />} />
        <Route path="/comprar/seleccion-garrafon" element={<SeleccionDeGarrafon />} />
        <Route path="/comprar/seleccionar-tamano" element={<AguaPuraSeleccionTamano />} />
        <Route path="/comprar/asignar-garrafones-inicial" element={<AguaPuraPaso2AsignarGarrafonesInicial />} />
        <Route path="/comprar/asignar-garrafones" element={<AguaPuraPaso2AsignarGarrafones />} />
        <Route path="/comprar/metodo-entrega" element={<AguaPuraPaso3MetodoEntrega />} />
        <Route path="/comprar/resumen" element={<AguaPuraResumenPago />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
