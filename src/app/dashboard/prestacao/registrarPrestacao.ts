"use server";

import { auth } from "@/auth";
import db from "@/lib/db";

export default async function registerPrestacaoAction(formData: FormData) {
  const session = await auth();

  if (!session || !session.user) {
    return { success: false, message: "Usuário não autenticado" };
  }

  const entries = Array.from(formData.entries());
  const data: Record<string, string> = {};

  entries.forEach(([key, value]) => {
    if (typeof value === "string") {
      data[key] = value;
    }
  });

  if (!data.cidade || !data.valor || !data.tipo || !data.data) {
    return { success: false, message: "Preencha todos os campos" };
  }

  try {
    const prestacao = await db.prestacao.create({
      data: {
        cidade: data.cidade,
        valor: parseFloat(data.valor),
        tipo: data.tipo,
        userId: Number(session.user.id),
        data: new Date(data.data),
      },
    });

    if (!prestacao) {
      return { success: false, message: "Tente novamente mais tarde!" };
    }

    return { success: true, message: "Prestação registrada com sucesso!" };
  } catch (error) {
    console.error("Erro ao registrar prestação:", error);
    return {
      success: false,
      message: "Erro ao registrar a prestação. Tente novamente!",
    };
  }
}
