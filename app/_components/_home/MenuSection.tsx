import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <section id="menu-section" className="text-dark w-full bg-secondary-teal">
      <div className="grid grid-cols-2 px-8">
        <div className="grid gap-2">
          <figure className="sticky top-0 h-screen grid place-content-center">
            <Image
              src="https://images.unsplash.com/photo-1695649920276-e69e25a7a15a?w=500&auto=format&fit=crop"
              alt="Flan"
              height="384"
              width="384"
              className="w-96 h-96 align-bottom object-cover rounded-md"
            />
          </figure>

          <figure className="sticky top-0 h-screen grid place-content-center">
            <Image
              src="https://images.unsplash.com/photo-1643998302322-4ca6a9fc7316"
              alt="Pineapple upside-down cake"
              height="384"
              width="384"
              className="w-96 h-96 align-bottom object-cover rounded-md"
            />
          </figure>

          <figure className="sticky top-0 h-screen grid place-content-center">
            <Image
              src="https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=500&auto=format&fit=crop"
              alt="Tres leches cake with strawberries"
              height="384"
              width="384"
              className="w-96 h-96 align-bottom object-cover rounded-md"
            />
          </figure>

          <figure className="sticky top-0 h-screen grid place-content-center">
            <Image
              src="https://images.unsplash.com/photo-1582623201359-74e936ed48c4?w=500&auto=format&fit=crop"
              alt="Double chocolate cookies"
              height="384"
              width="384"
              className="w-96 h-96 align-bottom object-cover rounded-md"
            />
          </figure>
        </div>

        <div className="sticky top-0 h-screen grid place-content-center gap-4 ml-10 z-10 transform-gpu">
          <h2 className="text-4xl md:text-5xl lg:text-7xl px-8 font-medium text-left tracking-tight leading-[120%]">Sweet tooth?</h2>

          <p className="text-2xl md:text-3xl lg:text-5xl px-8 font-medium text-tertiary-brown text-left tracking-tight leading-[120%]">
            Download our <GradientButton />
          </p>
        </div>
      </div>
    </section>
  );
}

const GradientButton = () => {
  return (
    <Link
      href="/menu.png"
      download="snickerdoodle-menu.png"
      className="group relative inline-block align-middle rounded bg-gradient-to-br from-primary-pink-accent to-primary-pink p-px transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <span className="inline-block rounded bg-tertiary-brown px-1.5 py-0.5 text-slate-100 transition-all duration-300 group-hover:bg-tertiary-brown/20 group-hover:text-slate-50 group-active:bg-tertiary-brown/50">
        menu
      </span>
    </Link>
  );
};
