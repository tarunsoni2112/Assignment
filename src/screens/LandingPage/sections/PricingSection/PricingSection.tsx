import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Reveal } from "../../../../lib/motion";

const cardsData = [
  {
    image: "/card 1.png",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
  {
    image: "/card 2.png",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
  {
    image: "/card 3.png",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
  {
    image: "/card 4.png",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="flex flex-col items-center justify-center p-10">
        <Reveal variant="fadeInUp" delay={0.05}>
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-bold text-[#222222] text-[42px] tracking-[-0.84px] leading-[normal] text-center">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.12}>
          <p className="max-w-[820px] text-center font-body font-normal text-[#666666] text-base tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor
            ut aliquam mattis maecenas eget integer in nam.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-[1058px]">
          {["Basic", "Pro", "Enterprise"].map((plan, i) => (
            <Reveal key={plan} variant="fadeScale" delay={0.08 * (i + 1)}>
              <Card className="shadow-card-shadow">
                <CardHeader>
                  <CardTitle>{plan}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#666]">Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.</p>
                  <Button className="h-[38px] bg-[#1958ac] hover:bg-[#1958ac]/90 rounded-[5px] shadow-button-shadow px-6 py-[9px]">
                    Choose {plan}
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
