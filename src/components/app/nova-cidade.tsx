"use client";

import Form from "next/form";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import registerCidadeAction from "@/utils/registerCidade";
import { toast } from "sonner";
import { Plus } from "lucide-react";

export default function NovaCidade({
  addCidade,
}: {
  addCidade: (novaCidade: any) => void;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    addCidade(NovaCidade);
    const response = await registerCidadeAction(formData);
    if (response.success) {
      toast.success(response.message);
      setIsDialogOpen(false);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="flex p-1 rounded text-white bg-orange-400 hover:bg-orange-500">
        <Plus /> Nova Cidade
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-orange-400">Nova Cidade</DialogTitle>
          <Form action={handleSubmit} className="pt-5 flex flex-col gap-3">
            <div className="mb-2">
              <Label htmlFor="cidade" className="mb-2">
                Cidade
              </Label>
              <Input
                id="cidade"
                type="text"
                name="cidade"
                placeholder="Insira o nome da Cidade..."
              />
            </div>

            <div className="flex gap-5">
              <div className="mb-2 w-full">
                <Label htmlFor="estado" className="mb-2">
                  Estado
                </Label>
                <Input
                  id="estado"
                  type="text"
                  name="estado"
                  placeholder="Insira o Estado..."
                />
              </div>

              <div className="mb-2">
                <Label htmlFor="sigla" className="mb-2">
                  Sigla
                </Label>
                <Input
                  className="w-32"
                  id="sigla"
                  type="text"
                  name="sigla"
                  placeholder="Sigla"
                />
              </div>
            </div>

            <div className="w-full">
              <Button className="bg-orange-500 hover:bg-orange-400 text-white w-full">
                Salvar
              </Button>
            </div>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
