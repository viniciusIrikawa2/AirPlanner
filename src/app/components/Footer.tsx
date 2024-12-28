import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ebebeb] px-5 py-12 grid grid-cols-4 justify-center">
      <div className="flex items-center mx-auto">
        <Image
          className="cursor-pointer mr-2"
          src="/logo.svg"
          height={50}
          width={50}
          alt="AirPlanner logo"
          title="AirPlanner"
          priority/>
        <p className="font-bold">Sua viagem planejada</p>
      </div>
      <div className="mx-auto">
        <h3 className="font-bold"> Contato </h3>
        <p>contato@airplanner.com</p>
        <p>+55 (99) 99999-9999</p>
      </div>
      <div className="mx-auto">
        <h3 className="font-bold"> Mapa do site </h3>
        <ul>
            <li>Preços</li>
            <li>Sobre</li>
            <li>Blog</li>
        </ul>
      </div>
      <div className="mx-auto">
        <h3 className="font-bold"> Redes sociais </h3>
        <ul>
            <li>Instagram</li>
            <li>Facebook</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
