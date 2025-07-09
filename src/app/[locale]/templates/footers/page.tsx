import FooterTypeOne from "@/components/organisms/footers/Footer-type-one";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "it" }];
}

export default function FootersPage() {

  return (
    <>
      <FooterTypeOne />
    </>
  );
}

