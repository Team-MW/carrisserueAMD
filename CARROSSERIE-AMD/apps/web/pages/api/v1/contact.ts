// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sgMail, { MailDataRequired} from "@sendgrid/mail";
import checkToken from "lib/contact/checkCaptchat";
import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "utils/env.mjs";

export default async function handleForm(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;

  // Check the token
  if (!data.token) {
    res.status(400).json({ error: "Token is missing" });
    return;
  }

  const { success, score } = await checkToken(data.token);

  if (!success || score < 0.5) {
    res.status(400).json({ error: "Token is invalid" });
    return;
  }

  try {
    sgMail.setApiKey(env.SENDGRID_API_KEY);

    let msg = {} as MailDataRequired;

    if (!!data.cv) {
      const files = [
        {
          content: data.cv.split(",")[1],
          filename: "image",
          type: data.cv.split(";")[0].split(":")[1],
        },
      ];
      if (files.length > 0) {
        msg = {
          to: <string>process.env.SENDGRID_TO, // Change to your recipient
          from: <string>process.env.SENDGRID_FROM,
          subject: "Nouveau message du formulaire Jiprotech.fr",
          html: "",
          attachments: files,
        };
      }

      msg = {
        ...msg,
        html:
          "Bonjour," +
          "<br/>" +
          "Vous avez reçu un nouveau message par le biais du formulaire de contact :<br/>" +
          "Nom : " +
          data.name +
          "<br/>" +
          "Message : " +
          data.content +
          "<br/>" +
          "Contact : " +
          data.contact +
          "<br/>" +
          "Pièce jointe : Oui" +
          "<br/>",
      };
    } else {
      msg = {
        to: <string>process.env.SENDGRID_TO, // Change to your recipient
        from: <string>process.env.SENDGRID_FROM,
        subject: "Nouveau message du formulaire Zodyak.fr",
        html:
          "Bonjour" +
          "<br/>" +
          "Vous avez reçu un nouveau message par le biais du formulaire de contact :<br/>" +
          "Nom : " +
          data.name +
          "<br/>" +
          "Message : " +
          data.content +
          "<br/>" +
          "Contact : " +
          data.contact +
          "<br/>" +
          "Pièce jointe : Non" +
          "<br/>",
      };
    }

    await sgMail.send(msg);
    res.status(201).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(503).json({ error: error, message: "error" });
  }
}