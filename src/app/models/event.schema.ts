import { z } from "zod";

export const EventSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "Nome é obrigatório"),
  data: z.string().min(1, "Data é obrigatória"),
  local: z.string().min(1, "Local é obrigatório"),
});

export type Event = z.infer<typeof EventSchema>;
