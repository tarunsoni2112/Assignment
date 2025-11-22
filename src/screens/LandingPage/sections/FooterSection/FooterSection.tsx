import React from "react";

const footerColumns = [
  {
    title: "Lorem Ipsum",
    links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    title: "Lorem Ipsum",
    links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    title: "Lorem Ipsum",
    links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    title: "Lorem Ipsum",
    links: ["Lorem Ipsum"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#171e2b] py-10 px-4 md:px-20">
      <div className="flex items-center justify-center gap-2.5 w-[156px] h-[60px] px-[25px] bg-[#dbdbdb] mb-[38px]">
        <div className="[font-family:'Inter',Helvetica] font-extrabold text-black text-[32px] tracking-[-0.64px] leading-[normal]">
          LOGO
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-[92px] ml-0 md:ml-[312px]">
        {footerColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-6">
            <h3 className="[font-family:'Figtree',Helvetica] font-bold text-[#ffffff] text-xl tracking-[-0.80px] leading-[23px] whitespace-nowrap">
              {column.title}
            </h3>
            <div className="flex flex-col gap-6">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="[font-family:'Figtree',Helvetica] font-normal text-[#ffffff] text-lg tracking-[-0.72px] leading-[23px] hover:underline cursor-pointer"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};
