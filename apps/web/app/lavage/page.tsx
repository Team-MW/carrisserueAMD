"use client";

import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "utils/motion";
import { motion } from "framer-motion";

import { FaPhoneAlt } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <section className="relative h-[500px] w-full">
        <Image
          src="/assets/lavage/sec-lavage-auto-a-la-main.jpg"
          alt="Bris de glace AMD 31"
          width={1920}
          height={1080}
          className="aspect-auto h-full object-cover object-center brightness-50 md:object-right lg:w-full"
        />

        <div className="absolute top-1/2 z-10 w-full -translate-y-1/2 text-white">
          <h1 className="text-center text-xl font-extrabold tracking-wide lg:text-5xl">
            LAVAGE COLOMIERS
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
              src="/assets/lavage/5755663-1536x1536.jpg"
              alt="logo Carrosserie AMD 31"
              width={1920}
              height={1080}
              className="my-10 aspect-auto object-cover object-right px-5 md:object-right lg:w-full"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1.5)}
            className="my-10 flex flex-col items-center justify-center px-5 text-start text-lg text-black"
          >
            <p className="font-bold">
              Nous prenons aussi en charge le lavage et nettoyage de votre
              véhicule intérieur et l&apos;extérieur dans notre carrosserie sur
              Colomiers !
            </p>
            <p className="pt-4 font-bold">
              Actuellement, il est possible de laver votre véhicule en prenant
              rendez-vous par téléphone.
            </p>
            <div className="mt-10 flex items-center justify-center">
            <Link
              href="tel:+33665782837"
              className="flex w-40 items-center justify-center gap-4 rounded-xl border-2 border-black bg-transparent py-3 text-lg font-semibold uppercase text-black duration-300 hover:scale-[1.01] hover:border-black hover:bg-black hover:text-white hover:shadow-2xl lg:w-52 lg:px-2 lg:py-3 lg:font-bold"
            >
              <FaPhoneAlt className="text-base" />
              <span className="text-lg uppercase">Appelez-nous</span>
            </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
