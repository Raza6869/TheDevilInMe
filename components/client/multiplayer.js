//components
import InfoCard from "./info-card";

export default function Multiplayer() {
  return (
    <div className="bg-[url('../public/images/multiplayerbackground.png')]  bg-cover h-screen mt-20 flex flex-col gap-12 items-center justify-center">
      <h1 className="font-bold text-white uppercase font-andadaPro text-5xl">
        jogue com seus amigos
      </h1>
      <div className="flex justify-center gap-8">
        <InfoCard
          title="MODO COOPERATIVO LOCAL"
          desc="Com o modo cooperativo local de The Devil In Me, você e até cinco amigos podem experimentar juntos todo esse terror. Cada jogador é designado para jogar como um ou mais conselheiros, com um controle passando pelo grupo cada vez que um conselheiro diferente se torna o personagem jogável da vez. depende de você e seus amigos se vocês vão decidir trabalhar em conjunto ou, de repente, levar a história para uma nova direção!"
        />
        <InfoCard
          title="OS VOTOS CONTROLAM O DESTINO NO JOGO ONLINE"
          desc="O multijogador online de The Devil In Me funciona de forma diferente do jogo cooperativo local. Neste modo apenas para convidados, um anfitrião pode convidar até cinco amigos com acesso ao jogo para assistirem juntos. Enquanto o anfitrião joga, o público vota em cada decisão-chave, com a maioria dos votos determinando o resultado."
        />
      </div>
    </div>
  );
}
