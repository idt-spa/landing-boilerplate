"use client";

import { ReactNode, Suspense } from "react";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";
import { Navbar } from "@/components/organisms/Navbar";
import FooterTypeOne from "@/components/organisms/footers/Footer-type-one";
// import { AlertProvider } from "@/components/utils/AlertProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import { ClickIDTracker } from "@/components/utils/ClickIDTracker";

type Props = {
  children: ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
};

export function ClientLayout({ children, messages, locale }: Props) {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
    >
      {/*TODO add AlertProvider*/}
      <GoogleTagManager gtmId="GTM-XXXXXXX" />
      <Suspense fallback={null}>
        <ClickIDTracker />
      </Suspense>
      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}
