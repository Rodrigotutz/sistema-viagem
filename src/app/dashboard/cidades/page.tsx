"use client";
import { DataTable } from "@/components/app/data-table";
import { columns } from "./coluns";
import { Building2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { getCidades } from "./getCidades";
import NovaCidade from "@/components/app/nova-cidade";

export default function Page() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchCidades = async () => {
      const cidades = await getCidades();
      setData(cidades);
    };
    fetchCidades();
  }, []);

  const addCidade = async () => {
    await getCidades();
    const cidades = await getCidades();
    setData(cidades);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-orange-400 flex gap-2 items-end">
        <Building2Icon size={30} /> Cidades
      </h2>
      <div className="mt-5">
        <div className="flex justify-end w-full">
          <NovaCidade addCidade={addCidade} />
        </div>

        <div className="mt-10 bg-white p-5 rounded min-h-96 shadow-lg border-b">
          <h3 className="font-bold mb-3 text-xl text-orange-400">Cidades:</h3>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
