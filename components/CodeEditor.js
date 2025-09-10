"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import ProblemBank from "@/app/data/ProblemBank";
import ScoreBoard from "@/app/Score-Resut/page";

export default function CodeEditor() {
  const [language, setLanguage] = useState("javascript");
  const [selectedProblem, setSelectedProblem] = useState(ProblemBank[0]);
  const [code, setCode] = useState(selectedProblem.starterCode["javascript"]);
  const [theme, setTheme] = useState("vs-dark");
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState({});

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleProblemChange = (e) => {
    const problem = ProblemBank.find((p) => p.id === parseInt(e.target.value));
    setSelectedProblem(problem);
    setCode(problem.starterCode[language]);
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(selectedProblem.starterCode[newLang]);
  };

  const handleSubmit = () => {
    const correctSolution = selectedProblem.solution?.[language];
    let isCorrect = false;

    if (correctSolution && code.replace(/\s+/g, "") === correctSolution.replace(/\s+/g, "")) {
      isCorrect = true;
    }

    setAttempted((prev) => ({
      ...prev,
      [selectedProblem.id]: isCorrect,
    }));

    const newScore = Object.values({
      ...attempted,
      [selectedProblem.id]: isCorrect,
    }).filter(Boolean).length;

    setScore(newScore);
  };

  return (
    <div className="flex w-full h-[90vh] rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-[#1e1e1e]">
      {/* Left Panel */}
      <div className="w-1/2 p-5 text-white overflow-y-auto border-r border-gray-700">
        <h2 className="text-xl font-bold">{selectedProblem.title}</h2>
        <p className="mt-2 text-gray-300">{selectedProblem.description}</p>

        <h3 className="mt-4 font-semibold">Examples:</h3>
        <ul className="list-disc ml-5 text-gray-400">
          {selectedProblem.examples.map((ex, i) => (
            <li key={i}>
              <strong>Input:</strong> {ex.input} <br />
              <strong>Expected:</strong> {ex.output}
            </li>
          ))}
        </ul>

        {/* ✅ ScoreBoard Component */}
        <div className="mt-6">
          <ScoreBoard score={score} total={ProblemBank.length} />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col w-1/2">
        {/* Toolbar */}
        <div className="flex items-center justify-between bg-[#2d2d2d] px-5 py-3 border-b border-gray-700">
          <select
            value={selectedProblem.id}
            onChange={handleProblemChange}
            className="bg-[#1e1e1e] text-white px-3 py-2 rounded-md border border-gray-600"
          >
            {ProblemBank.map((problem) => (
              <option key={problem.id} value={problem.id}>
                {problem.title}
              </option>
            ))}
          </select>

          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-[#1e1e1e] text-white px-3 py-2 rounded-md border border-gray-600"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>

        {/* Monaco Editor */}
        <div className="flex flex-1">
          <Editor
            height="100%"
            width="100%"
            language={language}
            value={code}
            theme={theme}
            onChange={handleEditorChange}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md transition font-extrabold text-xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
