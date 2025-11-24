import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa tus componentes:
import AguaPuraSeleccionTamano from "./SistemaDeVentas/compraDeGarrafones/AguaPuraSeleccionTamano";
import AguaPuraPaso2AsignarGarrafones from "./SistemaDeVentas/compraDeGarrafones/AguaPuraPaso2AsignarGarrafones";
import AguaPuraPaso3MetodoEntrega from "./SistemaDeVentas/compraDeGarrafones/AguaPuraPaso3MetodoEntrega";
import AguaPuraResumenPago from "./SistemaDeVentas/compraDeGarrafones/AguaPuraResumenPago";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Paso 1 */}
        <Route
          path="/comprar/seleccionar-tamano"
          element={<AguaPuraSeleccionTamano />}
        />

        {/* Paso 2 */}
        <Route
          path="/comprar/asignar-garrafones"
          element={<AguaPuraPaso2AsignarGarrafones />}
        />

        {/* Paso 3 */}
        <Route
          path="/comprar/metodo-entrega"
          element={<AguaPuraPaso3MetodoEntrega />}
        />

        {/* Resumen y Pago */}
        <Route
          path="/comprar/resumen"
          element={<AguaPuraResumenPago />}
        />

        {/* Inicio opcional */}
        <Route path="/" element={<h1>Bienvenido a AguaPura</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
