"use server";

import { Message } from "@/@types/message";
import { User } from "@/@types/user";
import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";

export default async function registerAction(formData: FormData): Promise<Message> {
  const entries = Array.from(formData.entries());

  const data: User = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  if (!data.name || !data.email || !data.password) {
    return { success: false, message: "Preencha todos os campos" };
  }

  const findUser = await db.usuario.findUnique({
    where: {
      email: data.email,
    },
  });

  if (findUser) {
    return { success: false, message: "Usuário já existe" };
  }

  const user: User = await db.usuario.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password),
    },
  });

  if(!user) {
    return { success: false, message: "Tente novamente mais tarde!" };
  }

  return { success: true, message: "Usuário criado com sucesso!" };
}
