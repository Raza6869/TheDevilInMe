//components
import BuyButton from "./buy-button";

//medias
import steam from "@/public/svg/steam.svg";
import play4 from "@/public/svg/play4.svg";
import play5 from "@/public/svg/play5.svg";
import xboxone from "@/public/images/xboxone.png";
import xboxs from "@/public/images/xboxs.png";

export default function BuyNow() {
  return (
    <div
      className="py-32 flex flex-col items-center justify-center gap-12"
      id="buyNow"
    >
      <h1 className="sm:text-5xl text-3xl uppercase font-bold font-andadaPro text-center  ">
        Compre agora
      </h1>
      <div className="flex gap-6 flex-wrap  justify-center">
        <BuyButton
          url="https://store.steampowered.com/app/1567020/The_Dark_Pictures_Anthology_The_Devil_in_Me/"
          imageUrl={steam}
          alt="steam"
        />
        <BuyButton
          url="https://store.playstation.com/pt-br/product/UP0700-PPSA05922_00-SMGDARKPICTURESD"
          imageUrl={play4}
          alt="Playstation 4"
        />
        <BuyButton
          url="https://store.playstation.com/pt-br/product/UP0700-PPSA05922_00-SMGDARKPICTURESD"
          imageUrl={play5}
          alt="Playstation 5"
        />
        <BuyButton
          url="https://www.xbox.com/pt-BR/games/store/the-dark-pictures-anthology-the-devil-in-me/9P7KK8SN99VB"
          imageUrl={xboxone}
          alt="Xbox One"
        />
        <BuyButton
          url="https://www.xbox.com/pt-BR/games/store/the-dark-pictures-anthology-the-devil-in-me/9P7KK8SN99VB"
          imageUrl={xboxs}
          alt="Xbox Series S"
        />
      </div>
    </div>
  );
}
