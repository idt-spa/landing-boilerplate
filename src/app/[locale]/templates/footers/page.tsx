import FooterPage from "@/components/pages/FooterPage";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "it" }];
}

export default function FootersPage() {

  return (
    <>
      <FooterPage />
    </>
  );
}

