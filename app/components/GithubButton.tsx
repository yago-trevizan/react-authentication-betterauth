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
      className="bg-blue-100 w-full uppercase active:bg-blue-200 py-1 rounded font-semibold text-blue-700 cursor-pointer border-2 border-blue-700"
    >
      GitHub
    </button>
  );
}
