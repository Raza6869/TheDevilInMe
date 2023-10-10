import Image from "next/image";
import DarkPictureLogo from "@/svg/darkpictureslogo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-[42%] ">
      <Image
        src={DarkPictureLogo}
        alt="Logo da Dark Pictures"
        className="w-12 cursor-pointer hover:scale-105 transition-all duration-700"
      />
      <ul className="flex gap-6 font-andadaPro uppercase">
        <li className="hover:text-darkred cursor-pointer">sobre</li>
        <li className="hover:text-darkred cursor-pointer">personagens</li>
        <li className="hover:text-darkred cursor-pointer">compre agora</li>
      </ul>
    </header>
  );
}
