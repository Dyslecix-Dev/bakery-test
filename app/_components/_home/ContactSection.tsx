import Image from "next/image";

import NavLink from "@/app/_components/Navlink";
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
          {CONTACT_IMAGES.map((image) => (
            <figure key={image.src} className={`grid place-content-center ${image.skew}`}>
              <Image src={image.src} alt={image.alt} height={384} width={320} loading="lazy" className="transition-all duration-300 w-80 h-96 align-bottom object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </ZigzagBackground>
  );
}

const CONTACT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1611588275568-72ecc1a502d1?w=500&auto=format&fit=crop",
    alt: "Kneading dough",
    skew: "-skew-x-2",
  },
  {
    src: "https://images.unsplash.com/photo-1624715136693-c06de266b622?w=500&auto=format&fit=crop",
    alt: "Squeezing profiteroles on baking sheet",
    skew: "skew-x-2",
  },
  {
    src: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&auto=format&fit=crop",
    alt: "Decorating a cake",
    skew: "-skew-x-2",
  },
  {
    src: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?w=500&auto=format&fit=crop",
    alt: "Sprinkling cinnamon",
    skew: "skew-x-2",
  },
];
