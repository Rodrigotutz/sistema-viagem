"use client";

import { useEffect, useState } from "react";
import { BanknoteIcon } from "lucide-react";
import NovaPrestacao from "@/components/app/nova-prestacao";
import { getPrestacoes } from "@/utils/getPrestacoes";
import { Prestacao } from "@/components/app/prestacao";

export default function Page() {
  const [data, setData] = useState<any>([]);

  const addPrestacao = async () => {
    await getPrestacoes();
    const prestacoes = await getPrestacoes();
    setData(prestacoes);
  };

  useEffect(() => {
    const fetchPrestações = async () => {
      const prestacoes = await getPrestacoes();
      setData(prestacoes);
    };
    fetchPrestações();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold flex gap-2 items-end text-orange-400">
        <BanknoteIcon size={30} /> Prestação de Contas
      </h2>

      <div className="mt-5">
        <div className="flex justify-end w-full items-center">
          <NovaPrestacao addPrestacao={addPrestacao} />
        </div>
      </div>

      <Prestacao data={data}/>
    </div>
  );
}
