"use client";

import IllustrationMegaphone from "@/components/svg/Illustration-megaphone";

const heroContent = {
  heading: "Navigating the digital landscape for success",
  description:
    "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
  cta: "Book a consultation",
};

export const HeroTypeOne = () => {
  return (
    <div className="w-full bg-[#F9F9F9] dark:bg-gray-800">
      <section className="px-8 lg:px-16 py-20 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Left content */}
        <div className="order-2 md:order-1 max-w-[531px] flex flex-col items-center text-center md:text-left md:items-start gap-9">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium text-black dark:text-white">
            {heroContent.heading}
          </h1>

          <p className="text-base md:text-lg lg:text-xl font-normal text-black dark:text-gray-400 sm:leading-7">
            {heroContent.description}
          </p>

          <button
            className="px-5 py-3 md:px-7 md:py-4 lg:px-9 lg:py-5 rounded-2xl text-base md:text-lg lg:text-xl font-normal leading-7
            text-white dark:text-black bg-[#191a23] dark:bg-[#B9FF66] hover:opacity-90 transition"
          >
            {heroContent.cta}
          </button>
        </div>

        {/* Right illustration */}
        <div className="order-1 md:order-2 flex justify-center items-center max-w-[400px] md:w-[600px] md:h-[510px]">
          <IllustrationMegaphone />
        </div>
      </section>
    </div>
  );
}
