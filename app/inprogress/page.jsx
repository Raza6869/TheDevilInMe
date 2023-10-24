import Link from "next/link";

export default function InProgress() {
  return (
    <main className=" bg-gradient-to-br from-white to-yellow-100 h-screen w-full px-40 py-48 ">
      <div className="font-bold font-andadaPro flex flex-col gap-2 mb-14">
        <h1 className="text-redbase text-6xl">EM PROGRESSO...</h1>
        <p>
          AInda e desenvolvimento, mas logo estará disponível. Por favor, volte
          mais tarde.
        </p>
      </div>
      <Link href="/" className="text-xl uppercase font-bold text-redbase">
        <i className="bi bi-arrow-left"></i> voltar
      </Link>
    </main>
  );
}
