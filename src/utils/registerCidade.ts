"use server";

import db from "@/lib/db";

export default async function registerCidadeAction(formData: FormData) {
  const entries = Array.from(formData.entries());
  const data: Record<string, string> = {};

  entries.forEach(([key, value]) => {
    if (typeof value === "string") {
      data[key] = value;
    }
  });


  if (!data.cidade || !data.estado || !data.sigla) {
    return { success: false, message: "Preencha todos os campos" };
  }

  const findCidade = await db.cidade.findUnique({
    where: {
      cidade: data.cidade,
    },
  });

  if (findCidade) {
    return { success: false, message: "Cidade já existe" };
  }

  try {
    const cidade = await db.cidade.create({
      data: {
        cidade: data.cidade,
        estado: data.estado,
        sigla: data.sigla,
      },
    });

    if (!cidade) {
      return { success: false, message: "Tente novamente mais tarde!" };
    }
    return { success: true, message: "Cidade criada com sucesso" };
  } catch (e: any) {
    console.log(e)
    return {
        success: false,
        message: "Erro ao salvar cidade. Tente novamente!",
      };
  }
}
