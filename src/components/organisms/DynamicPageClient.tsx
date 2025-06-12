
"use client";
import { useTranslations } from "next-intl";

export default function DynamicPageClient({ pageID }: { pageID: string }) {
  const t = useTranslations("pageID");

  return (
    <div>
      <h1>{t("title")} - {pageID}</h1>
    </div>
  );
}
