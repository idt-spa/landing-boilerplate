import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { ClientLayout } from "./ClientLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const locales = ["it", "en"];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  try {
    const messages = (await import(`@/messages/${locale}.json`)).default;

    const metadata = messages.metadata;

    return {
      title: metadata.title,
      description: metadata.description,
    };
  } catch (error) {
    console.error("Failed to load messages for metadata:", error);
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.log("error", error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ClientLayout messages={messages} locale={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
