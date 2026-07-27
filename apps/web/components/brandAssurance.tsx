"use client";

import Image from "next/image";

import { register } from "swiper/element/bundle";

register();

// Import Swiper styles
import { Autoplay, Navigation } from "swiper";
import "swiper/element/css/a11y";
import "swiper/element/css/autoplay";
import "swiper/element/css/navigation";

const Logo = [
  {
    uuid: "0063a8f5-cb54-402a-afbd-4160fe6adb1f",
    image: "/assets/index/logo_assurance/Axa_logo.png",
    alt: "Logo de l'entreprise Mercedes",
  },
  {
    uuid: "ae063ec8-f244-4b14-a2d9-ac41c16c4505",
    image: "/assets/index/logo_assurance/Allianz_logo.png",
    alt: "Logo de l'entreprise Peugeot",
  },
  {
    uuid: "fe95f75e-f1f6-4dba-baef-51366b741769",
    image: "/assets/index/logo_assurance/Groupama_logo.png",
    alt: "Logo de l'entreprise Renault",
  },
  {
    uuid: "265709c7-f55b-41ef-b2fd-bee6f6b416d8",
    image: "/assets/index/logo_assurance/Macif_logo.png",
    alt: "Logo de l'entreprise SEAT",
  },
  {
    uuid: "50fa5b14-0a8c-4f59-a5e4-3bccfcd7e646",
    image: "/assets/index/logo_assurance/MMA_logo.png",
    alt: "Logo de l'entreprise Citroen",
  },
  {
    uuid: "0063a8f5-cb54-402a-afbd-4160fe6adb1f",
    image: "/assets/index/logo_assurance/Axa_logo.png",
    alt: "Logo de l'entreprise Mercedes",
  },
  {
    uuid: "ae063ec8-f244-4b14-a2d9-ac41c16c4505",
    image: "/assets/index/logo_assurance/Allianz_logo.png",
    alt: "Logo de l'entreprise Peugeot",
  },
  {
    uuid: "fe95f75e-f1f6-4dba-baef-51366b741769",
    image: "/assets/index/logo_assurance/Groupama_logo.png",
    alt: "Logo de l'entreprise Renault",
  },
  {
    uuid: "265709c7-f55b-41ef-b2fd-bee6f6b416d8",
    image: "/assets/index/logo_assurance/Macif_logo.png",
    alt: "Logo de l'entreprise SEAT",
  },
  {
    uuid: "50fa5b14-0a8c-4f59-a5e4-3bccfcd7e646",
    image: "/assets/index/logo_assurance/MMA_logo.png",
    alt: "Logo de l'entreprise Citroen",
  },
];

export default function Brand() {
  return (
    <div className="flex flex-wrap items-end gap-5 bg-white px-5 py-20 lg:flex-nowrap lg:gap-2">
      <div>
        <h2 className="pb-5 text-center text-3xl font-bold text-black lg:pb-0 lg:text-start lg:text-5xl">
          Ils nous font confiance
        </h2>
      </div>
      {/* Carousel */}
      <swiper-container
        navigation
        space-between={20}
        loop={true}
        slides-per-view="auto"
        autoplay={{
          delay: 3000,
        }}
        freeMode
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Autoplay, Navigation]}
      >
        {Logo.map(({ uuid, image, alt }) => (
          <swiper-slide
            key={uuid}
            className="relative aspect-square h-20 w-full"
          >
            {/* card */}
            <Image
              src={image}
              width={1920}
              height={1080}
              alt={alt}
              className="aspect-auto h-full w-full object-contain"
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
