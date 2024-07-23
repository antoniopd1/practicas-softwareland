"use client"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import FormComponent from "./components/FormComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <h1>Registro de Usuarios</h1>
        <FormComponent />
      </Container>
    </main>
  );
}
