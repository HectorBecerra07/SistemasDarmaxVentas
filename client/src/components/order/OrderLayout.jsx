const OrderLayout = ({
  title,
  subtitle,
  step,
  totalSteps,
  children,
}) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="font-display relative flex min-h-screen w-full flex-col bg-light dark:bg-dark overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center p-4 sm:p-6 md:p-8">
          <div className="flex flex-col w-full max-w-4xl flex-1">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-4 bg-white dark:bg-dark rounded-xl">
              <div className="flex items-center gap-4 text-dark dark:text-white">
                <div className="size-6 text-primary">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                  DarMax - Agua Pura
                </h2>
              </div>
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-slate-100 dark:bg-primary/20 text-dark dark:text-white">
                <span className="material-symbols-outlined">person</span>
              </button>
            </header>

            {/* Contenido */}
            <main className="flex-grow mt-8">
              {/* Encabezado de paso + barra de progreso */}
              <div className="flex flex-wrap justify-between gap-4 px-6 mb-6">
                <div className="flex min-w-72 flex-col gap-2">
                  <p className="text-dark dark:text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                    {title}
                  </p>
                  {subtitle && (
                    <p className="text-text-secondary dark:text-gray-400 text-base leading-normal">
                      {subtitle}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2 min-w-[180px]">
                  <span className="text-sm font-medium text-text-secondary dark:text-gray-400">
                    Paso {step} de {totalSteps}
                  </span>
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderLayout;
