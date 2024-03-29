import React from 'react';
import './App.css';
import { motion } from "framer-motion";
import { Navbar } from './ui/sticky-navbar';

function App() {
  return (
      <>
        <Navbar/>
        <div className='h-full mx-auto max-w-5xl px-4 sm:px-7 md:max-w-7xl'>
          <motion.div
            initial={{ opacity: 0.0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.9,
              ease: "easeInOut",
            }}
            className="h-full flex md:flex-row md:gap-20 items-center gap-10 flex-col mt-20 pt-2 sm:mt-0 sm:pt-0 md:mt-0 md:pt-0 lg:mt-0 lg:pt-0 xl:mt-0 xl:pt-0"
          >
            <img className="rounded-full bg-gradient-to-b from-[#edc1c9]/80 to-[#edc1c9]/20" src='https://i.ibb.co/gyHnh6B/Me-No-Background.png'/>
            <p className='pointer-events-none text-justify bg-clip-text text-transparent bg-gradient-to-b from-[#edc1c9]/100 to-[#edc1c9]/80 text-sm sm:text-sm md:text-2xl lg:text-3xl xl:text-4xl px-4 md:py-2'>
              Unity Developer with a passion for creating immersive experiences in 3D, Virtual Reality (VR), and Mixed Reality (MR). Possesses advanced experience in game programming, game mechanics and logic, and AI mechanics. Proven ability to leverage the Unity Engine to its full potential.
            </p>
          </motion.div>
        </div>
      </>
  );
}

export default App;
