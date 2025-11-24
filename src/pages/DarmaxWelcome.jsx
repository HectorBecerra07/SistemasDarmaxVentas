const DarmaxWelcome = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      {/* Fondo con imagen y overlay */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCgaa_AgYSYEKTCTWPNGUSm_4QVXPbr6jogP4hMp31ERZB3PMEL6O_juzg603qGVJ5L25D4CLGCqb01jeGmU5EWXZ-sVQcmC6jIDik2M9MDH5KTGDgKHmxxXAw4p_lGf_rcAu-VWYjWGxbqq3rdrnmRMkHnfhhtOtezJ3OB0wleaoGqwSDUUISFMql1whyP_rbUIxv1p__cHhiifaYSOpO-HjgZ13xemM4xpjSmXIy4VfbQ-0C2UDZ_FaVDDraPCcQFOt5T3IDJag')",
        }}
      >
        <div className="absolute inset-0 bg-background-light/70 dark:bg-background-dark/80 backdrop-blur-sm" />
      </div>

      {/* Card central */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center rounded-xl bg-white/80 dark:bg-background-dark/50 p-6 shadow-2xl backdrop-blur-lg sm:p-8 md:p-12">
        <div className="layout-content-container flex flex-1 flex-col items-center">
          {/* Logo */}
          <div
            className="w-full bg-center bg-no-repeat bg-contain flex h-16 justify-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlG4PtP9r1Q6axHW7XAsvdxAZ8Mk8Zv7DY5XpxsCjajsMfKD4BBxxa_bROWsd334ibFnbykh_FSVLYIbrAPPVC7dg8-q5illqB_cItlVlpTLHMTB1jxuQblZj9CfkEDv98iMw3OKq9kDdxFBBmTN81lBFZZ3Pz0mpdVGLxQTeEB--pb69Q8zUe0ANALLJa5Zwkn0LCBo6_e_0evC60mEe_hXih8TfIjIAORLob2qZRIe63XxmzsGT7-NL9mnYgCCLOgmY10iW5FUI')",
            }}
            aria-label="Logo DARMAX"
          />

          {/* Título y descripción */}
          <h1 className="text-[#111418] dark:text-gray-100 tracking-tight text-3xl font-bold leading-tight text-center pb-2 pt-8 sm:text-4xl">
            Bienvenido a DARMAX
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal pb-8 text-center max-w-xs">
            Tu agua purificada, a un clic de distancia.
          </p>

          {/* Botones */}
          <div className="flex w-full flex-col items-stretch gap-4">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
              <span className="truncate">Registrarse</span>
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light/80 dark:bg-slate-700/50 text-[#111418] dark:text-white text-base font-bold leading-normal tracking-[0.015em] ring-1 ring-inset ring-slate-300 dark:ring-slate-600 transition-transform hover:scale-105">
              <span className="truncate">Iniciar Sesión</span>
            </button>
          </div>

          {/* Enlace términos */}
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal pt-10 text-center underline cursor-pointer">
            Términos de servicio y Política de privacidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default DarmaxWelcome;
