'use client'

import Image from "next/image";
import Link from "next/link";
import { ToggleSwitch } from "@/components/molecules/ToggleSwitch";
import { useEffect, useState } from "react";
import DropdownSelect from "@/components/molecules/DropdownSelect";
import { useRouter, useParams } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const params = useParams();
  const locale = params?.locale as string;

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", nextTheme);
    setIsDark(!isDark);
  };

  const handleLanguageSelect = (lang: string) => {
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/");

    if (["it", "en"].includes(pathSegments[1])) {
      pathSegments[1] = lang.toLowerCase();
    } else {
      pathSegments.splice(1, 0, lang);
    }

    const newPath = pathSegments.join("/");
    console.log("Navigating to:", newPath);
    router.push(newPath);
  };
  console.log("Current locale in Navbar:", locale);

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link href={"/"} className="flex items-center">
              <Image
                width={8}
                height={8}
                className="h-7 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5 ">
            <Link
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href={`/${locale}/home`}
            >
              Home
            </Link>
          </div>
          <div className="flex items-center">
            <DropdownSelect
              label={locale.toUpperCase()} // Mostra la lingua corrente
              items={["IT", "EN",]}
              onItemSelect={handleLanguageSelect}
            />
            <ToggleSwitch checked={isDark} onChange={toggleTheme} />

          </div>

        </div>
      </div>
    </header>
  );
};
