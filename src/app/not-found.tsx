import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
      {/* <GridShape /> */}
      <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
        <h1 className="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
          Página não encontrada
        </h1>

        {/* <Image
          src="/images/error/404.svg"
          alt="404"
          className="dark:hidden"
          width={472}
          height={152}
        />
        <Image
          src="./associaca"
          alt="404"
          className="hidden dark:block"
          width={472}
          height={152}
        /> */}

        <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
          Ops! Parece que este pet ainda não encontrou um lar. Vamos voltar para a página inicial e encontrar outros animais que precisam de um lar amoroso!
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary px-5 py-3.5 text-sm font-medium text-gray-800 shadow-theme-xs hover:bg-primary/90 hover:text-gray-800 dark:border-primary dark:bg-primary dark:text-white dark:hover:bg-primary/90"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
      {/* <!-- Footer --> */}
      <p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Adotito - Todos os direitos reservados
      </p>
    </div>
  );
}
