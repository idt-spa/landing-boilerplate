import { HeroTypeOne } from "@/components/organisms/heros/Hero-type-one";
import { SectionTypeCardList } from "@/components/organisms/sections/Section-type-cardList";
import { SectionTypeCTA } from "@/components/organisms/sections/Section-type-CTA";
import { SectionTypeSteps } from "@/components/organisms/sections/Section-type-steps";
import { FooterTypeOne } from "@/components/organisms/footers/Footer-type-one";


export default function HomePage() {
  return (
    <>
      <HeroTypeOne />
      <SectionTypeCardList />
      <SectionTypeCTA />
      <SectionTypeSteps />
      <FooterTypeOne />
    </>
  )
}