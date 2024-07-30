"use client"
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import UsuarioAPI from "./components/UsuarioAPI";
import BeerAPI from "./components/BeerAPI";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <BeerAPI></BeerAPI>
    </main>
  );
}
