import ThemeToggle from "../components/ThemeToggle";


const DarmaxWelcome = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-light dark:bg-dark overflow-x-hidden font-display"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >

      {/* Toggle de tema */}
      <ThemeToggle />
      {/* Fondo de color (sin imagen) */}
      <div className="absolute inset-0 z-0 h-full w-full bg-light dark:bg-dark" />

      {/* Card central */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center rounded-xl bg-white/80 dark:bg-white/10 p-6 shadow-2xl backdrop-blur-lg sm:p-8 md:p-12">
        <div className="layout-content-container flex flex-col items-center w-full">

          {/* Logo */}
          <div
            className="w-full bg-center bg-no-repeat bg-contain flex h-16 justify-center"
            style={{
              backgroundImage: "url('/img/logos/darmax-logo.png')",
            }}
            aria-label="Logo DARMAX"
          />

          {/* Título */}
          <h1 className="text-dark dark:text-white tracking-tight text-3xl font-bold leading-tight text-center pb-2 pt-8 sm:text-4xl">
            Bienvenido a DARMAX
          </h1>

          {/* Descripción */}
          <p className="text-text-secondary dark:text-white/70 text-base font-normal leading-normal pb-8 text-center max-w-xs">
            Tu agua purificada, a un clic de distancia.
          </p>

          {/* Botones */}
          <div className="flex w-full flex-col items-stretch gap-4">

            {/* Botón primario */}
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-12 px-5 
              bg-primary text-white text-base font-bold tracking-[0.015em] transition-transform hover:scale-105">
              <span className="truncate">Registrarse</span>
            </button>

            {/* Botón secundario */}
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-12 px-5 
              bg-light/80 text-dark ring-1 ring-text-secondary/20
              dark:bg-dark/50 dark:text-white dark:ring-white/20
              text-base font-bold tracking-[0.015em] transition-transform hover:scale-105">
              <span className="truncate">Iniciar Sesión</span>
            </button>
          </div>

          {/* Enlace términos */}
          <p className="text-text-secondary dark:text-white/60 text-sm font-normal leading-normal pt-10 text-center underline cursor-pointer">
            Términos de servicio y Política de privacidad
          </p>

        </div>
      </div>
    </div>
  );
};

export default DarmaxWelcome;
