"use client";
import { ReactNode, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Navbar } from "@/components/organisms/Navbar";

export default function LocaleLayout({ children }: { children: ReactNode }) {
  const { locale } = useParams() as { locale: string };
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    import(`@/messages/${locale}.json`)
      .then((mod) => setMessages(mod.default))
      .catch(() => setMessages(null));
  }, [locale]);

  if (!messages) return null; // oppure uno spinner/caricamento

  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}
