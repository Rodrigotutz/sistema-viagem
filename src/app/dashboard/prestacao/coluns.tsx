"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Edit, Trash } from "lucide-react";
import { Prestacoes } from "@/@types/prestacoes";

export const columns: ColumnDef<Prestacoes>[] = [
  {
    accessorKey: "cidade",
    header: "Cidade",
    cell: ({ row }) => {
      const prestacao = row.original;

      return (
        <div>
          {prestacao.cidade}
        </div>
      );
    },
  },
  {
    accessorKey: "data",
    header: "Data",
  },
  {
    accessorKey: "valor",
    header: "Valor",
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
  },
  {
    id: "actions",
    header: "Ação",
    cell: ({ row }) => {
      const prestacao = row.original;

      return (
        <div className="flex gap-3   items-center">
          <AlertDialog>
            <AlertDialogTrigger className="cursor-pointer">
              <Edit size={18} className="text-blue-500" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-blue-500 text-2xl font-bold">
                  Editar Prestação
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Disponível em breve...
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-blue-500 hover:bg-blue-400">
                  Salvar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger className="cursor-pointer">
              <Trash size={18} className="text-red-500" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-red-500 text-2xl font-bold">
                  Tem certeza?
                </AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col">
                  <span>
                    Você realmente gostaria de excluir a Prestação de Contas de{" "}
                  </span>
                  <span>{prestacao.cidade}?</span>
                  <span className="mt-5 text-red-500">
                    Essa ação não poderá ser desfeita!
                  </span>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction className="bg-red-500 hover:bg-red-400">
                  Excluir
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
