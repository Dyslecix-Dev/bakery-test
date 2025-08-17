import Image from "next/image";

import BrickBackground from "@/app/_components/_background/BrickBackground";

export default function AboutSection() {
  return (
    <section id="about-section" className="pt-40 sm:pt-20 md:pt-0 bg-tertiary-brown grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
      <BrickBackground />

      <div className="flex flex-col xl:flex-row items-center gap-x-20 gap-y-10 lg:gap-y-20 px-10 xl:px-20 2xl:px-40 z-2">
        <div className="font-semibold text-light tracking-tight space-y-4 lg:space-y-10">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl 2xl:text-7xl text-center leading-[120%]">My Baking Journey</h1>

          <p className="font-jetbrains text-xs sm:text-sm lg:text-lg text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quam? Consequatur minima illum labore maxime eius beatae quasi dolore sequi non, sint iusto qui placeat veritatis est autem
            adipisci animi vero saepe quam, totam consequuntur ea facere minus neque? Adipisci dolorem velit accusantium voluptatum sunt ullam odio a, fugiat est distinctio aliquam quia praesentium
            itaque nobis harum quaerat. Asperiores, recusandae suscipit dolore ea, mollitia eligendi impedit maiores cum fugiat maxime perferendis! Est eveniet quod numquam doloribus vel iste
            voluptatem corrupti deserunt dolorem dicta enim at iusto nihil exercitationem ipsam culpa, eius obcaecati nisi, quo repudiandae. Eligendi, similique. Non, dicta! Veritatis!
          </p>
        </div>

        <Image src="/baking_illustration.svg" alt="Illustration of two bakers" width={500} height={500} />
      </div>
    </section>
  );
}
