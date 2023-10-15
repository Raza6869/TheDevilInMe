//next imports
import Image from "next/image";

//media
import charlie from "../images/CharlieLonnit.png";

export default function Characters() {
  return (
    <div className="h-screen ">
      <div className="bg-[url('../images/charliebackground.png')] bg-cover w-full h-full flex px-72 overflow-hidden">
        <div className="text-white py-10 flex flex-col justify-around">
          <div className="font-kronaOne text-8xl uppercase">
            <h1>Charlie</h1>
            <h1 className="font-gothic text-blue-400">Lonnit</h1>
            <div className="bg-blue-400 h-[2px] mt-4 w-full"></div>
          </div>
          <p className="">
            Fundador da Lonnit Entertainment e diretor do documentário
            Architects of Murder. Charles é um dos cinco personagens jogáveis em
            The Devil In Me. <br />
            <br /> Charlie aparece como um homem de temperamento explosivo, que
            enfrenta a raiva com mais raiva. Ele é muito exigente e severo com
            sua tripulação, não tem vergonha de repreendê-los e insultá-los por
            seu mau trabalho ou atitude.
          </p>
          <div mt-8>
            <ul className="flex gap-2 text-blue-400 text-2xl uppercase ">
              <li className="hover:scale-110 transition-all ease-in-out duration-500">
                FURIOSO
              </li>
              <li>-</li>
              <li className="hover:scale-110 transition-all ease-in-out duration-500">
                DETERMINADO
              </li>
              <li>-</li>
              <li className="hover:scale-110 transition-all ease-in-out duration-500">
                ANSIOSO
              </li>
            </ul>
          </div>
          <div className="flex font-andadaPro gap-4 font-bold text-xl ">
            <button className="uppercase py-3 px-6 hover:px-8 transition-all ease-in-out border-2 border-white rounded-md">
              Anterior
            </button>
            <button className="uppercase bg-white text-darkgray py-3 px-6 rounded-md hover:px-8 transition-all ease-in-out">
              Próximo
            </button>
          </div>
        </div>
        <Image
          src={charlie}
          alt="charlie"
          className="w-fit hover:translate-x-10 transition-all ease-in-out duration-700"
        />
      </div>
    </div>
  );
}
