import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Image
        src="/plane.gif"
        height={500}
        width={500}
        alt="Flying plane"
        unoptimized/>
    </main>
  );
}
