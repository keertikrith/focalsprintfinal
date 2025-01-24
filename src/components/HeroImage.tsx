import Lottie from "react-lottie";
import animationData from "../../public/assest1.json"; // Relative path from components directory
import Image from "next/image";

const HeroImage = () => {
  const defaultOptions = {
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Image 
        src="hompage-logo.webp"
        alt="Training"
        layout="intrinsic"
        width={400}
        height={400}
        className="animate-float"
      />
    </div>
  );
};

export default HeroImage;
