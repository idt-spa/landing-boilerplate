import { getRequestConfig } from "next-intl/server";

const messagesMap = {
  en: () => import("@/messages/en.json"),
  it: () => import("@/messages/it.json"),
};

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale ?? "en"; // 👈 fallback se undefined

  if (!(safeLocale in messagesMap)) {
    throw new Error(`Unsupported locale: ${safeLocale}`);
  }

  const messages = (await messagesMap[safeLocale as "en" | "it"]()).default;

  return {
    locale: safeLocale,
    messages,
  };
});
