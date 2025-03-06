"use server";
import { auth } from "@/auth";
import db from "@/lib/db";

export async function getPrestacoes() {
  const session = await auth();

  if (!session || !session.user?.id) {
    return {success: false, message: "Tente novamente mais tarde"};
  }

  const userId = Number(session.user.id);

  if (isNaN(userId)) {
    return;
  }

  const prestacoes = await db.prestacao.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      userId: userId,
    },
  });

  return prestacoes.map((prestacao) => ({
    ...prestacao,
    data: prestacao.data.toLocaleDateString("pt-BR"),
  }));
}
