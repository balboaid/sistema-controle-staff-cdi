import { z } from "zod";

export const EventSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "Name is required"),
  data: z.string().min(1, "Date is required"),
  local: z.string().min(1, "Location is required"),
});

export type Event = z.infer<typeof EventSchema>;
