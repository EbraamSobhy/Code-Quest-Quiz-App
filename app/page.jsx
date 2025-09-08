import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#FFF6E8] to-[#cccaa6]">
      <div className="p-10 text-center rounded-2xl shadow-lg bg-white">
        <h1 className="text-5xl font-bold text-[#34204A] mb-6">
          Welcome to CodeQuest
        </h1>
            <img src="/Code Quest.jpg" className="h-[400px] w-[600px] mx-auto" alt="Code Quest" />
          <Link href="/Instructions">
              <button className="bg-[#34204A] text-white px-12 py-4 rounded-xl shadow-md hover:bg-[#4A2F6F] hover:scale-105 transition-all duration-300 ease-in-out mt-7 cursor-pointer">
                Let&apos;s Start
              </button>
          </Link>
      </div>
    </main>
  );
}