import React from "react";

export const MockupSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#f3f3f3] py-[100px]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-5 max-w-[526px]">
            <h3 className="font-h3 font-[number:var(--h3-font-weight)] text-[#0445d1] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              Lorem Ipsum
            </h3>

            <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-black text-[42px] tracking-[-0.84px] leading-[normal] max-w-[418px]">
              Lorem Ipsum Dolor Sit Amet
            </h2>

            <p className="font-body font-[number:var(--body-font-weight)] text-bodycolour text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
              morbi suspendisse convallis. Urna a urna lectus donec felis risus
              duis pellentesque. Pellentesque ultricies ipsum.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <img
                className="w-[140px] h-[41.53px] object-cover"
                alt="Google play store"
                src="/Google play store.png"
              />

              <img
                className="w-[140px] h-[41.46px] object-cover"
                alt="Download on the app"
                src="/appstore.png"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <img
              className="w-full max-w-[963px] h-auto"
              alt="Group"
              src="/Mobile hand.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

