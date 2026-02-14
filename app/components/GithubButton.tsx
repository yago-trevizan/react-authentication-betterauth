"use client";

import { authClient } from "@/lib/auth-client";

export default function GithubButton() {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <button
      onClick={signIn}
      className="bg-red-100 w-full uppercase active:bg-red-200 py-1 rounded font-semibold text-red-700 cursor-pointer border-2 border-red-700"
    >
      GitHub
    </button>
  );
}
