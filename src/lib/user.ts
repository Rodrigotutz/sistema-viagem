import db from "./db";
import { compareSync } from "bcrypt-ts";

export async function findUserByCredentials(email: string, password: string) {
  const user = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    return null;
  }

  const passwordMatch = compareSync(password, user.password);

  if (passwordMatch) {
    return { id: user.id.toString(), email: user.email, name: user.name };
  }

  return null;
}
