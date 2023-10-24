//next imports
import Image from "next/image";

//media
import razalogo from "@/public/svg/raza-logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex sm:gap-16 gap-8 h-[40vh] w-full text-white bg-[#414141] justify-center items-center">
      <Image src={razalogo} alt="Raza logo" className="sm:h-56 h-48 w-fit" />
      <div className="flex sm:gap-16 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-400">Sites Oficiais</h2>
          <ul>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="https://www.thedarkpictures.com/the-devil-in-me">
                The Dark Pictures
              </a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="https://en.bandainamcoent.eu/the-dark-pictures/the-dark-pictures-the-devil-in-me">
                Bandai Namco
              </a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="https://magazine.artstation.com/2023/01/supermassive-games-the-devil-in-me-art-blast/">
                Artstation
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-400">Rafael Thumaza</h2>
          <ul>
            <li className="hover:text-gray-300 cursor-pointer">
              <Link href="/inprogress">Portfólio</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="https://github.com/Raza6869">GitHub</a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="https://www.instagram.com/rafa_thumaza/">Instagram</a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a className="https://www.linkedin.com/in/rafael-thumaza-744b17250/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
