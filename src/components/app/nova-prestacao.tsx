"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDropzone } from "react-dropzone";
import { ptBR } from "date-fns/locale";
import { useState, useCallback } from "react";
import { CalendarIcon, Plus, UploadCloud } from "lucide-react";
import registerPrestacaoAction from "@/app/dashboard/prestacao/registrarPrestacao";

export default function NovaPrestacao({
  addPrestacao,
}: {
  addPrestacao: (newPrestacao: any) => void;
}) {
  const [date, setDate] = useState<Date>();
  const [file, setFile] = useState<File | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    multiple: false,
  });

  const handleSubmit = async (formData: FormData) => {
    if (date) {
      formData.append("data", date.toISOString());
    }

    const newPrestacao = {
      data: date?.toISOString(),
      tipo: formData.get("tipo"),
      valor: formData.get("valor"),
      comprovante: file ? file.name : "",
    };

    addPrestacao(newPrestacao);

    const response = await registerPrestacaoAction(formData);
    if (response.success) {
      toast.success(response.message);
      setIsDialogOpen(false);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="flex p-1 rounded text-black bg-white hover:bg-white/80">
        <Plus /> Nova Prestação
      </DialogTrigger>
      <DialogContent className="dark">
        <DialogHeader>
          <DialogTitle className="text-white">
            Nova Prestação de Contas
          </DialogTitle>
          <DialogDescription className="pt-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(new FormData(e.target as HTMLFormElement));
              }}
            >
              <div className="flex gap-5">
                <div>
                  <Label htmlFor="cidade">Cidade:</Label>
                  <Select name="cidade">
                    <SelectTrigger className="w-[200px] mt-2">
                      <SelectValue placeholder="Selecione uma cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="São Luis - MA">
                        São Luis - MA
                      </SelectItem>
                      <SelectItem value="São Raimundo Nonato - PI">
                        São Raimundo Nonato - PI
                      </SelectItem>
                      <SelectItem value="Natal - RN">Natal - RN</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="data">Data:</Label>
                  <Popover>
                    <PopoverTrigger asChild className="mt-2 w-full">
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                          format(date, "PPP", { locale: ptBR })
                        ) : (
                          <span>Selecione a data</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        locale={ptBR}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex gap-5 items-center mt-5">
                <div>
                  <Label htmlFor="tipo">Tipo:</Label>
                  <Select name="tipo">
                    <SelectTrigger className="w-[200px] mt-2">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Combustível">Combustível</SelectItem>
                      <SelectItem value="Hospedagem">Hospedagem</SelectItem>
                      <SelectItem value="Alimentação">Alimentação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full">
                  <Label>Valor Gasto</Label>
                  <Input
                    id="valor"
                    name="valor"
                    placeholder="Insira o valor da viagem"
                    type="text"
                    className="w-full mt-2"
                  />
                </div>
              </div>
              {/*
              <div className="grid w-full items-center gap-1.5 mt-5">
                <Label htmlFor="comprovante">Comprovante</Label>
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-white rounded-lg p-5 text-center cursor-pointer hover:bg-white/10 transition"
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p className="text-white">Solte o arquivo aqui...</p>
                  ) : file ? (
                    <p className="text-white">{file.name}</p>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <UploadCloud size={40} className="text-white" />
                      <p className="text-white">
                        Arraste um arquivo aqui ou clique para selecionar
                      </p>
                      <p className="text-xs text-muted-foreground">
                        (Apenas imagens ou PDFs)
                      </p>
                    </div>
                  )}
                </div>
              </div> 
              */}

              <div className="mt-10 w-full">
                <Button
                  type="submit"
                  className="bg-white hover:bg-white/80 text-black font-bold w-full"
                >
                  Salvar
                </Button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
