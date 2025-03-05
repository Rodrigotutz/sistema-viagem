"use client";
import { DataTable } from "@/components/app/data-table";
import { columns } from "./coluns";
import { Building2Icon, Plus } from "lucide-react";
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
import { Cidades } from "@/@types/cidades";

export default function Page() {
  const data: Cidades[] = [];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-orange-400 flex gap-2 items-end">
        <Building2Icon size={30} /> Cidades
      </h2>
      <div className="mt-5">
        <div className="flex justify-end w-full">
          <Dialog>
            <DialogTrigger className="flex p-1 rounded text-white bg-orange-400 hover:bg-orange-500">
              <Plus /> Nova Cidade
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-orange-400">
                  Nova Cidade
                </DialogTitle>
                <DialogDescription className="pt-5">
                  <form>
                    <div className="mb-3">
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input
                        id="cidade"
                        type="text"
                        placeholder="Insira o nome da Cidade..."
                      />
                    </div>

                    <div className="mb-3">
                      <Label htmlFor="estado">Estado</Label>
                      <Input
                        id="estado"
                        type="text"
                        placeholder="Insira o Estado..."
                      />
                    </div>

                    <div className="mt-10 w-full">
                      <Button className="bg-orange-500 hover:bg-orange-400 text-white w-full">
                        Salvar
                      </Button>
                    </div>
                  </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-10 bg-white p-2 rounded min-h-96">
          <h3 className="font-bold mb-3 text-xl">Cidades:</h3>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
