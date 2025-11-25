import { z } from "zod";

export const SendMessageInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});
export type SendMessageInput = z.infer<typeof SendMessageInputSchema>;

export const SendMessageOutputSchema = z.object({
  success: z.boolean(),
});
export type SendMessageOutput = z.infer<typeof SendMessageOutputSchema>;
