"use client";
import { DataTable } from "@/components/app/data-table";
import { columns } from "./coluns";
import { PlaneLanding, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Tecnicos } from "@/@types/tecnicos";

export default function Page() {
  const [usuarios, setUsuarios] = useState("");
  const data: Tecnicos[] = [];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-orange-400 flex gap-2 items-end">
        <PlaneLanding size={30} /> Técnicos
      </h2>
      <div className="mt-5">
        <div className="flex justify-end w-full">
          <Dialog>
            <DialogTrigger className="flex p-1 rounded text-white bg-orange-400 hover:bg-orange-500">
              <Plus /> Novo Técnico
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-orange-400">
                  Novo Técnico
                </DialogTitle>
                <form className="pt-5">
                  <div className="mb-3">
                    <Label htmlFor="cidade" className="mb-2">Nome</Label>
                    <Input
                      id="cidade"
                      type="text"
                      placeholder="Insira o nome do técnico..."
                    />
                  </div>

                  <div className="mt-10 w-full">
                    <Button className="bg-orange-500 hover:bg-orange-400 text-white w-full">
                      Salvar
                    </Button>
                  </div>
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-10 bg-white p-2 rounded min-h-96">
          <h3 className="font-bold mb-3 text-xl">Viagens:</h3>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
