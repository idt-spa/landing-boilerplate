import NavbarPage from "@/components/pages/NavbarPage";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "it" }];
}

export default function NavbarsPage() {

  return (
    <>
      <NavbarPage />
    </>
  );
}

