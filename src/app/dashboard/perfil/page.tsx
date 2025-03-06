import { UserCircle } from "@/components/icons/UserCircle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="flex flex-col pt-5 pb-10 min-h-screen">
      <div className="flex flex-col md:flex-row gap-5 pb-10">
        <div className="w-full md:w-1/4 min-h-56 flex bg-white items-center flex-col border p-5 rounded-xl shadow-lg">
          <Label htmlFor="avatar">
            <UserCircle className="w-40 h-40 text-orange-300" />
          </Label>
          <div className="mt-2 text-center">
            <h2 className="text-2xl font-bold text-gray-400">Rodrigo Tutz</h2>
            <p className="text-sm text-gray-400 font-bold">Suporte Técnico</p>
            <div className="mt-3">
              <Input id="avatar" type="file" className="hidden" />
            </div>
          </div>
        </div>

        <div className="w-full bg-white border rounded flex flex-col md:flex-row justify-between gap-5 p-5 shadow-lg">
          <div className="h-full w-full rounded border flex flex-col items-center p-5 shadow">
            <h1 className="text-6xl font-bold flex-grow flex items-center text-orange-300">
              50
            </h1>
            <p className="text-center pb-5 text-gray-400">Total de Viagens</p>
          </div>

          <div className="h-full w-full rounded border flex flex-col items-center p-5 shadow">
            <h1 className="text-5xl font-bold flex-grow flex items-center text-orange-300">
              4500
            </h1>
            <p className="text-center pb-5 text-gray-400">Total gasto no mês</p>
          </div>

          <div className="h-full w-full rounded border flex flex-col items-center p-5 shadow">
            <h1 className="text-3xl font-bold text-center flex-grow flex items-center text-orange-300">
              São Raimundo Nonato - PI
            </h1>
            <p className="text-center pb-5 text-gray-400">
              Cidade mais visitada
            </p>
          </div>

          <div className="h-full w-full rounded border flex flex-col items-center p-5 shadow">
            <h1 className="text-4xl font-bold text-center flex-grow flex items-center text-orange-300">
              Jeep Renegade
            </h1>
            <p className="text-center pb-5 text-gray-400">Veiculo mais usado</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row border shadow-xl bg-white rounded relative">
        <div className="w-full md:w-1/12 flex items-center justify-center xs:rounded-t md:rounded-l bg-orange-300 p-2">
          <h3 className="text-white font-bold text-lg text-center">
            DADOS DO USUÁRIO
          </h3>
        </div>
        <div className="w-full min-h-96 flex flex-col justify-between  p-10 rounded">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="w-full">
              <Label>Nome:</Label>
              <Input
                defaultValue={"Rodrigo Antunes Rufino"}
                className="shadow"
              />
            </div>

            <div className="w-full">
              <Label>Email:</Label>
              <Input
                defaultValue={"rodrigoantunestutz@gmail.com"}
                className="shadow"
              />
            </div>

            <div className="w-full">
              <Label>Senha:</Label>
              <Input placeholder="Altere sua senha" className="shadow" />
            </div>
          </div>

          <div className="flex justify-center md:absolute md:bottom-10 md:right-20">
            <Button className="bg-orange-300 hover:bg-orange-400">Salvar Alterações</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
