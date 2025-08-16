"use client";

import Image from "next/image";

import { ReactLenis } from "lenis/react";

import AboutSection from "@/app/_components/_home/AboutSection";
import ContactSection from "@/app/_components/_home/ContactSection";
import Hero from "@/app/_components/_home/Hero";
import MenuSection from "@/app/_components/_home/MenuSection";

// BUG: Horizontal layout shift on 600 px or less
export default function Home() {
  return (
    <ReactLenis root>
      <main className="max-w-screen text-dark">
        <div className="wrapper">
          <Hero />

          <section className="bg-light grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1584847801423-852691e41bc7" alt="Cookies" fill className="object-cover" />
          </section>

          <AboutSection />

          <section className="bg-light grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1729682936220-48e6635e7d74" alt="Muffins" fill className="object-cover" />
          </section>
        </div>

        <MenuSection />

        <ContactSection />

        <footer className="group bg-slate-950 ">
          <h1 className="text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            TODO FOOTER
          </h1>
          <section className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full">Thanks for Scrolling</section>
        </footer>
      </main>
    </ReactLenis>
  );
}

