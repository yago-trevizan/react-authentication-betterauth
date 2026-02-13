import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-blue-950 flex items-center justify-center">
        <div className="border-4 rounded border-orange-700 w-md p-5 bg-orange-50">
          <h1 className="text-orange-700 text-2xl font-semibold text-center">
            Congratulations! You've logged in using{" "}
            <span className="italic">BetterAuth</span>!
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}
