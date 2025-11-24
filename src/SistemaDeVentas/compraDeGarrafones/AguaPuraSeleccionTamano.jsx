import React, { useState, useMemo } from "react";

export default function AguaPuraSeleccionTamano() {
  const [qty10L, setQty10L] = useState(1);
  const [qty20L, setQty20L] = useState(0);

  const totalGarrafones = useMemo(() => qty10L + qty20L, [qty10L, qty20L]);

  const handleDec10 = () => setQty10L((prev) => Math.max(0, prev - 1));
  const handleInc10 = () => setQty10L((prev) => prev + 1);

  const handleDec20 = () => setQty20L((prev) => Math.max(0, prev - 1));
  const handleInc20 = () => setQty20L((prev) => prev + 1);

  const garrafonLabel = totalGarrafones === 1 ? "Garrafón" : "Garrafones";

  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 sm:px-6 lg:px-8">
            <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1 px-4">
              {/* Header */}
              <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark/50 p-4 sm:px-6 rounded-xl">
                <div className="flex items-center gap-4 text-slate-800 dark:text-white">
                  <div className="size-6 text-primary">
                    <svg
                      fill="none"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_6_330)">
                        <path
                          clipRule="evenodd"
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_330">
                          <rect width="48" height="48" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">
                    AguaPura
                  </h2>
                </div>
                <div className="flex gap-2">
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span className="material-symbols-outlined text-xl">
                      help
                    </span>
                  </button>
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span className="material-symbols-outlined text-xl">
                      person
                    </span>
                  </button>
                </div>
              </header>

              {/* Main */}
              <main className="flex flex-col flex-1 py-10">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 p-4 justify-center">
                  <a
                    href="#"
                    className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal"
                  >
                    Inicio
                  </a>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">
                    /
                  </span>
                  <a
                    href="#"
                    className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal"
                  >
                    Pedir Agua
                  </a>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">
                    /
                  </span>
                  <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal">
                    Seleccionar Tamaño
                  </span>
                </div>

                {/* Title */}
                <div className="flex flex-wrap justify-center gap-3 p-4 text-center">
                  <div className="flex w-full flex-col gap-2">
                    <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                      Elige la cantidad que necesitas
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                      Paso 1: Seleccionar Tamaño del Garrafón
                    </p>
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 mt-6">
                  {/* 10L Card */}
                  <div className="flex flex-col gap-4 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-contain rounded-lg"
                      data-alt="A 10-liter water container"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzJQf8I6461BDpGgT1u1EncIe_MheqFNF7ZVOMCgPy2gd7tdA2z8v09JFnHUZ2Oflv2i9T9nlB7HAIdufLNaYgdSdD_M5jVn7zJVX1D1xd5mEbaHLRofoAzOFUXmXDNaR7uaK78gUaEHcoHvxIC1jOAR40q-8VQSiK-r5Wyi4vsIC5Nw2_-k-o5BB_ZWTbMTZ4X3utVTX1pKC-PmRs-pqf-EgI7DM6ibdoEsi3N0O6oXETfA6ixCTkE9sBjuQcpRxuruFJC8I5uX4")',
                      }}
                    ></div>
                    <div className="text-center">
                      <p className="text-slate-900 dark:text-white text-xl font-bold leading-normal">
                        10 Litros
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                        Ideal para consumo personal
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-2">
                      <button
                        type="button"
                        onClick={handleDec10}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        <span className="material-symbols-outlined text-2xl">
                          remove
                        </span>
                      </button>
                      <span className="text-2xl font-bold text-slate-900 dark:text-white w-10 text-center">
                        {qty10L}
                      </span>
                      <button
                        type="button"
                        onClick={handleInc10}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/90"
                      >
                        <span className="material-symbols-outlined text-2xl">
                          add
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* 20L Card */}
                  <div className="flex flex-col gap-4 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-contain rounded-lg"
                      data-alt="A 20-liter water container"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5c19TmBIwCdt9Uq1t3bajSbbZSKDjfMMlcj6iPd6TXk-rwvTfEKeDv8hMkiBAPoApu8yP4Zx9fd4dxdnUaAzAISNN2If5XQAkUDEqSKZFGDv_jI7-_NbHsD5Ws_im7sJaAh0eFqeA97Jf50lcPTHy7ReCqfG6pmfAlqp-h15jJM8MDobkfWf3fLYHZt6bo-zn3u2Cx7ZG4I22LC8WGdh-wgbs8dvZ_Sx3l7gfl3Ri57dvLi92tTl6P_nN9D3xi6EQpr-zlPtz1xg")',
                      }}
                    ></div>
                    <div className="text-center">
                      <p className="text-slate-900 dark:text-white text-xl font-bold leading-normal">
                        20 Litros
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                        Perfecto para la familia u oficina
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-2">
                      <button
                        type="button"
                        onClick={handleDec20}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        <span className="material-symbols-outlined text-2xl">
                          remove
                        </span>
                      </button>
                      <span className="text-2xl font-bold text-slate-900 dark:text-white w-10 text-center">
                        {qty20L}
                      </span>
                      <button
                        type="button"
                        onClick={handleInc20}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/90"
                      >
                        <span className="material-symbols-outlined text-2xl">
                          add
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer / Total */}
                <div className="flex flex-col items-center gap-4 px-4 py-8 mt-auto">
                  <div className="text-center">
                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                      Total Seleccionado
                    </p>
                    <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">
                      {totalGarrafones} {garrafonLabel}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex w-full sm:w-auto min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors duration-200"
                  >
                    <span className="truncate">Continuar</span>
                  </button>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
