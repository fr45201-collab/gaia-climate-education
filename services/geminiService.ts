
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getClimateFact = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a single, powerful, short educational fact about global warming related to "${topic}". Keep it under 20 words and focus on impact or urgency.`,
      config: {
        temperature: 0.7,
        // Removed maxOutputTokens to avoid blocking responses on thinking models when not explicitly reserving a thinking budget.
      }
    });
    // Correctly accessing the text property from GenerateContentResponse
    return response.text?.trim() || "Climate change is real and accelerating.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Arctic is warming four times faster than the global average.";
  }
};
