"use server";

import { APIError } from "better-auth/api";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    redirect("/");
  } catch (error) {
    if (error instanceof APIError) {
      redirect(`/signin?error=${error.message}`);
    }
  }
}

export async function signUp(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    redirect("/");
  } catch (error) {
    if (error instanceof APIError) {
      redirect(`/signup?error=${error.message}`);
    }
  }
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/signin");
}
