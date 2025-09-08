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
    <div className="flex items-center justify-center">
      <Editor
        height="700px"
        width="800px"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
      <button
        onClick={runCode}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Run Code
      </button>
      <pre className="mt-2 p-3 bg-black text-green-400 rounded-lg">
        {output}
      </pre>
    </div>
  );
}
