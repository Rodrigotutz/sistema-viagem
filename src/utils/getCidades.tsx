"use server";
import db from "@/lib/db";

export async function getCidades() {
  const cidades = await db.cidade.findMany({
    orderBy: {
      cidade: "asc",
    },
  });

  return cidades.map((cidade: any) => ({
    ...cidade,
  }));
}
