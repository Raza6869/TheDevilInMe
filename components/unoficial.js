export default function Unoficial() {
  return (
    <div className="py-28 flex sm:flex-row flex-col sm:px-32 w items-center justify-around gap-8">
      <div className="text-redbase font-bold font-andadaPro flex flex-col  items-center">
        <i class="bi bi-exclamation-triangle sm:text-[172px] text-[100px] -mb-4"></i>
        <h1 className="sm:text-5xl text-4xl">ATENÇÃO</h1>
      </div>
      <div className="flex flex-col sm:text-right text-center sm:gap-8 gap-4 sm:w-1/2 px-16 sm:px-0 ">
        <h1 className="sm:text-5xl text-4xl font-andadaPro text-darkgray font-bold">
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
