"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import BlueToastButton from "./components/BlueToastButton";
import ModalButton from "./components/ModalButton";
import CarouselComponent from "./components/CarouselComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <BlueToastButton />
        <ModalButton />
        <CarouselComponent />
      </div>
    </main>
  );
}
