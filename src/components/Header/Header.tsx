"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const bannerMessages = [
  "Special offer this month — staged in 48 hours or your consultation is free",
  "New: luxury staging packages now available",
  "Book before month-end and save 10% on partial staging",
];

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const aboutItems = [
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/about/process" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* =====================================================
          ANNOUNCEMENT BAR
          ===================================================== */}
      <div className="relative h-9 overflow-hidden bg-[#15140F] text-[#F7F4EC]">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#15140F] to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#15140F] to-transparent" />

        <div className="flex h-full w-max items-center whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...bannerMessages, ...bannerMessages].map((message, index) => (
            <span
              key={`${message}-${index}`}
              className="mx-12 text-[12px] font-medium tracking-[0.08em]"
            >
              {message}
            </span>
          ))}
        </div>
      </div>

      {/* =====================================================
          MAIN HEADER
          ===================================================== */}
      <header className="border-b border-[#E1DBC9] bg-[#F7F4EC]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex min-h-[78px] max-w-[1440px] items-center px-6 lg:px-10">

          {/* =================================================
              LOGO
              ================================================= */}
          <Link
            href="/"
            aria-label="Mameza Home Staging"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/logo/logo.png"
              alt="Mameza Home Staging"
              width={190}
              height={70}
              priority
              className="h-auto w-[145px] object-contain md:w-[175px]"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}
          <nav
            aria-label="Main navigation"
            className="ml-auto hidden items-center gap-1 md:flex"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-[13px] py-[10px] text-[14px] font-medium text-[#726F60] transition-colors duration-200 hover:bg-[#EFEAD9] hover:text-[#22261F]"
              >
                {item.label}
              </Link>
            ))}

            {/* =================================================
                ABOUT DROPDOWN
                ================================================= */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={aboutOpen}
                onClick={() => setAboutOpen((current) => !current)}
                className={`flex items-center gap-1 rounded-lg px-[13px] py-[10px] text-[14px] font-medium text-[#726F60] transition-colors duration-200 ${
                  aboutOpen
                    ? "bg-[#EFEAD9] text-[#22261F]"
                    : "hover:bg-[#EFEAD9] hover:text-[#22261F]"
                }`}
              >
                About

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                  aboutOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div
                  role="menu"
                  className="w-[200px] rounded-[10px] border border-[#E1DBC9] bg-white p-2 shadow-[0_10px_30px_rgba(34,38,31,0.15)]"
                >
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setAboutOpen(false)}
                      className="block rounded-[7px] px-3 py-2.5 text-[13.5px] text-[#726F60] transition-colors hover:bg-[#F7F4EC] hover:text-[#22261F]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="rounded-lg px-[13px] py-[10px] text-[14px] font-medium text-[#726F60] transition-colors duration-200 hover:bg-[#EFEAD9] hover:text-[#22261F]"
            >
              Contact
            </Link>
          </nav>

          {/* =================================================
              CTA
              ================================================= */}
          <Link
            href="/schedule-your-staging"
            className="ml-4 hidden shrink-0 items-center gap-2 rounded-full bg-[#EAC054] px-5 py-3 text-[13.5px] font-semibold text-[#221A0A] transition-colors duration-200 hover:bg-[#C89A2E] md:flex"
          >
            {/* Calendar icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>

            Schedule Your Staging
          </Link>

          {/* =================================================
              MOBILE MENU BUTTON
              ================================================= */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg text-[#22261F] transition-colors hover:bg-[#EFEAD9] md:hidden"
          >
            <div className="space-y-[5px]">
              <span
                className={`block h-[2px] w-6 bg-current transition-transform duration-200 ${
                  mobileMenuOpen
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`block h-[2px] w-6 bg-current transition-opacity duration-200 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`block h-[2px] w-6 bg-current transition-transform duration-200 ${
                  mobileMenuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* ===================================================
            MOBILE MENU
            =================================================== */}
        <div
          className={`overflow-hidden border-t border-[#E1DBC9] bg-[#F7F4EC] transition-all duration-300 md:hidden ${
            mobileMenuOpen
              ? "max-h-[700px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col px-6 py-4"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="border-b border-[#E1DBC9] py-4 text-sm font-medium text-[#726F60]"
              >
                {item.label}
              </Link>
            ))}

            {/* MOBILE ABOUT */}
            <button
              type="button"
              aria-expanded={aboutOpen}
              onClick={() => setAboutOpen((current) => !current)}
              className="flex items-center justify-between border-b border-[#E1DBC9] py-4 text-left text-sm font-medium text-[#726F60]"
            >
              About

              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                aboutOpen ? "max-h-48" : "max-h-0"
              }`}
            >
              {aboutItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block border-b border-[#E1DBC9] py-3 pl-5 text-sm text-[#726F60]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* MOBILE CONTACT */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="border-b border-[#E1DBC9] py-4 text-sm font-medium text-[#726F60]"
            >
              Contact
            </Link>

            {/* MOBILE CTA */}
            <Link
              href="/schedule-your-staging"
              onClick={closeMobileMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#EAC054] px-5 py-3.5 text-sm font-semibold text-[#221A0A]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>

              Schedule Your Staging
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}