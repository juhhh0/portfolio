"use client"

import React from "react";
import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.03 * i },
  }),
  closed: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.03 * i },
  }),
};

export default function PixelBackground({
  active,
}: {
  active: boolean;
}) {
  const shuffle = (a: any) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(innerHeight / blockSize);
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));

    return shuffledIndexes.map((randomIndex: number, index: number) => {
      return (
        <motion.div
          key={index}
          className="w-full h-[5vw] bg-black"
          variants={anim}
          initial="initial"
          animate={active ? "open" : "closed"}
          custom={randomIndex}
        />
      );
    });
  };

  return (
    <div className="flex h-screen overflow-hidden fixed top-0 left-0 pointer-events-none">
      {[...Array(20)].map((_, index) => {
        return (
          <div key={index} className="w-[5vw] h-full flex flex-col">
            {getBlocks()}
          </div>
        );
      })}
    </div>
  );
}
