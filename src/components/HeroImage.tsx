import Lottie from "react-lottie";
import animationData from "../../public/assest1.json"; // Relative path from components directory

const HeroImage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default HeroImage;
