"use server";

import { User } from "@/@types/user";
import { signIn } from "@/auth";

export default async function loginAction(formData: FormData) {
  const entries = Array.from(formData.entries());

  const data: User = Object.fromEntries(entries) as {
    email: string;
    password: string;
  };

  if (!data.email || !data.password) {
    return { success: false, message: "Preencha todos os campos" };
  }

  try {
    await signIn("credentials", {
      email: data.email as string,
      password: data.password as string,
      redirect: false,
    });
    return { success: true, message: "Login efetuado com sucesso!" };
  } catch (e: any) {
    if (e.type === "CredentialsSignin") {
      return { success: false, message: "Email ou senha inválidos" };
    }
  }
  return { success: false, message: "Tente novamente mais tarde!" };
}
