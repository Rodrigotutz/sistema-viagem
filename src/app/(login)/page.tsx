"use client";

import { useRouter } from "next/navigation";
import Form from "next/form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import PassowordInput from "@/components/app/passowrd-input";
import loginAction from "./loginAction";

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (data: FormData) => {
    const result = await loginAction(data);
    if (result.success) {
      toast.info(result.message);
      router.push("/dashboard/prestacao");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <main className="w-full h-screen flex items-center justify-center flex-col">
      <Form
        action={handleSubmit}
        className="border p-5 rounded w-96 bg-white shadow-lg"
      >
        <div className="mb-5">
          <h2 className="text-xl font-bold">Login</h2>
        </div>
        <div className="mb-5">
          <Label htmlFor="email" className="mb-1">
            Email
          </Label>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Insira seu email"
          />
        </div>

        <PassowordInput />

        <div className="w-full">
          <Button className="w-full">Entrar</Button>
        </div>
      </Form>

      <div className="mt-5 text-md flex gap-1 justify-end opacity-75 text-gray-700">
        <span>Não tem uma conta?</span>
        <Link href={"/registrar"} className="font-bold">
          Cadastre-se
        </Link>
      </div>
    </main>
  );
}
