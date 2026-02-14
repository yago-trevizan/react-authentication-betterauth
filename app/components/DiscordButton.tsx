"use client";

import { authClient } from "@/lib/auth-client";

export default function DiscordButton() {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "discord",
    });
  };

  return (
    <button
      onClick={signIn}
      className="bg-purple-100 w-full uppercase active:bg-purple-200 py-1 rounded font-semibold text-purple-700 cursor-pointer border-2 border-purple-700"
    >
      Discord
    </button>
  );
}
