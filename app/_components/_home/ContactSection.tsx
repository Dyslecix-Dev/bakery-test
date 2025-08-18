import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import ZigzagBackground from "@/app/_components/_background/ZigzagBackground";

export default function ContactSection() {
  return (
    <ZigzagBackground>
      <div className="grid grid-cols-2 relative z-10">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl px-8 font-medium text-left tracking-tight leading-[120%]">
            We don&apos;t bite.
            <br />
            <NavLink href="/contact">Contact us</NavLink>
          </h2>
        </div>
        <div className="grid gap-2">
          <figure className="grid place-content-center -skew-x-2">
            <Image
              src="https://images.unsplash.com/photo-1611588275568-72ecc1a502d1?w=500&auto=format&fit=crop"
              alt="Kneading dough"
              height="384"
              width="320"
              className="transition-all duration-300 w-80 h-96 align-bottom object-cover "
            />
          </figure>

          <figure className="grid place-content-center skew-x-2">
            <Image
              src="https://images.unsplash.com/photo-1624715136693-c06de266b622?w=500&auto=format&fit=crop"
              alt="Squeezing profiteroles on baking sheet"
              height="384"
              width="320"
              className="transition-all duration-300 w-80 h-96 align-bottom object-cover "
            />
          </figure>

          <figure className="grid place-content-center -skew-x-2">
            <Image
              src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&auto=format&fit=crop"
              alt="Decorating a cake"
              height="384"
              width="320"
              className="transition-all duration-300 w-80 h-96 align-bottom object-cover "
            />
          </figure>

          <figure className="grid place-content-center skew-x-2">
            <Image
              src="https://images.unsplash.com/photo-1512223792601-592a9809eed4?w=500&auto=format&fit=crop"
              alt="Sprinkling cinnamon"
              height="384"
              width="320"
              className="transition-all duration-300 w-80 h-96 align-bottom object-cover "
            />
          </figure>
        </div>
      </div>
    </ZigzagBackground>
  );
}

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <div className="relative h-fit w-fit group">
      <Link href={href} className="relative text-2xl md:text-3xl lg:text-5xl text-tertiary-brown">
        {children}
        {/* TODO: add mobile active */}
        <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full  bg-tertiary-brown transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </Link>
    </div>
  );
};
