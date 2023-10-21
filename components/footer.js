//next imports
import Image from "next/image";

//media
import razalogo from "@/public/svg/raza-logo.svg";

export default function Footer() {
  return (
    <footer className="flex sm:gap-16 gap-8 h-[40vh] w-full text-white bg-[#414141] justify-center items-center">
      <Image src={razalogo} alt="Raza logo" className="sm:h-56 h-48 w-fit" />
      <div className="flex sm:gap-16 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-400">Sites Oficiais</h2>
          <ul>
            <li className="hover:text-gray-300 cursor-pointer">
              The Dark Pictures
            </li>
            <li className="hover:text-gray-300 cursor-pointer">Bandai Namco</li>
            <li className="hover:text-gray-300 cursor-pointer">Artstation</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-400">Rafael Thumaza</h2>
          <ul>
            <li className="hover:text-gray-300 cursor-pointer">Portfólio</li>
            <li className="hover:text-gray-300 cursor-pointer">GitHub</li>
            <li className="hover:text-gray-300 cursor-pointer">Instagram</li>
            <li className="hover:text-gray-300 cursor-pointer">Linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
