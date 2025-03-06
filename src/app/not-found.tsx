import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="font-bold text-4xl">Página não encontrada</h1>
      <Link href={"/"} className="flex items-center gap-1">
        <ArrowLeft size={15} /> Voltar
      </Link>
    </div>
  );
}
