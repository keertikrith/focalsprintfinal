import TextRotator from "./TextRotator";
import Image from "next/image";

const HeroTexts = () => {
  return (
    <>
      <div className="flex items-center">
        <Image src="/focallogo.webp" alt="Focal Sprint Logo" width={110} height={110} className="object-contain" />
        <div className="relative">
          <h1 className="font-rubik text-[5.5rem] text-primary max-sm:text-6xl tracking-tight">
            focal Sprint <br />
          </h1>
          <div className="absolute left-0 bottom-[0.5rem] w-36 h-2.5 bg-[#2f7df4]" />
        </div>
      </div>
      <TextRotator />
    </>
  )
}

export default HeroTexts;
