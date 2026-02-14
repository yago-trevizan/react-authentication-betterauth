import { signIn } from "@/app/actions/auth";
import Link from "next/link";
import ErrorMessage from "@/app/components/ErrorMessage";
import GithubButton from "@/app/components/GithubButton";

export default function SignInPage() {
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-blue-950">
      <div className="border-4 border-orange-700 w-md p-5 rounded-md bg-zinc-100">
        <h1 className="text-orange-700 text-2xl font-semibold text-center">
          Tell us who you are
        </h1>

        <form action={signIn} className="flex flex-col gap-y-5 mt-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-white py-1 px-2 border border-zinc-700 rounded"
            required
          />

          <input
            type="text"
            name="password"
            placeholder="Password"
            className="bg-white py-1 px-2 border border-zinc-700 rounded"
            required
          />

          <button
            type="submit"
            className="bg-orange-100 active:bg-orange-200 py-1 rounded font-semibold text-orange-700 cursor-pointer border-2 border-orange-700 uppercase"
          >
            Sign In
          </button>

          <ErrorMessage />
        </form>

        <h1 className="text-center text-xl my-5 text-zinc-700 font-semibold">
          OR
        </h1>

        <GithubButton />
      </div>

      <div className="flex items-center gap-x-2 mt-5">
        <p className="text-lg text-blue-50"> Don't you have an account yet?</p>

        <Link
          className="text-lg text-orange-200 hover:underline"
          href="/signup"
        >
          Click here
        </Link>
      </div>
    </div>
  );
}
