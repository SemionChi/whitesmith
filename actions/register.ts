"use server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "invalid fields!" };
  }

  const { name, email, password } = validateFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const exisitngUser = await getUserByEmail(email);
  if (exisitngUser) {
    return { error: "Email already used" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  return { success: "User created" };
};
