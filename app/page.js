import Apresentation from "@/components/apresentation";
import Synopse from "@/components/synopse";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Apresentation />
      <Synopse />
    </main>
  );
}
