export default function Unoficial() {
  return (
    <div className="py-28 flex px-32 items-center justify-around">
      <div className="text-redbase font-bold font-andadaPro flex flex-col  items-center">
        <i class="bi bi-exclamation-triangle text-[172px] -mb-4"></i>
        <h1 className="text-5xl">ATENÇÃO</h1>
      </div>
      <div className="flex flex-col text-right gap-8 w-1/2 ">
        <h1 className="text-5xl font-andadaPro text-darkgray font-bold">
          ESTE SITE NÃO É OFICIAL!
        </h1>
        <p className="font-gothic text-gray-400">
          Este site é apenas um projeto de demonstração de habilidades do
          Designer/Front-end Rafael Thumaza. Com intuito de promover uma visão
          de apresentação de um determinado conteúdo de forma dinâmica e
          acessível, correlacionando-o com um código feito nas tecnologias no
          qual domina.
        </p>
      </div>
    </div>
  );
}
