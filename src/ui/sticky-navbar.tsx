import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#111010] shadow-sm">
      <div className="container mx-auto max-w-5xl px-4 sm:px-7 md:max-w-7xl flex justify-between items-center p-4">
        <div className="flex flex-col gap-1 bg-clip-text text-transparent bg-gradient-to-b from-[#8bc5bf]/100 to-[#8bc5bf]/100 font-bold">
            <a href="/" className="text-2xl md:text-4xl lg:text-6xl font-bold">Turki Alqou</a>
            <p className="text-xs lg:text-xl">Game Programmer</p>
        </div>
        <div className="flex flex-row gap-3 text-[#edc1c9]">
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
        </div>
      </div>
    </nav>
  );
};