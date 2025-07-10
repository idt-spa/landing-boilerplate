"use client";

import { ReactNode, Suspense } from "react";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";
// import { AlertProvider } from "@/components/utils/AlertProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import { ClickIDTracker } from "@/components/utils/ClickIDTracker";
import { NavbarTypeOne } from "@/components/organisms/navbars/Navbar-type-one";

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
      <NavbarTypeOne />
      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}
