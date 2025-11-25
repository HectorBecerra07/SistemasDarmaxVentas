import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderLayout from "../components/order/OrderLayout";
import QuantityCard from "../components/order/QuantityCard";

const RefillJugStepOne = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      id: "ciel",
      name: "Garrafón Ciel",
      quantity: 1,
      featured: true,
      imageUrl:
        "/img/garrafones/ciel.png",
    },
    {
      id: "epura",
      name: "Garrafón Epura",
      quantity: 0,
      imageUrl:
        "/img/garrafones/epura.png",
    },
    {
      id: "bonafon",
      name: "Garrafón Bonafon",
      quantity: 0,
      imageUrl:
        "https://http2.mlstatic.com/D_NQ_NP_2X_641991-MLA96179176023_102025-T.webp",
    },
    {
      id: "Darmax",
      name: "Garrafón Darmax",
      quantity: 0,
      imageUrl:
        "/img/garrafones/turquesa.png",
    },
    {
      id: "10Litros",
      name: "Garrafón 10L",
      quantity: 0,
      imageUrl:
        "https://i5.walmartimages.com/asr/477a4697-343e-4479-b790-3e20d7d2c4a8.85794c880e81af65b362fa88a710128c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
  ]);

  const handleChangeQuantity = (id, delta) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p
      )
    );
  };

  const handleContinue = () => {
    const totalJugs = products.reduce((sum, p) => sum + p.quantity, 0);

    if (totalJugs === 0) {
      // Si quieres, aquí podrías mostrar un mensaje de error/toast
      console.log("Debes seleccionar al menos 1 garrafón");
      return;
    }

    console.log("Continuar al Paso 2 - total:", totalJugs, products);

    // Enviamos el total y también el detalle del paso 1 (por si luego lo quieres en el resumen)
    navigate("/pedidos/rellenar/asignar", {
      state: {
        maxJugs: totalJugs,
        fromStepOne: products,
      },
    });
  };

  return (
    <OrderLayout
      title="Paso 1: Seleccionar Garrafón"
      subtitle="Elige los productos y cantidades que necesitas."
      step={1}
      totalSteps={4}
    >
  <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-6 mt-2">
  {products.map((product) => (
    <QuantityCard
      key={product.id}
      name={product.name}
      imageUrl={product.imageUrl}
      quantity={product.quantity}
      featured={product.featured}
      onIncrease={() => handleChangeQuantity(product.id, 1)}
      onDecrease={() => handleChangeQuantity(product.id, -1)}
    />
  ))}
</div>


      {/* Footer dentro del layout */}
      <footer className="mt-auto px-6 py-4">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleContinue}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 flex-1 sm:flex-none sm:w-auto bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            <span className="truncate">Continuar al Paso 2</span>
          </button>
        </div>
      </footer>
    </OrderLayout>
  );
};

export default RefillJugStepOne;
