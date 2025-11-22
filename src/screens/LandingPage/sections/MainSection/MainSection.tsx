import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const paginationDots = [
  { active: false, width: "w-3" },
  { active: true, width: "w-12" },
  { active: false, width: "w-3" },
  { active: false, width: "w-3" },
  { active: false, width: "w-3" },
];

export const MainSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-20 p-4 md:p-20 bg-[#ffffff] w-full">
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col items-center gap-2 w-full">
          <h2 className="font-heading font-[number:var(--heading-font-weight)] text-blue-gray900 text-[length:var(--heading-font-size)] text-center tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
        </div>

        <p className="font-body text-blue-gray900 text-center leading-[var(--body-line-height)] font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)]">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum
          eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full gap-8">
        <img
          className="w-full max-w-[680px] h-auto"
          alt="Last image"
          src="/last image.png"
        />

        <Card className="flex-1 rounded-[5px] bg-white border border-solid border-slate-200 shadow-shadow-dark-XL">
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-2 pt-12 pb-6 px-12">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="[font-family:'Inter',Helvetica] font-normal text-blue-gray600 text-2xl tracking-[1.44px] leading-[normal]">
                  Artist &amp; Investor
                </div>

                <p className="font-body font-[number:var(--body-font-weight)] text-blue-gray900 text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                  Enim sagittis, sit porttitor morbi lobortis amet, libero
                  adipiscing auctor. Malesuada tristique libero, id netus
                  tincidunt. Egestas ac arcu amet nisl quis est ...
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-0 pb-6 px-12">
              <Button variant="ghost" className="px-0 py-3 rounded-lg h-auto">
                <span className="pr-4 font-button-m font-[number:var(--button-m-font-weight)] text-[#1958ac] text-[length:var(--button-m-font-size)] tracking-[var(--button-m-letter-spacing)] leading-[var(--button-m-line-height)] [font-style:var(--button-m-font-style)]">
                  Read Full Story
                </span>
                <ArrowRightIcon className="w-6 h-6" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="inline-flex items-start gap-2">
        {paginationDots.map((dot, index) => (
          <div
            key={index}
            className={`${dot.width} h-3 ${
              dot.active ? "bg-[#1958ac]" : "bg-[#80afed]"
            } rounded-[10px]`}
          />
        ))}
      </div>
    </section>
  );
};