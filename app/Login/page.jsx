'use client';
import { useEffect, useState } from "react";
import React from "react";

export default function Login() {
    useEffect(() => {
        document.title = "Login";
      }, []);

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#FFF6E8] to-[#cccaa6] p-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-2xl w-full text-center">
         <form className="space-y-5 mb-5">
          <div className="flex items-center gap-3">
            <label className="w-24 text-xl text-black font-bold">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3">
            <label className="w-24 text-xl font-bold text-gray-700">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </form>

        <a href="/Code-Editor">
          <button 
          className="bg-[#34204A] text-white px-12 py-4 rounded-xl shadow-md hover:bg-[#4A2F6F] hover:scale-105 transition-all duration-300 ease-in-out mt-7 cursor-pointer font-bold"
          type="submit"
          >
                Let&apos;s Start
          </button>
        </a>
      </div>
    </main>
  );
}