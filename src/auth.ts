import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findUserByCredentials } from "./lib/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = await findUserByCredentials(
          credentials.email as string,
          credentials.password as string
        );
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (user) {
        session.user.id = user.id as string;
      } else if (token) {
        session.user.id = (token as { id: string }).id;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
      }
      return token;
    },
  },
});
