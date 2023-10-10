import Apresentation from "@/components/apresentation";
import Synopse from "@/components/synopse";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Apresentation />
      <Synopse />
    </main>
  );
}
