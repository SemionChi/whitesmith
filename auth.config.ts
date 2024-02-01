import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./data/user";

export default {
  trustHost: true, // for build
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFieldes = LoginSchema.safeParse(credentials);

        if (validatedFieldes.success) {
          const { email, password } = validatedFieldes.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
