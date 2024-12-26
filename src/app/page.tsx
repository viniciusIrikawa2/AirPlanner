import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/plane.gif"
      height={500}
      width={500}
      alt="Flying plane"
      unoptimized
    />
  );
}
