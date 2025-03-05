"use client";
import { DataTable } from "@/components/app/data-table";
import { columns } from "./coluns";
import { Car, PlaneLanding, Plus } from "lucide-react";
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
import { Viagens } from "@/@types/viagens";

export default function Page() {
  const [usuarios, setUsuarios] = useState("");
  const data: Viagens[] = [];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-orange-400 flex gap-2 items-end">
        <PlaneLanding size={30} /> Viagens
      </h2>
      <div className="mt-5">
        <div className="flex justify-end w-full">
          <Dialog>
            <DialogTrigger className="flex p-1 rounded text-white bg-orange-400 hover:bg-orange-500">
              <Plus /> Nova Viagem
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-orange-400">
                  Nova Viagem
                </DialogTitle>
                <DialogDescription className="pt-5">
                  <form>
                    <div className="mb-3">
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input
                        id="cidade"
                        type="text"
                        placeholder="Insira o nome da cidade..."
                      />
                    </div>

                    <div className="mb-3">
                      <Label htmlFor="estado">Técnicos</Label>
                      <Select onValueChange={setUsuarios} value={usuarios}>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Selecione um técnico" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="São Luis - MA">
                            Rodrigo Tutz
                          </SelectItem>
                          <SelectItem value="São Raimundo Nonato - PI">
                            Carlos Raniere
                          </SelectItem>
                        </SelectContent>
                      </Select>
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
          <h3 className="font-bold mb-3 text-xl">Viagens:</h3>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
