import { z } from "zod";

export const EmployeeSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "Name is required"),
  cargo: z.string().min(1, "Position is required"),
  email: z.string().email("Invalid email"),
  telefone: z.string().optional(),
});

export type Employee = z.infer<typeof EmployeeSchema>;
