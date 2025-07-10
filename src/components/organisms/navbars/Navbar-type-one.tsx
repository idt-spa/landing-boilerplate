"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const NavbarTypeOne = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // 👈 stato per il drawer

  const navLinks = [
    { name: "Heros", href: "/en/templates/heros/" },
    { name: "Sections", href: "/en/templates/sections/" },
    { name: "Footers", href: "/en/templates/footers/" },
  ].map((link) => ({
    ...link,
    active: pathname === link.href,
  }));

  return (
    <>
      <nav className="sticky top-0 bg-white border-gray-200 py-2.5 dark:bg-gray-900 z-50">
        <div className="flex flex-wrap items-center justify-between max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </Link>

          {/* Mobile Drawer Trigger */}
          <div className="lg:hidden">
            <Drawer direction={"left"} open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <Menu className="h-6 w-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="text-xl">Menu</DrawerTitle>
                </DrawerHeader>
                <nav className="p-4 space-y-4">
                  {navLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className={`block text-lg py-2 px-4 rounded ${
                        link.active
                          ? "text-purple-700 font-bold"
                          : "text-zinc-800 dark:text-gray-300"
                      }`}
                      onClick={() => setOpen(false)} // 👈 chiude il drawer
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    href="https://themesberg.com/product/tailwind-css/landing-page"
                    className="block text-white bg-zinc-800 hover:bg-white hover:text-zinc-800 hover:border focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                    onClick={() => setOpen(false)} // 👈 chiude anche qui
                  >
                    Download
                  </Link>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={`py-2 px-4 rounded ${
                  link.active
                    ? "font-bold"
                    : "text-zinc-800 hover:text-blue-500"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="https://themesberg.com/product/tailwind-css/landing-page"
              className="text-white bg-zinc-800 hover:bg-white hover:text-zinc-800 border focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
