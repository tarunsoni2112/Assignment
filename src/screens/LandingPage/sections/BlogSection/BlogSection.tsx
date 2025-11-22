import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Reveal } from "../../../../lib/motion";

const blogItems = [
  {
    image: "/left top.png",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
  },
  {
    image: "/left middle.png",
    text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
  },
  {
    image: "/left bottom.png",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="relative flex flex-col bg-[#ffffff] p-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="[font-family:'Inter',Helvetica] font-normal text-[#0445d1] text-base tracking-[-0.96px] leading-[normal]">
                <Reveal variant="fadeInUp" delay={0.05}>
                  <p className="[font-family:'Inter',Helvetica] font-semibold text-[24px] leading-[100%] tracking-[-0.04em] text-[#0546D2] relative w-fit mt-[-1px] text-left whitespace-nowrap">
                    Lorem ipsum dolor sit
                  </p>
                </Reveal>
              </div>

              <Reveal variant="fadeInUp" delay={0.12}>
                <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-bold text-[#222222] text-[42px] tracking-[-0.84px] leading-[normal]">
                  LOREM IPSUM DOLOR SIT AMET
                </h2>
              </Reveal>

              <Reveal variant="fadeInUp" delay={0.2}>
                <p className="font-body font-normal text-[#666666] text-base tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                  Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                  facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
                  eget integer in nam. Non nisl iaculis at felis aliquet.
                  Hendrerit tellus at purus lectus.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              {blogItems.map((item, index) => (
                <Reveal key={index} variant="fadeScale" delay={index * 0.08}>
                  <Card className="bg-[#ffffff] border-0 shadow-none">
                    <CardContent className="p-0 flex flex-col md:flex-row h-auto md:h-[141px] items-center">
                      <img
                        className="w-[139px] h-[141px] object-cover flex-shrink-0"
                        alt="Blog thumbnail"
                        src={item.image}
                      />
                      <div className="flex items-center p-4 md:px-[30px]">
                        <p className="font-body font-normal text-[#666666] text-base tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                          {item.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal variant="fadeInUp" delay={0.25}>
              <div className="flex items-center gap-5">
                <Button className="h-[38px] bg-[#1958ac] hover:bg-[#1958ac]/90 rounded-[5px] shadow-button-shadow px-6 py-[9px] gap-2.5">
                  <span className="text-[#ffffff] [font-family:'Inter',Helvetica] font-bold text-[15px] tracking-[0] leading-[normal]">
                    Loerum Ipsum
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </Button>

                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-6 h-6 text-[#033798]" />
                  <span className="text-[#033798] text-[15px] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
                    123456789
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative flex items-start justify-end">
            <Reveal variant="fadeScale" delay={0.1}>
              <img
                className="w-full max-w-[629px] h-auto object-contain"
                alt="Section image"
                src="/twowheelbandito.png"
              />
            </Reveal>
          </div>
        </div>

        <div className="w-full h-5 bg-[linear-gradient(90deg,rgba(4,56,152,1)_0%,rgba(7,153,2,1)_50%,rgba(23,0,65,1)_100%)]" />
      </div>
    </section>
  );
};
