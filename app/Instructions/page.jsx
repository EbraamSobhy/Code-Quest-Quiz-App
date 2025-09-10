'use client';
import { useEffect } from "react";
import React from "react";

export default function Instructions() {
  useEffect(() => {
    document.title = "Instructions";
  }, []);
  return (
    <>
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#FFF6E8] to-[#cccaa6] p-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-2xl w-full text-center">
        
        {/* Page heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-[#333333]">
          Instructions
        </h1>
        
        {/* Introduction text */}
        <p className="text-2xl md:text-lg text-gray-700 mb-8">
          Welcome to the <b>CodeQuest</b> Coding Quiz! Please read the following instructions carefully before you begin.
        </p>

        {/* List of instructions */}
        <ol className="text-left text-gray-800 list-disc space-y-3 mb-8 ml-5">
          <li className="text-md md:text-lg">
            This quiz contains <span className="font-semibold">10 problem solving questions</span> 5 on JavaScript and 5 on Python.
          </li>
          <li className="text-md md:text-lg">
            You will have a total of <span className="font-semibold">20 minutes</span> to complete the quiz.
          </li>

          <li className="text-md md:text-lg">
            Once you answer a question, you can go to the next question and <span className="font-semibold">cannot go back</span> to change it.
          </li>
          <li className="text-md md:text-lg">
            Your final score will be displayed at the end of the quiz.
          </li>
          <li className="text-md md:text-lg">
            make a <b> ScreenShot </b> of your score and send it to me.
          </li>
        </ol>

        <a href="/Login">
          <button className="bg-[#34204A] text-white px-12 py-4 rounded-xl shadow-md hover:bg-[#4A2F6F] hover:scale-105 transition-all duration-300 ease-in-out mt-7 cursor-pointer font-bold">
                Login
          </button>
        </a>
      </div>
    </main>
    </>
  );
}