import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OrderLayout from "../components/order/OrderLayout";

const RefillAssignStepTwo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Total de garrafones seleccionado en el Paso 1
  const maxJugs = location.state?.maxJugs ?? 0;

  const [products, setProducts] = useState(() => [
    {
      id: "purificada",
      name: "Agua Purificada",
      quantity: 0, // empiezan en 0
      featured: true,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBTRVNohQGHFBIoOVWt09upHMGaDfTjggm9hSZDZPpoIbyFDFwj8Hwls4Bu4Jt0z-I0zlD6rGZuPgFLNAZX_Rp10k7zaOAypOsW0YOx_aesQnxkEq6DyYkUB5CqS1F8a0z5pWE-ypqbtAbNM4Np_GKvHyzEtrjSMe4ix1h8yb-_q3_VmnKyvOOesbq73drHVvURX_RHYCYf5ACdbYjuozn8Qyipi7Of1l4PSlDVfO-NTsy-yTMjkF1gUb1ftXcHZnI_9dpqii7PCB0",
    },
    {
      id: "alcalina",
      name: "Agua Alcalina",
      quantity: 0,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCVAie7BW96pA3Uratok-bSvGNFyqMOvaD3APx6cd8xZ4gbAiKHwbj7OimlIFUfUY-yOlbED284bp8Em0poa_sRIiWRAMMIQsEtqf4IllyH8lgKTL07MSxMN2QsoOogm_La93aEuHIKTuWudeIdNnPnLswoM7XL8ZZU6pkQOe_KMsWu3YOE6-2AfmzMG29kIrMfwHqyL2qUq3yrN71jY4oTWAgIUeUS5R6Aze3mTjF_P7ACkzk9xSWGq7H0W1_VDZHpc5-icAGyIEo",
    },
    {
      id: "sales",
      name: "Agua con Sales",
      quantity: 0,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmKKVAAtGmsQig5k97WcD6AyML42G7QreNcsx40TC9bMGtmTvom0uVtUWtu3TLN3hXPMUP-SSjDso_SIX26fDEkAAYUenF7GDxxNj8PJxV3vESgWsvuc1m1qEVijARm8W75QlaUrOlYmGNWPDVrDJG-YtUzMLbuPUXhb73RUe9yC9WahHJJYKaFksqDzGlBBb9lzp62cv85L1yIAGgdUrK24nXGQwy_NemDtjqSiIGOeyMROiLj0VRTcKMPPzFdCLJ7fNnkX3LB5Q",
    },
  ]);

  const totalAssigned = products.reduce((sum, p) => sum + p.quantity, 0);

  const changeQuantity = (id, delta) => {
    setProducts((prev) => {
      const totalBefore = prev.reduce((s, p) => s + p.quantity, 0);

      return prev.map((p) => {
        if (p.id !== id) return p;

        const newQty = p.quantity + delta;
        if (newQty < 0) return p; // no negativos

        const newTotal = totalBefore + delta;
        if (newTotal < 0 || newTotal > maxJugs) return p; // no exceder el total del paso 1

        return { ...p, quantity: newQty };
      });
    });
  };

  const handleBack = () => {
    navigate("/pedidos/rellenar"); // Paso 1
  };

  const handleContinue = () => {
    console.log("Asignación final:", products);
    navigate("/pedidos/rellenar/entrega", {
      state: {
        fromStepTwo: products,
        maxJugs,
      },
    });
  };

  return (
    <OrderLayout
      title="Paso 2: Asigna tus garrafones"
      subtitle="Distribuye el total de tus garrafones entre los tipos de agua."
      step={2}
      totalSteps={4}
    >
      {/* Bloque de resumen total */}
      <div className="flex flex-wrap justify-between items-end gap-4 px-6 mt-2">
        <div className="flex min-w-72 flex-col gap-2">
          <p className="text-dark dark:text-white text-base leading-normal">
            Ajusta las cantidades para cada tipo de agua.
          </p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1">
          <p className="text-sm font-medium text-text-secondary dark:text-gray-400">
            Total de garrafones
          </p>
          <p className="text-3xl font-bold text-primary">
            <span className="text-dark dark:text-white">
              {totalAssigned}
            </span>{" "}
            / {maxJugs}
          </p>
        </div>
      </div>

      {/* Grid de tipos de agua */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 p-6 mt-2">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col gap-4 rounded-xl border bg-white dark:bg-dark shadow-sm transition-all
              ${
                product.featured
                  ? "border-primary dark:border-primary/50"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl"
              style={{ backgroundImage: `url("${product.imageUrl}")` }}
              aria-label={product.name}
            />
            <div className="p-4 flex flex-col gap-4">
              <p className="text-dark dark:text-white text-base font-medium leading-normal">
                {product.name}
              </p>
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => changeQuantity(product.id, -1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-text-secondary dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">
                    remove
                  </span>
                </button>
                <span className="text-lg font-bold text-dark dark:text-white">
                  {product.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => changeQuantity(product.id, 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-text-secondary dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer dentro del layout (igual estilo que el paso 1) */}
      <footer className="mt-auto px-6 py-4">
        <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center">
          <button
            type="button"
            onClick={handleBack}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 w-full sm:w-auto bg-slate-100 dark:bg-slate-800 text-dark dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <span className="truncate">Volver al Paso 1</span>
          </button>

          <button
            type="button"
            onClick={handleContinue}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 w-full sm:w-auto bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={totalAssigned !== maxJugs}
          >
            <span className="truncate">Continuar al Paso 3</span>
          </button>
        </div>
      </footer>
    </OrderLayout>
  );
};

export default RefillAssignStepTwo;
