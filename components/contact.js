//next imports
import Image from "next/image";

//media
import raza from "@/public/images/RafaelThumaza.png";

export default function Contact() {
  return (
    <div className="font-andadaPro justify-center bg-[url('../public/images/contactbackground.png')] bg-contain bg-no-repeat bg-bottom h-screen w-full flex flex-col items-center gap-8 uppercase">
      <h1 className="font-bold text-5xl">Gostou do projeto?</h1>
      <div className="flex flex-col items-center gap-4">
        <Image src={raza} alt="Rafael Thumaza Dev" className="w-56" />
        <span className="font-bold text-2xl">RAFAEL THUMAZA</span>
      </div>
      <button className="text-white font-bold bg-red-900 hover:bg-red-950 hover:scale-90 transition-all ease-in-out duration-500 py-4 px-8 rounded-xl">
        FALE COMIGO
      </button>
    </div>
  );
}
