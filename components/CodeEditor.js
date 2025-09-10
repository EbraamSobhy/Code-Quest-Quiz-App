"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      let logs = [];
      const log = console.log;
      console.log = (...args) => logs.push(args.join(" "));

      eval(code);

      console.log = log;
      setOutput(logs.join("\n"));
    } catch (err) {
      setOutput(err.message);
    }
  };

  return (
    <div className="flex flex-col w-full h-[90vh] rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-[#1e1e1e]">
      {/* 🔹 Header Bar */}
      <div className="flex items-center justify-between bg-[#2d2d2d] px-5 py-3 border-b border-gray-700">
        <h2 className="text-white font-semibold text-lg">JavaScript Editor</h2>
        <button
          onClick={runCode}
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          ▶ Run
        </button>
      </div>

      {/* 🔹 Main Area */}
      <div className="flex flex-1">
        {/* Editor Section */}
        <div className="flex-1">
          <Editor
            height={600}
            width={2000}
            defaultLanguage="javascript"
            value={code}
            onChange={(value) => setCode(value || "")}
            theme="vs-dark"
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              automaticLayout: true,
            }}
          />
        </div>

        {/* Output Section */}
        <div className="w-[35%] bg-black text-green-400 p-4 overflow-y-auto text-sm font-mono border-l border-gray-700">
          <h3 className="text-white font-bold mb-2">Output:</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}
