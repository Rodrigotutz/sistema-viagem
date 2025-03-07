"use client";
import { columns } from "@/app/dashboard/prestacao/coluns";
import { DataTable } from "@/components/app/data-table";

export function Prestacao(data: any) {
  return (
    <div className="mt-10 p-5 rounded min-h-96 bg-white shadow-xl border-b">
      <h3 className="font-bold mb-3 text-xl text-orange-400">Prestações:</h3>
      <DataTable columns={columns} data={data.data} />
    </div>
  );
}
