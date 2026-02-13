import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { signOut } from "../actions/auth";

export default async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="h-20 flex items-center justify-end pr-6 bg-blue-900">
      <p className="text-xl text-blue-50 font-semibold">
        Hello, {session?.user.name}
      </p>

      <button
        onClick={signOut}
        type="button"
        className="cursor-pointer text-orange-200 ml-5 hover:underline"
      >
        Sign Out
      </button>
    </div>
  );
}
