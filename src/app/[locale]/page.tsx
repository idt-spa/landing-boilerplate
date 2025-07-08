import HomePage from "@/components/pages/HomePage";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "it" }];
}

export default function Home() {
  return (
    <HomePage />
  );
}
