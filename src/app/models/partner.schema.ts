import { z } from "zod";

export const PartnerSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "Name is required"),
  empresa: z.string().optional(),
  email: z.string().email("Invalid email"),
  telefone: z.string().optional(),
});

export type Partner = z.infer<typeof PartnerSchema>;
