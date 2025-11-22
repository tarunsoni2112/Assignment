import React from "react";
import { Button } from "../../../../components/ui/button";
import { Reveal } from "../../../../lib/motion";
import { Card, CardContent } from "../../../../components/ui/card";

const textItems = [
  "Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.",
  "Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.",
  "Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.",
];

export const MainWrapperSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#f1f1f1] rounded-[10px] py-10 md:py-[60px] px-4 md:px-[140px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        <div className="flex flex-col gap-5 max-w-[612px]">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-bold text-[#1958ac] text-[42px] tracking-[-0.84px] leading-normal">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
          </h2>

          <p className="font-body font-[number:var(--body-font-weight)] text-bodycolour text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor
            tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl
            felis. Massa in facilisis semper libero eget eu quisque bibendum
            platea. Tortor fames.
          </p>

          <Button className="w-fit h-[38px] gap-2.5 px-6 py-[9px] bg-[#1958ac] hover:bg-[#1958ac]/90 rounded-[5px] shadow-button-shadow mt-10 md:mt-[247px]">
            <span className="text-[#ffffff] [font-family:'Inter',Helvetica] font-bold text-[15px] tracking-[0] leading-normal whitespace-nowrap">
              Loerum Ipsum
            </span>
            <img
              className="w-[17px] h-[14.73px]"
              alt="Arrow"
              src="/arrow-1.svg"
            />
          </Button>
        </div>

        <div className="relative flex justify-end items-start">
          <img
            className="w-full max-w-[570px] h-auto -mt-10 md:-mt-[130px]"
            alt="Two friends"
            src="/twofriends.png"
          />
        </div>
      </div>

      <div className="absolute bottom-5 left-[60px] right-[60px] h-5 bg-[linear-gradient(90deg,rgba(4,56,152,1)_0%,rgba(7,153,2,1)_50%,rgba(23,0,65,1)_100%)]" />

      <Card className="relative md:absolute bottom-[-71px] md:bottom-[-71px] left-0 md:left-[140px] w-full md:w-[546px] bg-[#ffffff] shadow-bgdrop border-0 mt-10 md:mt-0 mx-4 md:mx-0">
        <CardContent className="flex flex-col gap-10 px-10 py-[19px]">
          <div className="flex items-center gap-3">
            <h3 className="text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap font-h4 font-[number:var(--h4-font-weight)] text-[#222222] [font-style:var(--h4-font-style)]">
              Lorem ipsum dolor sit
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {textItems.map((text, index) => (
              <div key={index} className="flex items-start gap-4">
                <p className="flex-1 text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] font-body font-[number:var(--body-font-weight)] text-[#222222] [font-style:var(--body-font-style)]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <svg
        className="hidden md:block absolute bottom-[-71px] left-[602px] w-[50px] h-[50px]"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Push pin"
        role="img"
      >
        <g transform="translate(0 -1028.4)">
          <g transform="matrix(.70711 .70711 -.70711 .70711 737.68 297.72)">
            <path d="m11 1028.4v13h1 6.406c-0.595-1.1-1.416-2.1-2.406-2.8v-8c0.616-0.6 1.131-1.4 1.531-2.2h-5.531-1z" fill="#c0392b"></path>
            <path d="m11 13v2 4 2l1 2v-2-6-2h-1z" transform="translate(0 1028.4)" fill="#bdc3c7"></path>
            <path d="m12 13v2 4 2 2l1-2v-2-4-2h-1z" transform="translate(0 1028.4)" fill="#7f8c8d"></path>
            <path d="m6.4688 1028.4c0.4006 0.8 0.915 1.6 1.5312 2.2v8c-0.9897 0.7-1.8113 1.7-2.4062 2.8h6.4062v-13h-5.5312z" fill="#e74c3c"></path>
          </g>
        </g>
      </svg>
    </section>
  );
};
