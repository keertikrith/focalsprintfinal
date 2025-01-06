import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import HackerBtn from "./animation/HackerBtn";

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      {/* Link to the PDF file */}
      <Link
        href="/brochere.pdf"
        download="Brochure.pdf" // Optional, some browsers handle this natively
        className="block"
        passHref
      >
        <HackerBtn label="Download Brochure" />
      </Link>
    </div>
  );
}

export default DownLoadResumeBtn;
