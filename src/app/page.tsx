import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Association Promotion Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-3">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="mb-3 text-2xl font-bold text-white">
                Faça parte da mudança
              </h2>
              <p className="text-white/90">
                Amplie seu alcance e conecte mais animais a lares amorosos. 
                Junte-se à nossa rede de parceiros e faça a diferença na vida de muitos animais.
              </p>
            </div>
            <Link
              href="./associacao/entrar"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-medium text-blue-600 shadow-theme-xs hover:bg-gray-50 max-sm:w-full max-sm:px-24"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-brand-950 text-white/90 flex flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white/90 sm:text-5xl xl:text-6xl">
          Bem-vindo ao Adotito
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-400 dark:text-gray-400">
          Conectando animais que precisam de um lar com pessoas que têm muito amor para dar.
          Faça parte dessa história de amor e transformação.  
        </p>
        <div className="flex flex-col gap-4 sm:flex-row max-sm:w-full max-sm:px-12">
          <Link
            href="./entrar"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-10 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 "
          >
            Entrar
          </Link>
          <Link
            href="./cadastro"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            Cadastre-se
          </Link>
        </div>
      </section>




      {/* Features Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white/90">
            Como Funciona
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">Encontre seu Amigo</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore nossa lista de animais disponíveis para adoção e encontre seu novo melhor amigo.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">Processo Seguro</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Todo o processo de adoção é acompanhado e verificado para garantir a segurança dos animais.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">Mude uma Vida</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ao adotar, você não só muda a vida de um animal, mas também a sua própria vida.
              </p>
            </div>
          </div>
        </div>
      </section>

        

      {/* Footer */}
      <footer className="mt-auto py-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Adotito. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
} 