import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="flex items-center justify-center gap-28">
        <div className="w-1/4">
          <h1 className="font-bold text-5xl mb-3">
            Planeje sua viagem com o <span className="text-nice-pink">AirPlanner</span>.
          </h1>
          <p className="font-semibold font-sans">Nunca foi tão fácil planejar uma viagem.</p>
          <p className="font-semibold font-sans">Faça tudo de forma eficaz e sem dor de cabeça!</p>
          <button className="bg-nice-pink rounded-full px-4 py-2 text-white mt-3">Começar agora</button>
        </div>
        <Image src="/plane.gif" height={500} width={500} alt="Flying plane" unoptimized priority />
      </section>
      <section className="bg-[#ca4ff0] px-5 py-10 flex items-center justify-around">
        <h2 className="font-bold text-4xl text-white">Comece a planejar!</h2>
        <Link href={"/"} className="bg-white rounded-full px-4 py-1 text-[#ca4ff0] font-bold">
          Começar
        </Link>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
