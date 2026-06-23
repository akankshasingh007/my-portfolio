"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center px-10">

      <div className="absolute text-[200px] font-black opacity-5 top-20 left-0">
        PORTFOLIO
      </div>

      <div className="grid lg:grid-cols-2 gap-20 w-full">

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="tracking-[8px] text-yellow-400 mb-6">
            AI • TECH • OPPORTUNITIES
          </p>

          <h1 className="text-[120px] font-black leading-none">
            TURNING
            <br />
            IDEAS
            <br />
            INTO
            <br />
            OPPORTUNITIES
          </h1>

          <p className="mt-10 text-gray-300 max-w-md">
            Student, researcher, builder and opportunity seeker.
          </p>

          <button className="mt-8 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold">
            Explore
          </button>
        </motion.div>

        <div className="relative flex justify-center">
          <div className="w-80 h-[500px] bg-[#F5EFE3] rounded-3xl flex items-center justify-center text-black">
            <Image
             src="/Profile.jpg"
             width={400}
             height={550}
             alt="Profile"
             className="rounded-3xl object-cover"
            />
          </div>

          <div className="absolute top-10 -left-10 bg-yellow-400 text-black px-4 py-2 rounded-full">
            AI
          </div>

          <div className="absolute bottom-20 -right-8 bg-white text-black px-4 py-2 rounded-full">
            Research
          </div>
        </div>

      </div>
    </section>
  );
}