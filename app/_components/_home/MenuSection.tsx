import Image from "next/image";

import NavLink from "@/app/_components/Navlink";

export default function Menu() {
  return (
    <section id="menu-section" className="text-dark w-full bg-secondary-teal">
      <div className="grid grid-cols-2 px-8">
        <div className="grid gap-2">
          {MENU_IMAGES.map((image) => (
            <figure key={image.src} className="sticky top-0 h-screen grid place-content-center">
              <Image src={image.src} alt={image.alt} height={384} width={384} loading="lazy" className="w-96 h-96 align-bottom object-cover rounded-md" />
            </figure>
          ))}
        </div>

        <div className="sticky top-0 h-screen grid place-content-center gap-4 ml-10 z-10 transform-gpu">
          <h2 className="text-4xl md:text-5xl lg:text-7xl px-8 font-medium text-left tracking-tight leading-[120%]">
            Sweet Tooth?
            <br />
            <NavLink href="/menu.png" download="snickerdoodle-menu.png">
              Download our menu
            </NavLink>
          </h2>
        </div>
      </div>
    </section>
  );
}

const MENU_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1695649920276-e69e25a7a15a?w=500&auto=format&fit=crop",
    alt: "Flan",
  },
  {
    src: "https://images.unsplash.com/photo-1643998302322-4ca6a9fc7316",
    alt: "Pineapple upside-down cake",
  },
  {
    src: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=500&auto=format&fit=crop",
    alt: "Tres leches cake with strawberries",
  },
  {
    src: "https://images.unsplash.com/photo-1582623201359-74e936ed48c4?w=500&auto=format&fit=crop",
    alt: "Double chocolate cookies",
  },
];
