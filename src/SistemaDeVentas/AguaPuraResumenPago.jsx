import React, { useState } from "react";

export default function AguaPuraResumenPago() {
  const [paymentMethod, setPaymentMethod] = useState("cash"); // "cash" | "card"

  const isCash = paymentMethod === "cash";
  const isCard = paymentMethod === "card";

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-10">
            <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
              {/* Page Heading */}
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                  Paso 3: Resumen y Pago
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-6">
                {/* Left Column: Order Summary & Payment */}
                <div className="lg:col-span-3 flex flex-col gap-8">
                  {/* Order Summary Card */}
                  <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-3 pt-5 border-b border-gray-200 dark:border-gray-700">
                      Tu Pedido
                    </h2>
                    <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                      {/* Item 1 */}
                      <div className="flex items-center gap-4 px-6 min-h-[72px] py-4 justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                            data-alt="Blue water jug icon"
                            style={{
                              backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcm6i_HvVwpqDEBQLFyiTCMTrbq9ggnh7ehVXS2n7SazlEKPz6a83e-Sxrg0kvcVq_4nTfi2yWSwUpN2-PA3vzOxNVSBjti6prZsKCl2J7kYj3GlT1l53Ul8eo23n8OUV-y7aSYMqM3gG1qIGhqsAVHhWU99WzlJl-k_uxZ9ZenIiorVC0v0QS_gXmZwdQYUQltMyYiTjdC9APRRWXmJLY_xi-kJciJfskvUeW_EPzXB5boatc-URhdIPGwq3kl0tpbjAF8s5_zzA")',
                            }}
                          ></div>
                          <div className="flex flex-col justify-center">
                            <p className="text-[#111418] dark:text-white text-base font-medium leading-normal line-clamp-1">
                              Garrafón 20L - Agua Purificada
                            </p>
                            <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                              Cantidad: 2
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0">
                          <p className="text-[#111418] dark:text-white text-base font-normal leading-normal">
                            $50.00
                          </p>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex items-center gap-4 px-6 min-h-[72px] py-4 justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                            data-alt="Smaller blue water jug icon"
                            style={{
                              backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTIIPHc8rSOQzSzXwtaj0zyLvBMQ3WYQomgbRtL2j2QtvjYyARKq5mSWJIGE2Wc3QB0RIAspUEj60jnuX410473nZW9gN_--xF51L-zSeuj1ieQhe7tX4jRxQG80baK_5P4ehvD-mOZkLzra6si8w-7UGKI5JC-B2oLyasvemvi0XaqhWZ8bmWqhYpN8pXXCZ4PbXo5S1G-0aC7rxLYCEy0dUB60w-JwbzZpE0Xdy-qDwWJ34e74bpzvkhmerfPMmxZDlkT7Os-T4")',
                            }}
                          ></div>
                          <div className="flex flex-col justify-center">
                            <p className="text-[#111418] dark:text-white text-base font-medium leading-normal line-clamp-1">
                              Garrafón 10L - Agua Alcalina
                            </p>
                            <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                              Cantidad: 1
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0">
                          <p className="text-[#111418] dark:text-white text-base font-normal leading-normal">
                            $35.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method Card */}
                  <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-3 pt-5">
                      Elige tu método de pago
                    </h2>
                    <div className="p-6 flex flex-col sm:flex-row gap-4">
                      {/* Efectivo */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("cash")}
                        className={`flex-1 p-4 rounded-lg text-left flex items-center gap-4 transition-colors ${
                          isCash
                            ? "border-2 border-primary bg-primary/10 dark:bg-primary/20"
                            : "border border-gray-300 dark:border-gray-600 hover:border-primary"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-3xl ${
                            isCash
                              ? "text-primary"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          payments
                        </span>
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-800 dark:text-white">
                            Efectivo
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Pagar en mostrador
                          </span>
                        </div>
                      </button>

                      {/* Tarjeta */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`flex-1 p-4 rounded-lg text-left flex items-center gap-4 transition-colors ${
                          isCard
                            ? "border-2 border-primary bg-primary/10 dark:bg-primary/20"
                            : "border border-gray-300 dark:border-gray-600 hover:border-primary"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-3xl ${
                            isCard
                              ? "text-primary"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          credit_card
                        </span>
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-800 dark:text-white">
                            Tarjeta
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Crédito o débito
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column: Total & Actions */}
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-10 flex flex-col gap-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Resumen de Compra
                    </h3>
                    <div className="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-4">
                      <div className="flex justify-between gap-x-6">
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Subtotal
                        </p>
                        <p className="text-gray-800 dark:text-gray-200 text-sm font-medium text-right">
                          $85.00
                        </p>
                      </div>
                      <div className="flex justify-between gap-x-6">
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Envío
                        </p>
                        <p className="text-gray-800 dark:text-gray-200 text-sm font-medium text-right">
                          Gratis
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between gap-x-6 py-2">
                      <p className="text-[#617589] dark:text-gray-300 text-base font-bold">
                        Total a Pagar
                      </p>
                      <p className="text-[#111418] dark:text-white text-2xl font-bold leading-normal text-right">
                        $85.00
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                      <button className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark">
                        Confirmar Pedido
                      </button>
                      <button className="w-full text-primary font-bold py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors">
                        Volver
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End grid */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
