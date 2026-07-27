"use client";

import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "utils/motion";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import {
  FaCarCrash,
  FaPhoneAlt,
  FaEuroSign,
  FaHandshake,
  FaBalanceScale,
} from "react-icons/fa";
import { RiCarWashingFill } from "react-icons/ri";
import { GiCrackedGlass, GiWaterGun } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { BsPersonCheckFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { BiSolidCarGarage } from "react-icons/bi";

const BrandPartenaire = dynamic(() => import("components/brandPartenaire"), {
  ssr: false,
});
const BrandAssurance = dynamic(() => import("components/brandAssurance"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <section className="relative h-screen w-full">
        <Image
          src="/assets/index/AMD-CARROSSERIE-ENTREE-1024x744-1.jpg"
          alt="Carrosserie AMD 31"
          width={1920}
          height={1080}
          className="aspect-auto h-full object-cover object-center brightness-50 md:object-right lg:w-full"
        />

        <div className="absolute top-1/2 z-10 w-full -translate-y-1/2 text-white">
          <h1 className="text-center text-xl font-extrabold tracking-wide lg:text-6xl">
            Carrosserie A.M.D 31 sur Colomiers
          </h1>
          <p className="mt-5 text-center text-lg lg:text-3xl">
            « TOUTES MARQUES, TOUTE ASSURANCES »
          </p>
          <div className="mt-10 flex items-center justify-center gap-10">
            <Link
              href="/devis"
              className="flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3 font-semibold text-black hover:bg-black hover:text-white md:max-w-max"
            >
              <FaEuroSign className="text-base" />
              <span className="text-lg uppercase">Faire un devis</span>
            </Link>

            <Link
              href="tel:+33665782837"
              className="flex items-center justify-between gap-4 rounded-xl bg-[#2ad000] px-4 py-3 font-semibold text-black hover:bg-[#18460b] hover:text-white md:max-w-max"
            >
              <FaPhoneAlt className="text-base" />
              <span className="text-lg uppercase">Appelez-nous</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 text-black">
        <h2 className="text-center text-5xl font-bold px-2">NOS PRESTATIONS</h2>
        <div className="flex flex-wrap justify-center gap-7 pt-20">
          <div className="flex w-[350px] flex-col items-center gap-4 rounded-xl px-5 py-12 shadow-lg shadow-black">
            <FaCarCrash className="text-7xl text-black" />
            <p className="text-center text-2xl font-bold">CARROSSERIE</p>
            <span className="text-center text-lg">
              Nous intervenons en cas de petites bosses, impacts de grêle, coups
              de porte, coups de caddie, projections diverses, chocs, rayures,
              etc ...
            </span>
            <span className="text-center text-lg">
              Aussi pour le remplacement de boucliers, ailes, pièces de
              carrosserie, le débosselage, le redressage, le ponçacage et bien
              plus !
            </span>
          </div>
          <div className="flex w-[350px] flex-col items-center gap-4 rounded-xl px-5 py-12 text-center shadow-lg shadow-black">
            <GiCrackedGlass className="text-7xl text-black" />
            <p className="text-center text-2xl font-bold">BRIS DE GLACE</p>
            <span className="text-center text-lg">
              Votre pare-brise est fissuré ? Impacté dans le champ de visions du
              conducteur ?
            </span>
            <span className="text-center text-lg">
              Il est nécessaire de le remplacer rapidement ! Dans la majorité
              des les contrats d&apos;assurances auto incluent une garantie
              &#34;brie de glace&#34; qui prendra en charge les frais de
              remplacement.
            </span>
          </div>
          <div className="flex w-[350px] flex-col items-center gap-4 rounded-xl px-5 py-12 text-center shadow-lg shadow-black">
            <RiCarWashingFill className="text-7xl text-black" />
            <p className="text-center text-2xl font-bold">LAVAGE</p>
            <span className="text-center text-lg">
              Nous prenons aussi en charge le lavage et nettoyage de votre
              véhicule intérieur et l&apos;extérieur dans notre carrosserie !
            </span>
            <span className="text-center text-lg">
              Actuellement, il est possible de laver votre véhicule en prenant
              rendez-vous par téléphone.
            </span>
          </div>
        </div>
      </section>

      <section className="bg-black pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:px-40"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.5)}
            className="mb-10 mt-32 px-5 text-start text-2xl font-bold text-white lg:text-5xl"
          >
            <h1>QUI SOMMES NOUS ?</h1>
            <p className="mt-10 text-lg font-normal">
              La carrosserie A.M.D 31 est situé à Colomiers dans la région
              Toulousaine, nous prenons en charge vos véhicules de toutes
              marques et de toutes assurances. Nous intervenons auprès des
              particuliers et professionnels pour les travaux de carrosserie et
              de peinture.
            </p>
            <p className="pt-4 text-lg font-normal">
              En effet, en cas de choc ou de vandalisme, nous disposons
              d&apos;un atelier de carrosserie et d&apos;un atelier pour la
              peinture de votre véhicules.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <a className="flex w-40 text-center items-center justify-center gap-4 rounded-xl border-2 border-white bg-transparent py-3 text-lg font-semibold uppercase text-white duration-300 hover:scale-[1.01] hover:border-white hover:bg-white hover:text-black hover:shadow-2xl lg:w-52 lg:px-2 lg:py-3 lg:font-bold">
                Voir la galerie
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.3, 1.5)}
            className="relative lg:ml-40 flex w-full flex-col items-center justify-center md:w-1/2"
          >
            <Image
              src="/assets/logo-carrosserie-AMD.jpg"
              alt="logo Carrosserie AMD 31"
              width={1920}
              height={1080}
              className="my-10 aspect-auto object-cover object-right px-5 md:object-right lg:w-full"
            />
          </motion.div>
        </motion.div>
      </section>

      <BrandPartenaire />

      <section className="bg-black py-20 text-black">
        <h2 className="text-center text-5xl font-bold text-white">
          Faites nous confiance
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="mx-auto grid max-w-[70%] grid-cols-1 justify-center gap-7 pt-20 md:grid-cols-3"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.5)}
            className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white px-5 py-12 shadow-lg"
          >
            <CiSettings className="text-4xl" />
            <p className="text-center text-lg">Expertise technique</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white px-5 py-12 text-center shadow-lg"
          >
            <GiWaterGun className="text-4xl" />
            <p className="text-lg">Équipement de pointe</p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1.5)}
            className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white px-5 py-12 text-center shadow-md"
          >
            <BiSolidCarGarage className="text-4xl" />
            <p className="text-lg">Qualité des matériaux</p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.5)}
            className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white px-5 py-12 text-center shadow-md"
          >
            <FaHandshake className="text-4xl" />
            <p className="text-lg">Service clientèle exceptionnel</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white px-5 py-12 text-center shadow-md"
          >
            <FaBalanceScale className="text-4xl" />
            <p className="text-lg">Respect des normes de l&apos;industrie</p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1.5)}
            className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white px-5 py-12 text-center shadow-md"
          >
            <BsPersonCheckFill className="text-4xl" />
            <p className="text-lg">Réputation solide</p>
          </motion.div>
        </motion.div>
      </section>

      <BrandAssurance />

      <section className="relative w-full bg-black px-4 py-20">
        <h2 className="text-center text-4xl font-bold text-white lg:text-5xl">
          Nos chiffres
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-wrap items-start justify-center gap-8 pt-10 font-semibold text-white/90 lg:flex-nowrap lg:justify-start lg:gap-14">
            <div className="relative flex gap-10">
              <p className="absolute text-8xl font-extrabold text-white/40">
                5/5
              </p>
              <p className="mt-24 w-[250px] text-xl">note moyenne du garage</p>
              <div className="hidden h-[200px] w-[2px] bg-white/40 lg:block" />
            </div>
            <div className="relative flex gap-10 lg:mt-12">
              <p className="absolute text-8xl font-extrabold text-white/40">
                5 <span className="text-3xl">marques</span>
              </p>
              <p className="mt-24 w-[250px] text-xl">partenaires du garage</p>
              <div className="hidden h-[200px] w-[2px] bg-white/40 lg:block" />
            </div>
            <div className="relative flex gap-10 lg:mt-24">
              <p className="absolute text-8xl font-extrabold text-white/40">
                100%
              </p>
              <p className="mt-24 w-[250px] text-xl">
                automobilistes déjà satisfaits
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  py-20">
        <h2 className="mb-10 text-center text-4xl font-bold text-black lg:text-5xl">
          NOS AVIS
        </h2>
        <div className="container mx-auto mb-10 grid grid-cols-1 gap-8 px-4 @container/grid md:grid-cols-2 lg:grid-cols-4 lg:px-0">
          {/* Card */}
          <div className="rounded-md bg-black px-10 py-6 text-white shadow-sm shadow-black sm:hidden lg:block">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-6">
                <div>
                  <h3 className="text-lg">yassine hajji</h3>
                </div>
              </div>

              <div className="flex text-amber-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="text-sm leading-6 tracking-wider">
                Super accueil ! Des réparations de qualité. Un garage hyper
                réactif qui nous tiens informé ! Qualité, réactivité et
                attractivité des tarifs. Rien à redire, je recommande vraiment.
                Merci encore !
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-md bg-black px-10 py-6 text-white shadow-sm shadow-black sm:hidden lg:block">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-6">
                <div>
                  <h3 className="text-lg">Rébecca Dince</h3>
                </div>
              </div>

              <div className="flex text-amber-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="text-sm leading-6 tracking-wider">
                Très bon, Garage et très bon personnel, agréable et
                professionnel. Ayant été arnaqué pour des réparations , on
                m&apos;a conseillé ce garage , qui sait très bien, occupé de ma
                voiture ( amortisseur ) à un prix intéressant ! Merci à eux
                encore une fois pour ce geste je re commande !!
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-md bg-black px-10 py-6 text-white shadow-sm shadow-black sm:hidden lg:block">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-6">
                <div>
                  <h3 className="text-lg">Justine Valette</h3>
                </div>
              </div>

              <div className="flex text-amber-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="text-sm leading-6 tracking-wider">
                Super travail, très rapide très efficace. Équipe très gentille
                Bravo continuez comme ça
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-md bg-black px-10 py-6 text-white shadow-sm shadow-black sm:hidden lg:block">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-6">
                <div>
                  <h3 className="text-lg">Jed Kan</h3>
                </div>
              </div>

              <div className="flex text-amber-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="text-sm leading-6 tracking-wider">
                Je recommande fortement, équipe professionnel travail de
                qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className=""
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="lg:px-80 text-center text-2xl font-bold text-white lg:text-5xl"
          >
            <h1 className="relative pb-4">
              NOS HORAIRES
              <span className="absolute bottom-0 left-[27%] h-[3px] w-[45%] bg-white"></span>
            </h1>

            <ul className="mt-10 text-lg font-semibold">
              <li>LUNDI : 09H00 - 18H00</li>
              <li className="mt-4">MARDI: 09H00 - 18H00</li>
              <li className="mt-4">MERCREDI : 09H00 - 18H00</li>
              <li className="mt-4">JEUDI : 09H00 - 18H00</li>
              <li className="mt-4">VENDREDI : 09H00 - 18H00</li>
              <li className="mt-4">SAMEDI : 09H00 - 18H00</li>
              <li className="mt-4">DIMANCHE : FERMÉ</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      <section className="w-full bg-white px-4 py-20 text-black shadow-lg">
        <div className="flex flex-wrap items-end justify-center gap-4 lg:flex-nowrap lg:gap-0">
          {/* Left Text */}
          <div className="z-10 rounded-xl border px-4 py-4 shadow shadow-black/50 lg:-mr-32 lg:mb-10 lg:w-[700px] lg:px-10 bg-white">
            <p className="mb-2 text-lg font-medium lg:text-xl">
              Carrosserie A.M.D 31
            </p>
            <h3 className="mb-4 text-2xl font-bold lg:text-4xl">
              NOTRE LOCALISATION
            </h3>
            <p className="mb-2 font-semibold tracking-wide">
              Pour rejoindre la carrosserie, vous devez prendre la sortie 3
              (Ramassier / Bascule-oratoire) de Colomiers juste après la sortie
              2 de Saint-Martin-du-Touch. Ainsi vous prenez la direction de
              Airbus (Site Louis Breguet);
            </p>
            <p className="mb-6 text-xl underline decoration-black underline-offset-4 duration-300 ease-in-out hover:text-black/50">
              <a
                href="https://www.google.com/maps/place/8+Av.+Edouard+Serres,+31770+Colomiers/@43.6122311,1.3528769,17z/data=!3m1!4b1!4m6!3m5!1s0x12aeb01372dc2e7d:0x581cc2943a552965!8m2!3d43.6122311!4d1.3528769!16s%2Fg%2F11bw502637?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                8 Av. Edouard Serres, 31770 Colomiers
              </a>
            </p>
            <p className="font-semibold tracking-wide">
              Du lundi au samedi de 9h00 à 18h00
            </p>
          </div>
          {/* Image */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4144.6537257996515!2d1.3510735661516524!3d43.61287367232791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeb01376f2cb29%3A0x46522cc1e6dde224!2s8%20Av.%20Edouard%20Serres%2C%2031770%20Colomiers!5e0!3m2!1sfr!2sfr!4v1689065946562!5m2!1sfr!2sfr"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </section>
    </>
  );
}
