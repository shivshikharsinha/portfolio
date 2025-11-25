"use server";
/**
 * @fileOverview A flow to handle sending a message from the contact form.
 *
 * - sendMessage - A function that handles the message sending process.
 */

import { ai } from "@/ai/genkit";
import {
  SendMessageInput,
  SendMessageInputSchema,
  SendMessageOutput,
  SendMessageOutputSchema,
} from "@/ai/schemas/sendMessageSchema";

export async function sendMessage(
  input: SendMessageInput
): Promise<SendMessageOutput> {
  return await sendMessageFlow(input);
}

const sendMessageFlow = ai.defineFlow(
  {
    name: "sendMessageFlow",
    inputSchema: SendMessageInputSchema,
    outputSchema: SendMessageOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate with an email service here.
    // For this example, we'll just log the message to the console.
    console.log("New message received:");
    console.log(`Name: ${input.name}`);
    console.log(`Email: ${input.email}`);
    console.log(`Message: ${input.message}`);

    return {
      success: true,
    };
  }
);
