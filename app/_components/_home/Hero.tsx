import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero-section" className="px-4 animate-change-bg text-light h-screen w-full grid place-content-center sticky top-0">
      <Image src="/logos/logo.png" alt="Snickerdoodle's Desserts Logo" width={500} height={500} priority className=" rounded-full animate-rock" />
    </section>
  );
}
