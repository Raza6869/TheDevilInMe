//next imports
import Image from "next/image";

//media
import raza from "@/public/images/RafaelThumaza.png";

export default function Contact() {
  return (
    <div className="font-andadaPro justify-center bg-[url('../public/images/contactbackground.png')] bg-contain bg-no-repeat bg-bottom h-screen w-full flex flex-col items-center gap-8 uppercase">
      <h1 className="font-bold sm:text-5xl text-3xl text-center">
        Gostou do projeto?
      </h1>
      <div className="flex flex-col items-center gap-4">
        <Image src={raza} alt="Rafael Thumaza Dev" className="sm:w-56 w-40" />
        <span className="font-bold sm:text-2xl text-xl">RAFAEL THUMAZA</span>
      </div>
      <button className="text-white font-bold bg-red-900 hover:bg-red-950 hover:scale-90 transition-all ease-in-out duration-500 py-4 px-8 rounded-xl">
        <a href="https://www.linkedin.com/in/rafael-thumaza-744b17250/">
          FALE COMIGO
        </a>
      </button>
    </div>
  );
}
