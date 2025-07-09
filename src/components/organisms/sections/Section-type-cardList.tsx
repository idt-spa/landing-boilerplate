import CardTypeOne from "@/components/molecules/cards/Card-type-one";

export default function SectionTypeCardList() {
  const cards = [
    {
      title: ["Search engine", "optimization"],
      bgColor: "#f3f3f3",
      badgeBg: "#b9ff66",
      textColor: "black",
      iconBg: "black",
      iconPathFill: "#b9ff66",
      buttonTextColor: "black",
      image: "https://iili.io/3IZ2HuI.png",
    },
    {
      title: ["Pay-per-click", "advertising"],
      bgColor: "#b9ff66",
      badgeBg: "#f3f3f3",
      textColor: "black",
      iconBg: "black",
      iconPathFill: "#b9ff66",
      buttonTextColor: "black",
      image: "https://iili.io/3IZdmaR.png",
    },
    {
      title: ["Social Media", "Marketing"],
      bgColor: "#191A23",
      badgeBg: "#f3f3f3",
      textColor: "black",
      iconBg: "white",
      iconPathFill: "#000000",
      buttonTextColor: "white",
      image: "https://iili.io/3IZdyyN.png",
    },
    {
      title: ["Email", "Marketing"],
      bgColor: "#f3f3f3",
      badgeBg: "#b9ff66",
      textColor: "black",
      iconBg: "black",
      iconPathFill: "#b9ff66",
      buttonTextColor: "black",
      image: "https://iili.io/3IZ2dZX.png",
    },
  ];

  return (
    <section className="mx-auto max-w-[1440px] pt-12">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center px-8 lg:px-16 gap-10 md:gap-6 lg:gap-8 xl:gap-10 pb-10">
        {cards.map((props, idx) => (
          <CardTypeOne key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
