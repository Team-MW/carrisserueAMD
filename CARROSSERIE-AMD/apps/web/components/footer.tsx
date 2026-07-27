import { Route } from "next";
import Image from "next/image";
import Link from "next/link";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const NavigationLink: { uuid: string; href: string; title: string }[] = [
  {
    uuid: "14efe79f-ce19-474c-9545-3ce86c06497a",
    href: "/",
    title: "Accueil",
  },
  {
    uuid: "48aaf304-382a-4c49-a0cb-2e33bf6ef0ea",
    href: "/carrosserie",
    title: "Carrosserie",
  },
  {
    uuid: "76966bb0-a7d0-4668-8979-322540bfe248",
    href: "/bris_glace",
    title: "Bris de glace",
  },
  // {
  //   uuid: "48aaf304-382a-4c49-a0cb-2e33bf6ef0ea",
  //   href: "/lavage",
  //   title: "Lavage",
  // },
  {
    uuid: "76966bb0-a7d0-4668-8979-322540bfe248",
    href: "/galerie",
    title: "Galerie",
  },
  {
    uuid: "183d6c62-c918-4a6b-a589-e2be5caa107f",
    href: "/devis",
    title: "Devis",
  },
];

const InformationLink: { uuid: string; href: string; title: string }[] = [
  {
    uuid: "48aaf304-382a-4c49-a0cb-2e33bf6ef0ea",
    href: "/mentions",
    title: "Mentions légales",
  },
  {
    uuid: "76966bb0-a7d0-4668-8979-322540bfe248",
    href: "/politique-de-confidentialite",
    title: "Politiques de confidentialité",
  },
];

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-2 bg-black">
        <div className="grid grid-cols-1 gap-6 border-b border-white/40 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div className="col-span-1 mb-6 flex flex-col px-4 items-center text-center">
            <div className="relative mb-5 h-full lg:w-2/3 w-2/4">
              <Image
                src="/assets/logo-carrosserie-AMD.jpg"
                alt="logo GT Cars Import"
                height={1000}
                width={1000}
                className="aspect-auto h-full w-full object-contain"
              />
            </div>
            <div className="col-span-1 mb-4 flex flex-col items-center justify-center md:px-0 lg:mb-0">
              <div className="w-full text-center text-white lg:text-start">
                <h3 className="mb-5 text-center text-lg font-bold">
                  CARROSSERIE AMD31 - COLOMIERS
                </h3>
              </div>
            </div>
          </div>

          {/* Links */}

          <div className="col-span-1 mb-6 flex flex-col px-4 text-center md:text-left lg:text-left pt-16 md:pl-20 lg:pl-20">
            <h3 className="mb-2 text-lg font-bold uppercase text-white lg:mb-5">
              Navigation
            </h3>

            <div className="grid grid-cols-1 gap-2 xl:gap-1">
              {NavigationLink.map(({ href, title }, index) => (
                <div key={index}>
                  <Link
                    href={href as Route}
                    className="text-sm text-white transition-all duration-200 ease-in-out hover:text-white/50 hover:underline"
                  >
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 mb-6 mt-6 lg:mt-0 flex flex-col px-4 text-center md:text-left lg:text-left pt-16">
            <h3 className="mb-2 text-lg font-bold uppercase text-white lg:mb-5 lg:mt-0">
              Informations
            </h3>
            <div className="grid grid-cols-1 gap-2 xl:gap-1">
              {InformationLink.map(({ href, title }, index) => (
                <div key={index}>
                  <Link
                    href={href as Route}
                    className="text-sm text-white transition-all duration-200 ease-in-out hover:text-white/50 hover:underline"
                  >
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 mb-6 mt-6 lg:mt-0 flex flex-col px-4 text-center md:text-left lg:text-left pt-16">
          <h3 className="mb-2 text-lg font-bold uppercase text-white lg:mb-5">
                Contact
              </h3>
              <div className="grid grid-cols-1 gap-2 xl:gap-1">
                <div>
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER_LINK}`}
                    className="text-sm text-white transition-all duration-200 ease-in-out hover:text-white/50 hover:underline"
                  >
                    {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                  </a>
                </div>

                <div>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_LINK}`}
                    className="text-sm text-white transition-all duration-200 ease-in-out hover:text-white/50 hover:underline"
                  >
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </a>
                </div>
              </div>
          </div>
        </div>

        <div className="h-full bg-white">
          <div className="bg-black">
            <div className="flex flex-col justify-between px-4 py-2 pb-2 md:flex-row">
              <div className="text-sm text-white/80">
                © 2023{" "}
                <Link href="/" className="hover:underline">
                  Carrosserie AMD 31™
                </Link>
                . All Rights Reserved
                <Link href="/plan-de-site">.</Link>
              </div>
              <div className="text-sm text-white/80 hover:underline">
                <a
                  href="https://id-skillz.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Ce site a été réalisé par ID Skillz
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
