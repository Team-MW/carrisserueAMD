import { CityList } from "content/ArticleList";
import { Route } from "next";
import Link from "next/link";

async function getCities() {
  return [...CityList];
}

export interface ArticleProps {
  slug: string;
}

export default async function Page() {
  const cities = await getCities();

  return (
    <>
      <h1 className="flex h-72 items-center justify-center bg-black text-white text-6xl font-semibold pt-10">
        Plan de site
      </h1>
      <section className="container prose mx-auto py-32">
        <ul>
          {cities.map(({ slug, city }) => (
            <li key={slug}>
              <Link href={("/blog/" + slug) as Route}>
                Intervention de Carrosserie A.M.D 31 sur {city}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
