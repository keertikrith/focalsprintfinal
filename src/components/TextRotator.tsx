import React from "react";

function TextRotator() {
  return (
    <div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden md:ml-4">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        Trusted Name in
        <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide">
            <li className="text-[#2f7df4]">IT Consulting</li>
            <li className="text-[#2f7df4]">Professional Training</li>
            <li className="text-[#2f7df4]">Cloud Certifications</li>
            <li className="text-[#2f7df4]">Business Transformation</li>
            <li className="text-[#2f7df4]">Agile Project Management</li>
            <li className="text-[#2f7df4]">Leadership Development</li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default TextRotator;
