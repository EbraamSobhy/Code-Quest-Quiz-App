import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/black background.jpg')" }}
    >
      <div className="w-[600px]">
        <CodeEditor />
      </div>
    </main>
  );
}
