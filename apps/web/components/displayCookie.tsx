"use client";

import { getCookie, hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@acme/ui/Dialog";
import { Label } from "@acme/ui/Label";

export default function CookieDisplay(): JSX.Element {
  const [cookiesAccepted, setCookiesAccepted] = useState(() => {
    return false;
  });
  const cookieExpired = 1000 * 60 * 60 * 24 * 30; // 1 month
  // Handle the display of the cookie banner
  const cookieRef = useRef<HTMLDivElement>(null);
  const [functionnalityState, setFunctionnalityState] = useState<boolean>(
    () => true
  );
  const [analyticsState, setAnalyticsState] = useState<boolean>(() => false);

  const acceptCookies = () => {
    setCookie("functionnal", functionnalityState, {
      expires: new Date(Date.now() + cookieExpired),
      sameSite: "strict",
    });
    setCookie("analytics", analyticsState, {
      expires: new Date(Date.now() + cookieExpired),
      sameSite: "strict",
    });

    if (getCookie("analytics")) {
      // Google Analytics gtag is load in _app.tsx as a Script
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
    acceptCookies();
  };

  const handleRefuseCookies = () => {
    setCookiesAccepted(true);
    setCookie("functionnal", false, {
      expires: new Date(Date.now() + cookieExpired),
      sameSite: "strict",
    });
    setCookie("analytics", false, {
      expires: new Date(Date.now() + cookieExpired),
      sameSite: "strict",
    });
    window.gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
    });
  };

  const handleAcceptAllCookies = () => {
    setCookiesAccepted(true);
    setCookie("functionnal", true, {
      expires: new Date(Date.now() + cookieExpired),
      sameSite: "strict",
    });
    setCookie("analytics", true, {
      expires: new Date(Date.now() + cookieExpired),
      sameSite: "strict",
    });

    // Google Analytics gtag is load in _app.tsx as a Script
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  };

  useEffect(() => {
    if (hasCookie("functionnal") && hasCookie("analytics")) {
      if (getCookie("analytics")) {
        window.gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
        });
      }
      setCookiesAccepted(true);
    } else {
      setCookiesAccepted(false);
    }

    setTimeout(() => {
      cookieRef.current?.classList.remove("hidden");
    }, 1000);
  }, []);

  return (
    <>
      {cookiesAccepted === false && (
        <div
          ref={cookieRef}
          className="fixed bottom-0 left-0 z-50 hidden px-2 lg:px-0"
        >
          <Dialog>
            <div className="mb-5 w-full rounded-xl border border-deep-koamaru-500/50 bg-white shadow-xl shadow-deep-koamaru-600/50 md:w-1/2 lg:mx-5 lg:w-1/3">
              <div className="rounded-xl px-10 py-8">
                <h2 className="mb-2 text-xl font-medium text-deep-koamaru-800 lg:mb-10 lg:text-2xl">
                  Faite votre choix en matière de cookie
                </h2>
                <p className="text-md mb-2 text-black lg:mb-10">
                  Nous utilisons des cookies pour vous garantir la meilleure
                  expérience sur notre site web. Si vous continuez à utiliser ce
                  dernier, nous considèrerons que vous acceptez
                  l&apos;utilisation des cookies.
                </p>
                <p className="text-black">
                  En savoir plus{" "}
                  <Link
                    href="/politique-de-confidentialite"
                    className="font-bold text-deep-koamaru-700 hover:underline"
                  >
                    ici
                  </Link>
                </p>
                <div className="mt-4 flex flex-row justify-center gap-5 lg:mt-10 lg:justify-end">
                  <button
                    className="flex-1 rounded-md border border-deep-koamaru-500/50 px-4 py-2 text-black duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
                    onClick={handleAcceptAllCookies}
                  >
                    J&apos;accepte
                  </button>

                  <DialogTrigger className="flex-1 rounded-md border border-deep-koamaru-500/80 px-4 py-3 text-center font-semibold text-black duration-300 ease-in-out hover:cursor-pointer hover:border-deep-koamaru-700 hover:text-deep-koamaru-800">
                    Personnaliser
                  </DialogTrigger>
                </div>
              </div>
            </div>

            <DialogContent className="bottom-10">
              <DialogHeader>
                <DialogTitle>Personnaliser mes choix</DialogTitle>
                <DialogDescription>
                  <div>
                    <p className="py-4">
                      Vous pouvez choisir d&apos;activer les cookies suivants :
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="grid h-[50vh] gap-5 overflow-y-auto md:h-full">
                {/* log, ip, legal, etc ... */}

                <div className="flex flex-col border-2 border-deep-koamaru-700 px-10 py-4">
                  <Label
                    htmlFor="necessary"
                    className="mb-2 w-full text-left text-2xl"
                  >
                    Nécessaire
                  </Label>
                  <p className="text-left">
                    Les cookies nécessaires ne peuvent pas être désactivés dans
                    la mesure où nous les utilisons pour vous fournir le site
                    internet.
                  </p>
                </div>

                {/* Theme, states, ux, etc... */}
                <button
                  data-state={functionnalityState}
                  className="group flex cursor-pointer flex-col border-2 px-10 py-4 transition-colors data-[state=true]:border-deep-koamaru-600"
                  onClick={() => setFunctionnalityState(!functionnalityState)}
                >
                  <Label
                    htmlFor="functionality"
                    className="text-left text-xl group-hover:cursor-pointer"
                  >
                    Fonctionnel
                  </Label>

                  <p className="text-left group-hover:cursor-pointer">
                    Les cookies fonctionnels sont utilisés pour vous fournir des
                    fonctionnalités supplémentaires et améliorer votre
                    expérience sur notre site web.
                  </p>
                </button>

                {/* Analytics */}
                <button
                  data-state={analyticsState}
                  className="group flex cursor-pointer flex-col border-2 px-10 py-4 transition-colors data-[state=true]:border-deep-koamaru-600"
                  onClick={() => setAnalyticsState(!analyticsState)}
                >
                  <Label
                    htmlFor="analytics"
                    className="text-left text-xl group-hover:cursor-pointer"
                  >
                    Analytique
                  </Label>

                  <p className="text-left group-hover:cursor-pointer">
                    Les cookies analytiques sont utilisés pour nous aider à
                    comprendre comment les visiteurs interagissent avec notre
                    site web. Ces informations nous aident à améliorer notre
                    site web et à vous fournir une expérience personnalisée.
                  </p>
                </button>
              </div>
              <DialogFooter className="flex-col gap-4">
                <button
                  className="flex-1 rounded-md border border-deep-koamaru-500/50 bg-deep-koamaru-200 px-4 py-2 text-deep-koamaru-950 duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
                  onClick={handleRefuseCookies}
                >
                  Tout refuser
                </button>
                <button
                  className="flex-1 rounded-md border border-deep-koamaru-500/80 px-4 py-3 text-center font-semibold text-black duration-300 ease-in-out hover:cursor-pointer hover:border-deep-koamaru-700 hover:text-deep-koamaru-800"
                  onClick={handleAcceptCookies}
                >
                  Valider
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}
