import { Routes, Route } from "react-router-dom";
import DarmaxWelcome from "./pages/DarmaxWelcome";

import GestionDashboard from "./Gestion/GestionDashboard";
import Resumen from "./Gestion/Resumen";
import Inventario from "./Gestion/Inventario";
import Ingresos from "./Gestion/Ingresos";
import Gastos from "./Gestion/Gastos";
import VentaMostrador from "./VentaMostrador/VentaMostrador";
import RepartidorDashboard from "./Repartidor/RepartidorDashboard";

import Register from "./pages/Register";
import Login from "./pages/Login";

import OrderSelection from "./pages/OrderSelection";
import RefillJugStepOne from "./pages/RefillJugStepOne";
import RefillAssignStepTwo from "./pages/RefillAssignStepTwo";
import DeliveryMethodStepThree from "./pages/DeliveryMethodStepThree";
import OrderSummaryStepFour from "./pages/OrderSummaryStepFour";

import PrivateRoute from "./components/common/PrivateRoute";

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<DarmaxWelcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/pedidos" element={<OrderSelection />} />
      <Route path="/pedidos/rellenar" element={<RefillJugStepOne />} />
      <Route path="/pedidos/rellenar/asignar" element={<RefillAssignStepTwo />} />
      <Route path="/pedidos/rellenar/entrega" element={<DeliveryMethodStepThree />} />
      <Route path="/pedidos/rellenar/resumen" element={<OrderSummaryStepFour />} />

      {/* Rutas protegidas (requieren autenticación) */}
      <Route
        path="/gestion"
        element={
          <PrivateRoute roles={['ADMIN']}>
            <GestionDashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<Resumen />} />
        <Route path="inventario" element={<Inventario />} />
        <Route path="ingresos" element={<Ingresos />} />
        <Route path="gastos" element={<Gastos />} />
      </Route>

      {/* Ruta de Venta Mostrador */}
      <Route
        path="/venta-mostrador"
        element={
          <PrivateRoute roles={['ADMIN', 'DRIVER']}>
            <VentaMostrador />
          </PrivateRoute>
        }
      />

      {/* Ruta de Repartidor */}
      <Route
        path="/repartidor"
        element={
          <PrivateRoute roles={['DRIVER']}>
            <RepartidorDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
