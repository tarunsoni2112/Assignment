import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Reveal } from "../../../../lib/motion";
import { AnimatePresence, motion } from "framer-motion";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lectus enim rhoncus vitae mauris venenatis eget. Suspendisse dolor aliquet fermentum faucibus.",
  },
  {
    question: "Dictum at ac tellus faucibus urna ullamcorper id dui cursus?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lectus enim rhoncus vitae mauris venenatis eget. Suspendisse dolor aliquet fermentum faucibus.",
  },
  {
    question: "Vestibulum nisl morbi metus gravida eu facilisi enim?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lectus enim rhoncus vitae mauris venenatis eget. Suspendisse dolor aliquet fermentum faucibus.",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="flex flex-col gap-6 p-10 items-center">
        <Reveal variant="fadeInUp" delay={0.05}>
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-bold text-[#222222] text-[42px] tracking-[-0.84px] leading-[normal]">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.12}>
          <p className="max-w-[1058px] text-center font-body font-normal text-[#666666] text-base tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            Lorem ipsum dolor sit amet consectetur. Lectus enim rhoncus vitae mauris venenatis eget.
            Suspendisse dolor aliquet fermentum faucibus. Condimentum amet convallis sit in sit diam cras
            mi facilisi. Commodo pellentesque pharetra sit massa.
          </p>
        </Reveal>

        <div className="w-full max-w-[1058px]">
          <Accordion type="single" collapsible>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <AnimatePresence initial={false}>
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -8 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <p className="font-body font-normal text-[#666666] text-base tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
