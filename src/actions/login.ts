"use server";

import * as z from "zod";
import { LoginSchema } from "../schemas";
import { signIn } from "../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (errors) {
    if (errors instanceof AuthError) {
      switch (errors.type) {
        case "CredentialsSignin":
          return { errors: "Invalid credentials!" };
        default:
          return { errors: "Something went wrong!" };
      }
    }

    throw errors;
  }
};
