
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "it" }];
}

import HeroTypeOne from "@/components/organisms/heros/Hero-type-one";

export default function HerosPage() {

  return (
    <>
      <HeroTypeOne />
    </>
  );
}

