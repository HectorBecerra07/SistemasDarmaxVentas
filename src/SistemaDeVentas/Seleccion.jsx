import React from "react";

export default function DarMax() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-10 lg:px-20 py-5">
            <div className="flex w-full max-w-4xl flex-col items-center">

              {/* Header */}
              <header className="flex w-full items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 sm:px-6 py-4">
                <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
                  <div className="h-6 w-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">DarMax</h2>
                </div>

                <div className="flex flex-1 items-center justify-end gap-4 sm:gap-6">
                  <a className="hidden text-sm font-medium hover:text-primary dark:hover:text-primary sm:block" href="#">
                    Mis Pedidos
                  </a>

                  <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-border-light text-text-light dark:bg-border-dark dark:text-text-dark">
                    <span className="material-symbols-outlined text-2xl">person</span>
                  </button>
                </div>
              </header>

              {/* Main */}
              <main className="flex w-full flex-1 flex-col items-center justify-center px-4 py-12 sm:py-16">
                <h1 className="text-3xl font-bold tracking-tight text-center md:text-4xl">
                  Bienvenido a DarMax
                </h1>

                <p className="mt-2 max-w-md text-center text-subtext-light dark:text-subtext-dark">
                  Elija una opción a continuación para comenzar su pedido de agua purificada.
                </p>

                <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">

                  {/* Card 1 */}
                  <a className="group flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-border-dark dark:bg-card-dark" href="#">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <span className="material-symbols-outlined text-4xl">recycling</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-bold">Rellenar Garrafón</p>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">
                        Programe una recarga para sus garrafones existentes.
                      </p>
                    </div>
                  </a>

                  {/* Card 2 */}
                  <a className="group flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-border-dark dark:bg-card-dark" href="#">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <span className="material-symbols-outlined text-4xl">water_drop</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-bold">Comprar Garrafón</p>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">
                        Pida nuevos garrafones de agua a domicilio.
                      </p>
                    </div>
                  </a>

                </div>
              </main>

              {/* Footer */}
              <footer className="flex w-full flex-col gap-6 px-5 py-10 text-center text-subtext-light dark:text-subtext-dark">
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
    </div>
  );
}
