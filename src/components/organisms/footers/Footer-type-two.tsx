"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
/*import { Twitter, Linkedin, Github } from "lucide-react";*/
import Image from "next/image";
import * as React from "react";

export const FooterTypeTwo = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  const locale = useLocale();

  const usefulLinks = [
    { href: "#features", label: t("links.features") },
    { href: "#final-cta", label: t("links.contact") },
  ];

  const legalLinks = [
    { href: `/${locale}/privacy`, label: t("legal.privacy") },
    { href: `/${locale}/terms`, label: t("legal.terms") },
  ];

  /* const socialLinks = [
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Github, label: "GitHub" },
  ];*/

  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* === LIVELLO SUPERIORE: BRAND E NAVIGAZIONE === */}
        <div className="py-16 lg:flex lg:justify-between">
          {/* Colonna Brand - L'ancora del footer */}
          <div className="mb-12 lg:mb-0 lg:w-1/3">
            <Link
              href={`/${locale}/`}
              className="inline-flex items-center gap-3 mb-4"
            >
              <Image
                src="/images/logo-payoff.svg"
                alt="CustomerTrack Logo"
                width={160}
                height={0}
              />
            </Link>
          </div>

          {/* Colonne di Navigazione - Raggruppate a destra */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 lg:w-1/2 lg:justify-end lg:gap-16">
            {/*<div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Azienda
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Chi siamo
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Lavora con noi
                </Link>
              </nav>
            </div>*/}

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {t("links.title")}
              </h3>
              <nav className="flex flex-col gap-3">
                {usefulLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {t("legal.title")}
              </h3>
              <nav className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* === LIVELLO INFERIORE: COPYRIGHT E SOCIAL === */}
        <div className="py-6 border-t border-border flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
          <div className="w-full flex items-center justify-between gap-x-4 text-sm text-muted-foreground">
            <span>{t("copyright", { currentYear })}</span>
            <span>D LAB SRL CON UNICO SOCIO - VAT 13161290013</span>
          </div>

          <div className="flex items-center gap-5">
            {/*{socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="sr-only">{social.label}</span>
                <social.icon className="h-5 w-5" />
              </Link>
            ))}*/}
          </div>
        </div>
      </div>
    </footer>
  );
}
