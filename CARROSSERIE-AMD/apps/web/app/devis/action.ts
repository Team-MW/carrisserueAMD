"use server";

import sgMail, { MailDataRequired } from "@sendgrid/mail";
import checkToken from "lib/contact/checkCaptchat";
import { z } from "zod";
import { FormInput, FormInputSchema } from "./types";
import { env } from "utils/env.mjs";

export async function SendForm({
  formInput,
  token,
}: {
  formInput: FormInput;
  token: string;
}) {
  // Check the token
  if (!token) {
    return {
      code: 400,
      message: "error",
      error:
        "Votre demande n'a pas pu être envoyé. Veuillez réessayer plus tard. Si l'erreur persiste veuillez nous contactez directement.",
    };
  }

  const { success, score } = await checkToken(token);

  if (!success || score < 0.5) {
    return {
      code: 400,
      message: "error",
      error:
        "Votre demande n'a pas pu être envoyé. Veuillez réessayer plus tard. Si l'erreur persiste veuillez nous contactez directement.",
    };
  }

  try {
    const form = FormInputSchema.parse(formInput);
    sgMail.setApiKey(<string>process.env.SENDGRID_API_KEY);

    let msg = {
      to: <string>process.env.SENDGRID_TO,
      from: <string>process.env.SENDGRID_FROM,
      subject: "Nouveau message du formulaire " + env.NEXT_PUBLIC_SITE_NAME,
    } as MailDataRequired;

    msg = {
      ...msg,
      html: `
        <h4>Bonjour,<h4>
        <br/>
        Vous avez reçu un nouveau message par le biais du formulaire de contact :<br/><br/>
        Nom : 
        ${form.name}
        <br/>
        Email : 
        ${form.email}
        <br/>
        Téléphone : 
        ${form.phone}
        <br/>
        Service : 
        ${form.service}
        <br/>
        Plus d'informations : 
        ${form.content ? form.content : "Pas de message"}
        <br/>`,
    };

    await sgMail.send(msg);
    return { code: 201, message: "success" };
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return { code: 400, message: "error", error: error.issues[0]?.message };
    }
    return {
      code: 400,
      message: "error",
      error:
      "Votre demande n'a pas pu être envoyé. Veuillez réessayer plus tard. Si l'erreur persiste veuillez nous contactez directement.",
    };
  }
}