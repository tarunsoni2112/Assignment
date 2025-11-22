import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const BannerWrapperSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <Button className="absolute top-11 left-[70px] flex w-[156px] h-[60px] items-center justify-center gap-2.5 px-[25px] py-0 bg-[#dbdbdb]">
        <span className="[font-family:'Inter',Helvetica] font-extrabold text-black text-[32px] tracking-[-0.64px] leading-[normal]">
          LOGO
        </span>
      </Button>
    </section>
  );
};


