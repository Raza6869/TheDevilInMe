"user client";

export default function ButtonSection() {
  return (
    <div className="flex font-andadaPro gap-4 font-bold text-xl ">
      <button className="uppercase py-3 px-6 hover:px-8 transition-all ease-in-out border-2 border-white rounded-md">
        Anterior
      </button>
      <button className="uppercase bg-white text-darkgray py-3 px-6 rounded-md hover:px-8 transition-all ease-in-out">
        Próximo
      </button>
    </div>
  );
}
