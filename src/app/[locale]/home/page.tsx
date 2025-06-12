
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "it" }];
}

import HomePageContent from "@/components/organisms/HomePageContent";

export default function HomePage() {

  return (
    <>
    <HomePageContent />
    </>
  );
}