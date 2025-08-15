import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="bg-primary-pink">
        <h1 className="font-spectral text-dark text-4xl">Spectral</h1>
      </div>

      <div className="bg-secondary-teal">
        <h2 className="font-jetbrains text-primary-pink-accent text-4xl">Jetbrains</h2>
      </div>

      <div className="bg-tertiary-brown">
        <h2 className="text-light text-4xl">No font (still Spectral)</h2>
      </div>

      <Image src="/logo.png" alt="Nicole's Cupcakes Logo" width={200} height={200} priority className=" rounded-full" />
    </section>
  );
}

