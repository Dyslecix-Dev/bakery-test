"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, ReactNode, SetStateAction, useState, useEffect } from "react";

import { FiMenu, FiX } from "react-icons/fi";

import { useMotionValueEvent, AnimatePresence, useScroll, motion } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const pathname = usePathname();
  const router = useRouter();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 550 ? true : false);
  });

  useEffect(() => {
    const targetSection = sessionStorage.getItem("scrollToSection");

    if (targetSection && pathname === "/") {
      setTimeout(() => {
        smoothScrollToSection(targetSection);
        sessionStorage.removeItem("scrollToSection");
      }, 100);
    }
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-light 
      transition-all duration-300 ease-out lg:px-12
      ${scrolled || pathname !== "/" ? "h-16 bg-primary-pink-accent py-3 shadow-xl" : "h-20 bg-primary-pink/0 shadow-none"}`}
    >
      <div className={`h-full mx-auto flex max-w-7xl items-center ${scrolled || pathname !== "/" ? "justify-between" : "justify-between lg:justify-end"}`}>
        <Logo pathname={pathname} scrolled={scrolled} />

        <div className="hidden gap-6 lg:flex">
          <Links router={router} pathname={pathname} />
        </div>

        <MobileMenu router={router} pathname={pathname} />
      </div>
    </nav>
  );
}

const Logo = ({ pathname, scrolled, setMenuOpen }: { pathname?: string; scrolled?: boolean; setMenuOpen?: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <Link
      onClick={(e) => {
        e.stopPropagation();
        if (setMenuOpen) setMenuOpen(false);
      }}
      href="/"
      className={`flex items-center gap-4 cursor-pointer ${!scrolled && pathname === "/" && "lg:hidden"}`}
    >
      <h1 className="font-bold text-dark text-2xl">Snickerdoodle&apos;s</h1>

      <Image src="/logos/no-text-logo.png" alt="Snickerdoodle's Desserts Logo" width={60} height={60} priority loading="eager" className="rounded-full" />
    </Link>
  );
};

const smoothScrollToSection = (targetId: string) => {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const navbarHeight = 80;

    if (targetId === "about-section") {
      const targetRect = targetElement.getBoundingClientRect();
      const currentScrollY = window.scrollY;

      if (targetRect.top < 0) {
        const targetPosition = targetRect.top + currentScrollY;
        const extraOffset = window.innerHeight * 0.95;
        const finalScrollPosition = targetPosition - navbarHeight - extraOffset;

        window.scrollTo({
          top: Math.max(0, finalScrollPosition),
          behavior: "smooth",
        });
        return;
      }
    }

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const handleNavigation = (href: string, router: AppRouterInstance, pathname: string) => {
  if (href.startsWith("/#")) {
    const targetId = href.substring(2);

    if (pathname === "/") {
      smoothScrollToSection(targetId);
    } else {
      router.push("/");

      sessionStorage.setItem("scrollToSection", targetId);
    }
  }
};

const Links = ({ router, pathname }: { router: AppRouterInstance; pathname: string }) => {
  return (
    <div className="flex items-center gap-6 font-jetbrains text-dark">
      {NAV_LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} router={router} pathname={pathname}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({ children, href, router, pathname }: { children: ReactNode; href: string; router: AppRouterInstance; pathname: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      handleNavigation(href, router, pathname);
    }
  };

  return (
    <div className="relative h-fit w-fit group">
      <Link href={href} className="relative text-dark" onClick={handleClick}>
        {children}
        <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-tertiary-brown transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </Link>
    </div>
  );
};

const MobileMenuLink = ({
  children,
  href,
  setMenuOpen,
  router,
  pathname,
}: {
  children: ReactNode;
  href: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  router: AppRouterInstance;
  pathname: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    setMenuOpen(false);

    if (href.startsWith("/#")) {
      e.preventDefault();

      setTimeout(() => {
        handleNavigation(href, router, pathname);
      }, 150);
    }
  };

  return (
    <div className="relative text-tertiary-brown font-jetbrains">
      <a onClick={handleClick} href={href} className="flex w-full cursor-pointer items-center justify-between border-b border-primary-pink py-6 text-start text-2xl font-semibold">
        <span>{children}</span>
      </a>
    </div>
  );
};

const MobileMenu = ({ router, pathname }: { router: AppRouterInstance; pathname: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-dark text-3xl">
        <FiMenu />
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-primary-pink-accent"
          >
            <div className="h-16 flex items-center justify-between p-6">
              <Logo setMenuOpen={setOpen} />

              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>

            <div className="h-screen overflow-y-scroll bg-secondary-teal p-6">
              {NAV_LINKS.map((l) => (
                <MobileMenuLink key={l.text} href={l.href} setMenuOpen={setOpen} router={router} pathname={pathname}>
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const NAV_LINKS = [
  {
    text: "About",
    href: "/#about-section",
  },
  {
    text: "Menu",
    href: "/#menu-section",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];
