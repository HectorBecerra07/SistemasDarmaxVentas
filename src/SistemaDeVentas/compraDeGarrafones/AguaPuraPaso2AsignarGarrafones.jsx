import React, { useState, useMemo } from "react";

const TOTAL_GARRAFONES = 5;

export default function AguaPuraPaso2AsignarGarrafones() {
  const [quantities, setQuantities] = useState({
    alcalina: 0,
    premium: 2,
    sinLlenar: 1,
  });

  const usados = useMemo(
    () => quantities.alcalina + quantities.premium + quantities.sinLlenar,
    [quantities]
  );

  const restantes = TOTAL_GARRAFONES - usados;

  const increment = (key) => {
    setQuantities((prev) => {
      const currentTotal =
        prev.alcalina + prev.premium + prev.sinLlenar;
      if (currentTotal >= TOTAL_GARRAFONES) return prev;

      return {
        ...prev,
        [key]: prev[key] + 1,
      };
    });
  };

  const decrement = (key) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] - 1),
    }));
  };

  const assignAllRemainingTo = (key) => {
    setQuantities((prev) => {
      const currentTotal =
        prev.alcalina + prev.premium + prev.sinLlenar;
      const remaining = TOTAL_GARRAFONES - currentTotal;
      if (remaining <= 0) return prev;

      return {
        ...prev,
        [key]: prev[key] + remaining,
      };
    });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 sm:py-10">
            <div className="layout-content-container flex flex-col max-w-2xl flex-1 px-4 sm:px-0">
              {/* Header de paso */}
              <div className="flex flex-wrap justify-between gap-3 p-4 mb-4">
                <div className="flex min-w-72 flex-col gap-2">
                  <p className="text-primary dark:text-primary text-sm font-medium leading-normal">
                    Paso 2 de 3
                  </p>
                  <p className="text-[#111418] dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight">
                    Asigna el Tipo de Agua
                  </p>
                  <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                    Distribuye los <strong>{TOTAL_GARRAFONES} garrafones</strong> seleccionados entre los tipos de agua.
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2">
                  <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
                    Garrafones restantes:
                  </p>
                  <p className="text-[#111418] dark:text-white text-2xl sm:text-3xl font-bold">
                    {restantes}
                  </p>
                </div>
              </div>

              {/* Tarjeta: Agua Alcalina */}
              <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col gap-4 rounded-xl border border-solid border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-200 ease-in-out">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span
                        className="material-symbols-outlined text-4xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        water_drop
                      </span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-[#111418] dark:text-white text-lg font-bold leading-normal">
                        Agua Alcalina
                      </p>
                      <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-normal mt-1">
                        Con pH elevado para un mejor balance.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => decrement("alcalina")}
                        disabled={quantities.alcalina === 0}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-transparent text-[#111418] hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="material-symbols-outlined">remove</span>
                      </button>
                      <input
                        type="number"
                        readOnly
                        value={quantities.alcalina}
                        className="h-10 w-12 rounded-lg border border-gray-300 bg-transparent text-center text-lg font-bold text-[#111418] dark:border-gray-600 dark:text-white"
                      />
                      <button
                        type="button"
                        onClick={() => increment("alcalina")}
                        disabled={restantes === 0}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-transparent text-[#111418] hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="material-symbols-outlined">add</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tarjeta: Agua Premium */}
                <div className="flex flex-col gap-4 rounded-xl border border-solid border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-200 ease-in-out">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span
                        className="material-symbols-outlined text-4xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        workspace_premium
                      </span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-[#111418] dark:text-white text-lg font-bold leading-normal">
                        Agua Premium
                      </p>
                      <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-normal mt-1">
                        Purificada mediante procesos avanzados.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => decrement("premium")}
                        disabled={quantities.premium === 0}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-transparent text-[#111418] hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="material-symbols-outlined">remove</span>
                      </button>
                      <input
                        type="number"
                        readOnly
                        value={quantities.premium}
                        className="h-10 w-12 rounded-lg border border-gray-300 bg-transparent text-center text-lg font-bold text-[#111418] dark:border-gray-600 dark:text-white"
                      />
                      <button
                        type="button"
                        onClick={() => increment("premium")}
                        disabled={restantes === 0}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-transparent text-[#111418] hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="material-symbols-outlined">add</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tarjeta: Sin Llenar (Solo Garrafón) */}
                <div className="flex flex-col gap-4 rounded-xl border border-solid border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-200 ease-in-out">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span
                        className="material-symbols-outlined text-4xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        water_bottle_large
                      </span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-[#111418] dark:text-white text-lg font-bold leading-normal">
                        Sin Llenar (Solo Garrafón)
                      </p>
                      <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-normal mt-1">
                        Recibe solo el envase vacío.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => decrement("sinLlenar")}
                        disabled={quantities.sinLlenar === 0}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-transparent text-[#111418] hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="material-symbols-outlined">remove</span>
                      </button>
                      <input
                        type="number"
                        readOnly
                        value={quantities.sinLlenar}
                        className="h-10 w-12 rounded-lg border border-gray-300 bg-transparent text-center text-lg font-bold text-[#111418] dark:border-gray-600 dark:text-white"
                      />
                      <button
                        type="button"
                        onClick={() => increment("sinLlenar")}
                        disabled={restantes === 0}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-transparent text-[#111418] hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="material-symbols-outlined">add</span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                    <button
                      type="button"
                      onClick={() => assignAllRemainingTo("sinLlenar")}
                      disabled={restantes === 0}
                      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 text-[#111418] dark:bg-gray-700 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="truncate">
                        Asignar todos los restantes
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Botones inferior */}
              <div className="mt-8 flex justify-stretch">
                <div className="flex flex-1 flex-col-reverse sm:flex-row gap-3 flex-wrap px-4 py-3 justify-between">
                  <button
                    type="button"
                    className="flex min-w-[84px] max-w-[480px] flex-1 sm:flex-none cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent text-[#111418] dark:text-white border border-[#dbe0e6] dark:border-gray-700 text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <span className="truncate">Volver</span>
                  </button>
                  <button
                    type="button"
                    disabled={restantes > 0}
                    className="flex min-w-[84px] max-w-[480px] flex-1 sm:flex-none cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                  >
                    <span className="truncate">Continuar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
