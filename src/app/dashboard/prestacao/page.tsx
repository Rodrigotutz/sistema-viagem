"use client";

import { useEffect, useState } from "react";
import { BanknoteIcon } from "lucide-react";
import { DataTable } from "@/components/app/data-table";
import { columns } from "./coluns";
import NovaPrestacao from "@/components/app/nova-prestacao";
import { getPrestacoes } from "@/utils/getPrestacoes";

export default function Page() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchPrestações = async () => {
      const prestacoes = await getPrestacoes();
      setData(prestacoes);
    };
    fetchPrestações();
  }, []);

  const addPrestacao = async () => {
    await getPrestacoes();
    const prestacoes = await getPrestacoes();
    setData(prestacoes);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold flex gap-2 items-end text-orange-400">
        <BanknoteIcon size={30} /> Prestação de Contas
      </h2>

      <div className="mt-5">
        <div className="flex justify-end w-full items-center">
          <NovaPrestacao addPrestacao={addPrestacao} />
        </div>

        <div className="mt-10 p-5 rounded min-h-96 bg-white shadow-xl border-b">
          <h3 className="font-bold mb-3 text-xl text-orange-400">Prestações:</h3>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
