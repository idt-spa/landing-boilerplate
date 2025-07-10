export const SectionTypeSteps = () => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto pb-10 pt-12 px-5 sm:px-8 font-['Space_Grotesk']">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-4 md:gap-10 mb-8 md:mb-20">
          <h1 className="px-2 bg-[#b9ff66] rounded-lg text-black text-[40px] font-medium">
            Our Working Process
          </h1>
          <p className="text-black text-lg font-normal">
            Step-by-Step Guide to Achieving <br className="md:block hidden" />
            Your Business Goals
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-8 sm:px-16 py-6 sm:py-10 bg-[#b9ff66] rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-offset-[-1px] outline-[#191a23] flex flex-col justify-start items-start gap-7 overflow-hidden">
          <header className="w-full inline-flex justify-between items-center overflow-hidden">
            <h2 className="flex items-center gap-4 sm:gap-6 text-black font-medium">
              <span className="text-4xl sm:text-6xl">01</span>
              <span className="text-2xl sm:text-3xl">Consultation</span>
            </h2>
            <svg
              className="w-10 h-10 sm:w-14 sm:h-14"
              viewBox="0 0 58 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="29"
                cy="29.5"
                r="28.5"
                fill="#F3F3F3"
                stroke="#191A23"
              ></circle>
              <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black"></path>
            </svg>
          </header>
          <div className="w-full border border-black"></div>
          <p className="w-full min-h-14 justify-start text-black text-base sm:text-lg font-normal">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </div>
        <div className="mx-auto mt-7 max-w-7xl px-8 sm:px-16 py-6 sm:py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-offset-[-1px] outline-[#191a23] flex flex-col justify-start items-start gap-7 overflow-hidden">
          <header className="w-full inline-flex justify-between items-center overflow-hidden">
            <h2 className="flex items-center gap-4 sm:gap-6 text-black font-medium">
              <span className="text-4xl sm:text-6xl">02</span>
              <span className="text-2xl sm:text-3xl">Implementation</span>
            </h2>
            <svg
              className="w-10 h-10 sm:w-14 sm:h-14"
              viewBox="0 0 58 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="29"
                cy="29.5"
                r="28.5"
                fill="#F3F3F3"
                stroke="#191A23"
              ></circle>
              <path
                d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
                fill="#191A23"
              ></path>
            </svg>
          </header>
        </div>
        <div className="mx-auto mt-7 max-w-7xl px-8 sm:px-16 py-6 sm:py-10 bg-white rounded-[45px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-offset-[-1px] outline-[#191a23] flex flex-col justify-start items-start gap-7 overflow-hidden">
          <header className="w-full inline-flex justify-between items-center overflow-hidden">
            <h2 className="flex items-center gap-4 sm:gap-6 text-black font-medium">
              <span className="text-4xl sm:text-6xl">03</span>
              <span className="text-2xl sm:text-3xl">Testing</span>
            </h2>
            <svg
              className="w-10 h-10 sm:w-14 sm:h-14"
              viewBox="0 0 58 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="29"
                cy="29.5"
                r="28.5"
                fill="#F3F3F3"
                stroke="#191A23"
              ></circle>
              <path
                d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
                fill="#191A23"
              ></path>
            </svg>
          </header>
        </div>
      </section>
    </>
  );
}
