"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@acme/ui/NavigationMenu";
import { cn } from "@acme/ui/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <header className="fixed left-0 top-0 z-40 w-full bg-black shadow-lg">
        <nav
          className="container mx-auto flex w-full items-center justify-between px-4 py-3 lg:px-0"
          aria-label="Navigation principale"
        >
          <Link href="/" className="relative flex h-full items-center">
            <span className="sr-only">Carrosserie AMD 31</span>
            <Image
              src="/assets/logo-carrosserie-AMD.jpg"
              alt="logo Carrosserie AMD 31"
              width={1200}
              height={1200}
              className="h-[55px] w-auto lg:h-[70px]"
            />
          </Link>

          {/* Mobile navigation */}
          <Dialog.Root>
            <Dialog.Trigger className="group lg:hidden">
              <FaBars className="text-3xl text-white group-data-[state=open]:hidden" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/80" />

              <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-0 top-0 z-50 h-screen w-[80vw] max-w-[450px] rounded-r-[6px] bg-neutral-900  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <div className="grid w-full grid-cols-1 place-content-center divide-y divide-neutral-700 text-white">
                  <div>
                    <Dialog.Close asChild>
                      <button className="py-10 pl-4" aria-label="Close">
                        <RxCross1 className="ml-4 text-2xl text-white group-data-[state=closed]:hidden" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <Dialog.Close asChild>
                    <Link
                      href="/"
                      className={
                        "py-5 pl-8 text-sm font-semibold uppercase " +
                        (pathname === "/" && "bg-neutral-800 text-white/40")
                      }
                    >
                      Accueil
                    </Link>
                  </Dialog.Close>

                  <Dialog.Close asChild>
                    <Link
                      href="/carrosserie"
                      className={
                        "py-5 pl-8 text-sm font-semibold uppercase " +
                        (pathname === "/carrosserie" &&
                          "bg-neutral-900 text-white/40")
                      }
                    >
                      Carrosserie
                    </Link>
                  </Dialog.Close>

                  <Dialog.Close asChild>
                    <Link
                      href="/bris_glace"
                      className={
                        "py-5 pl-8 text-sm font-semibold uppercase " +
                        (pathname === "/bris_glace" &&
                          "bg-neutral-900 text-white/40")
                      }
                    >
                      Bris de glace
                    </Link>
                  </Dialog.Close>

                  {/* <Dialog.Close asChild>
                    <Link
                      href="/lavage"
                      className={
                        "py-5 pl-8 text-sm font-semibold uppercase " +
                        (pathname === "/lavage" &&
                          "bg-neutral-900 text-white/40")
                      }
                    >
                      Lavage
                    </Link>
                  </Dialog.Close> */}

                  <Dialog.Close asChild>
                    <Link
                      href="/galerie"
                      className={
                        "py-5 pl-8 text-sm font-semibold uppercase " +
                        (pathname === "/galerie" &&
                          "bg-neutral-900 text-white/40")
                      }
                    >
                      Galerie
                    </Link>
                  </Dialog.Close>

                  <Dialog.Close asChild>
                    <Link
                      href="/devis"
                      className={
                        "py-5 pl-8 text-sm font-semibold uppercase " +
                        (pathname === "/devis" &&
                          "bg-neutral-900 text-white/40")
                      }
                    >
                      Devis
                    </Link>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          {/* PC Navigation +1024px */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" passHref legacyBehavior>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Accueil
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/carrosserie" passHref legacyBehavior>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Carrosserie
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/bris_glace" passHref legacyBehavior>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Bris de glace
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* <NavigationMenuItem>
                  <Link href="/lavage" passHref legacyBehavior>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Lavage
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}

                <NavigationMenuItem>
                  <Link href="/galerie" passHref legacyBehavior>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Galerie
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/devis" passHref legacyBehavior>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Devis
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <li className="mb-7 flex flex-row justify-center lg:mb-0 lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center">
                  <a
                    href="tel:+33665782837"
                    className="data-[active]:black group flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-[#2ad000]/70 hover:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-black/20"
                  >
                    Appeler
                  </a>
                </li>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
      </header>
    </>
  );
}

interface NavigationMenuProps {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  [x: string]: any;
}

function ListItem({
  className,
  title,
  children,
  href,
  ...props
}: NavigationMenuProps) {
  return (
    <li>
      <Link
        href={href as Route}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-guardsman-red-100 focus:bg-guardsman-red-100",
          className
        )}
        {...props}
        passHref
        legacyBehavior
      >
        <NavigationMenuLink asChild>
          <div className="text-sm font-medium leading-none text-guardsman-red-900">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-guardsman-red-500">
            {children}
          </p>
        </NavigationMenuLink>
      </Link>
    </li>
  );
}

ListItem.displayName = "ListItem";
