import { UserCircle } from "@/components/icons/UserCircle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="flex flex-col pt-5 pb-10">
      <div className="flex item gap-5 pb-10">
        <div className="w-1/4 min-h-56 flex items-center flex-col border p-5 rounded-xl shadow-lg">
          <Label htmlFor="avatar">
            <UserCircle className="w-40 h-40 text-orange-500/50" />
          </Label>
          <div className="mt-2 text-center">
            <h2 className="text-2xl font-bold text-gray-400">Rodrigo Tutz</h2>
            <p className="text-sm text-gray-400 font-bold">Suporte Técnico</p>
            <div className="mt-3">
              <Input id="avatar" type="file" className="hidden" />
            </div>
          </div>
        </div>

        <div className="w-full border rounded flex justify-between gap-5 p-5 shadow-lg">
          <div className="h-full w-full rounded border flex flex-col items-center p-5 shadow">
            <h1 className="text-6xl font-bold flex-grow flex items-center text-orange-500/50">
              50
            </h1>
            <p className="text-center pb-5 text-gray-400">Total de Viagens</p>
          </div>

          <div className="h-full w-full rounded border flex flex-col items-center p-5 shadow">
            <h1 className="text-5xl font-bold flex-grow flex items-center text-orange-500/50">
              4500
            </h1>
            <p className="text-center pb-5 text-gray-400">Total gasto no mês</p>
          </div>

          <div className="h-full w-full rounded border flex flex-col items-center p-5 shadow">
            <h1 className="text-3xl font-bold text-center flex-grow flex items-center text-orange-500/50">
              São Raimundo Nonato - PI
            </h1>
            <p className="text-center pb-5 text-gray-400">
              Cidade mais visitada
            </p>
          </div>

          <div className="h-full w-full rounded border flex flex-col items-center p-5 shadow">
            <h1 className="text-4xl font-bold text-center flex-grow flex items-center text-orange-500/50">
              Jeep Renegade
            </h1>
            <p className="text-center pb-5 text-gray-400">Veiculo mais usado</p>
          </div>
        </div>
      </div>

      <div className="flex border shadow-xl rounded">
        <div className="w-1/12 flex items-center justify-center rounded-l bg-orange-500/70 p-2">
          <h3 className="text-white font-bold text-lg text-center">
            DADOS DO USUÁRIO
          </h3>
        </div>
        <div className=" w-full min-h-96 flex flex-col  p-10 rounded">
          <div className="flex justify-between gap-5">
            <div className="w-full">
              <Label>Nome:</Label>
              <Input value={"Rodrigo Antunes Rufino"} className="shadow" />
            </div>

            <div className="w-full">
              <Label>Email:</Label>
              <Input
                value={"rodrigoantunestutz@gmail.com"}
                className="shadow"
              />
            </div>

            <div className="w-full">
              <Label>Telefone:</Label>
              <Input value={"(17) 98133-7392"} className="shadow" />
            </div>
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <div className="w-full">
              <Label>Endereço:</Label>
              <Input value={"Travessa do circuito"} className="shadow" />
            </div>

            <div className="w-full">
              <Label>Bairro:</Label>
              <Input value={"Centro"} className="shadow" />
            </div>

            <div className="w-full">
              <Label>CEP:</Label>
              <Input value={"11218-200"} className="shadow" />
            </div>

            <div className="w-1/4">
              <Label>Estado:</Label>
              <Input value={"SP"} className="shadow" />
            </div>

            <div className="w-1/4">
              <Label>N°</Label>
              <Input value={"1235"} className="shadow" />
            </div>
          </div>


          <div className="flex justify-end mt-20">
            <Button className="bg-orange-500/80">Salvar Alterações</Button>
          </div>

        </div>
      </div>
    </div>
  );
}
