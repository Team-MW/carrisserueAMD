import { CityList } from "content/ArticleList";
import Link from "next/link";
import { FaCheck, FaSearch, FaUserTie } from "react-icons/fa";
import Image from "next/image";
import { z } from "zod";

export async function generateStaticParams() {
  const getSlug = [...CityList];

  return getSlug.map((post) => ({
    slug: post.slug,
  }));
}

const ListeCommunesSchema = z.array(
  z.object({
    nom: z.string(),
    code: z.string(),
    codeDepartement: z.string(),
    siren: z.string(),
    codeEpci: z.string(),
    codeRegion: z.string(),
    codesPostaux: z.array(z.string()),
    population: z.number(),
  })
);

async function safeFetch<TData>(url: string, FetchSchema: z.Schema<TData>) {
  const response = await fetch(url);

  const data = await response.json();

  return FetchSchema.parse(data);
}

async function getCities(slug: string) {
  const responseToulouse = await safeFetch(
    "https://geo.api.gouv.fr/departements/31/communes",
    ListeCommunesSchema
  );

  const city = CityList.find((city) => city.slug === slug);

  const filteredCitiesToulouse = responseToulouse.find(
    (p) => p.nom === city?.city
  );

  if (filteredCitiesToulouse !== undefined) {
    return filteredCitiesToulouse;
  }
}

export interface ArticleProps {
  slug: string;
}

export default async function Article({
  params,
}: {
  params: ArticleProps;
}): Promise<JSX.Element> {
  const cities = await getCities(params.slug);
  return (
    <>
      <div className="relative flex h-96 items-center justify-center overflow-hidden bg-black">
        <h2 className="relative text-3xl font-semibold uppercase text-white xl:text-4xl">
          Blog
        </h2>
      </div>
      <section className="container mx-auto px-4 py-20 lg:px-0">
        <div className="prose-h2:text-brown-rust-500 prose relative mx-auto mb-20 xl:prose-lg">
          <Image
            src="/assets/logo-carrosserie-AMD.png"
            alt="Symbôle de l'Occitanie"
            width={100}
            height={100}
            className="absolute -right-24 top-14 -z-10 rotate-12"
          />
          <h1>
            Professionnel de la carrosserie à{" "}
            <span className="text-brown-rust-600">
              {cities?.nom} - {cities?.code}
            </span>
          </h1>
          <p>
            La carrosserie d&apos;un véhicule est un élément essentiel, mais
            elle peut être sujette à des problèmes au fil du temps. Ces
            problèmes peuvent être causés par des dommages liés à l&apos;usure,
            aux intempéries ou à d&apos;autres facteurs. Si vous rencontrez des
            problèmes de carrosserie, il est crucial de faire appel à un
            carrossier professionnel et fiable pour les résoudre. Si vous êtes à
            la recherche d&apos;une entreprise de carrosserie offrant une
            expertise et une qualité exceptionnelles pour résoudre les problèmes
            de carrosserie, alors Carrosserie A.M.D 31 est l&apos;entreprise
            qu&apos;il vous faut. Dans cet article, nous allons examiner les
            raisons pour lesquelles vous devriez choisir Carrosserie A.M.D 31
            pour résoudre vos problèmes de carrosserie.
          </p>
          <h2>Expertise et compétences spécialisées</h2>
          <p>
            Carrosserie A.M.D 31 est une entreprise spécialisée dans la
            carrosserie qui possède une expertise et des compétences
            spécialisées pour résoudre les problèmes de carrosserie de manière
            sûre et efficace. Ils comprennent les différents matériaux utilisés
            dans la carrosserie et savent comment les manipuler pour réparer ou
            renforcer les structures existantes. Les carrossiers de Carrosserie
            A.M.D 31 ont également une expérience pratique et sont capables de
            résoudre rapidement les problèmes qui peuvent survenir sur une
            carrosserie.
          </p>
          <Image
            src="/assets/carrosserie/inter-carrosserie-automobile-2.jpg"
            alt="des voitures en réparation"
            width={1920}
            height={1080}
          />
          <h2>Diagnostic précis des problèmes</h2>
          <p>
            Carrosserie A.M.D 31 est en mesure de fournir un diagnostic précis
            des problèmes de carrosserie. Leur équipe est formée pour détecter
            les problèmes de carrosserie, tels que les bosses, les rayures, la
            corrosion ou les déformations, et évaluer leur gravité. Ils peuvent
            vous fournir une analyse complète de la situation et vous proposer
            les solutions les plus adaptées à votre problème de carrosserie.
          </p>
          <h2>Solutions adaptées à vos besoins</h2>
          <p>
            Carrosserie A.M.D 31 propose des solutions adaptées à vos besoins
            pour résoudre les problèmes de carrosserie. Que ce soit pour une
            simple réparation ou pour une rénovation complète de la carrosserie,
            ils peuvent vous proposer une solution sur mesure. Les carrossiers
            de Carrosserie A.M.D 31 sont également en mesure de vous conseiller
            sur les matériaux à utiliser et les techniques les plus adaptées
            pour résoudre votre problème de carrosserie.
          </p>
          <Image
            src="/assets/carrosserie/carrosserie_noir.jpg"
            alt="Les travaux d'une maison finie"
            width={1920}
            height={1080}
          />
          <h2>Assurance et garantie</h2>
          <p>
            En choisissant Carrosserie A.M.D 31 pour résoudre vos problèmes de
            carrosserie, vous bénéficiez d&apos;une assurance et d&apos;une garantie pour
            votre projet. En cas de problème, vous pouvez être sûr que
            Carrosserie A.M.D 31 prendra ses responsabilités et mettra en œuvre
            les mesures nécessaires pour corriger la situation. De plus,
            l&apos;entreprise est réglementée et respecte les normes de l&apos;industrie
            afin d&apos;assurer la qualité de leur travail.
          </p>
        </div>
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center justify-center gap-6 lg:flex-row">
          <h3 className="mb-4 flex items-center justify-center gap-4 text-center text-3xl font-bold lg:mb-6">
            <FaUserTie aria-hidden="true" className="text-black" />
            Expertise
          </h3>
          <h3 className="mb-4 flex items-center justify-center gap-4 text-center text-3xl font-bold lg:mb-6">
            <FaCheck aria-hidden="true" className="text-black" />
            Qualité
          </h3>
          <h3 className="mb-4 flex items-center justify-center gap-4 text-center text-3xl font-bold lg:mb-6">
            <FaSearch aria-hidden="true" className="text-black" />
            Solutions
          </h3>
        </div>
        <div className="mx-auto flex items-center justify-center lg:w-1/2">
          <button className="text-black border-black border-2 bg-transparent hover:bg-black hover:text-white w-full rounded-xl px-6 py-4 font-bold tracking-wider duration-300 ease-in-out hover:shadow-md">
            <Link href="../devis">Contactez-nous</Link>
          </button>
        </div>
      </section>
    </>
  );
}
