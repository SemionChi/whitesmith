import NextAuth, { Session } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "./lib/db";
import { getUserById } from "./data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ session, token }: { session: Session; token?: any }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const exisitngUser = await getUserById(token.sub);
      if (!exisitngUser) return token;

      token.role = exisitngUser.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
