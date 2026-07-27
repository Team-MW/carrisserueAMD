import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";


export default function Page() {
  return (
    <>
      <section className="relative h-screen w-full">
        {/* <div className="absolute left-0 top-0 w-full bg-black py-20"></div> */}
        <div className="container mx-auto flex h-screen items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center">
            < AiOutlineCheckCircle size={100} className="mb-5 text-black" />
            <h1 className="mb-5 text-4xl font-bold text-black">
              Confirmation
            </h1>
            <p className="mb-4 text-2xl">Votre message a été envoyé</p>
            <p className="mb-10 text-center text-2xl text-black/50">
              Vous allez recevoir une réponse dans les plus bref délais.
            </p>
            <Link
              href="/"
              className="bg-base-300 text-primary hover:bg-transparent hover:border-black hover:border-2 hover:text-black hover:shadow-2xl bg-black text-white rounded-lg border-2 px-6 py-3 text-xl duration-300 ease-in-out"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
