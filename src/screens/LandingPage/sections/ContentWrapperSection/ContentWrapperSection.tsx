import { ArrowRightIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { Reveal } from "../../../../lib/motion";

const iconRows = Array(6)
  .fill(null)
  .map(() => Array(6).fill(null));

const toggleOptions = [
  { value: "research", label: "Research" },
  { value: "plan", label: "Plan" },
  { value: "design", label: "Design" },
];

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-6 px-4 md:px-20 py-10 md:py-40 relative">
      <div className="absolute top-[211px] right-[80px] flex flex-col items-start gap-4 hidden md:block">
        {iconRows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="relative w-44 h-4">
            {row.map((_, colIndex) => (
              <PlusIcon
                key={`icon-${rowIndex}-${colIndex}`}
                className={`absolute top-0 w-4 h-4 text-blue-gray300 ${colIndex === 0 ? "left-0" : colIndex === 1 ? "left-8" : colIndex === 2 ? "left-16" : colIndex === 3 ? "left-24" : colIndex === 4 ? "left-32" : "left-40"}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20 relative w-full">
        <div className="flex flex-col items-start gap-6 flex-1">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col gap-2 w-full">
              <Reveal variant="fadeInUp" delay={0.05}>
                <h2 className="text-blue-gray900 font-heading font-[number:var(--heading-font-weight)] text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
                  LOREM IPSUM DOLOR SIT AMET
                </h2>
              </Reveal>
            </div>
          </div>

          <Reveal variant="fadeInUp" delay={0.1}>
            <ToggleGroup
              type="single"
              defaultValue="research"
              className="flex w-full"
            >
              {toggleOptions.map((option, index) => (
                <ToggleGroupItem
                  key={option.value}
                  value={option.value}
                  className={`flex h-12 items-center justify-center p-4 flex-1 border border-solid border-slate-300 data-[state=on]:bg-blue-gray100 data-[state=off]:bg-white ${
                    index === 0
                      ? "rounded-[8px_0px_0px_8px]"
                      : index === toggleOptions.length - 1
                        ? "rounded-[0px_8px_8px_0px] -ml-px"
                        : "-ml-px rounded-none"
                  }`}
                >
                  <div className="inline-flex items-center justify-center gap-2.5 px-4 py-0">
                    <span className="font-h4 font-[number:var(--h4-font-weight)] text-blue-gray900 text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap [font-style:var(--h4-font-style)]">
                      {option.label}
                    </span>
                  </div>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </Reveal>

          <div className="flex flex-col items-start gap-6 w-full">
            <Reveal variant="fadeInUp" delay={0.12}>
              <p className="font-body text-blue-gray600 leading-[var(--body-line-height)] font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)]">
                Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
                Neque pellentesque donec et tellus ac varius tortor, bibendum.
                Nulla felis ac turpis at amet. Purus malesuada placerat arcu at
                enim elit in accumsan.
              </p>
            </Reveal>

            <Reveal variant="fadeInUp" delay={0.2}>
              <Button
                variant="ghost"
                className="inline-flex items-center gap-4 p-0 h-auto hover:bg-transparent"
              >
                <span className="font-button-m font-[number:var(--button-m-font-weight)] text-[#1958ac] text-[length:var(--button-m-font-size)] tracking-[var(--button-m-letter-spacing)] leading-[var(--button-m-line-height)] [font-style:var(--button-m-font-style)]">
                  Check tools
                </span>
                <ArrowRightIcon className="w-6 h-6 text-[#1958ac]" />
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[30px] flex-1">
          <Reveal variant="fadeScale" delay={0.1}>
            <img
              className="w-full h-[406px] object-cover"
              alt="Shake hand"
              src="/shakehand.png"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
