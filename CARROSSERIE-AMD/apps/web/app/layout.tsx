import { ReactNode } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Montserrat } from "next/font/google";
import { GA_TRACKING_ID } from "lib/analytics/ga";
import { GTM_ID } from "lib/analytics/gtm";
import Script from "next/script";
import CookieDisplay from "components/displayCookie";
import type { Metadata } from "next";
import { env } from "../utils/env.mjs";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Carrosserie A.M.D 31",
  description: "Carrosserie A.M.D 31 intervient sur Colomiers et ses environs",
  openGraph: {
    title: "Carrosserie A.M.D 31",
    description: "Carrosserie A.M.D 31 intervient sur Colomiers et ses environs",
    url: env.NEXT_PUBLIC_SITE_URL,
    siteName: env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: env.NEXT_PUBLIC_SITE_URL + "/assets/logo-carrosserie-AMD.png",
        width: 800,
        height: 600,
        alt: "Logo entreprise Carrosserie A.M.D 31",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrosserie A.M.D 31",
    description: "Carrosserie A.M.D 31 intervient sur Colomiers et ses environs",
    site: "@carrosserie-amd31.fr",
    images: [env.NEXT_PUBLIC_SITE_URL + "/assets/logo-carrosserie-AMD.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="fr">
        <head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
                gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied'
              });           
              `,
            }}
          />
          {/* Google Tag Manager - Global base code */}
          <Script
            id="gtag-base"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
            }}
          />
          <Script
            id="recaptcha"
            strategy="afterInteractive"
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          />
        </head>
        <body className={`${montserrat.variable} font-sans`}>
          <Navbar />
          <main className="overflow-hidden" aria-label="Contenu principal">
            {children}
          </main>
          <CookieDisplay />
          <Footer />
        </body>
      </html>
    </>
  );
}
