"use client";

import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "utils/motion";
import { motion } from "framer-motion";

import { AiFillStar } from "react-icons/ai";
import { FaEuroSign } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <section className="relative h-[500px] w-full">
        <Image
          src="/assets/bris_glace/header_brisdeglace.jpg"
          alt="Bris de glace AMD 31"
          width={1920}
          height={1080}
          className="aspect-auto h-full object-cover object-center brightness-50 md:object-right lg:w-full"
        />

        <div className="absolute top-1/2 z-10 w-full -translate-y-1/2 text-white">
          <h1 className="text-center text-xl font-extrabold tracking-wide lg:text-5xl">
            BRIS DE GLACE COLOMIERS
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:px-40"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1.5)}
            className="relative flex w-full flex-col items-center justify-center"
          >
            <Image
              src="/assets/bris_glace/bris-de-glace.jpg"
              alt="logo Carrosserie AMD 31"
              width={1920}
              height={1080}
              className="my-10 aspect-auto object-cover object-right px-5 md:object-right lg:w-full"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1.5)}
            className="my-10 flex flex-col items-start justify-center px-5 text-start text-lg text-black"
          >
            <p className="font-bold">Votre pare-brise est fissuré ?</p>
            <p className="pt-4 font-bold">
              Impacté dans le champ de vision du conducteur ?
            </p>
            <p className="pt-4 font-bold">
              Il est nécessaire de le remplacer rapidement !
            </p>

            <p className="pt-4">
              Dans la
              <span className="font-bold"> MAJORITÉ </span>
              des cas (attention, c&apos;est optionnel dans certaines assurances
              au tiers), les contrats d&apos;assurances auto incluent une
              garantie bris de glace qui prendra en charge les frais de
              remplacement ou de réparation des éléments vitrés de votre
              véhicule.{" "}
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-black py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:px-40"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.5)}
            className="my-10 flex flex-col items-center justify-center px-5 text-start text-lg text-white"
          >
            <p className="pb-5 font-bold">
              Quels sont les étapes que vous devez suivre ? Cela va t-il vous
              porter préjudice ?
            </p>
            Il faut choisir le réparateur à qui vous confierez la réparation ou
            le remplacement du vitrage. Et oui, vous pouvez choisir votre
            réparateur librement! Et ce, depuis la Loi Hamon sur la
            consommation. Pour ce type d&apos;intervention, nous maitrisons la
            technicité du remplacement de pare brise ainsi que toutes les
            opérations sur votre carrosserie qui peuvent avoir une relation de
            cause à effet avec un bris de glace.
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1.5)}
            className="my-10 flex flex-col items-center justify-center px-5 text-center text-lg text-white"
          >
            <h1 className="text-2xl font-bold lg:text-5xl">
              PARE-BRISE FRANCHISE 0€
            </h1>
            <p className="mt-10 text-lg font-normal">
              Pour plus de renseignements ou l&apos;élaboration d&apos;un devis
              pour votre véhicule. Cliquez sur le bouton ci-dessous :
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="flex w-52 items-center justify-center text-center gap-4 rounded-xl border-2 border-white bg-transparent py-3 text-lg font-semibold uppercase text-white duration-300 hover:scale-[1.01] hover:border-white hover:bg-white hover:text-black hover:shadow-2xl lg:w-52 lg:px-2 lg:py-3 lg:font-bold"
              >
                <FaEuroSign className="text-base" />
                <span className="text-lg uppercase">FAIRE UN DEVIS</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white  py-20">
        <h2 className="mb-10 text-center text-4xl font-bold text-black lg:text-5xl">
          Les avis
        </h2>
        <div className="container mx-auto mb-10 grid grid-cols-1 gap-8 px-4 @container/grid md:grid-cols-2 lg:grid-cols-4 lg:px-0">
          {/* Card */}
          <div className="rounded-md bg-black px-10 py-6 text-white shadow-sm shadow-black sm:hidden lg:block">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-6">
                <div>
                  <h3 className="text-lg"> yassine hajji </h3>
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
        <h2 className="mt-10 text-center text-2xl font-semibold text-black">
          N&apos;ATTENDEZ PLUS ET VENEZ CHANGER VOTRE PARE-BRISE DANS NOTRE
          CARROSSERIE SUR COLOMIERS.
        </h2>
      </section>
    </>
  );
}
