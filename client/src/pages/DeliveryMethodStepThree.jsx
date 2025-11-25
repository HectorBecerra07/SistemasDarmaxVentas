import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OrderLayout from "../components/order/OrderLayout";

const DeliveryMethodStepThree = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Traemos lo que venga de pasos anteriores (si lo mandaste desde el paso 2)
  const previousState = location.state || {};

  // "delivery" | "pickup" | null
  const [deliveryMethod, setDeliveryMethod] = useState("delivery"); // por diseño, uno seleccionado por defecto

  const handleBack = () => {
    // Volver al Paso 2
    navigate("/pedidos/rellenar/asignar", {
      state: {
        ...previousState,
        deliveryMethod,
      },
    });
  };

  const handleContinue = () => {
    if (!deliveryMethod) return;

    // Aquí podrías mandar todo junto al resumen/pago
    navigate("/pedidos/rellenar/resumen", {
      state: {
        ...previousState,
        deliveryMethod,
      },
    });
  };

  const isDelivery = deliveryMethod === "delivery";
  const isPickup = deliveryMethod === "pickup";

  return (
    <OrderLayout
      title="Paso 3: Método de entrega"
      subtitle="Elige cómo quieres recibir tu pedido."
      step={3}
      totalSteps={4}
    >
      {/* Cards de método de entrega */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 mt-4">
        {/* Entrega a domicilio */}
        <button
          type="button"
          onClick={() => setDeliveryMethod("delivery")}
          className={`flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl p-8 text-center shadow-sm transition-all
            ${
              isDelivery
                ? "border-2 border-primary bg-white dark:bg-dark dark:border-primary/80"
                : "border border-slate-200 bg-white dark:border-slate-800 dark:bg-dark hover:border-slate-300 dark:hover:border-slate-700"
            }`}
        >
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full
              ${
                isDelivery
                  ? "bg-primary/10 text-primary"
                  : "bg-slate-100 dark:bg-slate-800 text-text-secondary dark:text-gray-300"
              }`}
          >
            <span className="material-symbols-outlined !text-4xl">
              local_shipping
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-dark dark:text-white">
              Entrega a domicilio
            </h3>
            <p className="text-sm text-text-secondary dark:text-gray-400">
              Recibe tu pedido en la comodidad de tu hogar.
            </p>
          </div>
        </button>

        {/* Recoge en mostrador */}
        <button
          type="button"
          onClick={() => setDeliveryMethod("pickup")}
          className={`flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl p-8 text-center shadow-sm transition-all
            ${
              isPickup
                ? "border-2 border-primary bg-white dark:bg-dark dark:border-primary/80"
                : "border border-slate-200 bg-white dark:border-slate-800 dark:bg-dark hover:border-slate-300 dark:hover:border-slate-700"
            }`}
        >
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full
              ${
                isPickup
                  ? "bg-primary/10 text-primary"
                  : "bg-slate-100 dark:bg-slate-800 text-text-secondary dark:text-gray-300"
              }`}
          >
            <span className="material-symbols-outlined !text-4xl">
              storefront
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-dark dark:text-white">
              Recoge en mostrador
            </h3>
            <p className="text-sm text-text-secondary dark:text-gray-400">
              Pasa por tu pedido a nuestra sucursal más cercana.
            </p>
          </div>
        </button>
      </div>

      {/* Footer dentro del layout */}
      <footer className="mt-auto px-6 py-4">
        <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center">
          <button
            type="button"
            onClick={handleBack}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 w-full sm:w-auto bg-slate-100 dark:bg-slate-800 text-dark dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <span className="truncate">Volver al Paso 2</span>
          </button>

          <button
            type="button"
            onClick={handleContinue}
            disabled={!deliveryMethod}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 w-full sm:w-auto bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="truncate">Continuar al resumen y pago</span>
          </button>
        </div>
      </footer>
    </OrderLayout>
  );
};

export default DeliveryMethodStepThree;
