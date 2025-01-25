import Image from "next/image";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3 p-4">
      <Image src={"/images/blessedVirgin.png"} width={400} height={400} />
      <h1 className="font-tangerine text-center text-6xl md:text-8xl">
        Maria Imaculada
      </h1>
      <div className="flex flex-col gap-2 items-center text-center font-delius">
        <p>Um site para prática da devoção à mãe de Deus!</p>
        <p>
          <b>Em construção...</b>
        </p>
      </div>
    </div>
  );
}
export default Home;
