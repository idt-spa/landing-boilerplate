"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";

type FooterLink = {
  href: string;
  label: string;
};

const content: {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  links: {
    title: string;
    items: FooterLink[];
  };
  legal: {
    title: string;
    items: FooterLink[];
  };
  copyright: string;
  companyInfo: string;
} = {
  logo: {
    src: "/images/logo-payoff.svg",
    alt: "CustomerTrack Logo",
    href: "/",
  },
  links: {
    title: "Link Utili",
    items: [
      { href: "#features", label: "Funzionalità" },
      { href: "#final-cta", label: "Contatti" },
    ],
  },
  legal: {
    title: "Legale",
    items: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Termini di Servizio" },
    ],
  },
  copyright: "© {currentYear} Tutti i diritti riservati.",
  companyInfo: "D LAB SRL CON UNICO SOCIO - VAT 13161290013",
};

export const FooterTypeTwo = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="py-16 lg:flex lg:justify-between">
          <div className="mb-12 lg:mb-0 lg:w-1/3">
            <Link
              href={content.logo.href}
              className="inline-flex items-center gap-3 mb-4"
            >
              <Image
                src={content.logo.src}
                alt={content.logo.alt}
                width={160}
                height={0}
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 lg:w-1/2 lg:justify-end lg:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {content.links.title}
              </h3>
              <nav className="flex flex-col gap-3">
                {content.links.items.map((link) => (
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
                {content.legal.title}
              </h3>
              <nav className="flex flex-col gap-3">
                {content.legal.items.map((link) => (
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

        <div className="py-6 border-t border-border flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
          <div className="w-full flex items-center justify-between gap-x-4 text-sm text-muted-foreground">
            <span>
              {/* Sostituiamo il placeholder con l'anno corrente */}
              {content.copyright.replace("{currentYear}", String(currentYear))}
            </span>
            <span>{content.companyInfo}</span>
          </div>

          <div className="flex items-center gap-5">
            {/*
              {socialLinks.map((social) => ( ... ))}
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};