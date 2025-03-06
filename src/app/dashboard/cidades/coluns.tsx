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
import { Cidades } from "@/@types/cidades";

export const columns: ColumnDef<Cidades>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "cidade",
    header: "Cidade",
  },
  {
    accessorKey: "estado",
    header: "Estado",
  },
  {
    accessorKey: "sigla",
    header: "Sigla",
  },
  {
    id: "actions",
    header: "Ação",
    cell: ({ row }) => {
      const cidade = row.original;

      return (
        <div className="flex gap-3   items-center">
          <AlertDialog>
            <AlertDialogTrigger>
              <Edit size={18} className="text-blue-500" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-blue-500 text-2xl font-bold">
                  Editar Cidade
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
            <AlertDialogTrigger>
              <Trash size={18} className="text-red-500" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-red-500 text-2xl font-bold">
                  Tem certeza?
                </AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col">
                  <span>
                    Você realmente gostaria de excluir a Cidade
                    {cidade.cidade}?
                  </span>
                  <span className="underline">
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
