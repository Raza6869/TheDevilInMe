import Apresentation from "@/components/apresentation";
import Synopse from "@/components/synopse";
import Trailer from "@/components/trailer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Apresentation />
      <Synopse />
      <Trailer />
    </main>
  );
}
