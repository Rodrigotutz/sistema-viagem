"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import registerAction from "../../utils/registerAction";
import PassowordInput from "@/components/app/passowrd-input";

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (data: FormData) => {
    const result = await registerAction(data);
    if (result.success) {
      toast.success(result.message);
      router.push("/");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <main className="w-full h-screen flex items-center justify-center flex-col shadow">
      <Form action={handleSubmit} className="border p-5 rounded w-96 bg-white">
        <div className="mb-5">
          <h2 className="text-xl font-bold">Cadastre-se</h2>
        </div>

        <div className="mb-5">
          <Label htmlFor="name" className="mb-1">
            Nome
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Insira seu Nome"
          />
        </div>

        <div className="mb-5">
          <Label htmlFor="email" className="mb-1">
            Email
          </Label>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="email@email.com"
          />
        </div>

        <PassowordInput />

        <div className="w-full">
          <Button className="w-full">Cadastrar</Button>
        </div>
      </Form>

      <div className="mt-5 text-md flex gap-1 justify-end opacity-75 text-gray-600">
        <span>Já tem uma conta?</span>
        <Link href={"/"} className="font-bold">
          Faça o login
        </Link>
      </div>
    </main>
  );
}
