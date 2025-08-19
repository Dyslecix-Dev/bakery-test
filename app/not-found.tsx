import Image from "next/image";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-64px)] p-4 pt-20 flex flex-col items-center justify-center gap-y-10 bg-tertiary-brown font-jetbrains text-light text-3xl">
      <Image src="/logos/logo.png" alt="Snickerdoodle's Desserts Logo" width={400} height={400} priority loading="eager" className="rounded-full animate-rock" />
      We&apos;re in a jam – this page seems to have gone missing from our batch.
    </section>
  );
}
