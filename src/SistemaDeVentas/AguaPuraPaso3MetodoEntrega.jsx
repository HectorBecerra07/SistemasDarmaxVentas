import React, { useState } from "react";

export default function AguaPuraPaso3MetodoEntrega() {
  const [deliveryMethod, setDeliveryMethod] = useState("domicilio"); // "domicilio" | "mostrador"

  const isDomicilio = deliveryMethod === "domicilio";
  const isMostrador = deliveryMethod === "mostrador";

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center p-4 sm:p-6 md:p-8">
          <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-6 py-4 bg-white dark:bg-background-dark rounded-xl">
              <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                <div className="size-6 text-primary">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                  Agua Pura
                </h2>
              </div>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-100 dark:bg-primary/20 text-[#111418] dark:text-white">
                <span className="material-symbols-outlined">person</span>
              </button>
            </header>

            {/* Main */}
            <main className="flex-grow mt-8">
              <div className="flex flex-col gap-2 px-6">
                <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  Paso 3: Método de Entrega
                </p>
                <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                  Elige cómo quieres recibir tu pedido.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 mt-4">
                {/* Entrega a Domicilio */}
                <button
                  type="button"
                  onClick={() => setDeliveryMethod("domicilio")}
                  className={`flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl p-8 text-center shadow-sm transition-all ${
                    isDomicilio
                      ? "border-2 border-primary bg-white dark:bg-background-dark dark:border-primary/80"
                      : "border border-gray-200 bg-white dark:border-gray-800 dark:bg-background-dark hover:border-gray-300 dark:hover:border-gray-700"
                  }`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${
                      isDomicilio
                        ? "bg-primary/10 text-primary"
                        : "bg-gray-100 dark:bg-gray-800 text-[#617589] dark:text-gray-300"
                    }`}
                  >
                    <span className="material-symbols-outlined !text-4xl">
                      local_shipping
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-[#111418] dark:text-white">
                      Entrega a Domicilio
                    </h3>
                    <p className="text-sm text-[#617589] dark:text-gray-400">
                      Recibe tu pedido en la comodidad de tu hogar.
                    </p>
                  </div>
                </button>

                {/* Recoge en Mostrador */}
                <button
                  type="button"
                  onClick={() => setDeliveryMethod("mostrador")}
                  className={`flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl p-8 text-center transition-all ${
                    isMostrador
                      ? "border-2 border-primary bg-white dark:bg-background-dark dark:border-primary/80 shadow-sm"
                      : "border border-gray-200 bg-white dark:border-gray-800 dark:bg-background-dark hover:border-gray-300 dark:hover:border-gray-700"
                  }`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${
                      isMostrador
                        ? "bg-primary/10 text-primary"
                        : "bg-gray-100 dark:bg-gray-800 text-[#617589] dark:text-gray-300"
                    }`}
                  >
                    <span className="material-symbols-outlined !text-4xl">
                      storefront
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-[#111418] dark:text-white">
                      Recoge en Mostrador
                    </h3>
                    <p className="text-sm text-[#617589] dark:text-gray-400">
                      Pasa por tu pedido a nuestra sucursal más cercana.
                    </p>
                  </div>
                </button>
              </div>
            </main>

            {/* Footer */}
            <footer className="mt-auto px-6 py-4">
              <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 w-full sm:w-auto bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <span className="truncate">Volver al Paso 2</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 w-full sm:w-auto bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Continuar al Resumen y Pago</span>
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
