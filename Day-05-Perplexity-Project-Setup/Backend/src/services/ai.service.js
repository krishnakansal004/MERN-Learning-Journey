import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { response } from "express";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY,
});

export async function testAI() {
  model.invoke("What is the capital of India").then((response) => {
    console.log(response.text);
  });
}
