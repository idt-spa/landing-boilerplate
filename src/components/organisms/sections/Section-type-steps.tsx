"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";


const IconPlus = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
    <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23" />
  </svg>
);

const IconMinus = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
    <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
  </svg>
);

type Step = {
  id: string;
  number: string;
  title: string;
  description: string;
};

const content: {
  title: string;
  subtitle: React.ReactNode;
  steps: Step[];
} = {
  title: "Our Working Process",
  subtitle: (
    <>
      Step-by-Step Guide to Achieving <br className="md:block hidden" />
      Your Business Goals
    </>
  ),
  steps: [
    {
      id: "consultation",
      number: "01",
      title: "Consultation",
      description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "implementation",
      number: "02",
      title: "Implementation",
      description: "Here we put the plan into action, developing and launching the marketing campaigns across the agreed channels.",
    },
    {
      id: "testing",
      number: "03",
      title: "Testing",
      description: "We continuously monitor campaign performance, A/B testing different elements to optimize for the best results.",
    },
  ],
};

export const SectionTypeSteps = () => {
  const [openStepId, setOpenStepId] = useState<string | null>(content.steps[0].id);

  const handleToggle = (id: string) => {
    setOpenStepId(prevId => (prevId === id ? null : id));
  };

  return (
    <section className="max-w-[1440px] mx-auto pb-10 pt-12 px-5 sm:px-8 font-['Space_Grotesk']">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-4 md:gap-10 mb-8 md:mb-20">
        <h1 className="px-2 bg-[#b9ff66] rounded-lg text-black text-[40px] font-medium">
          {content.title}
        </h1>
        <p className="text-black text-lg font-normal dark:text-slate-50">{content.subtitle}</p>
      </div>

      {/* Accordion */}
      <div className="mx-auto max-w-7xl">
        {content.steps.map((step, index) => {
          const isOpen = step.id === openStepId;

          return (
            <div
              key={step.id}
              className={cn(
                "px-8 sm:px-16 py-6 sm:py-10 rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-offset-[-1px] outline-[#191a23] flex flex-col justify-start items-start gap-7 overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "bg-[#b9ff66]" : "bg-white",
                index > 0 && "mt-7"
              )}
            >
              <header
                className="w-full inline-flex justify-between items-center overflow-hidden cursor-pointer"
                onClick={() => handleToggle(step.id)}
              >
                <h2 className="flex items-center gap-4 sm:gap-6 text-black font-medium">
                  <span className="text-2xl xs:text-4xl sm:text-6xl">{step.number}</span>
                  <span className="text-xl xs:text-2xl sm:text-3xl">{step.title}</span>
                </h2>
                {isOpen ? (
                  <IconMinus className="w-10 h-10 sm:w-14 sm:h-14" />
                ) : (
                  <IconPlus className="w-10 h-10 sm:w-14 sm:h-14" />
                )}
              </header>

              {isOpen && (
                <div className="animate-in fade-in-0 slide-in-from-top-4 duration-500">
                  <div className="w-full border border-black mb-7"></div>
                  <p className="w-full min-h-14 justify-start text-black text-base sm:text-lg font-normal">
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
