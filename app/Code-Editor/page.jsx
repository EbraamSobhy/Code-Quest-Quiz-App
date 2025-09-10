"use client"
import CodeEditor from "@/components/CodeEditor";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [username, setName] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setName(storedUsername);
    }
  }, []);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#FFF6E8] to-[#cccaa6]">
      <nav className="w-full bg-black backdrop-blur-md text-white px-8 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold tracking-wide">
            <img src="/CodeQuestIcon.png" className="h-[50px] w-[50px] mx-auto" alt="Code Quest" />
        </div>

        {/* Links */}
        <div className="flex gap-6 text-white text-3xl font-extrabold mr-10">
          {username}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-[1000px]">
          <CodeEditor />
        </div>
      </div>
    </main>
  );
}
