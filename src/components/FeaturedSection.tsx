import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const FeaturedSection = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-900 py-4">
        <div>
          <div className="text-center">
            <h2 className="uppercase text-base font-semibold text-teal-600">
              FEatured courses
            </h2>
            <p className="uppercase text-4xl  font-bold ">
              Learn With the Best{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center ">
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect items={projects} />
            </div>
          </div>
        </div>
        <div className=" text-center">
          <Link href={"/courses"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 ">
              View All Courses
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedSection;

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
