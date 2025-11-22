import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import HashImage from "../../../../20bb68428da0911dc3730323e49cb3517ae897ac.png";

const images = [
  {
    className: "absolute top-[29px] left-[654px] w-[135px] h-[210px]",
    alt: "no limit 1",
    src: "/no limit 1.png",
  },
  {
    className:
      "absolute top-[186px] left-[489px] w-[135px] h-[241px] object-cover",
    alt: "no limit 2",
    src: "/no limit 2.png",
  },
  {
    className: "absolute top-0 left-[819px] w-[459px] h-60",
    alt: "no limit 3",
    src: "/no limit 3.png",
  },
  {
    className: "absolute top-[457px] left-[164px] w-[459px] h-[228px]",
    alt: "no limit 4",
    src: "/no limit 4.png",
  },
  {
    className: "absolute top-[613px] left-[819px] w-[459px] h-[72px]",
    alt: "no limit 5",
    src: "/no limit 5.png",
  },
  {
    className:
      "absolute top-[270px] left-[654px] w-[624px] h-[312px] object-cover",
    alt: "no limit 6",
    src: "/no limit 6.png",
  },
  {
    className: "absolute top-[613px] left-[654px] w-[135px] h-[72px]",
    alt: "no limit 7",
    src: "/no limit 7.png",
  },
  {
    className: "absolute top-[523px] left-0 w-[135px] h-[162px]",
    alt: "twowheelbandito",
    src: "/twowheelbandito.png",
  },
  {
    className: "absolute top-[120px] left-[120px] w-[220px] h-[140px] object-cover",
    alt: "hash image",
    src: HashImage,
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-20 p-4 md:p-20 bg-blue-gray100 overflow-hidden">
      <div className="w-full md:w-[460px] items-start gap-8 flex flex-col">
        <div className="flex-col gap-4 self-stretch w-full flex items-start">
          <div className="self-stretch [font-family:'Inter',Helvetica] font-normal text-blue-gray600 text-xl tracking-[1.60px] leading-[normal]">
            NO LIMITS
          </div>

          <h2 className="text-blue-gray900 self-stretch font-heading font-[number:var(--heading-font-weight)] text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
        </div>

        <p className="font-body text-bodycolour leading-[var(--body-line-height)] self-stretch font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)]">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </p>

        <Button className="h-[38px] gap-2.5 px-6 py-[9px] bg-[#1958ac] rounded-[5px] shadow-button-shadow hover:bg-[#1958ac]/90">
          <span className="text-[#ffffff] [font-family:'Inter',Helvetica] font-bold text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
            Loerum Ipsum
          </span>
          <ArrowRightIcon className="w-[17px] h-[14.73px]" />
        </Button>
      </div>

      <div className="relative flex-1 h-[400px] md:h-[605px] mt-8 md:mt-0 hidden md:block">
        <div className="flex-1 mt-8 md:mt-0">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-center">
            {images.map((image, index) => (
              <img
                key={index}
                className="w-full h-32 md:h-40 object-contain rounded-md shadow-sm"
                alt={image.alt}
                src={image.src as string}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
