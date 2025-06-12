import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/organisms/Navbar";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>; // params è una Promise!
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  let messages;
  try {
    messages = await getMessages({ locale });
    console.log("Loaded messages for locale:", locale, messages);

  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}
