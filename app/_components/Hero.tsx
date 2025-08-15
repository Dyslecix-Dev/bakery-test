import Image from "next/image";

export default function Hero() {
  return (
    <section className="animate-change-bg text-light h-screen w-full grid place-content-center sticky top-0">
      <Image src="/logo.png" alt="Nicole's Cupcakes Logo" width={500} height={500} priority className=" rounded-full animate-rock" />
    </section>
  );
}
