// src/components/NavbarDarmax.jsx

function NavbarDarmax() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-b-2xl bg-white/80 dark:bg-dark/80 px-6 py-3 shadow-lg backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white text-xl font-bold">
            D
          </div>
          <div className="flex flex-col leading-tight text-dark dark:text-white">
            <span className="text-sm font-semibold tracking-wide">
              Darmax Sistema
            </span>
            <span className="text-[11px] text-text-secondary dark:text-white/70">
              Gestión de venta de garrafones
            </span>
          </div>
        </div>

        {/* Links */}
        <ul className="hidden items-center gap-5 text-sm font-medium text-text-secondary dark:text-white md:flex">
          <li className="hover:text-primary transition-colors cursor-pointer">
            Inicio
          </li>
          <li className="hover:text-primary transition-colors cursor-pointer">
            Sistema de ventas
          </li>
          <li className="hover:text-primary transition-colors cursor-pointer">
            Reportes
          </li>
        </ul>

        {/* Botón de acción */}
        <button className="rounded-xl border border-primary/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm hover:bg-primary hover:text-white transition-colors">
          Iniciar sesión
        </button>
      </nav>
    </header>
  );
}

export default NavbarDarmax;
