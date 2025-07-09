import HeroPage from "@/components/pages/HerosPage";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "it" }];
}

export default function HerosPage() {

  return (
    <>
      <HeroPage />
    </>
  );
}

