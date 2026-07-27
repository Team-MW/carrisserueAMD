"use client";

import { Button } from "@acme/ui";
import { Input } from "@acme/ui/Input";
import { Label } from "@acme/ui/Label";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillPhone } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { z } from "zod";
import { fadeIn } from "../../utils/motion";
import { SendForm } from "./action";

const FormInputSchema = z.object({
  name: z.string().min(2, { message: "Veuillez renseigner un nom." }).max(50, {
    message: "Le nom et/ou prénom doit faire moins de 50 caractères.",
  }),
  phone: z
    .string(
      z
        .string()
        .min(8, { message: "Veuillez renseigner un numéro de téléphone." })
        .max(10, { message: "Le numéro de téléphone doit être valide." })
    )
    .optional(),
  email: z.string().email({ message: "Veuillez renseigner un email valide." }),
  service: z.enum(["Carrosserie", "Bris de glace", "Lavage"]),
  content: z
    .string(
      z
        .string()
        .min(2, { message: "Veuillez ajouter une description." })
        .max(1000, {
          message: "La description doit faire moins de 1000 caractères.",
        })
    )
    .optional(),
});

type FormInput = z.infer<typeof FormInputSchema>;

export default function Contact() {
  const { push } = useRouter();

  const [clientType, setClientType] = useState<"particulier" | "entreprise">(
    "entreprise"
  );
  const [buttonSubmit, setButtonSubmit] = useState(() => {
    return false;
  });
  const [error, setError] = useState(() => {
    return {
      error: false,
      input: "",
      message: "",
    };
  });
  const [formInput, setFormInput] = useState<FormInput>({} as FormInput);
  const {
    register,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormInputSchema),
  });

  const SubmitForm = () => {
    setButtonSubmit(true);
    window.grecaptcha.ready(async function () {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        {
          action: "submit",
        }
      );

      const response = await SendForm({ formInput: formInput, token: token });

      if (response.code === 201 || !response.error) {
        push("/devis/message-envoyer");
      } else {
        setButtonSubmit(false);
        setError({
          error: true,
          input: "",
          message: response.error,
        });
      }
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="flex flex-wrap items-center justify-center gap-20 overflow-hidden px-2 py-24 lg:flex-nowrap lg:py-32"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.2, 0.6)}
        className="lg:w-[500px]"
      >
        <h2 className="text-5xl font-semibold text-black">Contactez nous !</h2>
        <p className="pt-6 text-lg font-medium">
          Notre équipe sera ravi de vous aider en répondant à toutes vos
          demandes.
        </p>
        <div className="flex flex-wrap justify-between gap-2 pt-6 font-medium lg:flex-nowrap lg:gap-0">
          <div className="flex items-center gap-2 text-lg">
            <AiFillPhone />
            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER_LINK}`}>
              {process.env.NEXT_PUBLIC_PHONE_NUMBER}
            </a>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <FiMail />
            <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_LINK}`}>
              {process.env.NEXT_PUBLIC_EMAIL}
            </a>
          </div>
        </div>
      </motion.div>
      <motion.form
        variants={fadeIn("left", "spring", 0.2, 0.9)}
        action={SubmitForm}
        className="flex flex-col gap-5 rounded-xl px-4 py-8 shadow-lg shadow-black lg:px-10"
      >
        <p className="text-2xl font-medium text-black">
          Envoyez nous un message
        </p>
        <Label htmlFor="clientType" className="text-black">
          Vous êtes ?
        </Label>
        <div className="grid w-full grid-cols-2 divide-x-2 divide-black rounded-md border border-black">
          <div>
            <button
              type="button"
              onClick={() => setClientType("entreprise")}
              className={
                "flex h-full w-full items-center justify-center py-2 font-semibold tracking-wide text-black hover:bg-black/40 hover:text-white " +
                (clientType === "entreprise" ? "bg-black text-white" : "")
              }
            >
              <span>Une entreprise</span>
            </button>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setClientType("particulier")}
              className={
                "flex h-full w-full items-center justify-center py-2 font-semibold tracking-wide text-black hover:bg-black/40 hover:text-white " +
                (clientType === "particulier" ? "bg-black text-white" : "")
              }
            >
              <span>Un particulier</span>
            </button>
          </div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name" className="text-black">
            {clientType === "particulier"
              ? "Nom et/ou prénom (obligatoire)"
              : "Votre société (obligatoire)"}
          </Label>
          <Input
            type="text"
            id="name"
            placeholder={
              clientType === "particulier" ? "Bob Dupont" : "Carrosserie AMD 31"
            }
            {...register("name")}
            value={formInput.name ?? ""}
            onChange={(e) => {
              setFormInput({
                ...formInput,
                name: e.target.value,
              });
            }}
          />
          <p className="text-sm text-red-500">{errors.name?.message}</p>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email" className="text-black">
            Email (obligatoire)
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="exemple@gmail.com"
            {...register("email")}
            value={formInput.email ?? ""}
            onChange={(e) => {
              setFormInput({
                ...formInput,
                email: e.target.value,
              });
            }}
          />
          <p className="text-sm text-red-500">{errors.email?.message}</p>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="contact" className="text-black">
            Numéro de téléphone
          </Label>
          <Input
            type="tel"
            id="contact"
            placeholder="06 00 00 00 00"
            maxLength={10}
            value={
              formInput.phone?.replace(
                /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
                "$1 $2 $3 $4 $5"
              ) || ""
            }
            {...register("phone")}
            onChange={(e) => {
              setFormInput({
                ...formInput,
                phone: e.target.value,
              });
            }}
          />
          <p className="text-sm text-red-500">{errors.phone?.message}</p>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="service" className="text-black">
            Service (obligatoire)
          </Label>
          <select
            id="service"
            className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-black flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue="Carrosserie"
            {...register("service")}
            onChange={(e) => {
              setFormInput({ 
                ...formInput, 
                service: e.target.value as FormInput["service"], 
              });
              console.log(e.target.value);
            }}
          >
            <option value="Carrosserie">Carrosserie</option>
            <option value="Bris de glace">Bris de glace</option>
            <option value="Lavage">Lavage</option>
          </select>
          <p className="text-red-600">{errors.service?.message}</p>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label className="text-black">Plus d&apos;informations</Label>
          <textarea
            rows={5}
            id="content"
            placeholder="Une description de votre demande..."
            className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-black flex w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            {...register("content")}
            value={formInput.content ?? ""}
            onChange={(e) => {
              setFormInput({
                ...formInput,
                content: e.target.value,
              });
            }}
          />
          <p className="text-red-600">{errors.content?.message}</p>
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          <input type="checkbox" className="text-black focus:ring-black" required />
          <Label>
            J&apos;accepte la{" "}
            <Link
              href="/politique-de-confidentialite"
              className="font-bold text-black hover:underline"
            >
              politique de confidentialité
            </Link>{" "}
            de Carrosserie A.M.D 31
          </Label>
        </div>

        <Button type="submit" disabled={buttonSubmit}>
          Envoyer <FaRegPaperPlane className="ml-2 inline-block" />
        </Button>

        {error.error === true ? (
          <div className="flex items-center justify-center rounded-lg bg-red-200 px-6 py-4">
            <p className="text-xl font-semibold text-red-600">
              {error.message}
            </p>
          </div>
        ) : null}
      </motion.form>
    </motion.div>
  );
}
