import { SectionTypeFeatures } from "@/components/organisms/sections/Section-type-features";
import { SectionTypeHowIt } from "@/components/organisms/sections/Section-type-how-it";
import { SectionTypeSteps } from "@/components/organisms/sections/Section-type-steps";
import { SectionTypeCTA } from "@/components/organisms/sections/Section-type-CTA";
import { SectionTypeCardList } from "@/components/organisms/sections/Section-type-cardList";
import { SectionTypeUseCases } from "@/components/organisms/sections/Section-type-use-cases";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "it" }];
}

export default function sectionsPage() {

  return (
    <>
      <SectionTypeFeatures />
      <SectionTypeHowIt />
      <SectionTypeSteps />
      <SectionTypeCTA/>
      <SectionTypeCardList />
      <SectionTypeUseCases />
    </>
  );
}
