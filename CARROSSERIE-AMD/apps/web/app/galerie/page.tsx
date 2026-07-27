"use client";

import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="bg-black pb-5 pt-20">
        <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-4 py-20 lg:px-0">
          <h2 className="text-center text-3xl font-semibold text-white lg:text-4xl">
            GALERIE
          </h2>
        </div>
      </section>

      <div className="bg-black">
        <section className="grid w-full grid-cols-1 gap-1 bg-black md:grid-cols-3">
          <div>
            <Image
              src="/assets/galerie/IMG_8752.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-auto h-full object-cover object-center lg:w-full"
            />
          </div>
          <div>
            <Image
              src="/assets/galerie/IMG_8754.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-auto h-full object-cover object-center lg:w-full"
            />
          </div>
          <div>
            <Image
              src="/assets/galerie/IMG_8760.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-[4/3] h-full object-cover object-center lg:w-full"
            />
          </div>
        </section>

        <section className="mt-1 grid w-full grid-cols-1 gap-1 bg-black md:grid-cols-3">
          <div>
            <Image
              src="/assets/galerie/IMG_8755.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-auto h-full object-cover object-center lg:w-full"
            />
          </div>
          <div>
            <Image
              src="/assets/galerie/IMG_8758.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-auto h-full object-cover object-center lg:w-full"
            />
          </div>
          <div>
            <Image
              src="/assets/galerie/IMG_8759.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-[4/3] h-full object-cover object-center lg:w-full"
            />
          </div>
        </section>

        <section className="mt-1 grid w-full grid-cols-1 gap-1 bg-black md:grid-cols-3">
          <div>
            <Image
              src="/assets/galerie/IMG_8757.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-auto h-full object-cover object-center lg:w-full"
            />
          </div>
          <div>
            <Image
              src="/assets/galerie/PHOTO-2019-10-19-12-26-03-3.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-auto h-full object-cover object-center lg:w-full"
            />
          </div>
          <div>
            <Image
              src="/assets/galerie/PHOTO-2019-10-19-12-26-03-2.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-[4/3] h-full object-cover object-center lg:w-full"
            />
          </div>
        </section>

        <section className="mt-1 grid w-full grid-cols-1 gap-1 bg-black md:grid-cols-3">
          <div>
            <Image
              src="/assets/galerie/PHOTO-2019-10-19-12-26-04.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-auto h-full object-cover object-center lg:w-full"
            />
          </div>
          <div>
            <Image
              src="/assets/galerie/AMD-CARROSSERIE-ENTREE-2048x1487.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-auto h-full object-cover object-center lg:w-full"
            />
          </div>
          <div>
            <Image
              src="/assets/galerie/PHOTO-2019-10-19-12-26-02.jpg"
              alt="Donner des idées aux clients"
              width={1920}
              height={1080}
              className="aspect-[4/3] h-full object-cover object-center lg:w-full"
            />
          </div>
        </section>
      </div>
    </>
  );
}
