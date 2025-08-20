import { z } from "zod";

export const EmployeeSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "Nome é obrigatório"),
  cargo: z.string().min(1, "Cargo é obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z.string().optional(),
});

export type Employee = z.infer<typeof EmployeeSchema>;
