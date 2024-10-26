import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Nome precisa ter pelo menos 3 caracteres"),
  email: z
    .string()
    .email("Endereço de email inválido")
    .refine((email) => email.includes("@"), "O email precisa conter um @"),
  phone: z
    .string()
    .regex(
      /^\+?\d{1,2}?[-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/,
      "Número de celular inválido"
    )
    .optional(),
  subject: z.string().min(3, "É necessário pelo menos 3 caracteres"),
  message: z
    .string()
    .min(10, "A mensagem precisa ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
