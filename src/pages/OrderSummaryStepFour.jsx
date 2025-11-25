import { useLocation, useNavigate } from "react-router-dom";
import OrderLayout from "../components/order/OrderLayout";

const OrderSummaryStepFour = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Aquí llega todo lo que mandaste desde los pasos anteriores (si ya lo envías)
  const previousState = location.state || {};

  // Ejemplo estático basado en el mockup
  const orderItems = [
    {
      id: 1,
      name: "Garrafón 20L - Agua Purificada",
      description: "Cantidad: 2",
      price: 50.0,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDcm6i_HvVwpqDEBQLFyiTCMTrbq9ggnh7ehVXS2n7SazlEKPz6a83e-Sxrg0kvcVq_4nTfi2yWSwUpN2-PA3vzOxNVSBjti6prZsKCl2J7kYj3GlT1l53Ul8eo23n8OUV-y7aSYMqM3gG1qIGhqsAVHhWU99WzlJl-k_uxZ9ZenIiorVC0v0QS_gXmZwdQYUQltMyYiTjdC9APRRWXmJLY_xi-kJciJfskvUeW_EPzXB5boatc-URhdIPGwq3kl0tpbjAF8s5_zzA",
    },
    {
      id: 2,
      name: "Garrafón 10L - Agua Alcalina",
      description: "Cantidad: 1",
      price: 35.0,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBTIIPHc8rSOQzSzXwtaj0zyLvBMQ3WYQomgbRtL2j2QtvjYyARKq5mSWJIGE2Wc3QB0RIAspUEj60jnuX410473nZW9gN_--xF51L-zSeuj1ieQhe7tX4jRxQG80baK_5P4ehvD-mOZkLzra6si8w-7UGKI5JC-B2oLyasvemvi0XaqhWZ8bmWqhYpN8pXXCZ4PbXo5S1G-0aC7rxLYCEy0dUB60w-JwbzZpE0Xdy-qDwWJ34e74bpzvkhmerfPMmxZDlkT7Os-T4",
    },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0); // 85
  const shipping = 0;
  const total = subtotal + shipping;

  const handleBack = () => {
    // Volver al paso 3 (método de entrega)
    navigate("/pedidos/rellenar/entrega", {
      state: previousState,
    });
  };

  const handleConfirm = () => {
    // Aquí luego conectarás con backend / pago
    console.log("Confirmar pedido", {
      ...previousState,
      orderItems,
      subtotal,
      shipping,
      total,
    });
    // Por ahora solo log; podrías navegar a una pantalla de éxito
  };

  return (
    <OrderLayout
      title="Paso 4: Resumen y pago"
      subtitle="Revisa los detalles de tu pedido antes de confirmar."
      step={4}
      totalSteps={4}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-4 px-4 sm:px-0">
        {/* Columna izquierda: pedido + método de pago */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {/* Card: Tu pedido */}
          <div className="bg-white dark:bg-dark/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-dark dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-3 pt-5 border-b border-slate-200 dark:border-slate-700">
              Tu pedido
            </h2>

            <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-700">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 px-6 min-h-[72px] py-4 justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                      style={{ backgroundImage: `url("${item.imageUrl}")` }}
                      aria-label={item.name}
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-dark dark:text-white text-base font-medium leading-normal line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-text-secondary dark:text-gray-400 text-sm leading-normal line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <p className="text-dark dark:text-white text-base leading-normal">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card: Método de pago */}
          <div className="bg-white dark:bg-dark/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-dark dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-3 pt-5">
              Elige tu método de pago
            </h2>

            <div className="p-6 flex flex-col sm:flex-row gap-4">
              {/* Efectivo seleccionado por defecto (visual) */}
              <button
                type="button"
                className="flex-1 p-4 border-2 border-primary bg-primary/10 dark:bg-primary/20 rounded-lg text-left flex items-center gap-4"
              >
                <span className="material-symbols-outlined text-primary text-3xl">
                  payments
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-dark dark:text-white">
                    Efectivo
                  </span>
                  <span className="text-sm text-text-secondary dark:text-gray-400">
                    Pagar en mostrador
                  </span>
                </div>
              </button>

              {/* Tarjeta (estado visual no seleccionado) */}
              <button
                type="button"
                className="flex-1 p-4 border border-slate-300 dark:border-slate-600 rounded-lg text-left flex items-center gap-4 hover:border-primary transition-colors"
              >
                <span className="material-symbols-outlined text-slate-500 dark:text-gray-400 text-3xl">
                  credit_card
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-dark dark:text-white">
                    Tarjeta
                  </span>
                  <span className="text-sm text-text-secondary dark:text-gray-400">
                    Crédito o débito
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Columna derecha: resumen y acciones */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-dark/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sticky top-10 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-dark dark:text-white">
              Resumen de compra
            </h3>

            <div className="space-y-3 border-b border-slate-200 dark:border-slate-700 pb-4">
              <div className="flex justify-between gap-x-6">
                <p className="text-text-secondary dark:text-gray-300 text-sm">
                  Subtotal
                </p>
                <p className="text-dark dark:text-gray-200 text-sm font-medium text-right">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between gap-x-6">
                <p className="text-text-secondary dark:text-gray-300 text-sm">
                  Envío
                </p>
                <p className="text-dark dark:text-gray-200 text-sm font-medium text-right">
                  {shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)}`}
                </p>
              </div>
            </div>

            <div className="flex justify-between gap-x-6 py-2">
              <p className="text-text-secondary dark:text-gray-300 text-base font-bold">
                Total a pagar
              </p>
              <p className="text-dark dark:text-white text-2xl font-bold leading-normal text-right">
                ${total.toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <button
                type="button"
                onClick={handleConfirm}
                className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-dark"
              >
                Confirmar pedido
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full text-primary font-bold py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </OrderLayout>
  );
};

export default OrderSummaryStepFour;
