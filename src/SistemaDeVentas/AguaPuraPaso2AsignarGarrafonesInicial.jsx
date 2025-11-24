import React, { useState, useMemo } from "react";

const productsData = [
  {
    id: "purificada",
    name: "Agua Purificada",
    alt: "A large clear water jug filled with purified water",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTRVNohQGHFBIoOVWt09upHMGaDfTjggm9hSZDZPpoIbyFDFwj8Hwls4Bu4Jt0z-I0zlD6rGZuPgFLNAZX_Rp10k7zaOAypOsW0YOx_aesQnxkEq6DyYkUB5CqS1F8a0z5pWE-ypqbtAbNM4Np_GKvHyzEtrjSMe4ix1h8yb-_q3_VmnKyvOOesbq73drHVvURX_RHYCYf5ACdbYjuozn8Qyipi7Of1l4PSlDVfO-NTsy-yTMjkF1gUb1ftXcHZnI_9dpqii7PCB0',
    initialQuantity: 2,
    featured: true,
  },
  {
    id: "alcalina",
    name: "Agua Alcalina",
    alt: "A water jug with a blue tint indicating alkaline water",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVAie7BW96pA3Uratok-bSvGNFyqMOvaD3APx6cd8xZ4gbAiKHwbj7OimlIFUfUY-yOlbED284bp8Em0poa_sRIiWRAMMIQsEtqf4IllyH8lgKTL07MSxMN2QsoOogm_La93aEuHIKTuWudeIdNnPnLswoM7XL8ZZU6pkQOe_KMsWu3YOE6-2AfmzMG29kIrMfwHqyL2qUq3yrN71jY4oTWAgIUeUS5R6Aze3mTjF_P7ACkzk9xSWGq7H0W1_VDZHpc5-icAGyIEo',
    initialQuantity: 0,
    featured: false,
  },
  {
    id: "sales",
    name: "Agua con Sales",
    alt: "A water jug against a backdrop suggesting added minerals",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmKKVAAtGmsQig5k97WcD6AyML42G7QreNcsx40TC9bMGtmTvom0uVtUWtu3TLN3hXPMUP-SSjDso_SIX26fDEkAAYUenF7GDxxNj8PJxV3vESgWsvuc1m1qEVijARm8W75QlaUrOlYmGNWPDVrDJG-YtUzMLbuPUXhb73RUe9yC9WahHJJYKaFksqDzGlBBb9lzp62cv85L1yIAGgdUrK24nXGQwy_NemDtjqSiIGOeyMROiLj0VRTcKMPPzFdCLJ7fNnkX3LB5Q',
    initialQuantity: 0,
    featured: false,
  },
];

const MAX_GARRAFONES = 3;

export default function AguaPuraPaso2AsignarGarrafones() {
  const [products, setProducts] = useState(
    productsData.map((p) => ({ ...p, quantity: p.initialQuantity }))
  );

  const totalQuantity = useMemo(
    () => products.reduce((sum, p) => sum + p.quantity, 0),
    [products]
  );

  const handleIncrement = (id) => {
    setProducts((prev) => {
      const currentTotal = prev.reduce((sum, p) => sum + p.quantity, 0);
      if (currentTotal >= MAX_GARRAFONES) return prev;

      return prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    });
  };

  const handleDecrement = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity - 1) }
          : product
      )
    );
  };

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
              <div className="flex flex-wrap justify-between items-end gap-4 px-6">
                <div className="flex min-w-72 flex-col gap-2">
                  <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    Paso 2: Asigna tus garrafones
                  </p>
                  <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                    Distribuye el total de tus garrafones entre los tipos de
                    agua.
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <p className="text-sm font-medium text-[#617589] dark:text-gray-400">
                    Total de garrafones
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    <span className="text-[#111418] dark:text-white">
                      {totalQuantity}
                    </span>{" "}
                    / {MAX_GARRAFONES}
                  </p>
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 p-6 mt-4">
                {products.map((product) => {
                  const baseCardClasses =
                    "flex flex-col gap-4 rounded-xl bg-white dark:bg-background-dark transition-all";
                  const cardBorderClasses = product.featured
                    ? "border border-primary dark:border-primary/50 shadow-sm"
                    : "border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700";

                  return (
                    <div
                      key={product.id}
                      className={`${baseCardClasses} ${cardBorderClasses}`}
                    >
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl"
                        data-alt={product.alt}
                        style={{ backgroundImage: `url("${product.image}")` }}
                      ></div>
                      <div className="p-4 flex flex-col gap-4">
                        <p className="text-[#111418] dark:text-white text-base font-medium leading-normal">
                          {product.name}
                        </p>
                        <div className="flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => handleDecrement(product.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-[#617589] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">
                              remove
                            </span>
                          </button>
                          <span className="text-lg font-bold text-[#111418] dark:text-white">
                            {product.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleIncrement(product.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-[#617589] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">
                              add
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </main>

            {/* Footer */}
            <footer className="mt-auto px-6 py-4">
              <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 w-full sm:w-auto bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <span className="truncate">Volver al Paso 1</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 w-full sm:w-auto bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Continuar al Resumen</span>
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
