import TextRotator from "./TextRotator";
import Image from "next/image";

const HeroTexts = () => {
  return (
    <>
      <div className="flex items-center gap-4 mb-2">
        <Image
          src="/focallogo.png"
          alt="Focal Sprint Logo"
          width={75}
          height={90}
          className="object-contain max-sm:w-12"
        />
        <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl">
          focal Sprint <br />
        </h1>
      </div>
      <TextRotator />
    </>
  );
};

export default HeroTexts;
