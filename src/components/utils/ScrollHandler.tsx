"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }
    const hash = window.location.hash;
    const timeoutId = setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
