import React from "react";

export const BannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[605px]">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Blvkbeats a lofi"
        src="/banner 2.png"
      />

      <div className="absolute inset-0 flex flex-col">
        <div className="flex justify-start pt-11 pl-[70px]">
          <div className="flex w-[156px] h-[60px] items-center justify-center gap-2.5 px-[25px] py-0 bg-[#dbdbdb]">
            <div className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-extrabold text-black text-[32px] tracking-[-0.64px] leading-[normal]">
              LOGO
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-[812px] w-full [font-family:'Roboto_Condensed',Helvetica] font-bold text-[#ffffff] text-[42px] text-center tracking-[-0.84px] leading-[normal]">
            DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM
            VIVERRA MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING
          </div>
        </div>
      </div>
    </section>
  );
};

