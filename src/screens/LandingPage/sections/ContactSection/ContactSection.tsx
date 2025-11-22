import React from "react";

const features = [
  {
    icon: "/Sure-Drive-Assist-final-logo-01 3.svg",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
  {

    icon: "/Sure-Drive-Assist-final-logo-01 3.svg",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
  {
    icon: "/Sure-Drive-Assist-final-logo-01 3.svg",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#ffffff] py-[60px] relative">
      <div className="container mx-auto px-5 max-w-full md:max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 px-5 py-10">
              <div className="[font-family:'Inter',Helvetica] font-normal text-[#0445d1] text-2xl tracking-[-0.96px] leading-[normal]">
                Lorem ipsum dolor sit amet
              </div>

              <h2 className="w-full max-w-[435px] [font-family:'Roboto_Condensed',Helvetica] font-bold text-[#222222] text-[42px] tracking-[-0.84px] leading-[normal] leading-[100%] tracking-[-0.32px] uppercase">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
              </h2>

              <p className="font-body font-[number:var(--body-font-weight)] text-black text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
                leo eleifend condimentum in vitae faucibus. Amet massa malesuada
                sit pretium. Donec pharetra erat lacus suspendisse ornare.Amet massa malesuada
                sit pretium. Donec pharetra erat lacus suspendisse ornare.Amet massa malesuada
                sit pretium. Donec pharetra erat lacus suspendisse ornare.
              </p>
            </div>

            <div className="flex flex-col max-w-[738px] gap-[20px] pt-[40px] pr-[40px] pb-[40px] pl-[20px]">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img
                    className="w-9 h-[38.47px] flex-shrink-0"
                    alt="Sure drive assist"
                    src={feature.icon}
                  />

                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="font-h4 font-[number:var(--h4-font-weight)] text-[#222222] text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                      {feature.title}
                    </h3>

                    <p className="font-body font-[number:var(--body-font-weight)] text-black text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] w-[678px] leading-[25px] tracking-[0]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-start pt-[146px]">
            <img
              className="w-full max-w-[577px] h-[620px]"
              alt="Image"
              src="/section 2.png"
            />
          </div>
        </div>

        <div className="w-full h-5 mt-10 bg-[linear-gradient(90deg,rgba(4,56,152,1)_0%,rgba(7,153,2,1)_50%,rgba(23,0,65,1)_100%)]" />
      </div>
    </section>
  );
};

