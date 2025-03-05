'use server'
import db from "@/lib/db";

export async function getPrestacoes() {
  const prestacoes = await db.prestacao.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return prestacoes.map(prestacao => ({
    ...prestacao,
    data: prestacao.data.toLocaleDateString("pt-BR"),
  }));
}
