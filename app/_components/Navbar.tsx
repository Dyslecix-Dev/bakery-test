"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";

import { useMotionValueEvent, AnimatePresence, useScroll, motion } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 550 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-light 
      transition-all duration-300 ease-out lg:px-12
      ${scrolled ? "h-16 bg-primary-pink-accent py-3 shadow-xl" : "h-20 bg-primary-pink/0 shadow-none"}`}
    >
      <div className={`h-full mx-auto flex max-w-7xl items-center ${scrolled ? "justify-between" : "justify-between lg:justify-end"}`}>
        <Logo scrolled={scrolled} />

        <div className="hidden gap-6 lg:flex">
          <Links />
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
}

const Logo = ({ scrolled, setMenuOpen }: { scrolled?: boolean; setMenuOpen?: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <Link
      onClick={(e) => {
        e.stopPropagation();
        if (setMenuOpen) setMenuOpen(false);
      }}
      href="/"
      className={`flex items-center gap-4 cursor-pointer ${!scrolled && "lg:hidden"}`}
    >
      <span className="font-bold text-dark text-2xl">Snickerdoodle&apos;s</span>

      <Image src="/logos/no-text-logo.png" alt="Snickerdoodle's Desserts Logo" width={60} height={60} priority className=" rounded-full" />
    </Link>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6 font-jetbrains text-dark">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <div className="relative h-fit w-fit group">
      <a href={href} className="relative text-dark">
        {children}
        <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-tertiary-brown transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </a>
    </div>
  );
};

const MobileMenuLink = ({ children, setMenuOpen }: { children: ReactNode; href: string; setMenuOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className="relative text-dark font-jetbrains">
      <a
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(false);
        }}
        href="#"
        className="flex w-full cursor-pointer items-center justify-between border-b border-primary-pink py-6 text-start text-2xl font-semibold"
      >
        <span>{children}</span>
      </a>
    </div>
  );
};

const MobileMenu = () => {
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
              {LINKS.map((l) => (
                <MobileMenuLink key={l.text} href={l.href} setMenuOpen={setOpen}>
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

// TODO: Add regular and anchor links
const LINKS = [
  {
    text: "About",
    href: "#",
  },
  {
    text: "Menu",
    href: "#",
  },
  {
    text: "Contact",
    href: "#",
  },
  {
    text: "FAQ",
    href: "#",
  },
];
