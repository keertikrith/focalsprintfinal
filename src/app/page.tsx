"use client";

import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export const siteConfig = {
  name: "Focal Sprint",
  description: "Classroom and online training programs in tech and IT.",
};

export default function Home() {
  return (
    <>
      {/* LEFT SIDE */}
      <FramerWrapper
        className="h-full w-auto flex flex-col justify-start gap-2"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>

      {/* RIGHT SIDE Image */}
      <FramerWrapper
        className="h-full w-[47%] relative block max-lg:hidden"
        y={0}
        x={100}
      >
        <div className="flex items-center justify-center">
        <Image
          src="/hompage-logo.webp"
          alt="Training"
          layout="intrinsic"
          width={500}
          height={500}
          className="ml-10 animate-float"
        />
        </div>
      </FramerWrapper>
    </>
  );
}
