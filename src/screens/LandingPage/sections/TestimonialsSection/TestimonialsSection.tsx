import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

const formFields = [
  {
    id: "name",
    label: "Name",
    type: "input",
    required: false,
  },
  {
    id: "email",
    label: "E-mail",
    type: "input",
    required: false,
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "input",
    required: false,
  },
  {
    id: "timeframe",
    label: "Time Frame",
    type: "select",
    placeholder: "Choose Time Frame",
    required: true,
  },
  {
    id: "size",
    label: "Size",
    type: "select",
    placeholder: "Choose Size",
    required: true,
  },
  {
    id: "quantity",
    label: "Quantity",
    type: "select",
    placeholder: "Choose Quantity",
    required: true,
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-[173px] px-4 md:px-[46px] flex flex-col items-center">
      <div className="w-full max-w-full md:max-w-[1108px] flex flex-col items-center gap-10">
        <header className="mb-8">
          <h2 className="[font-family:'Roboto_Condensed',Helvetica] font-bold text-[#222222] text-[42px] tracking-[-0.84px] leading-[normal] whitespace-nowrap">
            REQUEST A QUOTE
          </h2>
        </header>

        <form className="w-full flex flex-col items-center gap-10">
          <div className="w-full flex flex-col gap-[37px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-[22px]">
                <Label
                  htmlFor="name"
                  className="[font-family:'Inter',Helvetica] font-normal text-[#0e0d0d] text-sm"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  className="h-[46px] bg-[#f4f4f4] rounded-md border-[0.5px] border-solid border-[#9f9f9f]"
                />
              </div>

              <div className="flex flex-col gap-[22px]">
                <Label
                  htmlFor="email"
                  className="[font-family:'Inter',Helvetica] font-normal text-[#0e0d0d] text-sm"
                >
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="h-[46px] bg-[#f4f4f4] rounded-md border-[0.5px] border-solid border-[#9f9f9f]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-[22px]">
                <Label
                  htmlFor="phone"
                  className="[font-family:'Inter',Helvetica] font-normal text-[#0e0d0d] text-sm"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  className="h-[46px] bg-[#f4f4f4] rounded-md border-[0.5px] border-solid border-[#9f9f9f]"
                />
              </div>

              <div className="flex flex-col gap-[22px]">
                <Label
                  htmlFor="timeframe"
                  className="[font-family:'Inter',Helvetica] font-normal text-transparent text-sm"
                >
                  <span className="text-[#0e0d0d]">Time Frame</span>
                  <span className="text-[#ff0000]">*</span>
                </Label>
                <Select>
                  <SelectTrigger
                    id="timeframe"
                    className="h-[46px] bg-[#f4f4f4] rounded-md border-[0.5px] border-solid border-[#9f9f9f] [font-family:'Inter',Helvetica] font-light text-[#6f6f6f] text-sm"
                  >
                    <SelectValue placeholder="Choose Time Frame" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                    <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                    <SelectItem value="1-2months">1-2 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-[22px]">
                <Label
                  htmlFor="size"
                  className="[font-family:'Inter',Helvetica] font-normal text-transparent text-sm"
                >
                  <span className="text-[#0e0d0d]">Size</span>
                  <span className="text-[#ff0000]">*</span>
                </Label>
                <Select>
                  <SelectTrigger
                    id="size"
                    className="h-[46px] bg-[#f4f4f4] rounded-md border-[0.5px] border-solid border-[#9f9f9f] [font-family:'Inter',Helvetica] font-light text-[#6f6f6f] text-sm"
                  >
                    <SelectValue placeholder="Choose Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-[22px]">
                <Label
                  htmlFor="quantity"
                  className="[font-family:'Inter',Helvetica] font-normal text-transparent text-sm"
                >
                  <span className="text-[#0e0d0d]">Quantity</span>
                  <span className="text-[#ff0000]">*</span>
                </Label>
                <Select>
                  <SelectTrigger
                    id="quantity"
                    className="h-[46px] bg-[#f4f4f4] rounded-md border-[0.5px] border-solid border-[#9f9f9f] [font-family:'Inter',Helvetica] font-light text-[#6f6f6f] text-sm"
                  >
                    <SelectValue placeholder="Choose Quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100-500">100-500</SelectItem>
                    <SelectItem value="500-1000">500-1000</SelectItem>
                    <SelectItem value="1000+">1000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-[15px]">
              <Label
                htmlFor="project-description"
                className="[font-family:'Inter',Helvetica] font-normal text-transparent text-sm"
              >
                <span className="text-[#0e0d0d]">
                  Please Describe Your Project
                </span>
                <span className="text-[#ff0000]">*</span>
              </Label>
              <Textarea
                id="project-description"
                placeholder="Choose a project type"
                className="min-h-[229px] bg-[#f4f4f4] rounded-md border-[0.5px] border-solid border-[#9f9f9f] [font-family:'Inter',Helvetica] font-light text-[#6f6f6f] text-sm resize-none"
              />
            </div>
          </div>

          <p className="[font-family:'Inter',Helvetica] font-normal text-[#3b3b3b] text-lg leading-[60px] text-center">
            By submitting this form you agree to our{" "}
            <a
              href="https://tealpackaging.com/privacy-policy/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://tealpackaging.com/terms-and-condition/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              Privacy Policy
            </a>
            .
          </p>

          <Button
            type="submit"
            className="h-[38px] px-6 py-[9px] bg-[#1958ac] rounded-[5px] shadow-button-shadow hover:bg-[#1958ac]/90 gap-2.5"
          >
            <span className="[font-family:'Inter',Helvetica] font-bold text-[#ffffff] text-[15px]">
              Loerum Ipsum
            </span>
            <svg
              className="w-[17px] h-[14.73px]"
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </g>
            </svg>
          </Button>
        </form>
      </div>
    </section>
  );
};