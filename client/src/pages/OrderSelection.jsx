import { Link } from "react-router-dom";

const OrderSelection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-light dark:bg-dark font-display text-dark dark:text-white">
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-10 lg:px-20 py-5">
          <div className="flex w-full max-w-4xl flex-col items-center">
            {/* Header */}
            <header className="flex w-full items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-700 px-4 sm:px-6 py-4">
              <div className="flex items-center gap-3 text-dark dark:text-white">
                <div className="h-6 w-6 text-primary">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold tracking-tight">DarMax</h2>
              </div>

              <div className="flex flex-1 items-center justify-end gap-4 sm:gap-6">
                <Link
                  to="/mis-pedidos"
                  className="hidden text-sm font-medium hover:text-primary dark:hover:text-primary sm:block"
                >
                  Mis Pedidos
                </Link>
                <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100 text-dark dark:bg-slate-800 dark:text-white">
                  <span className="material-symbols-outlined text-2xl">
                    person
                  </span>
                </button>
              </div>
            </header>

            {/* Main */}
            <main className="flex w-full flex-1 flex-col items-center justify-center px-4 py-12 sm:py-16">
              <h1 className="text-3xl font-bold tracking-tight text-center md:text-4xl">
                Bienvenido a DarMax
              </h1>
              <p className="mt-2 max-w-md text-center text-text-secondary dark:text-gray-400">
                Elija una opción a continuación para comenzar su pedido de agua
                purificada.
              </p>

              <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {/* Card: Rellenar Garrafón */}
                <Link
                  to="/pedidos/rellenar"
                  className="group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-4xl">
                      recycling
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold">Rellenar Garrafón</p>
                    <p className="text-sm text-text-secondary dark:text-gray-400">
                      Programe una recarga para sus garrafones existentes.
                    </p>
                  </div>
                </Link>

                {/* Card: Comprar Garrafón */}
                <Link
                  to="/pedidos/comprar"
                  className="group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-4xl">
                      water_drop
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold">Comprar Garrafón</p>
                    <p className="text-sm text-text-secondary dark:text-gray-400">
                      Pida nuevos garrafones de agua a domicilio.
                    </p>
                  </div>
                </Link>
              </div>
            </main>

            {/* Footer */}
            <footer className="flex w-full flex-col gap-6 px-5 py-10 text-center text-text-secondary dark:text-gray-400">
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                <a className="text-sm hover:text-primary dark:hover:text-primary" href="#">
                  Ayuda y Soporte
                </a>
                <a className="text-sm hover:text-primary dark:hover:text-primary" href="#">
                  Términos de Servicio
                </a>
              </div>
              <p className="text-xs">© 2024 DarMax. Todos los derechos reservados.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSelection;
