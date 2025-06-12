'use client'

import { useTranslations } from "next-intl";

export default function HomePageContent() {
  const t = useTranslations("home");

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}