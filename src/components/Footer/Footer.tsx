import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#15140F] text-[#F7F4EC]">

      {/* =====================================================
          MAIN FOOTER
          ===================================================== */}
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* =================================================
              BRAND
              ================================================= */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              aria-label="Mameza Home Staging"
              className="inline-flex"
            >
              <Image
                src="/logo/logo.png"
                alt="Mameza Home Staging"
                width={190}
                height={70}
                className="h-auto w-[170px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-[280px] text-sm leading-7 text-[#B9B5A8]">
              Professional home staging designed to create beautiful,
              welcoming spaces and make properties stand out.
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4A483F] text-[#B9B5A8] transition-colors hover:border-[#EAC054] hover:text-[#EAC054]"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4A483F] text-[#B9B5A8] transition-colors hover:border-[#EAC054] hover:text-[#EAC054]"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v5h4v-5h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4A483F] text-[#B9B5A8] transition-colors hover:border-[#EAC054] hover:text-[#EAC054]"
              >
                <span className="text-sm font-bold">P</span>
              </a>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
              ================================================= */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#EAC054]">
              Navigation
            </h3>

            <nav className="mt-6 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-[#B9B5A8] transition-colors hover:text-[#F7F4EC]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* =================================================
              CONTACT
              ================================================= */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#EAC054]">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-6 text-[#B9B5A8]">
              <div>
                <p className="text-[#F7F4EC]">Email</p>
                <a
                  href="mailto:hello@mamezastaging.com"
                  className="transition-colors hover:text-[#EAC054]"
                >
                  hello@mamezastaging.com
                </a>
              </div>

              <div>
                <p className="text-[#F7F4EC]">Phone</p>
                <a
                  href="tel:+15550100142"
                  className="transition-colors hover:text-[#EAC054]"
                >
                  (555) 010-0142
                </a>
              </div>

              <div>
                <p className="text-[#F7F4EC]">Location</p>
                <p>City, State</p>
              </div>
            </div>
          </div>

          {/* =================================================
              NEWSLETTER
              ================================================= */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#EAC054]">
              Newsletter
            </h3>

            <p className="mt-6 text-sm leading-6 text-[#B9B5A8]">
              Subscribe for staging inspiration, new projects and updates.
            </p>

            <form className="mt-5">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <div className="flex overflow-hidden rounded-md border border-[#4A483F]">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-[#77746A]"
                />

                <button
                  type="submit"
                  className="shrink-0 bg-[#EAC054] px-5 text-xs font-semibold uppercase tracking-[0.08em] text-[#221A0A] transition-colors hover:bg-[#C89A2E]"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
          ===================================================== */}
      <div className="border-t border-[#333129]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-6 text-xs text-[#77746A] sm:flex-row sm:items-center sm:justify-between lg:px-10">

          <p>
            © {new Date().getFullYear()} Mameza Home Staging. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#F7F4EC]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#F7F4EC]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}