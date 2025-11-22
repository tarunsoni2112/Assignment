import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import heroImage from "../../../../20bb68428da0911dc3730323e49cb3517ae897ac.png";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[913px] bg-white flex overflow-hidden">
      {/* Left content panel */}
      <div className="w-full md:w-1/2 bg-white text-black flex flex-col justify-center p-8 md:p-16">
        <div className="max-w-[646px]">
          <h1 className="[font-family:'Roboto_Condensed',Helvetica] font-bold text-[64px] leading-[70px] tracking-[-1.28px]">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="[font-family:'Inter',Helvetica] text-[#4b4b4b] text-[18px] leading-[28px] mt-6">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </p>

          <div className="flex flex-col md:flex-row mt-10 items-start md:items-center gap-2">
            <Input
              type="email"
              placeholder=""
              className="w-full md:w-[324.2px] h-[46px] bg-[#ffffff] text-black rounded-md border border-solid border-[#c2c2c2]"
            />

            <Button className="h-[47px] inline-flex items-center justify-center gap-2.5 px-6 py-[9px] bg-[#1958ac] rounded-[5px] shadow-button-shadow hover:bg-[#1958ac]/90">
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#ffffff] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                Submit
              </span>
              <ArrowRightIcon className="w-[17px] h-[14.73px]" />
            </Button>
          </div>

          <div className="flex mt-4 items-center gap-3">
            <CheckCircle2Icon className="w-[30px] h-[29px] text-blue-600" />
            <span className="[font-family:'Inter',Helvetica] text-[#1f2937] text-[15px] font-medium">No credit card required!</span>
          </div>
        </div>
      </div>

      {/* Right image panel with diagonal clip */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      {/* Bottom fade border overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-[140px] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 5.84%, #FFFFFF 30.19%)",
        }}
      />
    </section>
  );
};
