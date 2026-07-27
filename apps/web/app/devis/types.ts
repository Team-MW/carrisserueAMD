import { z } from "zod";

export const FormInputSchema = z.object({
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

export type FormInput = z.infer<typeof FormInputSchema>;