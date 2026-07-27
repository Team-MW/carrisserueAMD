import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "NEXT_PUBLIC_",
  server: {
    NODE_ENV: z.enum(["development", "prod", "production", "test"]),
    SENDGRID_API_KEY: z.string(),
    SENDGRID_FROM: z.string(),
    SENDGRID_TO: z.string(),
    RECAPTCHA_SECRET_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().min(1),
    NEXT_PUBLIC_SITE_NAME: z.string().min(1),
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string(),
    NEXT_PUBLIC_GA_ID: z.string(),
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string(),
    NEXT_PUBLIC_PHONE_NUMBER: z.string(),
    NEXT_PUBLIC_PHONE_NUMBER_LINK: z.string(),
    NEXT_PUBLIC_EMAIL: z.string().min(1),
    NEXT_PUBLIC_EMAIL_LINK: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    NEXT_PUBLIC_PHONE_NUMBER: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    NEXT_PUBLIC_PHONE_NUMBER_LINK: process.env.NEXT_PUBLIC_PHONE_NUMBER_LINK,
    NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
    NEXT_PUBLIC_EMAIL_LINK: process.env.NEXT_PUBLIC_EMAIL_LINK,
    NODE_ENV: process.env.NODE_ENV,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_FROM: process.env.SENDGRID_FROM,
    SENDGRID_TO: process.env.SENDGRID_TO,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
  }
});
