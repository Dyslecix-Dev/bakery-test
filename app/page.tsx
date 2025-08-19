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
            <Image src="https://images.unsplash.com/photo-1584847801423-852691e41bc7" alt="Cookies" fill loading="lazy" className="object-cover" />
          </section>

          <AboutSection />

          <section className="bg-light grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1729682936220-48e6635e7d74" alt="Muffins" fill loading="lazy" className="object-cover" />
          </section>
        </div>

        <MenuSection />

        <ContactSection />
      </main>
    </ReactLenis>
  );
}

