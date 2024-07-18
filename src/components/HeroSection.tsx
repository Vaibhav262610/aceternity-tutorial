"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex w-full h-screen  justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-bold text-7xl">Master the art of music</h1>
          <p className="w-4/12 text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            iusto! Explicabo fugit delectus recusandae asperiores eius,
            molestias, natus dolor cumque facilis necessitatibus nulla itaque
            aperiam cum tempore aut dolorem ipsum?
          </p>
          <div className="mt-12">
            <Link href={"/courses"}>
              <Button borderRadius="1.75rem" className="bg-black">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
