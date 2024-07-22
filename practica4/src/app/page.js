"use client";
import "bootstrap/dist/css/bootstrap.css";
import TableComponent from "./components/TableComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Tabla de datos</h1>
        <TableComponent />
      </div>
    </main>
  );
}
