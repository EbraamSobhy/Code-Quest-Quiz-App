// app/components/ScoreBoard.jsx
"use client";

export default function ScoreBoard({ score, total }) {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-md border border-gray-700 text-center">
      <h3 className="text-lg font-bold">Your Score</h3>
      <p className="text-xl font-extrabold mt-2">
        {score} / {total}
      </p>
    </div>
  );
}
