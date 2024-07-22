"use client"
import  React from 'react';
import { useState } from 'react';
import Contador from './componentes/Contador';
import CambioImagen from './componentes/CambioImagen';


// Componente de Título y desrtructura
const Titulo = ({ texto, tipoFuente, tamanoTexto, color }) => {
  return (
    <h2 className={`mb-3 text-2xl font-semibold ${tipoFuente} text-${tamanoTexto} ${color}`}>
      {texto}
    </h2>
  );
};

// Componente de Párrafo
const Parrafo = ({ texto, tipoFuente, tamanoTexto, color }) => {
  return (
    <p className={`m-0 max-w-[30ch] text-sm opacity-50 ${tipoFuente} text-${tamanoTexto} ${color}`}>
      {texto}
    </p>
  );
};

export default function Home() {

  const [contador,setContador]=useState(0)
  const [imagen, setImagen] = useState('imgs/mt09_25_24.jpg');

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-900">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Antonio Pérez Domínguez&nbsp;
          <code className="font-mono font-bold">$$$$$$</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
      </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* Componente de Título */}
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Titulo
            texto="Docs"
            tipoFuente="font-mono"
            tamanoTexto="text-2xl"
            color=""
          />
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
          <Parrafo
            texto="texto de ejemplo"
            tipoFuente="font-semibold"
            tamanoTexto="text-sm"
            color="opacity-50"
          />
        </a>

        {/* Componente de Título y Párrafo */}
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Titulo
            texto="Antonio Pérez Domínguez"
            tipoFuente="font-mono"
            tamanoTexto="text-2xl"
            color=""
          />
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
          <Parrafo
            texto="Instantly deploy your Next.js site to a shareable URL with Vercel."
            tipoFuente="font-semibold"
            tamanoTexto="text-sm"
            color="opacity-50"
          />
        </a>
          <Contador contador={contador}setContador={setContador}/>
          <CambioImagen imagen={imagen}setImagen={setImagen}/>
        
      </div>
    </main>
  );
}
