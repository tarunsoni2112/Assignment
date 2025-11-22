import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const gridItems = [
  { id: 1, text: "Lorem Ipsum" },
  { id: 2, text: "Lorem Ipsum" },
  { id: 3, text: "Lorem Ipsum" },
  { id: 4, text: "Lorem Ipsum" },
  { id: 5, text: "Lorem Ipsum" },
  { id: 6, text: "Lorem Ipsum" },
];

export const ComponentNodeSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#f8f8f8] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative flex justify-center lg:justify-start">
            <img
              className="w-full max-w-[550px] h-auto object-cover"
              alt="Bike friends"
              src="/bike friends.png"
            />
          </div>

          <div className="flex flex-col gap-5">
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#0445d1] text-2xl tracking-[-0.96px] leading-[normal]">
              Lorem ipsum
            </p>

            <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-normal text-[42px] tracking-[-0.84px] leading-[normal]">
              <span className="font-bold text-[#1958ac] tracking-[-0.35px]">
                LOREM{" "}
              </span>
              <span className="font-bold text-[#222222] tracking-[-0.35px]">
                IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
              </span>
            </h2>

            <p className="font-body font-[number:var(--body-font-weight)] text-bodycolour text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
              amet non.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-8">
              {gridItems.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <p className="font-h4 font-[number:var(--h4-font-weight)] text-[#222222] text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start mt-8">
              <Button className="h-[38px] px-6 py-[9px] bg-[#1958ac] hover:bg-[#1958ac]/90 rounded-[5px] shadow-button-shadow">
                <span className="text-[#ffffff] [font-family:'Inter',Helvetica] font-bold text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Loerum Ipsum
                </span>
                <ArrowRightIcon className="w-[17px] h-[17px] ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-5 bg-[linear-gradient(90deg,rgba(4,56,152,1)_0%,rgba(7,153,2,1)_50%,rgba(23,0,65,1)_100%)] mt-16" />
    </section>
  );
};