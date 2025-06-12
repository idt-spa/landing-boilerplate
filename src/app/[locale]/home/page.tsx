"use client";

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="underline text-4xl font-bold text-green-400">
        {t("title")}
      </h1>
    </div>
  );
}
