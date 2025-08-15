"use client";

import Image from "next/image";

import { ReactLenis } from "lenis/react";

import About from "@/app/_components/About";
import Hero from "@/app/_components/Hero";
import Menu from "@/app/_components/Menu";

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

          <About />

          <section className="bg-light grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1729682936220-48e6635e7d74" alt="Muffins" fill className="object-cover" />
          </section>
        </div>

        <Menu />

        {/* Zigzag images BUG: Causing overflow on right side of screen */}
        {/* <section className="text-white w-full bg-slate-950  ">
          <div className="grid grid-cols-2">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                Thanks To Scroll.
                <br /> Now Scroll Up Again☝️🏿
              </h1>
            </div>
            <div className="grid gap-2">
              <figure className="grid place-content-center -skew-x-6">
                <Image
                  src="https://images.unsplash.com/photo-1652860818498-6b07383a5270?w=500&auto=format&fit=crop"
                  alt="Bakery facade"
                  height="384"
                  width="320"
                  className="transition-all duration-300 w-80 h-96 align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center skew-x-6">
                <Image
                  src="https://images.unsplash.com/photo-1624715136693-c06de266b622?w=500&auto=format&fit=crop"
                  alt="Squeezing profiteroles on baking sheet"
                  height="384"
                  width="320"
                  className="transition-all duration-300 w-80 h-96 align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center -skew-x-6">
                <Image
                  src="https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=500&auto=format&fit=crop"
                  alt="Baked goods on shelves"
                  height="384"
                  width="320"
                  className="transition-all duration-300 w-80 h-96 align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center skew-x-6">
                <Image
                  src="https://images.unsplash.com/photo-1607975218287-094017cb173c?w=500&auto=format&fit=crop"
                  alt="Baker holding cookies"
                  height="384"
                  width="320"
                  className="transition-all duration-300 w-80 h-96 align-bottom object-cover "
                />
              </figure>
            </div>
          </div>
        </section> */}

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

