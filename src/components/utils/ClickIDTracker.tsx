"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { setCookie } from "@/lib/utils";

export function ClickIDTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const gclid = searchParams.get("gclid");
    const fbclid = searchParams.get("fbclid");

    if (gclid) {
      setCookie("gclid", gclid, 90);
      window.dataLayer = window.dataLayer || [];
    }

    if (fbclid) {
      setCookie("fbclid", fbclid, 90);
      window.dataLayer = window.dataLayer || [];
    }
  }, [searchParams]);

  return null;
}
