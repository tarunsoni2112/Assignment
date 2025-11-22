import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Reveal } from "../../lib/motion";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { BannerSection } from "./sections/BannerSection";
import { BannerWrapperSection } from "./sections/BannerWrapperSection";
import { BlogSection } from "./sections/BlogSection";
import { ComponentNodeSection } from "./sections/ComponentNodeSection";
import { ContactSection } from "./sections/ContactSection";
import { ContentSection } from "./sections/ContentSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainSection } from "./sections/MainSection";
import { MainWrapperSection } from "./sections/MainWrapperSection";
import { MockupSection } from "./sections/MockupSection";
import { PricingSection } from "./sections/PricingSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { label: "Lorem Ipsum" },
  { label: "Lorem Ipsum" },
  { label: "Lorem Ipsum" },
];

// Animated dropdown container using Framer Motion
const AnimatedMenu = ({ show, children }: { show: boolean; children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-full left-0 mt-2 min-w-[140px] bg-white text-black rounded-md shadow-button-shadow border border-[#e5e7eb] z-20 origin-top"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const LandingPage = (): JSX.Element => {
  const [openMenuIndex, setOpenMenuIndex] = React.useState<number | null>(null);
  return (
    <div className="bg-[#ffffff] overflow-hidden w-full min-w-[1440px] relative">
      <img
        className="absolute w-[131.95%] h-[12.22%] top-[7.28%] left-0 pointer-events-none"
        alt="Bg graphic"
        src="/bg-graphic-2.svg"
      />

      <img
        className="w-[125.83%] h-[10.19%] top-[26.52%] absolute left-0 pointer-events-none"
        alt="Bg graphic"
        src="/bg-graphic.svg"
      />

      <img
        className="w-[133.40%] h-[18.41%] top-[49.20%] absolute left-0 pointer-events-none"
        alt="Bg graphic"
        src="/bg-graphic-1.svg"
      />

      <header className="absolute top-0 left-0 w-full h-[100px] z-10 bg-transparent">
        <div className="absolute top-[calc(50%-30px)] left-20 flex w-[156px] h-[60px] items-center justify-center gap-2.5 px-[25px] py-0 bg-[#dbdbdb]">
          <div className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-extrabold text-black text-[32px] tracking-[-0.64px] leading-[normal]">
            LOGO
          </div>
        </div>

        <nav className="inline-flex items-center justify-center gap-10 absolute top-[calc(50%-10px)] left-[calc(50%-272px)]">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseLeave={() => setOpenMenuIndex((prev) => (prev === index ? null : prev))}
            >
              <button
                className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setOpenMenuIndex((prev) => (prev === index ? null : index))}
              >
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1958ac] text-lg tracking-[0] leading-[normal]">
                  {item.label}
                </div>
                <ChevronDownIcon
                  className={`relative w-[9.5px] h-[5.81px] mr-[-0.75px] transition-transform duration-200 ${openMenuIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatedMenu show={openMenuIndex === index}>
                <ul className="py-1">
                  <li>
                    <button className="w-full text-left px-3 py-2 [font-family:'Inter',Helvetica] text-sm hover:bg-[#f3f4f6]">
                      option 1
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left px-3 py-2 [font-family:'Inter',Helvetica] text-sm hover:bg-[#f3f4f6]">
                      option 2
                    </button>
                  </li>
                </ul>
              </AnimatedMenu>
            </div>
          ))}
        </nav>

        <Button className="absolute top-[calc(50%-19px)] left-[1235px] w-[125px] h-[38px] bg-[#ffffff] text-black hover:bg-[#f5f5f5] rounded-[5px] shadow-button-shadow font-bold text-[15px]">
          Sign In
        </Button>
      </header>

      <HeroSection />

      <BlogSection />

      <ContactSection />

      <BannerWrapperSection />

      <section className="relative w-full flex flex-col items-center gap-[110px] py-20 bg-[url('/twobikes.png')] bg-cover bg-no-repeat opacity-100">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8 bg-black/50 z-20">
          <div className="absolute top-[108px] left-[269px] w-[900px] h-[98px] [font-family:'Roboto_Condensed',Helvetica] font-bold text-[#ffffff] text-[42px] text-center tracking-[-2%] leading-[100%] uppercase">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
          </div>

          <div className="absolute top-[232px] left-[354px] w-[732px] h-[125px] [font-family:'Inter',Helvetica] font-semibold text-[#ffffff] text-[18px] text-center tracking-[0] leading-[25px]">
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
          </div>

          <div className="absolute top-[367px] left-[354px] w-[732px] h-[125px] [font-family:'Inter',Helvetica] font-semibold text-[#ffffff] text-[18px] text-center tracking-[0] leading-[25px]">
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </div>

          <Button className="absolute top-[492px] left-[630.66px] w-[179px] h-[38px] px-[24px] py-[9px] gap-[10px] bg-[#1959AC] rounded-[5px] shadow-button-shadow">
            <span className="[font-family:'Inter',Helvetica] font-bold text-[#ffffff] text-[15px] tracking-[0] leading-[100%] vertical-align-middle">
              Loerum Ipsum
            </span>
            <ArrowRightIcon className="w-[17px] h-[17px] ml-2 text-[#ffffff]" />
          </Button>
        </div>
        {/* <h2 className="w-[655px] [font-family:'Roboto_Condensed',Helvetica] font-bold text-[#222222] text-[42px] text-center tracking-[-0.84px] leading-[normal]">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
        </h2> */}
        <img className="w-[1112px] h-[408px]" alt="Logos" src="/logos.svg" />
      </section>

      <PricingSection />

      <BannerSection />

      <TestimonialsSection />

      <MockupSection />

      <FeaturesSection />

      <ComponentNodeSection />

      <ContentSection />

      <ContentWrapperSection />

      <MainWrapperSection />

      <MainSection />

      <FaqSection />

      <section className="relative w-full flex justify-center py-20 z-10">
        <div className="flex flex-col w-[736px] items-center gap-5">
          <div className="relative flex w-[156px] h-[60px] items-center justify-center gap-2.5 px-[25px] py-0 bg-[#dbdbdb]">
            <div className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-extrabold text-black text-[32px] tracking-[-0.64px] leading-[normal]">
              LOGO
            </div>
          </div>

          <div className="relative self-stretch w-full flex flex-col items-center gap-6">
            <h2 className="w-[736px] [font-family:'Roboto_Condensed',Helvetica] font-bold text-[#222222] text-[42px] text-center tracking-[-0.84px] leading-[normal]">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
            </h2>

            <p className="w-[492px] font-body font-[number:var(--body-font-weight)] text-bodycolour text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
              porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>

            <Button className="inline-flex h-[38px] items-center justify-center gap-2.5 px-6 py-[9px] bg-[#1958ac] hover:bg-[#164a8f] rounded-[5px] shadow-button-shadow font-bold text-[#ffffff] text-[15px]">
              Loerum Ipsum
              <svg
                className="relative w-[17px] h-[14.73px] mr-[-1.00px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
