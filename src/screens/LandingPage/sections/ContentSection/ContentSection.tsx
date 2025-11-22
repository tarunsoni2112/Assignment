import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useRef } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    icon: "/icon---iconoir---thunderstorm.svg",
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    avatar: "/user-thumb.png",
    name: "Jane Cooper",
  },
  {
    icon: "/icon---iconoir---three-stars.svg",
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    avatar: "/user-thumb-2.svg",
    name: "Ralph Edwards",
  },
  {
    icon: "/icon---iconoir---tower.svg",
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    avatar: "/user-thumb-3.svg",
    name: "Courtney Henry",
  },
  {
    icon: "/icon---iconoir---timer.svg",
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    avatar: "/user-thumb-1.svg",
    name: "Cameron Williamson",
  },
];

export const ContentSection = (): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;
    const firstCard = container.querySelector("[data-card]") as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth ?? 364;
    const gapValue = getComputedStyle(container).gap || "0";
    const gap = parseFloat(gapValue);
    const delta = (cardWidth + gap) * (direction === "next" ? 1 : -1);
    container.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col w-full items-start justify-center gap-10 md:gap-20 p-4 md:p-20 bg-[#155ada]">
      <div className="w-full max-w-[1280px] mx-auto gap-10 md:gap-40 flex flex-col md:flex-row items-start flex-wrap">
        <div className="flex-1 min-w-[300px] gap-6 flex flex-col items-start">
          <div className="flex-col gap-2 w-full flex items-start">
            <h3 className="w-full font-h3 font-[number:var(--h3-font-weight)] text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              Join other Sun harvesters
            </h3>

            <h2 className="text-[#ffffff] w-full font-heading font-[number:var(--heading-font-weight)] text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
          </div>

          <p className="font-body text-white leading-[var(--body-line-height)] w-full font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)]">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>

        <div className="inline-flex flex-col items-start gap-4 pt-10 pb-0 px-0">
          <Button className="w-[238px] h-[38px] bg-[#ffffff] text-black hover:bg-white/90 rounded-[5px] shadow-button-shadow font-bold text-[15px]">
            Lorem Ipsum
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6 w-full max-w-[1280px] mx-auto overflow-x-auto"
        ref={scrollRef}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            data-card
            className="w-[364px] h-[491px] flex-shrink-0 justify-center rounded-[10px] bg-white border border-solid border-[#E2E8F0] shadow-[0px_0px_10px_0px_#00000012,0px_20px_25px_-5px_#0000001A]"
          >
            <CardContent className="flex flex-col h-full items-start gap-6 p-6">
              <div className="inline-flex items-center justify-center">
                {index === 0 ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#155ADA"
                    className="w-16 h-16"
                  >
                    <path
                      d="M13 11L10 16H15L12 21M6 16.4438C4.22194 15.5683 3 13.7502 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417"
                      stroke="#155ADA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : index === 1 ? (
                  <svg
                    viewBox="0 0 512.001 512.001"
                    fill="#155ADA"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16"
                  >
                    <g>
                      <g>
                        <path d="M430.431,260.297c-1.309-4.029-4.792-6.966-8.984-7.575l-30.279-4.4c-6.085-0.886-11.731,3.33-12.615,9.414 c-0.884,6.083,3.331,11.731,9.414,12.615l7.962,1.158l-65.773,64.112c-2.623,2.557-3.821,6.241-3.201,9.852l15.527,90.528 l-81.3-42.742c-3.242-1.705-7.117-1.705-10.359,0l-81.3,42.742l15.527-90.528c0.62-3.611-0.578-7.295-3.201-9.852l-65.772-64.112 l90.895-13.208c3.625-0.526,6.76-2.804,8.38-6.088l40.649-82.365l40.649,82.365c1.622,3.285,4.755,5.562,8.38,6.088l16.152,2.347 c6.079,0.885,11.732-3.33,12.615-9.414c0.884-6.084-3.33-11.731-9.414-12.615l-10.361-1.506l-48.041-97.342 c-1.874-3.8-5.743-6.205-9.981-6.205s-8.106,2.405-9.981,6.204l-48.041,97.342L90.556,252.721 c-4.193,0.609-7.676,3.546-8.986,7.575c-1.31,4.029-0.217,8.452,2.817,11.41l77.731,75.77l-18.35,106.989 c-0.717,4.176,0.999,8.396,4.428,10.887c3.427,2.49,7.972,2.818,11.721,0.847l96.082-50.512l96.082,50.513 c1.628,0.856,3.407,1.279,5.178,1.279c2.307,0,4.605-0.717,6.544-2.126c3.428-2.49,5.144-6.711,4.428-10.887l-18.35-106.989 l77.732-75.77C430.648,268.75,431.74,264.327,430.431,260.297z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M367.082,252.305c-0.134-0.701-0.356-1.402-0.634-2.081c-0.278-0.668-0.612-1.313-1.024-1.914 c-0.401-0.612-0.868-1.18-1.38-1.692c-0.512-0.512-1.08-0.979-1.692-1.391c-0.601-0.401-1.247-0.746-1.914-1.024 c-0.679-0.278-1.38-0.49-2.093-0.634c-1.425-0.289-2.905-0.289-4.341,0c-0.712,0.145-1.414,0.356-2.081,0.634 c-0.679,0.278-1.325,0.623-1.926,1.024c-0.612,0.412-1.18,0.879-1.692,1.391c-0.512,0.512-0.979,1.08-1.38,1.692 c-0.401,0.601-0.746,1.247-1.024,1.914c-0.278,0.679-0.501,1.38-0.634,2.081c-0.145,0.724-0.223,1.458-0.223,2.182 c0,0.723,0.078,1.458,0.223,2.17c0.134,0.712,0.356,1.414,0.634,2.081c0.279,0.679,0.624,1.324,1.024,1.926 c0.401,0.612,0.868,1.18,1.38,1.692c0.512,0.512,1.08,0.979,1.692,1.38c0.601,0.401,1.247,0.746,1.926,1.024 c0.668,0.278,1.369,0.49,2.081,0.634c0.712,0.145,1.447,0.223,2.17,0.223c0.723,0,1.458-0.078,2.17-0.223 c0.712-0.145,1.414-0.356,2.093-0.634c0.668-0.278,1.313-0.623,1.914-1.024c0.612-0.401,1.18-0.868,1.692-1.38 c0.512-0.512,0.979-1.08,1.38-1.692c0.412-0.601,0.746-1.247,1.024-1.926c0.278-0.668,0.501-1.369,0.634-2.081 c0.145-0.712,0.223-1.447,0.223-2.17S367.227,253.028,367.082,252.305z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M511.456,105.97c-1.309-4.029-4.793-6.967-8.986-7.575l-45.334-6.587l-20.274-41.08c-1.875-3.799-5.744-6.204-9.981-6.204 c-4.237,0-8.106,2.405-9.981,6.204l-20.274,41.079l-45.334,6.587c-4.193,0.609-7.675,3.546-8.986,7.575 c-1.31,4.029-0.217,8.452,2.817,11.41l32.805,31.977l-7.745,45.151c-0.717,4.175,1,8.396,4.428,10.887 c3.427,2.49,7.972,2.818,11.721,0.847l40.548-21.317l40.548,21.317c1.628,0.856,3.407,1.279,5.178,1.279 c2.307,0,4.605-0.717,6.544-2.126c3.428-2.49,5.144-6.711,4.428-10.887l-7.745-45.151l32.805-31.977 C511.674,114.422,512.766,109.999,511.456,105.97z M456.106,137.499c-2.623,2.557-3.821,6.241-3.201,9.852l4.921,28.69 l-25.766-13.546c-1.622-0.853-3.4-1.279-5.179-1.279s-3.558,0.426-5.179,1.279l-25.765,13.546l4.921-28.69 c0.62-3.611-0.578-7.295-3.201-9.852l-20.845-20.319l28.807-4.186c3.625-0.526,6.759-2.804,8.38-6.088l12.882-26.103 l12.883,26.103c1.622,3.285,4.755,5.562,8.38,6.088l28.807,4.186L456.106,137.499z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M169.695,105.97c-1.309-4.029-4.793-6.967-8.986-7.575l-45.334-6.587l-20.274-41.08c-1.874-3.799-5.743-6.205-9.981-6.205 c-4.236,0-8.106,2.405-9.981,6.204l-20.275,41.08L9.531,98.393c-4.193,0.609-7.676,3.546-8.986,7.575 c-1.31,4.029-0.217,8.452,2.817,11.41l32.805,31.977l-7.745,45.151c-0.717,4.176,1,8.396,4.428,10.887 c1.94,1.409,4.235,2.126,6.544,2.126c1.771,0,3.549-0.423,5.178-1.279l40.548-21.317l40.549,21.318 c3.749,1.971,8.293,1.643,11.721-0.847s5.144-6.711,4.428-10.887l-7.745-45.151l32.805-31.977 C169.912,114.422,171.004,109.999,169.695,105.97z M114.345,137.499c-2.623,2.557-3.821,6.241-3.201,9.852l4.921,28.69 L90.3,162.495c-3.242-1.705-7.117-1.705-10.359,0l-25.765,13.547l4.921-28.69c0.62-3.611-0.578-7.295-3.201-9.852l-20.845-20.32 l28.807-4.186c3.625-0.526,6.76-2.804,8.38-6.088l12.883-26.103l12.882,26.103c1.622,3.286,4.755,5.562,8.38,6.088l28.807,4.186 L114.345,137.499z" />
                      </g>
                    </g>
                  </svg>
                ) : index === 2 ? (
                  <svg
                    fill="#155ADA"
                    viewBox="0 0 477.523 477.523"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#155ADA"
                    className="w-16 h-16"
                  >
                    <g>
                      <g>
                        <path d="M12.5,184.968h18.875v253.251c0,6.903,5.597,12.5,12.5,12.5h68.98c6.903,0,12.5-5.597,12.5-12.5V289.214h45.261v149.005 c0,6.903,5.597,12.5,12.5,12.5h111.292c6.902,0,12.5-5.597,12.5-12.5V289.214h45.262v149.005c0,6.903,5.596,12.5,12.5,12.5h68.979 c6.904,0,12.5-5.597,12.5-12.5V184.968h18.875c6.904,0,12.5-5.597,12.5-12.5V39.305c0-6.903-5.596-12.5-12.5-12.5h-48.811 c-6.904,0-12.5,5.597-12.5,12.5v50.536h-22.184V39.305c0-6.903-5.598-12.5-12.5-12.5h-55.389c-6.904,0-12.5,5.597-12.5,12.5v50.536 h-22.184V39.305c0-6.903-5.597-12.5-12.5-12.5h-55.39c-6.903,0-12.5,5.597-12.5,12.5v50.536h-22.183V39.305 c0-6.903-5.597-12.5-12.5-12.5h-55.389c-6.903,0-12.5,5.597-12.5,12.5v50.536H73.811V39.305c0-6.903-5.597-12.5-12.5-12.5H12.5 c-6.904,0-12.5,5.597-12.5,12.5v133.163C0,179.371,5.596,184.968,12.5,184.968z M25,51.805h23.811v50.536 c0,6.903,5.596,12.5,12.5,12.5h47.184c6.904,0,12.5-5.597,12.5-12.5V51.805h30.389v50.536c0,6.903,5.597,12.5,12.5,12.5h47.183 c6.903,0,12.5-5.597,12.5-12.5V51.805h30.39v50.536c0,6.903,5.598,12.5,12.5,12.5h47.184c6.902,0,12.5-5.597,12.5-12.5V51.805 h30.389v50.536c0,6.903,5.596,12.5,12.5,12.5h47.184c6.902,0,12.5-5.597,12.5-12.5V51.805h23.811v108.163h-18.875 c-6.902,0-12.5,5.596-12.5,12.5v253.251H377.17V276.714c0-6.904-5.598-12.5-12.5-12.5h-70.262c-6.904,0-12.501,5.596-12.501,12.5 v149.005h-86.291V276.714c0-6.904-5.597-12.5-12.5-12.5h-70.261c-6.903,0-12.5,5.596-12.5,12.5v149.005h-43.98V172.468 c0-6.904-5.597-12.5-12.5-12.5H25V51.805z"></path>
                      </g>
                    </g>
                  </svg>
                ) : index === 3 ? (
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 28 32"
                    xmlSpace="preserve"
                    fill="#155ADA"
                    className="w-16 h-16"
                  >
                    <g>
                      <path fill="#155ADA" d="M12.926,32c6.675,0,12.334-5.194,12.883-11.825c0.023-0.275-0.182-0.517-0.457-0.54 c-0.254-0.019-0.516,0.182-0.539,0.457C24.306,26.208,19.084,31,12.926,31C6.35,31,1,25.662,1,19.1 c0-4.816,2.879-9.129,7.334-10.988c0.255-0.106,0.375-0.399,0.27-0.654C8.496,7.203,8.201,7.083,7.949,7.189 C3.12,9.204,0,13.879,0,19.1C0,26.213,5.799,32,12.926,32z"></path>
                      <path fill="#155ADA" d="M24.803,18.107c0.021,0.262,0.24,0.459,0.497,0.459c0.014,0,0.027,0,0.042-0.001 c0.274-0.022,0.479-0.264,0.457-0.539c-0.393-4.815-3.419-8.967-7.896-10.837c-0.252-0.107-0.547,0.014-0.653,0.269 s0.014,0.548,0.269,0.654C21.648,9.837,24.44,13.667,24.803,18.107z"></path>
                      <path fill="#155ADA" d="M8.938,1h8c0.275,0,0.5,0.224,0.5,0.5v2c0,0.276-0.225,0.5-0.5,0.5h-1c-0.827,0-1.5,0.673-1.5,1.5V9 c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V5.5c0-0.276,0.225-0.5,0.5-0.5h1c0.827,0,1.5-0.673,1.5-1.5v-2 c0-0.827-0.673-1.5-1.5-1.5h-8c-0.827,0-1.5,0.673-1.5,1.5v2c0,0.827,0.673,1.5,1.5,1.5h1c0.275,0,0.5,0.224,0.5,0.5V9 c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V5.5c0-0.827-0.673-1.5-1.5-1.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-2 C8.438,1.224,8.662,1,8.938,1z"></path>
                      <path fill="#155ADA" d="M24.218,2.819c-0.195,0.195-0.195,0.512,0,0.707l1.11,1.108l-2.751,2.746c-0.195,0.195-0.195,0.512,0,0.707 c0.098,0.098,0.226,0.147,0.354,0.147s0.256-0.049,0.354-0.146l2.753-2.747l1.111,1.108c0.098,0.097,0.226,0.146,0.354,0.146 c0.128,0,0.256-0.049,0.354-0.147c0.195-0.195,0.195-0.512,0-0.707l-2.929-2.923C24.73,2.624,24.413,2.623,24.218,2.819z"></path>
                      <path fill="#155ADA" d="M13.938,20h6.5c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5h-6.5c-0.275,0-0.5-0.224-0.5-0.5V11 c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v7.5C12.438,19.327,13.11,20,13.938,20z"></path>
                    </g>
                  </svg>
                ) : (
                  <img
                    className="w-16 h-16"
                    alt={`Icon ${index + 1}`}
                    src={testimonial.icon}
                  />
                )}
              </div>

              <p className="font-body-l font-[number:var(--body-l-font-weight)] text-blue-gray900 text-[length:var(--body-l-font-size)] tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)] [font-style:var(--body-l-font-style)]">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4 pt-4 w-full mt-auto">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start flex-1">
                  <p className="font-body-l font-[number:var(--body-l-font-weight)] text-blue-gray900 text-[length:var(--body-l-font-size)] tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)] [font-style:var(--body-l-font-style)]">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="inline-flex items-start gap-6">
        <Button
          variant="outline"
          size="icon"
          className="p-3 rounded-[100px] border-2 border-solid border-[#ffffff] shadow-shadow-dark-s bg-transparent hover:bg-white/10"
          onClick={() => scrollByCard("prev")}
          aria-label="Previous"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="p-3 rounded-[100px] border-2 border-solid border-[#ffffff] shadow-shadow-dark-s bg-transparent hover:bg-white/10"
          onClick={() => scrollByCard("next")}
          aria-label="Next"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </Button>
      </div>
    </section>
  );
};